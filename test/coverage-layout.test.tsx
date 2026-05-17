import React from 'react'
import { it, describe, expect } from 'vitest'

import { initFonts } from './utils.js'
import satori from '../src/index.js'

describe('coverage filler: layout', () => {
  let fonts
  initFonts((f) => (fonts = f))

  it('should accept a function component that returns null', async () => {
    // A function component returning null recurses into layout() with
    // element === null, hitting the early-return branch.
    function Nothing() {
      return null as any
    }
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        {/* @ts-expect-error Nothing returns null */}
        <Nothing />
      </div>,
      { width: 50, height: 50, fonts }
    )
    expect(typeof svg).toBe('string')
  })

  it('should accept a null-returning component combined with loadAdditionalAsset', async () => {
    // Hits the `... || []` right operand at layout.ts line 206, where the
    // inner generator yields undefined.
    function Nothing() {
      return null as any
    }
    const svg = await satori(
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        {/* @ts-expect-error Nothing returns null */}
        <Nothing />
      </div>,
      {
        width: 50,
        height: 50,
        fonts,
        loadAdditionalAsset: async () => '',
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('should throw when a class component is rendered', async () => {
    // React class component path → throws "Class component is not supported."
    class Klass extends (React as any).Component {
      render() {
        return <div>hi</div>
      }
    }
    await expect(
      satori(
        <div style={{ display: 'flex' }}>
          <Klass />
        </div>,
        { width: 50, height: 50, fonts }
      )
    ).rejects.toThrowError('Class component is not supported.')
  })

  it('should throw when dangerouslySetInnerHTML is used', async () => {
    await expect(
      satori(
        // @ts-expect-error intentionally invalid usage
        <div
          style={{ display: 'flex' }}
          dangerouslySetInnerHTML={{ __html: '<b>x</b>' }}
        />,
        { width: 50, height: 50, fonts }
      )
    ).rejects.toThrowError(/dangerouslySetInnerHTML/)
  })
})
