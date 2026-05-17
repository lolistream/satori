import { it, describe, expect, vi } from 'vitest'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

import {
  createLRU,
  toString as utilsToString,
  segment as utilsSegment,
} from '../src/utils.js'
import { detectLanguageCode } from '../src/language.js'
import parseTransformOrigin from '../src/transform-origin.js'
import {
  resolveImageData,
  cache as imageCache,
  inflightRequests,
} from '../src/handler/image.js'
import FontLoader from '../src/font.js'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('utils.ts remaining branches', () => {
  it('toString returns Object.prototype.toString tag', () => {
    expect(utilsToString({})).toBe('[object Object]')
    expect(utilsToString([])).toBe('[object Array]')
  })

  it('createLRU evicts least-recently-set when over max (covers store.delete(firstKey))', () => {
    const lru = createLRU<number>(2)
    lru.set('a', 1)
    lru.set('b', 2)
    // This should evict 'a' (first key)
    lru.set('c', 3)
    expect(lru.get('a')).toBeUndefined()
    expect(lru.get('b')).toBe(2)
    expect(lru.get('c')).toBe(3)
  })

  it('createLRU re-orders when setting an existing key (covers store.delete(key) branch)', () => {
    const lru = createLRU<number>(2)
    lru.set('a', 1)
    lru.set('b', 2)
    lru.set('a', 100) // replace, should not evict
    expect(lru.get('a')).toBe(100)
    expect(lru.get('b')).toBe(2)
  })

  it('segment cache evicts oldest entry once over MAX_SEGMENT_CACHE_SIZE', () => {
    // Fill the segment cache with 500+ unique entries to trigger eviction.
    // Use simple ASCII content to keep things fast.
    for (let i = 0; i < 600; i++) {
      utilsSegment(`unique-segment-${i}-xyz`, 'grapheme')
    }
    // Just ensure subsequent calls keep working.
    const out = utilsSegment('again', 'grapheme')
    expect(Array.isArray(out)).toBe(true)
  })
})

describe('language.ts: locale not in matched languages list', () => {
  it('hits index === -1 branch when provided locale does not match', () => {
    // '桜' matches ja-JP, zh-CN, zh-TW, zh-HK. ko-KR is not in matches.
    expect(detectLanguageCode('桜', 'ko-KR' as any)).toEqual([
      'ja-JP',
      'zh-CN',
      'zh-TW',
      'zh-HK',
    ])
  })
})

describe('transform-origin.ts: parseUnit default branch', () => {
  it('returns empty for valid CSS dimension with unsupported unit (pt)', () => {
    expect(parseTransformOrigin('1pt', 16)).toEqual({})
  })
})

describe('image.ts remaining branches', () => {
  it('uses cache when the same data: URI is resolved twice', async () => {
    imageCache.clear()
    inflightRequests.clear()
    const dataUri =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
    const r1 = await resolveImageData(dataUri)
    const r2 = await resolveImageData(dataUri)
    expect(r1[0]).toBe(r2[0])
  })

  it('throws when fetch is not polyfilled', async () => {
    imageCache.clear()
    inflightRequests.clear()
    const prev = (globalThis as any).fetch
    delete (globalThis as any).fetch
    try {
      await expect(
        resolveImageData('https://example.com/no-fetch-image.png')
      ).rejects.toThrowError(/fetch.*required.*polyfill/)
    } finally {
      if (prev) (globalThis as any).fetch = prev
    }
  })

  it('strips surrounding double quotes from URL', async () => {
    imageCache.clear()
    inflightRequests.clear()
    const dataUri =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
    const result = await resolveImageData(`"${dataUri}"`)
    expect(result[0]).toMatch(/^data:image\/png;base64,/)
  })

  it('strips surrounding single quotes from URL', async () => {
    imageCache.clear()
    inflightRequests.clear()
    const dataUri =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
    const result = await resolveImageData(`'${dataUri}'`)
    expect(result[0]).toMatch(/^data:image\/png;base64,/)
  })

  it('warns and returns the data URI when MIME type cannot be parsed', async () => {
    imageCache.clear()
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const bogus = 'data:nonstandard'
    const result = await resolveImageData(bogus)
    expect(result[0]).toBe(bogus)
    warn.mockRestore()
  })

  it('warns and returns the data URI when format is not base64-encoded', async () => {
    imageCache.clear()
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const uri = 'data:image/png,rawdata'
    const result = await resolveImageData(uri)
    expect(result[0]).toBe(uri)
    warn.mockRestore()
  })

  it('uses the cached response on a second HTTP fetch (covers cache hit branch)', async () => {
    imageCache.clear()
    inflightRequests.clear()
    let calls = 0
    ;(globalThis as any).fetch = async () => {
      calls++
      return {
        headers: { get: () => 'image/png' },
        arrayBuffer: async () => {
          const binary = atob(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
          )
          const bytes = new Uint8Array(binary.length)
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
          return bytes.buffer
        },
      } as any
    }
    try {
      const url = 'https://example.com/cached.png'
      const r1 = await resolveImageData(url)
      // To exercise the cache branch (lines 243-245) rather than the inflight
      // branch (lines 240-242), clear inflightRequests but keep the cache.
      inflightRequests.clear()
      const r2 = await resolveImageData(url)
      expect(r1[0]).toBe(r2[0])
      expect(calls).toBe(1)
    } finally {
      delete (globalThis as any).fetch
    }
  })

  it('throws "Failed to parse SVG image" when fetched SVG cannot be parsed', async () => {
    imageCache.clear()
    inflightRequests.clear()
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    ;(globalThis as any).fetch = async () => {
      return {
        headers: { get: () => 'image/svg+xml' },
        text: async () => '<not-svg>',
      } as any
    }
    try {
      // The error is caught internally and the failed result is cached as [].
      // We still hit the throw path before the catch.
      const out = await resolveImageData(
        'https://example.com/broken.svg'
      )
      expect(out).toEqual([])
      // Verify the caught error message indicates SVG parse failure.
      expect(error).toHaveBeenCalled()
      const args = error.mock.calls[error.mock.calls.length - 1][0] as string
      expect(args).toMatch(/Failed to parse SVG image/)
    } finally {
      delete (globalThis as any).fetch
      error.mockRestore()
    }
  })
})

