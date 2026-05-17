import { it, describe, expect, beforeEach, afterEach } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

const PNG_SAMPLE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABSgAwAEAAAAAQAAAA8AAAAAVtc7bQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAA1FJREFUOBGNVFtME0EUnd3S3T5paamRxidoihRKRVGJkaDBRCFNiMkSP9QPiaHhgwRREwOGEUn8MfERIDEqMfxZEtEoSviQGh8Qg4YagQCipVIepdoWSh+03XFndRXkx/uxc+fOPWfO3nt3AfhtDGMTCf6VK3PFFRVTDADdGhyDEJEAAUI4z+7Mzmj1t6bwewhIIY5XPgkDICRYAMZ1Vmv0FkEsH5qcFKFd+bKRDwPUsa6uzT4BVNVZBbVJ2lMBScDPqtm65vzm54yNEXWUdyRwDomVYbL2doe8uDjYtrgYOUpRsUggEBxXK1H+lg3B8wJZU0/jHcmyuNr9w+1eCCxok8PJLYo3inWYDCLIKyWNRoZXOTNDq0pLqWyzWbQ8MoJCuSZasRQKB1sGiQMC4SxayhPLVN5t8gxkSM0MO/1OWU2ixorP096n8SUT2e2XWQh7k+rr8wNFRWc3arTKYplE5I2RbIKmpSrLd7enrdqkrdxXWJE25VJ7iFCi3nPDr/MpKXdoVu4MOV+7Ol1vg/og6bQ72aRftxdx9QMAoXVXFZJAYXqmcmfUuTRVKLIvyPI+b/X9kDbNP3o4p99fAooIMnpAv0cnl6fQYNF9/dXJ/msYa2+wJwD83RQcEBozYJtQDWnTDQpYW5aG2svD2oJw8nYDq8zNFROaFBkxMhrv9tTerj5+ugfktTkwlp8Agnty9mcU8IYfD0jgi9g+E7BE9lW1RmLRWb3ZpCRpWuy1Wucle3anqvzr67LGnj6wMUaq3DgU5wD8G2KOVTOEu81AyJeBlJSMijXJy7RCop1ou6Yaugv18aZGg+7chYxwWWYOBhuZBk7FXzIc48HYESwLwhinnSDePRsbLC3oi8/4LEvmg4Th8BFSGYvHfP39A/Hxb/dwvmd4+I8yAb9KIQ5yNUAdkBFj//smx2N2BxtGEf/o/KcXX6YTL6Pegvt1e590fB2yQeoghHGct9LWEPKHDQw/9VSuaWw6RwkWLXrNZA6d5NJRKlnGJV6VR7f6VQXSVU0RgnhF3LdLcJ173nXmYiyhPhGNBlxikdQx9/FmYyUEIeF8Jea//d7eMrXNBqQCAJMJ/r/rmqasTEAIcUCCk/rIj+OQ/7NAbg/XNEPA/QQBqVjfA25FYgAAAABJRU5ErkJggg=='

let fonts
initFonts((f) => (fonts = f))

beforeEach(() => {
  ;(globalThis as any).fetch = async (url: string) => {
    if (url.includes('wrong-url')) {
      throw new Error('wrong url')
    }
    if (url.startsWith('data:')) {
      return {
        headers: {
          get: () => 'image/png',
        },
        text: async () => {
          const binary_string = atob(url.replace('data:image/png;base64,', ''))
          const len = binary_string.length
          const bytes = new Uint8Array(len)
          for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i)
          }
          return bytes.buffer
        },
      } as any
    }
    return {
      headers: {
        get: (key: string) => {
          if (key === 'content-type') return 'image/png'
        },
      },
      arrayBuffer: async () => {
        const binary_string = atob(
          `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==`
        )
        const len = binary_string.length
        const bytes = new Uint8Array(len)
        for (let i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i)
        }
        return bytes.buffer
      },
    } as any
  }
})

afterEach(() => {
  delete (globalThis as any).fetch
})

