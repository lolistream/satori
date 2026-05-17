import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest'

import { initFonts } from './utils.js'

describe('utils.ts:191 (Intl.Segmenter unavailable)', () => {
  let originalSegmenter: typeof Intl.Segmenter | undefined

  beforeEach(() => {
    originalSegmenter = (Intl as any).Segmenter
  })

  afterEach(() => {
    // Restore in case the test mutated globals.
    if (originalSegmenter) {
      ;(Intl as any).Segmenter = originalSegmenter
    }
    vi.resetModules()
  })

  it('throws when Intl.Segmenter is missing', async () => {
    // Reset modules so the freshly imported utils.ts sees the stubbed Intl.
    vi.resetModules()
    delete (Intl as any).Segmenter

    // Dynamically import after stubbing.
    const utils = await import('../src/utils.js')
    expect(() => utils.segment('hello', 'grapheme')).toThrowError(
      /Intl\.Segmenter does not exist/
    )

    // Restore Segmenter so subsequent tests in this run still work.
    if (originalSegmenter) {
      ;(Intl as any).Segmenter = originalSegmenter
    }
  })
})

describe('transform-origin.ts:91 (postcss-value-parser throws)', () => {
  afterEach(() => {
    vi.resetModules()
    vi.doUnmock('postcss-value-parser')
  })

  it('returns {} when valueParser throws', async () => {
    vi.resetModules()
    vi.doMock('postcss-value-parser', () => {
      const mock = () => {
        throw new Error('forced throw for coverage')
      }
      // Provide stringify as well; some imports use it.
      ;(mock as any).stringify = () => ''
      return { default: mock }
    })

    const { default: parseTransformOrigin } = await import(
      '../src/transform-origin.js'
    )
    const result = parseTransformOrigin('top left', 16)
    expect(result).toEqual({})
  })
})

