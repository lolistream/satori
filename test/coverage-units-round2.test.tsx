import { it, describe, expect } from 'vitest'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

import buildDecoration from '../src/builder/text-decoration.js'
import { buildClipPath } from '../src/builder/clip-path.js'
import buildBorderRadius from '../src/builder/border-radius.js'
import { buildDropShadow } from '../src/builder/shadow.js'
import transform from '../src/builder/transform.js'
import { createShapeParser } from '../src/parser/shape.js'
import { normalizeStops } from '../src/builder/gradient/utils.js'
import border from '../src/builder/border.js'
import FontLoader from '../src/font.js'

import { initFonts } from './utils.js'
import satori from '../src/index.js'

describe('Direct unit tests – round 2', () => {
  describe('clip-path.ts', () => {
    it('returns empty string when style.clipPath === "none" (clip-path.ts:26)', () => {
      const result = buildClipPath(
        {
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          path: '',
          matrix: undefined,
          id: 'test',
          currentClipPath: undefined as unknown as string,
        },
        { clipPath: 'none' } as any,
        {} as any
      )
      expect(result).toBe('')
    })
  })

  describe('border-radius.ts', () => {
    it('throws "Invalid partialSides" when partialSides has no true (border-radius.ts:253)', () => {
      expect(() =>
        buildBorderRadius(
          { left: 0, top: 0, width: 100, height: 100 },
          {
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: 16,
          } as any,
          [false, false, false, false]
        )
      ).toThrowError(/Invalid `partialSides`/)
    })
  })

  describe('shadow.ts', () => {
    it('returns "" early when shadowColor is missing (shadow.ts:42)', () => {
      const result = buildDropShadow(
        { id: 'shadow-1', width: 100, height: 100 },
        // missing shadowColor / shadowOffset / shadowRadius
        {} as any
      )
      expect(result).toBe('')
    })

    it('returns "" early when shadowOffset is missing (shadow.ts:42)', () => {
      const result = buildDropShadow(
        { id: 'shadow-2', width: 100, height: 100 },
        { shadowColor: ['red'] } as any
      )
      expect(result).toBe('')
    })

    it('returns "" early when shadowRadius is missing (shadow.ts:42)', () => {
      const result = buildDropShadow(
        { id: 'shadow-3', width: 100, height: 100 },
        {
          shadowColor: ['red'],
          shadowOffset: [{ width: 0, height: 0 }],
        } as any
      )
      expect(result).toBe('')
    })
  })

  describe('transform.ts', () => {
    it('throws "Invalid transform" for unsupported transform with string value (transform.ts:28)', () => {
      // Passing a string value for `rotate` (only translateX/Y are allowed
      // strings) triggers the throw branch.
      const transforms = [{ rotate: '50%' as any }] as any[]
      expect(() =>
        transform(
          { left: 0, top: 0, width: 100, height: 100 },
          transforms as any,
          false
        )
      ).toThrowError(/Invalid transform/)
    })
  })

  describe('text-decoration.ts (buildSkipInkSegments via buildDecoration)', () => {
    // We test internal `buildSkipInkSegments` by feeding crafted glyphBoxes
    // to the default export. Underline style is needed for skip-ink.
    const baseV = {
      width: 100,
      left: 0,
      top: 0,
      ascender: 10,
    }
    const baseStyle = {
      textDecorationColor: 'black',
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      textDecorationSkipInk: 'auto',
      fontSize: 16,
      color: 'black',
    }

    it('continues when a glyph box is filtered out (text-decoration.ts:18)', () => {
      // y2 well above baseline + halfStroke and y1 well above y + halfStroke
      // (a glyph that doesn't cross the underline at all).
      const out = buildDecoration(
        {
          ...baseV,
          glyphBoxes: [
            { x1: 10, x2: 20, y1: -100, y2: -90 }, // far above
          ],
        },
        baseStyle
      )
      expect(typeof out).toBe('string')
      expect(out).toContain('<line')
    })

    it('continues when from >= to (glyph entirely outside x-range, text-decoration.ts:23)', () => {
      // A glyph that crosses the underline but is far past the right edge.
      const out = buildDecoration(
        {
          ...baseV,
          glyphBoxes: [
            { x1: 500, x2: 510, y1: 0, y2: 100 }, // crosses band, but outside
          ],
        },
        baseStyle
      )
      expect(typeof out).toBe('string')
      // No skip ranges → original segment returned.
      expect(out).toContain('<line')
    })

    it('falls back to full [start, end] when all boxes are filtered (text-decoration.ts:38)', () => {
      // All boxes fail the y filter → skipRanges is empty.
      const out = buildDecoration(
        {
          ...baseV,
          glyphBoxes: [
            { x1: 10, x2: 20, y1: -100, y2: -90 },
            { x1: 30, x2: 40, y1: -100, y2: -90 },
          ],
        },
        baseStyle
      )
      expect(typeof out).toBe('string')
    })

    it('breaks the segments loop when cursor >= end (text-decoration.ts:49)', () => {
      // A glyph that crosses the band AND extends past the end.
      // Its expanded x-range (x1-bleed .. x2+bleed) covers (left .. end), so
      // `cursor = max(cursor, to) >= end` triggers the break.
      const out = buildDecoration(
        {
          ...baseV,
          glyphBoxes: [
            { x1: -100, x2: 200, y1: 0, y2: 100 }, // spans entire underline
          ],
        },
        baseStyle
      )
      expect(typeof out).toBe('string')
    })
  })

  describe('parser/shape.ts: resolveFillRule fallback', () => {
    it('handles path() with empty quoted content (shape.ts:209)', () => {
      // path('') → after stripping quotes the value is empty, which makes
      // the inner regex .match return null → `|| []` fires.
      const parser = createShapeParser(
        { width: 100, height: 100 },
        {},
        { fontSize: 16 }
      )
      // parsePath returns an object with empty d.
      const out = parser.parsePath("path('')") as any
      expect(out).toBeTruthy()
      expect(out.type).toBe('path')
      // fillRule defaults to 'nonzero' from the destructuring default.
      expect(out['fill-rule']).toBe('nonzero')
    })
  })

  describe('gradient/utils.ts: normalizeStops defensive branches', () => {
    it('returns a single transparent stop when given no color stops', () => {
      // Empty colorStops → stops array is empty → fallback at line 62-66
      // adds the transparent stop.
      const result = normalizeStops(100, [], { fontSize: 16 }, false)
      expect(result.length).toBeGreaterThan(0)
      // The first stop should be transparent.
      expect(result[0].color).toBe('transparent')
    })
  })

  describe('font.ts: resolveFont(undefined) edge cases', () => {
    let loader: FontLoader
    let engine: ReturnType<FontLoader['getEngine']>

    it('engine.has(undefined cast) hits resolveFont undefined+fallback=false (font.ts:502-505)', async () => {
      const data = await readFile(
        join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
      )
      loader = new FontLoader([
        { name: 'Roboto', data, weight: 400, style: 'normal' },
      ])
      engine = loader.getEngine(
        16,
        'normal',
        { fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal' },
        undefined
      )
      // `engine.has(s)` calls `resolve(s) = resolveFont(s, false)`. With
      // s=undefined, hits the typeof === 'undefined' branch with fallback=false,
      // covering lines 502-505 (the `return undefined` path).
      expect(engine.has(undefined as unknown as string)).toBe(false)
    })
  })

  describe('border.ts: empty style early return (border.ts:93)', () => {
    it('returns "" when no border widths and not as content mask', () => {
      const result = border(
        {
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          props: {},
          asContentMask: false,
        } as any,
        // No borderXWidth keys at all.
        {} as any
      )
      expect(result).toBe('')
    })
  })
})

describe('expand.ts:460 (color falsy branch via empty string)', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('preserves an empty string borderTopColor (color falsy)', async () => {
    // An empty string `borderTopColor` makes `normalizeColor('')` return ''.
    // Because normalizeColor falls through to return the value untouched and
    // the input is '' (empty string), `color` is falsy and the `if (color)`
    // branch is skipped.
    const svg = await satori(
      <div
        style={{
          width: 50,
          height: 50,
          borderTop: '1px solid black',
          // empty string – falsy after normalization
          borderTopColor: '' as any,
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('text-decoration.ts: line-through and dotted style branches', () => {
  it('renders line-through decoration with dotted style', () => {
    // Hits y = top + ascender * 0.7 (line-through branch, L94-95) and the
    // dotted-style ternaries inside the segment loop (L132).
    const out = buildDecoration(
      {
        width: 100,
        left: 0,
        top: 0,
        ascender: 10,
      },
      {
        textDecorationColor: 'black',
        textDecorationStyle: 'dotted',
        textDecorationLine: 'line-through',
        fontSize: 16,
        color: 'black',
      }
    )
    expect(out).toContain('<line')
    expect(out).toContain('stroke-linecap="round"')
  })

  it('renders an overline (`top` y-ternary fallback, text-decoration.ts:96)', () => {
    // textDecorationLine is neither line-through nor underline, so the y
    // ternary chain falls through to `top`.
    const out = buildDecoration(
      {
        width: 100,
        left: 0,
        top: 0,
        ascender: 10,
      },
      {
        textDecorationColor: 'black',
        textDecorationStyle: 'solid',
        textDecorationLine: 'overline',
        fontSize: 16,
        color: 'black',
      }
    )
    expect(out).toContain('<line')
  })

  it('renders double underline with dotted style (extra-line branch)', () => {
    // textDecorationStyle === 'double' adds a second line. Combined with
    // 'dotted', covers the dotted ternary inside the double-line path.
    const out = buildDecoration(
      {
        width: 100,
        left: 0,
        top: 0,
        ascender: 10,
      },
      {
        textDecorationColor: 'black',
        textDecorationStyle: 'double',
        textDecorationLine: 'underline',
        fontSize: 16,
        color: 'black',
      }
    )
    expect(out).toContain('<line')
  })
})

describe('variables.ts: extractVarArgs misc branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('handles var() with extra tokens (no comma → div check evaluates false)', async () => {
    // `var(--name other)` produces nodes [word, space, word]. The space and
    // trailing word both make the else-if (`type === 'div' && value === ','`)
    // evaluate FALSE, covering the else-branch at L163.
    const svg = await satori(
      <div
        style={{
          color: 'var(--c-name extra)' as any,
          ['--c-name' as any]: 'red',
          display: 'flex',
        }}
      >
        Hi
      </div>,
      { width: 100, height: 50, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('preprocess.ts: SVG text child (preprocess.ts:107)', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('stringifies non-element SVG children', async () => {
    // <g>hello</g> — children is a string, which falls through the
    // !object check and is converted via String(node).
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>{42 as any}</g>
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('conic.ts: rgba branch via alpha < 1 stop', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('renders a conic gradient with a partially transparent stop at duplicate offset (conic.ts:127)', async () => {
    // Two stops at the same offset with alpha < 1 cause interpolateColor's
    // `s1.offset === s2.offset` branch to call formatRGBA(c2). Because
    // c[3] !== 1, the function emits `rgba(r,g,b,a)`.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage:
            'conic-gradient(red 50%, rgba(0, 0, 0, 0.3) 50%, blue)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('text/index.ts:559 (line === skippedLine continue)', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('skips subsequent texts on the truncated line with single-line ellipsis', async () => {
    // whiteSpace:nowrap + textOverflow:ellipsis + overflow:hidden forces
    // lineLimit=1 with allowSoftWrap=false. All word/grapheme segments
    // remain on line 0; the ellipsis is added on some text j, and any
    // subsequent texts on the same line trigger `line === skippedLine`
    // → continue.
    const svg = await satori(
      <div
        style={{
          width: 60,
          height: 30,
          fontSize: 16,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        aaaa bbbb cccc dddd eeee ffff gggg hhhh
      </div>,
      { width: 60, height: 30, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