describe('preprocess.ts dedup of image elements', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('dedupes <image> elements with the same href (covers set.has true branch)', async () => {
    const requests: string[] = []
    ;(globalThis as any).fetch = async (url: string) => {
      requests.push(url)
      return {
        headers: { get: () => 'image/png' },
        arrayBuffer: async () => {
          const binary = atob(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
          )
          const bytes = new Uint8Array(binary.length)
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
          return bytes.buffer
        },
      } as any
    }
    try {
      const svg = await satori(
        <div style={{ display: 'flex' }}>
          <svg
            viewBox='0 0 100 100'
            width='100'
            height='100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image href='https://example.com/img.png' width='50' height='50' />
            <image href='https://example.com/img.png' width='30' height='30' />
          </svg>
          <img src='https://example.com/img2.png' width='10' height='10' />
          <img src='https://example.com/img2.png' width='12' height='12' />
        </div>,
        { width: 100, height: 100, fonts }
      )
      expect(typeof svg).toBe('string')
    } finally {
      delete (globalThis as any).fetch
    }
  })
})

describe('expand.ts remaining branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('throws Invalid WebkitTextStroke value', async () => {
    await expect(
      satori(
        <div style={{ WebkitTextStroke: '2px' as any }}>hi</div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Invalid `WebkitTextStroke` value/)
  })

  it('throws Invalid textDecorationSkipInk value', async () => {
    await expect(
      satori(
        <div style={{ textDecorationSkipInk: 'invalid' as any }}>hi</div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Invalid `textDecorationSkipInk` value/)
  })

  it('hits getErrorHint default ("") branch via boxShadow throw', async () => {
    await expect(
      satori(
        // empty boxShadow value throws "Invalid boxShadow value"
        <div style={{ boxShadow: '' }}>hi</div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Invalid `boxShadow` value/)
  })

  it('throws Invalid transform when transform is not a string', async () => {
    await expect(
      satori(
        <div style={{ transform: 123 as any }}>hi</div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Invalid `transform` value/)
  })

  it('passes pre-parsed boxShadow array through expand (covers non-string branch)', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          width: 50,
          height: 50,
          background: 'white',
          boxShadow: [
            {
              offsetX: 0,
              offsetY: 1,
              blurRadius: 2,
              spreadRadius: 0,
              color: 'rgba(0, 0, 0, 0.5)',
              inset: false,
            },
          ] as any,
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('font.ts remaining branches (resolveFont undefined word)', () => {
  it('resolveFont returns last font when word is undefined and fallback=true (via measure(""))', async () => {
    const data = await readFile(
      join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
    )
    const loader = new FontLoader([
      { name: 'Roboto', data, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    // baseline()/height() called with no arg flow into resolveFont(undefined, fallback=true)
    expect(engine.baseline()).toBeGreaterThan(0)
    expect(engine.height()).toBeGreaterThan(0)
  })

  it('engine.has returns false for a character no font can render', async () => {
    // Load Roboto only; render a Hebrew character that Roboto does not support.
    const data = await readFile(
      join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
    )
    const loader = new FontLoader([
      { name: 'Roboto', data, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    // Pure Aleph (no fallback) — resolveFont returns undefined and has() returns false early.
    expect(engine.has('\u05D0')).toBe(false)

    // Mixed string: starts with an ASCII char (Roboto resolves) but contains Aleph (broken).
    // This drives _trackBrokenChars population and exercises the late `return false` branch
    // of `engine.has`.
    expect(engine.has('a\u05D0')).toBe(false)
  })
})
