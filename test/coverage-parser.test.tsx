import { it, describe, expect } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('Parser coverage – shape', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should resolve circle clip-path keyword positions (top / right / center)', async () => {
    const svgs = await Promise.all(
      [
        'circle(30px at top)',
        'circle(30px at right)',
        'circle(30px at center)',
        'circle(30px at top right)',
      ].map((clipPath) =>
        satori(
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
              clipPath,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'red',
              }}
            ></div>
          </div>,
          { width: 100, height: 100, fonts }
        )
      )
    )
    svgs.forEach((svg) => expect(toImage(svg, 100)).toMatchImageSnapshot())
  })

  it('should fall back to 50% radii when ellipse omits explicit radii', async () => {
    // `ellipse(at center)` has no rx/ry, so the `rx || '50%'` and
    // `ry || '50%'` fallbacks fire.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          clipPath: 'ellipse(at center)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'red',
          }}
        ></div>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should ignore unknown clip-path values without throwing', async () => {
    // None of the shape parsers (circle/ellipse/path/polygon/inset) match
    // `foo()`; parseInset still runs and returns null, exercising its
    // `if (!res) return null` early-out.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: 'red',
          // @ts-ignore Intentionally invalid clip-path syntax.
          clipPath: 'foo()',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should handle inset with zero offsets and no round corners', async () => {
    // `inset(0)` resolves to all-zero offsets and radii, exercising the
    // `lengthToNumber(...) || 0` fallback branches and the rect (non-rounded)
    // return path.
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          clipPath: 'inset(0)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'red',
          }}
        ></div>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(toImage(svg, 100)).toMatchImageSnapshot()
  })

  it('should support polygon and path with explicit nonzero fill-rule', async () => {
    // Provides an explicit fill-rule, which makes resolveFillRule keep the
    // user-supplied rule instead of falling back to "nonzero".
    const svgs = await Promise.all(
      [
        'polygon(nonzero, 50% 0, 100% 50%, 50% 100%, 0 50%)',
        "path(evenodd, 'M 10 10 L 80 10 L 80 80 L 10 80 Z')",
      ].map((clipPath) =>
        satori(
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
              clipPath,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'red',
              }}
            ></div>
          </div>,
          { width: 100, height: 100, fonts }
        )
      )
    )
    svgs.forEach((svg) => expect(toImage(svg, 100)).toMatchImageSnapshot())
  })
})

describe('Parser coverage – mask', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should resolve mask via -webkit-mask-image when maskImage is unset', async () => {
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'red',
          // @ts-ignore Webkit-prefixed mask property
          WebkitMaskImage: 'linear-gradient(to right, blue, transparent)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})
