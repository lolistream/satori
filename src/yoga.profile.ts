import type { Yoga } from 'yoga-layout/load'

type Logger = (line: string) => void

const isObject = (v: unknown): v is Record<string, unknown> =>
  v !== null && typeof v === 'object'

const wrapCache = new WeakMap<object, object>()
const unwrapCache = new WeakMap<object, object>()
const nodeIds = new WeakMap<object, number>()
let nodeCounter = 0
let callCounter = 0

const stats = new Map<string, { count: number; totalNs: bigint }>()

function formatArg(arg: unknown, seen = new WeakSet<object>()): string {
  if (arg === null) return 'null'
  if (arg === undefined) return 'undefined'
  const t = typeof arg
  if (t === 'string') return JSON.stringify(arg)
  if (t === 'number' || t === 'boolean' || t === 'bigint') return String(arg)
  if (t === 'function') return `[fn ${(arg as Function).name || 'anonymous'}]`
  if (t === 'symbol') return String(arg)
  if (isObject(arg)) {
    if (seen.has(arg)) return '[circular]'
    seen.add(arg)
    const target = (unwrapCache.get(arg) as object | undefined) ?? arg
    const id = nodeIds.get(target)
    if (id !== undefined) return `node#${id}`
    if (Array.isArray(arg)) {
      return '[' + arg.map((v) => formatArg(v, seen)).join(', ') + ']'
    }
    const keys = Object.keys(arg).slice(0, 6)
    if (keys.length === 0) return '{}'
    return (
      '{' +
      keys
        .map((k) => `${k}: ${formatArg((arg as any)[k], seen)}`)
        .join(', ') +
      '}'
    )
  }
  return String(arg)
}

function getReceiverLabel(receiver: object): string {
  const target = (unwrapCache.get(receiver) as object | undefined) ?? receiver
  const id = nodeIds.get(target)
  if (id !== undefined) return `node#${id}`
  return 'Yoga'
}

function assignNodeId(obj: object): number {
  let id = nodeIds.get(obj)
  if (id === undefined) {
    id = ++nodeCounter
    nodeIds.set(obj, id)
  }
  return id
}

function shouldWrap(value: unknown): boolean {
  if (!isObject(value)) return false
  for (const k in value) {
    if (typeof (value as any)[k] === 'function') return true
  }
  const proto = Object.getPrototypeOf(value)
  if (proto && proto !== Object.prototype) {
    for (const k of Object.getOwnPropertyNames(proto)) {
      if (k === 'constructor') continue
      try {
        if (typeof (value as any)[k] === 'function') return true
      } catch {
        // ignore inaccessible
      }
    }
  }
  return false
}

