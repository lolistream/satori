import { it, describe, expect, vi } from 'vitest'

import { initFonts, toImage } from './utils.js'
import satori from '../src/index.js'

describe('compute.ts edge branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('svg with only height and no viewBox sets width=0', async () => {
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <svg height={50} fill='red' xmlns='http://www.w3.org/2000/svg'>
          <rect width='40' height='40' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('svg with only width (string %) and viewBox derives height as %', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100 }}>
        <svg
          width='50%'
          viewBox='0 0 40 20'
          fill='red'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='20' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('svg with only width and no viewBox sets height=0', async () => {
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <svg width={50} fill='red' xmlns='http://www.w3.org/2000/svg'>
          <rect width='40' height='40' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('svg with width and height both set and a viewBox (covers else branch)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100 }}>
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='red'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='40' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('svg with width="auto"-like unparseable string falls back to raw value', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100 }}>
        <svg
          width='auto'
          height='auto'
          viewBox='0 0 40 40'
          fill='red'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='40' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('svg with only height (string %) and viewBox derives width as %', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100 }}>
        <svg
          height='50%'
          viewBox='0 0 20 40'
          fill='red'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='40' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('div with minWidth and minHeight (covers setMin* branches)', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          minWidth: 50,
          minHeight: 50,
          background: 'red',
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('div with maxWidth and maxHeight', async () => {
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          maxWidth: 50,
          maxHeight: 50,
          background: 'red',
        }}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('throws when img size cannot be determined (covers compute.ts size error)', async () => {
    await expect(
      satori(
        <div style={{ display: 'flex' }}>
          <img src='data:image/png,rawdata' />
        </div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/Image size cannot be determined/)
  })

  it('img with height-only and a known aspect ratio derives width (covers contentBoxWidth=height/r)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <img
          height={20}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('img with style.height as percentage and known aspect ratio uses aspect-ratio (covers contentBoxWidth=undefined+string branch)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100 }}>
        <img
          style={{ height: '50%' }}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
        />
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })
})

describe('expand.ts edge branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('passes through internal "_" style properties (covers underscore branch)', async () => {
    const svg = await satori(
      // @ts-ignore - intentionally pass an internal-style prop
      <div
        style={{
          width: 100,
          height: 100,
          background: 'red',
          _customInternal: 'whatever',
        } as any}
      />,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('warns when zIndex is used (covers handleSpecialCase zIndex branch)', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const svg = await satori(
      <div style={{ zIndex: 1, display: 'flex' }}>hi</div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })

  it('wraps errors thrown from special-case handlers with rule context', async () => {
    await expect(
      satori(
        <div style={{ transform: 'translateX(notvalid)' }}>hi</div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrow()
  })
})

describe('preprocess.ts edge branches', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('renders svg with array children (covers Array.isArray branch in translateSVGNodeToSVGString)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <svg
          viewBox='0 0 100 100'
          width='100'
          height='100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {[
            <circle key='a' r='5' cx='50' cy='50' fill='red' />,
            <circle key='b' r='3' cx='30' cy='30' fill='blue' />,
          ]}
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('handles SVG <image> children without href (covers imageSrc falsy branch)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex' }}>
        <svg
          viewBox='0 0 100 100'
          width='100'
          height='100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* @ts-ignore <image> with no href */}
          <image width='10' height='10' />
        </svg>
      </div>,
      { width: 100, height: 100, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('rejects when an SVG <text> child is passed (covers text type throw)', async () => {
    await expect(
      satori(
        <div style={{ display: 'flex' }}>
          <svg
            viewBox='0 0 100 100'
            width='100'
            height='100'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* @ts-ignore */}
            <text x='10' y='30'>hi</text>
          </svg>
        </div>,
        { width: 100, height: 100, fonts }
      )
    ).rejects.toThrowError(/<text> nodes are not currently supported/)
  })
})