describe('variables.ts:138-141 (valueParser throws inside resolveVariables)', () => {
  afterEach(() => {
    vi.resetModules()
    vi.doUnmock('postcss-value-parser')
  })

  it('falls through to original value when parsing throws', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.resetModules()
    vi.doMock('postcss-value-parser', () => {
      const mock = () => {
        throw new Error('forced parse failure')
      }
      ;(mock as any).stringify = () => ''
      return { default: mock }
    })

    const { resolveVariables } = await import('../src/handler/variables.js')
    // Must contain `var(` to enter the try-block before the throw.
    const result = resolveVariables('var(--foo)', { '--foo': 'red' })
    expect(result).toBe('var(--foo)')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})

describe('image.ts: SVG dimension parsing edge cases', () => {
  // We hit the parseSvgImageSize branches by going through resolveImageData
  // with crafted data: URIs.
  it('parses an SVG with viewBox and width only (image.ts:122)', async () => {
    const { cache, resolveImageData } = await import('../src/handler/image.js')
    cache.clear()
    const svg = '<svg viewBox="0 0 200 100" width="50" xmlns="http://www.w3.org/2000/svg"></svg>'
    const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
    const result = await resolveImageData(dataUri)
    // [base64Src, width, height]
    expect(result.length).toBe(3)
    expect(result[1]).toBe(50)
    // height = width / ratio (200/100 = 2 → 50/2 = 25)
    expect(result[2]).toBe(25)
  })

  it('parses an SVG with viewBox and height only (image.ts:124)', async () => {
    const { cache, resolveImageData } = await import('../src/handler/image.js')
    cache.clear()
    const svg = '<svg viewBox="0 0 200 100" height="50" xmlns="http://www.w3.org/2000/svg"></svg>'
    const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
    const result = await resolveImageData(dataUri)
    expect(result.length).toBe(3)
    // width = height * ratio (200/100 = 2 → 50 * 2 = 100)
    expect(result[1]).toBe(100)
    expect(result[2]).toBe(50)
  })
})

describe('image.ts:180 (typeof window === "undefined" false branch)', () => {
  let originalWindow: any
  let originalFetch: any

  beforeEach(() => {
    originalWindow = (globalThis as any).window
    originalFetch = (globalThis as any).fetch
  })

  afterEach(() => {
    if (originalWindow === undefined) {
      delete (globalThis as any).window
    } else {
      ;(globalThis as any).window = originalWindow
    }
    if (originalFetch) {
      ;(globalThis as any).fetch = originalFetch
    } else {
      delete (globalThis as any).fetch
    }
  })

  it('allows relative URLs in a browser-like environment (window defined)', async () => {
    // Stub a global window and a fetch implementation so the relative URL
    // doesn't throw the absolute-URL error path.
    ;(globalThis as any).window = {} as any
    ;(globalThis as any).fetch = async () => {
      return {
        headers: {
          get: () => 'image/png',
        },
        arrayBuffer: async () => {
          const binary_string = atob(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
          )
          const bytes = new Uint8Array(binary_string.length)
          for (let i = 0; i < binary_string.length; i++)
            bytes[i] = binary_string.charCodeAt(i)
          return bytes.buffer
        },
      } as any
    }

    const { cache, inflightRequests, resolveImageData } = await import(
      '../src/handler/image.js'
    )
    cache.clear()
    inflightRequests.clear()
    // A relative URL would normally throw in node env, but with window
    // defined the absolute-URL check is skipped.
    const result = await resolveImageData('/relative-image.png')
    expect(result.length).toBeGreaterThan(0)
  })
})

describe('preprocess.ts edge branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('preProcessNode handles a node with no props (preprocess.ts:157)', async () => {
    // Manually craft a React-like element with no `props.children`.
    const { preProcessNode } = await import('../src/handler/preprocess.js')
    // A bare element with no children — the `else if (typeof _node === 'object')`
    // path runs but neither image nor img branch fires; then the children
    // walk falls through.
    const elt: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'div',
      props: {},
      key: null,
    }
    await preProcessNode(elt)
    // Nothing to assert beyond not throwing — covers the `else { /* nothing */ }`
    // branch.
    expect(true).toBe(true)
  })

  it('preProcessNode handles a falsy node early (preprocess.ts walk)', async () => {
    const { preProcessNode } = await import('../src/handler/preprocess.js')
    await preProcessNode(null as any)
    await preProcessNode(undefined as any)
    expect(true).toBe(true)
  })

  it('SVGNodeToImage handles an SVG node whose props is undefined (preprocess.ts:201)', async () => {
    const { SVGNodeToImage } = await import('../src/handler/preprocess.js')
    // Element without props — exercises `node.props || {}` fallback at L201.
    const elt: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'svg',
      // no `props` key
      key: null,
    }
    const out = await SVGNodeToImage(elt, 'black')
    expect(out.startsWith('data:image/svg+xml;utf8,')).toBe(true)
  })

  it('translateSVGNodeToSVGString handles an element with no props (preprocess.ts:116)', async () => {
    // Indirectly exercise it via SVGNodeToImage with a child that has no props.
    const { SVGNodeToImage } = await import('../src/handler/preprocess.js')
    const child: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'g',
      // no props on the inner element
      key: null,
    }
    const elt: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'svg',
      props: { children: child, width: 10, height: 10 },
      key: null,
    }
    const out = await SVGNodeToImage(elt, 'black')
    expect(out.startsWith('data:image/svg+xml;utf8,')).toBe(true)
  })

  it('translateSVGNodeToSVGString resolves <image> href via cache (preprocess.ts:126)', async () => {
    // Pre-populate the image cache so the href substitution path runs.
    const imageModule = await import('../src/handler/image.js')
    const dataUri =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
    imageModule.cache.clear()
    imageModule.cache.set('https://example.com/image-cached.png', [
      dataUri,
      1,
      1,
    ])

    const { SVGNodeToImage } = await import('../src/handler/preprocess.js')
    const img: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'image',
      props: { href: 'https://example.com/image-cached.png' },
      key: null,
    }
    const elt: any = {
      $$typeof: Symbol.for('react.element'),
      type: 'svg',
      props: { children: img, width: 10, height: 10 },
      key: null,
    }
    const out = await SVGNodeToImage(elt, 'black')
    expect(out.startsWith('data:image/svg+xml;utf8,')).toBe(true)
    imageModule.cache.clear()
  })
})

describe('layout.ts:127 (props || {} fallback)', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('renders an element returned from a function component with no props key', async () => {
    const satoriModule = await import('../src/index.js')
    // A function component whose return value has no `props` key. The custom
    // component bypasses preProcessNode (which only walks the wrapping
    // element); layout then destructures `props || {}` at line 127, hitting
    // the fallback branch. The render still throws later because other
    // sites destructure `props` directly — we only care about coverage of
    // the L127 branch here.
    const NoPropsComponent = (): any => ({
      $$typeof: Symbol.for('react.element'),
      type: 'div',
      key: null,
    })

    await expect(
      satoriModule.default(<NoPropsComponent />, {
        width: 100,
        height: 100,
        fonts,
      })
    ).rejects.toThrow()
  })
})
