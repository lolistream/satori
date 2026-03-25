import { type Yoga } from 'yoga-layout/load'
import { type Node } from 'yoga-layout'
import { type InitInput } from './yoga.external.js'

export { Yoga as TYoga, Node as YogaNode, type InitInput }

export function init(input: InitInput) {
  if (process.env.SATORI_STANDALONE === '1') {
    return import('./yoga.external.js').then((mod) => mod.init(input))
  } else {
    // Do nothing. It's bundled.
  }
}

export function getYoga() {
  if (process.env.SATORI_STANDALONE === '1') {
    return import('./yoga.external.js').then((mod) => mod.getYoga())
  } else if (process.env.SATORI_ASMJS === '1') {
    return import('./yoga.asmjs.js').then((mod) => mod.getYoga())
  } else {
    return import('./yoga.bundled.js').then((mod) => mod.getYoga())
  }
}

if (process.env.SATORI_STANDALONE !== '1') {
  if (process.env.SATORI_ASMJS === '1') {
    import('./yoga.asmjs.js')
  } else {
    import('./yoga.bundled.js')
  }
}
