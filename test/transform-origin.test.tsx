import { it, describe, expect } from 'vitest'

import parseTransformOrigin from '../src/transform-origin.js'
import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('parseTransformOrigin (unit)', () => {
  it('returns xAbsolute when value is a number', () => {
    expect(parseTransformOrigin(50, 16)).toEqual({ xAbsolute: 50 })
  })

  it('handles single keyword: top', () => {
    expect(parseTransformOrigin('top', 16)).toEqual({ yRelative: 0 })
  })

  it('handles single keyword: bottom', () => {
    expect(parseTransformOrigin('bottom', 16)).toEqual({ yRelative: 100 })
  })

  it('handles single keyword: left', () => {
    expect(parseTransformOrigin('left', 16)).toEqual({ xRelative: 0 })
  })

  it('handles single keyword: right', () => {
    expect(parseTransformOrigin('right', 16)).toEqual({ xRelative: 100 })
  })

  it('handles single keyword: center', () => {
    expect(parseTransformOrigin('center', 16)).toEqual({})
  })

  it('handles single px value (horizontal)', () => {
    expect(parseTransformOrigin('10px', 16)).toEqual({ xAbsolute: 10 })
  })

  it('handles single em value (horizontal)', () => {
    expect(parseTransformOrigin('2em', 10)).toEqual({ xAbsolute: 20 })
  })

  it('handles single rem value (horizontal)', () => {
    expect(parseTransformOrigin('2rem', 16)).toEqual({ xAbsolute: 32 })
  })

  it('handles single percentage value (horizontal)', () => {
    expect(parseTransformOrigin('25%', 16)).toEqual({ xRelative: 25 })
  })

  it('returns empty for unrecognized single unit', () => {
    expect(parseTransformOrigin('5xyz', 16)).toEqual({})
  })

  it('returns empty when CssDimension throws (invalid word)', () => {
    expect(parseTransformOrigin('not-a-unit', 16)).toEqual({})
  })

  it('handles two values: pixel x and pixel y', () => {
    expect(parseTransformOrigin('10px 20px', 16)).toEqual({
      xAbsolute: 10,
      yAbsolute: 20,
    })
  })

  it('handles two values: % x and % y', () => {
    expect(parseTransformOrigin('25% 75%', 16)).toEqual({
      xRelative: 25,
      yRelative: 75,
    })
  })

  it('handles two values: left then top (no swap)', () => {
    expect(parseTransformOrigin('left top', 16)).toEqual({
      xRelative: 0,
      yRelative: 0,
    })
  })

  it('handles two values: top then left (swaps to horizontal first)', () => {
    expect(parseTransformOrigin('top left', 16)).toEqual({
      xRelative: 0,
      yRelative: 0,
    })
  })

  it('handles two values: bottom then right (swaps)', () => {
    expect(parseTransformOrigin('bottom right', 16)).toEqual({
      xRelative: 100,
      yRelative: 100,
    })
  })

  it('handles two values: center right (swaps)', () => {
    expect(parseTransformOrigin('center right', 16)).toEqual({
      xRelative: 100,
    })
  })

  it('handles two values: center left (swaps)', () => {
    expect(parseTransformOrigin('center left', 16)).toEqual({
      xRelative: 0,
    })
  })

  it('returns empty when more than two words', () => {
    expect(parseTransformOrigin('10px 20px 30px', 16)).toEqual({})
  })

  it('returns empty when value parser yields no word nodes', () => {
    expect(parseTransformOrigin('', 16)).toEqual({})
  })
})

describe('transformOrigin integration via satori', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('passes transformOrigin through expand without crashing', async () => {
    const svg = await satori(
      <div
        style={{
          width: '50%',
          height: '50%',
          background: 'red',
          transform: 'rotate(45deg)',
          transformOrigin: 'top left',
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
    expect(svg).toContain('matrix')
  })
})
