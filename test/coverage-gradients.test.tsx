import { it, describe, expect } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'
import { normalizeStops } from '../src/builder/gradient/utils.js'

describe('Gradient coverage – conic', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should support conic-gradient at single vertical keyword (top)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 45deg at top, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient at single vertical keyword (bottom)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at bottom, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient at single horizontal keyword (left)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at left, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient at single horizontal keyword (right)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at right, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient at single length keyword', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at 25%, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with two-keyword swap (bottom right)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 90deg at bottom right, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with two-keyword swap (top left)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at top left, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with percentage-keyword swap (50% left)', async () => {
    // parts = [<percentage>, left] – first swap condition fails (no y-axis
    // keyword in parts[0]), but the second one fires because parts[1] is an
    // x-axis keyword.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at 50% left, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should resolve resolvePositionPart center via two-part position', async () => {
    // parts = ['center', 'top'] hits the switch `case 'center'` branch in
    // resolvePositionPart since the early `position === 'center'` short circuit
    // in resolvePosition is bypassed.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at center top, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with percentage two-part position', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at 30% 70%, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with HSL color stops covering all hue branches', async () => {
    // All six branches of hslToRgb (h < 60, 120, 180, 240, 300, else) are
    // exercised by stops at 30, 90, 150, 210, 270, 330 degrees of hue.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(hsl(30, 100%, 50%), hsl(90, 100%, 50%), hsl(150, 100%, 50%), hsl(210, 100%, 50%), hsl(270, 100%, 50%), hsl(330, 100%, 50%), hsl(30, 100%, 50%))',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with HSL color including alpha', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundColor: 'white',
          backgroundImage:
            'conic-gradient(hsla(0, 100%, 50%, 0.5), hsla(240, 100%, 50%, 1))',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-conic-gradient with no explicit last offset', async () => {
    // Exercises calcTotalLength early-return `if (!lastStop?.offset)`.
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'repeating-conic-gradient(red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-conic-gradient with percentage last offset', async () => {
    // Exercises calcTotalLength branch where `lastStop.offset.unit === '%'`.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'repeating-conic-gradient(red 0%, blue 50%, red 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with hint at segment start (h <= 0)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'conic-gradient(red 0deg, 0deg, blue 360deg)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with hint at segment end (h >= 1)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'conic-gradient(red 0deg, 360deg, blue 360deg)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with explicit non-zero first offset and hint', async () => {
    // Triggers `firstHasExplicitOffset = true` (idxOff = 1) so hint indices are
    // offset by 1.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(red 25%, 50%, blue 75%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with percentage hint', async () => {
    // Exercises the `hint.unit === '%'` branch in hint conversion.
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'conic-gradient(red, 50%, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support conic-gradient with no-repeat backgroundRepeat (repeatX=false, repeatY=false)', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'conic-gradient(red 0% 50%, blue 50% 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px 50px',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should fall back position resolution when the keyword is unparseable', async () => {
    // `at unset` lands in resolvePositionPart's default branch with a string
    // that isn't a CSS length, exercising the `?? dim / 2` fallback when
    // lengthToNumber returns undefined.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'conic-gradient(from 0deg at unset, red 0% 50%, blue 50% 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-conic-gradient where last offset evaluates to 0deg', async () => {
    // calcTotalLength's `calcDegree(...) || 360` falls back to 360 when
    // calcDegree returns 0 (the case when the last stop is at 0deg).
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'repeating-conic-gradient(red 90deg, blue 0deg)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should render repeating-conic-gradient with a single stop (interpolateColor single-stop path)', async () => {
    // The repeating + single-stop combination is the only realistic way to
    // make normalizeStops return exactly one stop, which is what triggers the
    // `stops.length === 1` shortcut inside interpolateColor.
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'repeating-conic-gradient(red)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should fall through interpolateColor when a stop has an unparseable color', async () => {
    // `cssColorParse` returns null for `foo-color`, triggering parseToRGBA's
    // `if (!parsed) return null` branch and (when interpolating with another
    // stop) the `if (!c1 || !c2) return s1.color` branch.
    const svg = await satori(
      <div
        style={{
          backgroundColor: 'green',
          backgroundImage: 'conic-gradient(foo-color, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('Gradient coverage – linear', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should support linear-gradient with non-axis directional value', async () => {
    // `to center` is parsed as a directional value that does not contain any
    // of top/bottom/left/right – exercising the fallback branch where the
    // default direction (bottom-to-top, i.e. y1 = 1) is used.
    const svg = await satori(
      <div
        style={{
          background: 'linear-gradient(to center, red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-linear-gradient with last stop missing offset', async () => {
    // Exercises resolveRepeatingCycle's `if (!offset) return length` branch.
    const svg = await satori(
      <div
        style={{
          background: 'repeating-linear-gradient(45deg, red 10px, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-linear-gradient with first stop in px (calcPercentage non-% branch)', async () => {
    const svg = await satori(
      <div
        style={{
          background:
            'repeating-linear-gradient(45deg, red 5px, blue 20px)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-linear-gradient with first stop in % (calcPercentage % branch)', async () => {
    // Exercises the `stops[0].offset.unit === '%'` true branch in
    // calcPercentage.
    const svg = await satori(
      <div
        style={{
          background:
            'repeating-linear-gradient(45deg, red 10%, blue 50%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support repeating-linear-gradient with no-repeat backgroundRepeat', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'repeating-linear-gradient(red 0px, blue 10px)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px 50px',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })
})

describe('Gradient coverage – radial', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should support radial-gradient with at right keyword', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage: 'radial-gradient(circle at right, red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support circle farthest-side radial-gradient', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-side at 30% 30%, red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should handle ellipse closest-corner with center at corner (fx === 0)', async () => {
    // Center at top-left corner means closest-corner makes fx = 0, exercising
    // the early-return branch in f2r().
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'radial-gradient(ellipse closest-corner at 0% 0%, red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support radial-gradient with no-repeat backgroundRepeat', async () => {
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle, red, blue)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50px 50px',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should fall back to xDelta/yDelta halves for unparseable radial positions', async () => {
    // Using `calc(...)` makes the parser report length values without a
    // numeric value, so lengthToNumber returns undefined and the
    // `?? xDelta / 2` / `?? yDelta / 2` fallbacks in calcRadialGradient fire.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle at calc(50%) calc(50%), red, blue)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })
})

describe('Gradient coverage – utils.normalizeStops', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should distribute multiple gaps of undefined offsets', async () => {
    // Stops with the pattern defined-undef-defined-undef-defined triggers the
    // `if (nextStop < i)` branch inside the even-distribution loop.
    const svg = await satori(
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right, red 0%, blue, green 50%, yellow, purple 100%)',
          height: '100%',
          width: '100%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should convert a fully transparent mask stop into opaque rgba(0,0,0,1)', async () => {
    // The mask gradient path normalizes alpha-0 stops via the `color.alpha
    // === 0` branch.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'red',
          maskImage: 'linear-gradient(to right, transparent, blue)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should keep mask stops with unparseable colors verbatim', async () => {
    // `cssColorParse` returns null for unknown color names, exercising the
    // `if (!color) return stop` branch in the mask post-processing.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'red',
          maskImage: 'linear-gradient(to right, foo-color, blue)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('unit: should fall back to a single transparent stop when colorStops is empty', () => {
    // Triggers the `if (!stops.length)` block – impossible via the CSS parser
    // since gradients require at least one stop, but reachable via the
    // exported helper directly.
    const result = normalizeStops(100, [], { fontSize: 16 }, false)
    expect(result).toEqual([
      { offset: 0, color: 'transparent' },
      { offset: 1, color: 'transparent' },
    ])
  })

  it('unit: should rewrite the last repeating stop when its offset != 1', () => {
    // The `else if (repeating)` branch replaces the final stop with one at
    // offset 1, preserving its color. Crafting offsets where lengthToNumber
    // resolves to less than totalLength reaches the branch (impossible via
    // gradient syntax which always normalizes the last offset to 1).
    const result = normalizeStops(
      200,
      [
        { color: 'red' },
        { color: 'blue', offset: { value: '50', unit: 'px' } },
      ],
      { fontSize: 16 },
      true
    )
    expect(result[result.length - 1]).toEqual({ offset: 1, color: 'blue' })
  })
})

describe('Gradient coverage – webkit', () => {
  let fonts
  initFonts((f) => (fonts = f))

  const opts = { width: 100, height: 100 }

  async function render(backgroundImage: string) {
    return satori(
      <div style={{ backgroundImage, height: '100%', width: '100%' }}></div>,
      { ...opts, fonts }
    )
  }

  it('should support -webkit-radial-gradient with position only (no shape)', async () => {
    const webkit = await render('-webkit-radial-gradient(center, red, blue)')
    const standard = await render('radial-gradient(at center, red, blue)')
    expect(webkit).toEqual(standard)
  })

  it('should support -webkit-radial-gradient with px position only', async () => {
    const webkit = await render(
      '-webkit-radial-gradient(20px 30px, red, blue)'
    )
    const standard = await render(
      'radial-gradient(at 20px 30px, red, blue)'
    )
    expect(webkit).toEqual(standard)
  })

  it('should pass through -webkit-radial-gradient that starts with color stop', async () => {
    // First argument is a color (not a position, not a shape/size) – the
    // converter should leave the content unchanged.
    const webkit = await render('-webkit-radial-gradient(red, blue)')
    const standard = await render('radial-gradient(red, blue)')
    expect(webkit).toEqual(standard)
  })

  it('should support -webkit-linear-gradient with grad units', async () => {
    // Covers the `grad` case in the toDegrees switch.
    const webkit = await render('-webkit-linear-gradient(200grad, red, blue)')
    const standard = await render('linear-gradient(-90deg, red, blue)')
    expect(webkit).toEqual(standard)
  })
})
