import { it, describe, expect, beforeAll } from 'vitest'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

import FontLoader from '../src/font.js'

describe('FontLoader unit tests', () => {
  let robotoData: Buffer

  beforeAll(async () => {
    robotoData = await readFile(
      join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
    )
  })

  it('getSVG returns empty path/boxes when fontSize is 0', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    const out = engine.getSVG('hi', {
      fontSize: 0,
      top: 0,
      left: 0,
      letterSpacing: 0,
    })
    expect(out).toEqual({ path: '', boxes: [] })
  })

  it('getSVG returns a non-empty path when fontSize > 0 (covers final return)', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    const out = engine.getSVG('hi', {
      fontSize: 32,
      top: 0,
      left: 0,
      letterSpacing: 0,
    })
    expect(typeof out.path).toBe('string')
    expect(out.path.length).toBeGreaterThan(0)
    expect(Array.isArray(out.boxes)).toBe(true)
  })

  it('measure returns a positive width for known text', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    const w = engine.measure('hello', { fontSize: 16, letterSpacing: 0 })
    expect(w).toBeGreaterThan(0)
  })

  it('throws when no fonts are loaded', () => {
    const loader = new FontLoader([])
    expect(() =>
      loader.getEngine(
        16,
        'normal',
        { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
        undefined
      )
    ).toThrowError(/No fonts are loaded/)
  })

  it('rejects fonts with an invalid `lang`', () => {
    expect(() =>
      new FontLoader([
        {
          name: 'Roboto',
          data: robotoData,
          weight: 400,
          style: 'normal',
          lang: 'not-a-real-lang',
        },
      ])
    ).toThrowError(/Invalid value for props `lang`/)
  })

  it('selects lang-specific fonts via getLangFromFontName when locale is given', () => {
    // Two fonts: one with lang ja-JP, one without lang.
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
      {
        name: 'Roboto',
        data: robotoData,
        weight: 400,
        style: 'normal',
        lang: 'ja-JP',
      },
    ])
    // Provide a different font family name so the family lookup misses and we
    // fall through to the lang grouping logic.
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'NoSuchFamily', fontWeight: 400, fontStyle: 'normal' },
      'ja-JP'
    )
    expect(engine.has('a')).toBe(true)
    const out = engine.measure('hi', { fontSize: 16, letterSpacing: 0 })
    expect(out).toBeGreaterThan(0)
  })

  it('falls back to unknown lang suffix when no lang specified', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      // Family doesn't match, so it should try `${face}_unknown` lookup.
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    expect(engine.has('a')).toBe(true)
  })

  it('baseline/height work for normal lineHeight and a numeric lineHeight', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engineNormal = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    expect(engineNormal.baseline()).toBeGreaterThan(0)
    expect(engineNormal.height()).toBeGreaterThan(0)
    const engineNumeric = loader.getEngine(
      16,
      1.5,
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    expect(engineNumeric.height()).toBe(16 * 1.5)
  })

  it('has() returns true for newline', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    expect(engine.has('\n')).toBe(true)
  })

  it('finds font with the exact stored key (covers getNormal-truthy + return branch)', () => {
    // The stored key for a font without `lang` is `name.toLowerCase()_unknown`.
    // Passing that full key as fontFamily makes `get({name: face})` resolve directly.
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'roboto_unknown', fontWeight: 400, fontStyle: 'normal' },
      undefined
    )
    expect(engine.has('a')).toBe(true)
  })

  it('classifies lang-tagged fonts as non-specified when locale differs (covers nonSpecifiedLangFonts.push)', () => {
    // Loader has a Japanese-tagged font; we ask the engine for locale=ko-KR.
    // The font is sorted into nonSpecifiedLangFonts (since its lang != locale).
    // Fallback uses this group; engine.measure invokes resolveFont(..., fallback=true).
    const loader = new FontLoader([
      {
        name: 'Roboto',
        data: robotoData,
        weight: 400,
        style: 'normal',
        lang: 'ja-JP',
      },
    ])
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'NoSuchFamily', fontWeight: 400, fontStyle: 'normal' },
      'ko-KR'
    )
    // measure uses resolveFont with fallback=true so the nonSpecifiedLangFonts
    // are considered. This ensures lines 463-470 ran during getEngine.
    expect(engine.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)
  })

  it('compares multiple fonts under the same name to pick the best weight match', async () => {
    // Load Roboto Regular as weight=400 and Roboto Bold as weight=700.
    // The internal compareFont loop runs only when this.fonts.get(name).length > 1.
    const bold = await readFile(
      join(process.cwd(), 'test', 'assets', 'Roboto-Bold.ttf')
    )
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
      { name: 'Roboto', data: bold, weight: 700, style: 'normal' },
    ])
    // Request a non-existent weight to force iteration through the loop;
    // closest match should still be picked.
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 500 as any, fontStyle: 'normal' },
      undefined
    )
    expect(engine.measure('hi', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    const engineBold = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 'bold' as any, fontStyle: 'normal' },
      undefined
    )
    expect(engineBold.measure('hi', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    const engineNormal = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 'normal' as any, fontStyle: 'normal' },
      undefined
    )
    expect(engineNormal.measure('hi', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    const engineHeavy = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'Roboto', fontWeight: 900 as any, fontStyle: 'normal' },
      undefined
    )
    expect(engineHeavy.measure('hi', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)
  })

  it('compareFont covers style and weight permutations (covers 283-289 and weight<400 branches)', async () => {
    // Register multiple fonts with the same name to exercise compareFont with
    // varying weight and style combinations.
    const loader = new FontLoader([
      { name: 'X', data: robotoData, weight: 400, style: 'normal' },
      { name: 'X', data: robotoData, weight: 400, style: 'italic' },
      { name: 'X', data: robotoData, weight: 300, style: 'normal' },
      { name: 'X', data: robotoData, weight: 200, style: 'normal' },
      // Same weight+style as the first — exercises compareFont's terminal `return -1`.
      { name: 'X', data: robotoData, weight: 400, style: 'normal' },
      // Also register a font without a weight to drive the `!matchedWeight` / `!nextWeight` branches.
      { name: 'X', data: robotoData },
    ])

    // Request italic to drive `matchedStyle === style` branch.
    const eItalic = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'x_unknown', fontWeight: 400, fontStyle: 'italic' },
      undefined
    )
    expect(eItalic.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    // Request a weight below 400 to drive the weight<400 branches.
    const eLow = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'x_unknown', fontWeight: 100 as any, fontStyle: 'normal' },
      undefined
    )
    expect(eLow.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    // Request a weight slightly above to also drive 500/400 special-case handling.
    const eMid = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'x_unknown', fontWeight: 500 as any, fontStyle: 'normal' },
      undefined
    )
    expect(eMid.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    // Request a heavy weight to exercise the > 500 branch (weight < matchedWeight && weight < nextWeight).
    const eHeavy = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'x_unknown', fontWeight: 800 as any, fontStyle: 'normal' },
      undefined
    )
    expect(eHeavy.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)
  })

  it('compareFont covers all weight-comparison sub-branches', () => {
    // Heavy weights only (>500) to trigger `weight < matchedWeight && weight < nextWeight`.
    const heavyLoader = new FontLoader([
      { name: 'Y', data: robotoData, weight: 600, style: 'normal' },
      { name: 'Y', data: robotoData, weight: 700, style: 'normal' },
      { name: 'Y', data: robotoData, weight: 800, style: 'normal' },
    ])
    const eAbove = heavyLoader.getEngine(
      16,
      'normal',
      // Request a weight below all available (still > 500) to drive the
      // `return matchedWeight - nextWeight` branch.
      { fontFamily: 'y_unknown', fontWeight: 550 as any, fontStyle: 'normal' },
      undefined
    )
    expect(eAbove.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)

    // Light weights only (<400) to trigger `matchedWeight < weight && nextWeight < weight`.
    const lightLoader = new FontLoader([
      { name: 'Z', data: robotoData, weight: 100, style: 'normal' },
      { name: 'Z', data: robotoData, weight: 200, style: 'normal' },
      { name: 'Z', data: robotoData, weight: 300, style: 'normal' },
    ])
    const eLight = lightLoader.getEngine(
      16,
      'normal',
      // Request 350 (<400) with all matched/next below 350.
      { fontFamily: 'z_unknown', fontWeight: 350 as any, fontStyle: 'normal' },
      undefined
    )
    expect(eLight.measure('a', { fontSize: 16, letterSpacing: 0 })).toBeGreaterThan(0)
  })

  it('uses additionalFonts path when locale set but font has unknown lang', () => {
    const loader = new FontLoader([
      { name: 'Roboto', data: robotoData, weight: 400, style: 'normal' },
    ])
    // locale set, font key suffix is `_unknown`, so getLangFromFontName returns undefined.
    const engine = loader.getEngine(
      16,
      'normal',
      { fontFamily: 'NoSuchFamily', fontWeight: 400, fontStyle: 'normal' },
      'ja-JP'
    )
    expect(engine.has('a')).toBe(true)
  })
})
