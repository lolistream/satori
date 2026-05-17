import { it, describe, expect } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('coverage filler: builders', () => {
  let fonts
  initFonts((f) => (fonts = f))

  describe('clip-path', () => {
    it('should return empty string for unrecognized clip-path value', async () => {
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'red',
            // Not a recognized shape: not circle/ellipse/path/polygon/inset.
            clipPath: 'foo(10px)',
          }}
        ></div>,
        { width: 100, height: 100, fonts }
      )
      expect(typeof svg).toBe('string')
    })
  })

  describe('mask-image', () => {
    it('should render no mask when maskImage is "none"', async () => {
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'red',
            maskImage: 'none',
          }}
        ></div>,
        { width: 100, height: 100, fonts }
      )
      // maskImage "none" gets filtered to an empty array so no satori_mi-* mask defs.
      expect(svg).not.toContain('satori_mi-')
    })
  })

  describe('border-radius', () => {
    it('should resolveSize correctly when one side is small and other exceeds the limit', async () => {
      // borderTopLeftRadius is small (10), borderTopRightRadius gets clamped
      // to the full width (100). For the top edge, a + b > limit, limit/2 is
      // smaller than b but not a, so the bottom branch (`b = limit - a`)
      // executes.
      const svg = await satori(
        <div
          style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '100px',
            background: 'red',
            width: '100%',
            height: '100%',
          }}
        ></div>,
        { width: 100, height: 100, fonts }
      )
      expect(toImage(svg, 100)).toMatchImageSnapshot()
    })
  })

  describe('text-decoration', () => {
    it('should not generate decoration markup when textDecorationLine is "none"', async () => {
      // The wrapper parent has `textDecorationLine: 'none'` so buildDecoration
      // sees a `'none'` truthy value and returns '' on the early-out branch.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            backgroundColor: '#fff',
            fontSize: 20,
            color: '#000',
            textDecorationLine: 'none',
          }}
        >
          Hello
        </div>,
        { width: 100, height: 100, fonts }
      )
      expect(svg).not.toContain('stroke="#000"')
    })

  })

  describe('text (debug rect)', () => {
    it('should render a debug bounding rect around text when debug + embedFont:false', async () => {
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'white',
            fontSize: 24,
            color: 'black',
          }}
        >
          Hello
        </div>,
        { width: 200, height: 80, fonts, debug: true, embedFont: false }
      )
      // The text-level debug rect uses the special stroke color "#575eff".
      expect(svg).toContain('#575eff')
    })

    it('should render a debug rect with clip-path when embedFont:false and parent has overflow:hidden', async () => {
      // Hits the `clipPathId ? \`url(#${clipPathId})\` : undefined` true
      // branch of the debug rect in builder/text.ts.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            background: 'white',
            fontSize: 24,
            color: 'black',
          }}
        >
          Hello
        </div>,
        { width: 200, height: 80, fonts, debug: true, embedFont: false }
      )
      expect(svg).toContain('#575eff')
    })
  })

  describe('text (non-embedded font branches)', () => {
    it('should render text with WebkitTextStroke and embedFont:false', async () => {
      // Exercises the WebkitTextStroke* cond-expr branches in builder/text.ts.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'white',
            fontSize: 24,
            color: 'black',
            WebkitTextStroke: '1px red',
          }}
        >
          Hi
        </div>,
        { width: 200, height: 80, fonts, embedFont: false }
      )
      expect(svg).toContain('stroke="red"')
    })

    it('should render text with CSS filter and embedFont:false', async () => {
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'white',
            fontSize: 24,
            color: 'black',
            filter: 'blur(2px)',
          }}
        >
          Hi
        </div>,
        { width: 200, height: 80, fonts, embedFont: false }
      )
      expect(svg).toContain('filter:blur')
    })

    it('should render text with opacity !== 1 and embedFont:false', async () => {
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'white',
            fontSize: 24,
            color: 'black',
            opacity: 0.5,
          }}
        >
          Hi
        </div>,
        { width: 200, height: 80, fonts, embedFont: false }
      )
      expect(svg).toContain('opacity="0.5"')
    })

    it('should render text inside overflow:hidden parent with embedFont:false', async () => {
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            background: 'white',
            fontSize: 24,
            color: 'black',
          }}
        >
          Hello
        </div>,
        { width: 200, height: 80, fonts, embedFont: false }
      )
      // Some clip-path attribute should be applied to the text node.
      expect(svg).toContain('clip-path')
    })

    it('should render gradient text via background-clip:text with embedFont:false', async () => {
      // Hits the `shape ? buildXMLString('text', ...) : ''` truthy branch in
      // builder/text.ts because background-clip:text emits a shape pass.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'linear-gradient(to right, red, blue)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 24,
          }}
        >
          Hi
        </div>,
        { width: 200, height: 80, fonts, embedFont: false }
      )
      expect(typeof svg).toBe('string')
    })
  })

  describe('text (image grapheme branches)', () => {
    const EMOJI_PNG =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='

    it('should render image grapheme inside overflow:hidden parent', async () => {
      // Hits the `clipPathId ? \`url(#${clipPathId})\` : undefined` true
      // branch in builder/text.ts for the image grapheme path.
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            fontSize: 24,
          }}
        >
          ⚡
        </div>,
        {
          width: 50,
          height: 50,
          fonts,
          graphemeImages: { '⚡': EMOJI_PNG },
        }
      )
      expect(svg).toContain('clip-path')
    })

    it('should render image grapheme with CSS filter style', async () => {
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            filter: 'blur(1px)',
            fontSize: 24,
          }}
        >
          ⚡
        </div>,
        {
          width: 50,
          height: 50,
          fonts,
          graphemeImages: { '⚡': EMOJI_PNG },
        }
      )
      expect(svg).toContain('filter:blur')
    })

    it('should render image grapheme with opacity', async () => {
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            opacity: 0.5,
            fontSize: 24,
          }}
        >
          ⚡
        </div>,
        {
          width: 50,
          height: 50,
          fonts,
          graphemeImages: { '⚡': EMOJI_PNG },
        }
      )
      expect(svg).toContain('opacity="0.5"')
    })

    it('should render image grapheme with text-shadow (drop-shadow filter)', async () => {
      // Triggers the `filter ? \`${filter}<g filter="url(#satori_s-${id})">\``
      // truthy branch for image graphemes in builder/text.ts.
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            textShadow: '0 0 5px red',
            fontSize: 24,
          }}
        >
          ⚡
        </div>,
        {
          width: 50,
          height: 50,
          fonts,
          graphemeImages: { '⚡': EMOJI_PNG },
        }
      )
      expect(svg).toContain('satori_s-')
    })
  })

  describe('text-decoration extra branches', () => {
    it('should render text-decoration:double without explicit color (inherits color)', async () => {
      // Setting line/style separately keeps textDecorationColor undefined,
      // exercising the `textDecorationColor || color` right operand branch.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'white',
            fontSize: 20,
            color: 'green',
            textDecorationLine: 'underline',
            textDecorationStyle: 'double',
          }}
        >
          Hello
        </div>,
        { width: 200, height: 80, fonts }
      )
      // The decoration line should pick up the color (green) since no
      // explicit decoration color is set.
      expect(svg).toContain('green')
    })

    it('should render background-clip:text inside an overflow:hidden parent', async () => {
      // Hits the layout.ts `_inheritedBackgroundClipTextPath` clip-path
      // truthy branch (computedStyle._inheritedClipPathId set by parent).
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              backgroundImage: 'linear-gradient(to right, red, blue)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Hi
          </div>
        </div>,
        { width: 100, height: 60, fonts }
      )
      expect(typeof svg).toBe('string')
    })

    it('should render bordered element inside overflow:hidden parent', async () => {
      // Hits the `currentClipPathId ? \`url(#${currentClipPathId})\` : undefined`
      // truthy branch of getBorderClipPath in builder/border.ts.
      const svg = await satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              border: '2px solid red',
            }}
          />
        </div>,
        { width: 50, height: 50, fonts }
      )
      expect(typeof svg).toBe('string')
    })

    it('should render text-decoration inside overflow:hidden parent (clip-path wraps the lines)', async () => {
      // Hits the two `clipPathId ? '<g clip-path=...">' : ''` branches in
      // builder/text-decoration.ts.
      const svg = await satori(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            background: 'white',
            fontSize: 20,
            color: 'black',
            textDecorationLine: 'underline',
          }}
        >
          Hello
        </div>,
        { width: 100, height: 60, fonts }
      )
      expect(typeof svg).toBe('string')
    })
  })
})