function recordCall(
  label: string,
  fnName: string,
  fn: Function,
  thisArg: unknown,
  args: unknown[],
  log: Logger
): unknown {
  const callId = ++callCounter
  const recvLabel =
    thisArg && isObject(thisArg) ? getReceiverLabel(thisArg) : label
  const argsStr = args.map((a) => formatArg(a)).join(', ')
  const start = process.hrtime.bigint()
  let result: unknown
  let threw = false
  try {
    const realThis =
      thisArg && isObject(thisArg)
        ? (unwrapCache.get(thisArg) as object | undefined) ?? thisArg
        : thisArg
    result = fn.apply(
      realThis,
      args.map((a) => unwrap(a))
    )
    return wrapResultIfNeeded(result, `${recvLabel}.${fnName}`, log)
  } catch (e) {
    threw = true
    throw e
  } finally {
    const elapsed = process.hrtime.bigint() - start
    const ns = Number(elapsed)
    const key = `${recvLabel}.${fnName}`.replace(/^node#\d+/, label)
    const s = stats.get(key) || { count: 0, totalNs: 0n }
    s.count++
    s.totalNs += elapsed
    stats.set(key, s)
    const resultStr =
      fnName === 'create' && isObject(result)
        ? `node#${assignNodeId(result as object)}`
        : threw
          ? '<throw>'
          : formatArg(result)
    log(
      `[yoga #${callId}] ${recvLabel}.${fnName}(${argsStr}) -> ${resultStr} (${(ns / 1000).toFixed(2)}µs)`
    )
  }
}

function wrap<T extends object>(target: T, label: string, log: Logger): T {
  const cached = wrapCache.get(target)
  if (cached) return cached as T

  const handler: ProxyHandler<any> = {
    get(obj, prop, receiver) {
      if (prop === '__yogaProfilerTarget__') return target
      const value = Reflect.get(obj, prop, receiver)
      if (typeof prop === 'symbol') return value
      if (typeof value === 'function') {
        const fnName = prop as string
        const callerLabel =
          receiver && isObject(receiver) && receiver !== proxy
            ? getReceiverLabel(receiver)
            : label
        return wrapFunction(value as Function, callerLabel, fnName, log)
      }
      if (isObject(value) && shouldWrap(value)) {
        return wrap(value, `${label}.${String(prop)}`, log)
      }
      return value
    },
    apply(_obj, thisArg, args) {
      const fn = target as unknown as Function
      const name =
        label.split('.').pop() ||
        (fn as { name?: string }).name ||
        'anonymous'
      return recordCall(label, name, fn, thisArg, args, log)
    },
    construct(_obj, args, newTarget) {
      const ctor = target as unknown as new (...a: unknown[]) => object
      const callId = ++callCounter
      const argsStr = args.map((a) => formatArg(a)).join(', ')
      const start = process.hrtime.bigint()
      const realArgs = args.map((a) => unwrap(a))
      let result: object
      try {
        result = Reflect.construct(ctor, realArgs, newTarget)
      } finally {
        const elapsed = process.hrtime.bigint() - start
        log(
          `[yoga #${callId}] new ${label}(${argsStr}) (${(Number(elapsed) / 1000).toFixed(2)}µs)`
        )
      }
      assignNodeId(result)
      return wrap(result, label, log) as object
    },
  }

  const proxy = new Proxy(target, handler)
  wrapCache.set(target, proxy)
  unwrapCache.set(proxy, target)
  return proxy
}

function wrapFunction(
  fn: Function,
  ownerLabel: string,
  fnName: string,
  log: Logger
): Function {
  const cached = wrapCache.get(fn)
  if (cached) return cached as Function

  const proxy = new Proxy(fn, {
    apply(target, thisArg, args) {
      return recordCall(ownerLabel, fnName, target as Function, thisArg, args, log)
    },
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver)
      if (typeof prop === 'symbol') return value
      if (typeof value === 'function') {
        return wrapFunction(
          value as Function,
          `${ownerLabel}.${fnName}`,
          prop as string,
          log
        )
      }
      return value
    },
    construct(target, args, newTarget) {
      const ctor = target as unknown as new (...a: unknown[]) => object
      const callId = ++callCounter
      const argsStr = args.map((a) => formatArg(a)).join(', ')
      const realArgs = args.map((a) => unwrap(a))
      const start = process.hrtime.bigint()
      const result = Reflect.construct(ctor, realArgs, newTarget)
      const elapsed = process.hrtime.bigint() - start
      log(
        `[yoga #${callId}] new ${ownerLabel}.${fnName}(${argsStr}) (${(Number(elapsed) / 1000).toFixed(2)}µs)`
      )
      assignNodeId(result)
      return wrap(result, `${ownerLabel}.${fnName}`, log)
    },
  })

  wrapCache.set(fn, proxy)
  unwrapCache.set(proxy, fn)
  return proxy
}

function unwrap(value: unknown): unknown {
  if (!isObject(value)) return value
  const orig = unwrapCache.get(value as object)
  return orig ?? value
}

function wrapResultIfNeeded(
  result: unknown,
  label: string,
  log: Logger
): unknown {
  if (!isObject(result)) return result
  if (label.endsWith('.create')) {
    assignNodeId(result)
    return wrap(result, label.replace(/\.create$/, ''), log)
  }
  if (shouldWrap(result)) return wrap(result, label, log)
  return result
}

function defaultLogger(): Logger {
  const file = process.env.SATORI_PROFILE_YOGA_FILE
  if (file && typeof process !== 'undefined') {
    try {
      const fs = require('fs') as typeof import('fs')
      const fd = fs.openSync(file, 'a')
      return (line) => {
        fs.writeSync(fd, line + '\n')
      }
    } catch {
      // fall through to stderr
    }
  }
  return (line) => {
    if (typeof process !== 'undefined' && process.stderr) {
      process.stderr.write(line + '\n')
    } else {
      console.log(line)
    }
  }
}

let installedExitHook = false
let announced = false
let cachedLogger: Logger | null = null

export function instrumentYoga(yoga: Yoga): Yoga {
  if (process.env.SATORI_PROFILE_YOGA !== '1') return yoga
  const log = cachedLogger || (cachedLogger = defaultLogger())
  if (!announced) {
    announced = true
    log(`[yoga] profiling enabled (pid=${process.pid})`)
  }

  if (!installedExitHook && typeof process !== 'undefined') {
    installedExitHook = true
    process.on('exit', () => {
      const rows = [...stats.entries()]
        .map(([k, v]) => ({
          name: k,
          count: v.count,
          totalMs: Number(v.totalNs) / 1e6,
          avgUs: Number(v.totalNs) / v.count / 1e3,
        }))
        .sort((a, b) => b.totalMs - a.totalMs)
      log('[yoga] === summary ===')
      for (const r of rows) {
        log(
          `[yoga] ${r.name}: count=${r.count} total=${r.totalMs.toFixed(2)}ms avg=${r.avgUs.toFixed(2)}µs`
        )
      }
    })
  }

  return wrap(yoga as unknown as object, 'Yoga', log) as Yoga
}
