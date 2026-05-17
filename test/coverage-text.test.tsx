import { it, describe, expect } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('Text coverage – processor', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should uppercase text via textTransform', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          color: 'black',
          textTransform: 'uppercase',
        }}
      >
        hello world
      </div>,
      { width: 300, height: 60, fonts }
    )
    expect(toImage(svg, 300)).toMatchImageSnapshot()
  })

  it('should lowercase text via textTransform', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          color: 'black',
          textTransform: 'lowercase',
        }}
      >
        HELLO WORLD
      </div>,
      { width: 300, height: 60, fonts }
    )
    expect(toImage(svg, 300)).toMatchImageSnapshot()
  })

  it('should capitalize text via textTransform', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          color: 'black',
          textTransform: 'capitalize',
        }}
      >
        hello world from satori
      </div>,
      { width: 300, height: 60, fonts }
    )
    expect(toImage(svg, 300)).toMatchImageSnapshot()
  })

  it('should clamp lines with display: -webkit-box and WebkitLineClamp', async () => {
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: '-webkit-box',
          // @ts-ignore – WebKit box-orient is not in the standard prop types
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize: 20,
          color: 'black',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>,
      { width: 200, height: 200, fonts }
    )
    expect(toImage(svg, 200)).toMatchImageSnapshot()
  })

  it('should fall back when lineClamp string does not match either regex', async () => {
    // `parseLineClamp` returns [] for malformed inputs (no number / no quoted
    // text). The text should still render successfully and ignore the clamp.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          // The unquoted "invalid" portion makes both regexes fail.
          // @ts-ignore
          lineClamp: 'not-a-number',
          fontSize: 16,
          color: 'black',
        }}
      >
        Some readable text with line-clamp malformed.
      </div>,
      { width: 200, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('Text coverage – index', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should render text with debug overlays', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'black',
        }}
      >
        Hello debug world
      </div>,
      { width: 300, height: 80, fonts, debug: true }
    )
    expect(toImage(svg, 300)).toMatchImageSnapshot()
  })

  it('should render debug overlays with transform', async () => {
    // Forces the `matrix ? matrix : undefined` ternaries in the debug
    // rectangles/lines to take the truthy branch.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'black',
          transform: 'translate(5px, 5px)',
        }}
      >
        Hello transformed
      </div>,
      { width: 300, height: 80, fonts, debug: true }
    )
    expect(toImage(svg, 300)).toMatchImageSnapshot()
  })

  it('should collect decoration boxes for non-embedded underline text with descenders', async () => {
    // When embedFont is false and text-decoration-line is underline, the text
    // renderer takes the <text>-element branch and still needs to collect
    // glyph boxes for skip-ink decoration computation. Descenders in 'g'/'p'
    // force `svg.boxes.length > 0` so the push branch fires too.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'black',
          textDecorationLine: 'underline',
        }}
      >
        agpqyj descenders abc
      </div>,
      {
        width: 300,
        height: 80,
        fonts,
        embedFont: false,
      }
    )
    expect(typeof svg).toBe('string')
    expect(svg).toContain('<text')
  })

  it('should render no-descender text with underline (decorationGlyphs fallback)', async () => {
    // With no descenders, `decorationGlyphs[line]` is never populated, so the
    // `decorationGlyphs[lineIndex] || []` fallback triggers when building the
    // final decoration shape.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'black',
          textDecorationLine: 'underline',
        }}
      >
        Hello clean
      </div>,
      { width: 300, height: 80, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render decoration-only output when text is fully transparent with shadow', async () => {
    // When embedFont is false there is no merged glyph path, so the renderer
    // exercises the `else if (decorationShape)` branch. Combining that with a
    // textShadow gives a non-empty `filter`, hitting the ternary that wraps
    // the decoration in a filter <g>.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'transparent',
          textDecorationLine: 'underline',
          textShadow: '1px 1px 1px red',
        }}
      >
        Decoration only
      </div>,
      {
        width: 300,
        height: 80,
        fonts,
        embedFont: false,
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('should respect explicit string tabSize', async () => {
    // tabSize as a CSS length string takes the lengthToNumber path instead of
    // the number multiplication path.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          color: 'black',
          whiteSpace: 'pre',
          // @ts-ignore tabSize accepts CSS lengths
          tabSize: '2em',
        }}
      >
        {'A\tB'}
      </div>,
      { width: 200, height: 60, fonts }
    )
    expect(toImage(svg, 200)).toMatchImageSnapshot()
  })

  it('should preserve consecutive newlines under white-space: pre', async () => {
    // Two consecutive newlines force the inner forced-break to land on a
    // line whose currentLineHeight is still 0, hitting the
    // `if (forceBreak && currentLineHeight === 0)` branch.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          color: 'black',
          whiteSpace: 'pre',
        }}
      >
        {'\n\nHello'}
      </div>,
      { width: 200, height: 80, fonts }
    )
    expect(toImage(svg, 200)).toMatchImageSnapshot()
  })

  it('should render text with CSS filter applied via parent style', async () => {
    // Sets `style.filter`, which triggers the `cssFilter ? ... : undefined`
    // ternary on the embedded glyph path.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'red',
          // @ts-ignore filter is not in the React DOM prop types
          filter: 'blur(1px)',
        }}
      >
        Filtered text
      </div>,
      { width: 200, height: 60, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should treat tabSize=0 specially in tab handling', async () => {
    // With tabSize=0, tabWidth is 0 and the `tabWidth === 0 ? ... : ...`
    // ternary picks the textWidthBeforeTab branch.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          color: 'black',
          whiteSpace: 'pre',
          // @ts-ignore tabSize accepts number
          tabSize: 0,
        }}
      >
        {'A\tB'}
      </div>,
      { width: 200, height: 60, fonts }
    )
    expect(toImage(svg, 200)).toMatchImageSnapshot()
  })

  it('should accept textIndent expressed as 0%', async () => {
    // `lengthToNumber('0%', ...)` returns 0, which is falsy and triggers the
    // `|| 0` fallback for textIndentNumber.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          color: 'black',
          textIndent: '0%',
        }}
      >
        Zero indent
      </div>,
      { width: 200, height: 60, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should not divide by zero when justifying a line with a single segment', async () => {
    // With `text-align: justify` and only one segment per line, the
    // `segments > 1 ? ... : 0` ternary falls through to the 0 branch.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: 'black',
          textAlign: 'justify',
          wordBreak: 'break-all',
          width: 24,
        }}
      >
        abcdef
      </div>,
      { width: 24, height: 200, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render debug overlays inside a clipped/transformed parent', async () => {
    // Provides both a transform (matrix truthy) and a clipPath on the parent
    // (clipPathId truthy) so the debug overlay rect/line attribute ternaries
    // take their truthy branches.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          clipPath: 'circle(60px at 50% 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: 'black',
            transform: 'translate(5px, 5px)',
          }}
        >
          Debug inside clip
        </div>
      </div>,
      { width: 200, height: 80, fonts, debug: true }
    )
    expect(typeof svg).toBe('string')
  })

  it('should reflow short last lines via textWrap: pretty', async () => {
    // Long opening followed by a single short trailing word makes
    // `isLastLineShort` true and pushes the pretty reflow path through both
    // the adjustedWidth flow and the height-acceptance branch.
    const svg = await satori(
      <div
        style={{
          width: 200,
          height: 200,
          fontSize: 28,
          color: 'black',
          // @ts-ignore textWrap is not in the React DOM prop types yet.
          textWrap: 'pretty',
        }}
      >
        hello world i love satori a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a Q
      </div>,
      { width: 200, height: 200, fonts }
    )
    expect(toImage(svg, 200)).toMatchImageSnapshot()
  })
})