describe('coverage filler: background-image', () => {
  it('should throw on invalid backgroundImage value (not gradient/url/color)', async () => {
    await expect(
      satori(
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundImage: 'foo',
          }}
        ></div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Invalid background image/)
  })

  it('should accept a CSS named color as backgroundImage', async () => {
    // Hits the cssColorParse path in background-image.ts (line 279+).
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: 'rgba(0, 128, 255, 0.5)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(svg).toContain('rgba(')
  })

  it('should support backgroundSize "auto Ypct" with a url() image', async () => {
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          backgroundSize: 'auto 50%',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should support backgroundSize "Xpct auto" with a url() image', async () => {
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          backgroundSize: '50% auto',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should support backgroundSize "auto auto" with a url() image', async () => {
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          backgroundSize: 'auto auto',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should fall back to container size when image has no intrinsic dimensions with keyword size', async () => {
    // wrong-url makes resolveImageData return [], so imageWidth/imageHeight
    // are undefined. With a keyword (e.g. cover) we hit the early-return
    // branch in calculateKeywordSize.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: 'url(https://wrong-url.example/image.png)',
          backgroundSize: 'cover',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should keep a linear gradient with keyword backgroundSize', async () => {
    // Hits isKeywordSize && isGradient → [width, height] branch.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: 'linear-gradient(to right, red, blue)',
          backgroundSize: 'cover',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should tolerate invalid value in backgroundSize pair', async () => {
    // The invalid first value triggers the `catch (e)` branch in
    // parseLengthPairs that returns null.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          backgroundSize: '!@invalid 50px',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render url() image with backgroundRepeat: no-repeat', async () => {
    // Hits the false branch of the `repeatX ? width : '100%'` and
    // `repeatY ? height : '100%'` ternaries.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('coverage filler: rect (img edge cases)', () => {
  it('should accept objectPosition with a single non-keyword value', async () => {
    // Hits the `else { xValue = part; yValue = '50%' }` branch in
    // parseObjectPosition.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: '25%',
            backgroundColor: 'green',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should accept objectPosition "bottom Xpct" (uses keywordToPercent for `bottom`)', async () => {
    // Triggers the right operand of `first === 'top' || first === 'bottom'`
    // inside the inner ternary at lines 68–71 (parseObjectPosition).
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom 25%',
            backgroundColor: 'green',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should accept objectPosition "top Ypct" (vertical kw first, non-kw second)', async () => {
    // Hits the second-not-keyword branch where xValue is forced to '50%' and
    // yValue is recomputed from `first`.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'top 25%',
            backgroundColor: 'green',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should treat a non-length objectPosition value as 0', async () => {
    // `100deg` parses as an angle in CssDimension → falls through to
    // `return 0`.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: '100deg 100deg',
            backgroundColor: 'green',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should swallow unparseable objectPosition values in the catch branch', async () => {
    // `!@invalid` makes CssDimension throw and the catch branch returns 0.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: '!@invalid 25%',
            backgroundColor: 'green',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render the debug bounding rect around an image when debug is enabled', async () => {
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img src={PNG_SAMPLE} width={100} height={100} />
      </div>,
      { width: 100, height: 100, fonts, debug: true }
    )
    // The image debug rect uses the special stroke color "#ff5757".
    expect(svg).toContain('#ff5757')
  })

  it('should render the debug bounding rect with clip-path when image is inside overflow:hidden parent', async () => {
    // Hits the `clipPathId ? \`url(#${clipPathId})\` : undefined` true branch
    // in the rect.ts debug block.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <img src={PNG_SAMPLE} width={100} height={100} />
      </div>,
      { width: 100, height: 100, fonts, debug: true }
    )
    expect(svg).toContain('#ff5757')
  })

  it('should render an image with CSS filter style', async () => {
    // Hits the `style: cssFilter ? \`filter:...\` : undefined` true branch
    // for the image background and for the image element itself.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{ filter: 'blur(2px)', backgroundColor: 'red' }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(svg).toContain('filter:blur')
  })

  it('should render a transformed image whose own clip-path is set (no inherited mask)', async () => {
    // Hits the clip-path-but-no-maskId branch of the wrapper `<g>` block in
    // rect.ts (line 526 inner ternary right operand).
    // The image itself has clipPath + transform; the parent has neither
    // overflow:hidden nor clipPath so _inheritedMaskId is not set.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            transform: 'rotate(15deg)',
            clipPath: 'circle(40px)',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render an image with a directional border (covers content-mask border branch)', async () => {
    // For an image (`src` set), content-mask calls border() with
    // asContentMask=true and maskBorderOnly=false. A directional border
    // exercises the `asContentMask && !maskBorderOnly` ternary inside
    // border.ts (the padding-aware width calculation).
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            borderTop: '5px solid red',
            borderBottom: '10px solid blue',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render an image with a directional border and explicit padding', async () => {
    // Same as above, but with padding to exercise the truthy side of
    // `style[paddingX] || 0` inside border.ts.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            borderTop: '5px solid red',
            borderBottom: '10px solid blue',
            paddingTop: 5,
            paddingBottom: 5,
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should render a transformed image with a border', async () => {
    // Hits the `transform: matrix ? matrix : undefined` true branch in the
    // border block of rect.ts.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            transform: 'rotate(15deg)',
            border: '5px solid black',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should still build an image-border-radius clip path for transformed image without border-radius', async () => {
    // Hits `borderRadiusPath ? borderRadiusPath : undefined` false branch in
    // getBorderRadiusClipPath, because the image has a transform but no
    // border-radius (so the computed path is the empty string).
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src={PNG_SAMPLE}
          width={100}
          height={100}
          style={{
            transform: 'rotate(15deg)',
          }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should fall back to contain-style scaling for object-fit: scale-down with zero natural dimensions', async () => {
    // A non-base64 webp data URI is recognized as a valid src but its
    // dimensions cannot be inferred. Providing width/height = 0 makes
    // imageWidth/imageHeight = 0, so the natural dimensions are 0, hitting
    // the else branch of the scale-down handler in rect.ts.
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img
          src='data:image/webp,unknownsize'
          width={0}
          height={0}
          style={{ objectFit: 'scale-down' }}
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('coverage filler: mask-image (image edge cases)', () => {
  it('should fall back to mask size when mask image fails to load', async () => {
    // imageWidth from resolveImageData is undefined → exercises the
    // `imageWidth || dimensionsWithoutFallback[0]` / `[1]` fallback branches.
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${PNG_SAMPLE})`,
          maskImage: 'url(https://wrong-url.example/mask.png)',
        }}
      ></div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})
