import { it, describe, expect, beforeEach, vi } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('tailwind handler unit', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('createTw without config', async () => {
    const { default: getTw } = await import('../src/handler/tailwind.js')
    const tw = getTw({ width: 100, height: 100 })
    expect(typeof tw).toBe('function')

    const reused = getTw({ width: 200, height: 50 })
    expect(reused).toBe(tw)

    const styles = tw(['shadow-md'] as any)
    expect(styles).toBeTruthy()
  })

  it('createTw with config containing plugins', async () => {
    const { default: getTw } = await import('../src/handler/tailwind.js')
    const tw = getTw({
      width: 100,
      height: 100,
      config: {
        plugins: [
          {
            handler: () => {
              // no-op user plugin
            },
          } as any,
        ],
      },
    })
    expect(typeof tw).toBe('function')
  })

  it('createTw with config without plugins', async () => {
    const { default: getTw } = await import('../src/handler/tailwind.js')
    const tw = getTw({
      width: 100,
      height: 100,
      config: {} as any,
    })
    expect(typeof tw).toBe('function')
  })

  it('all default shadow presets are addressable', async () => {
    const { default: getTw } = await import('../src/handler/tailwind.js')
    const tw = getTw({ width: 100, height: 100 })

    for (const cls of [
      'shadow-sm',
      'shadow',
      'shadow-md',
      'shadow-lg',
      'shadow-xl',
      'shadow-2xl',
      'shadow-inner',
      'shadow-none',
    ]) {
      const out = tw([cls] as any)
      expect(out).toBeTruthy()
    }
  })
})

describe('tailwind via satori (integration)', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('renders with tw class names and shadow preset (covers getTwStyles)', async () => {
    const svg = await satori(
      <div
        tw='shadow-md text-lg leading-loose'
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          background: 'white',
        }}
      >
        hi
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
    expect(svg).toContain('<svg')
  })

  it('renders with tailwindConfig provided', async () => {
    const svg = await satori(
      <div
        tw='bg-red-500 text-white'
        style={{ width: 100, height: 100, display: 'flex' }}
      >
        hi
      </div>,
      {
        width: 100,
        height: 100,
        fonts,
        tailwindConfig: {
          theme: {
            extend: {
              colors: {
                'brand-blue': '#1d4ed8',
              },
            },
          },
        } as any,
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('renders shadow-* class through satori to exercise shadowColor branch', async () => {
    const svg = await satori(
      <div
        tw='shadow-lg'
        style={{
          width: 60,
          height: 60,
          display: 'flex',
          background: 'white',
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('combines shadow preset and shadow color (covers shadowColor + boxShadow replace branch)', async () => {
    // tw="shadow-md shadow-red-500" yields both `boxShadow` (a rgba string)
    // and `shadowColor` ("#ef4444"). The satori getTwStyles callback then
    // replaces the rgba(...) part of boxShadow with shadowColor.
    const svg = await satori(
      <div
        tw='shadow-md shadow-red-500'
        style={{
          width: 60,
          height: 60,
          display: 'flex',
          background: 'white',
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})
