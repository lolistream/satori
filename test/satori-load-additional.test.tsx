import { it, describe, expect, beforeAll } from 'vitest'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

import satori from '../src/index.js'

let fonts: any[]

beforeAll(async () => {
  const fontPath = join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
  const fontData = await readFile(fontPath)
  fonts = [{ name: 'Roboto', data: fontData, weight: 400, style: 'normal' }]
})

describe('satori.loadAdditionalAsset variants', () => {
  it('accepts a single FontOptions object as the asset (covers fonts.push(asset))', async () => {
    const fontPath = join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
    const extraData = await readFile(fontPath)
    let calls = 0
    const svg = await satori(
      <div style={{ display: 'flex', fontSize: 20 }}>桜</div>,
      {
        width: 100,
        height: 100,
        fonts,
        loadAdditionalAsset: async (code, _segment) => {
          calls++
          return {
            name: 'ExtraFont',
            data: extraData,
            weight: 400,
            style: 'normal',
            lang: code === 'unknown' ? undefined : (code.split('|')[0] as any),
          } as any
        },
      }
    )
    expect(typeof svg).toBe('string')
    expect(calls).toBeGreaterThan(0)
  })

  it('accepts an array of FontOptions as the asset (covers fonts.push(...asset))', async () => {
    const fontPath = join(process.cwd(), 'test', 'assets', 'Roboto-Regular.ttf')
    const extraData = await readFile(fontPath)
    const svg = await satori(
      <div style={{ display: 'flex', fontSize: 20 }}>桜</div>,
      {
        width: 100,
        height: 100,
        fonts,
        loadAdditionalAsset: async (code, _segment) => {
          return [
            {
              name: 'ExtraFontArr',
              data: extraData,
              weight: 400,
              style: 'normal',
              lang: code === 'unknown' ? undefined : (code.split('|')[0] as any),
            },
          ] as any
        },
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('accepts a null/undefined asset (covers the falsy branch)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', fontSize: 20 }}>桜</div>,
      {
        width: 100,
        height: 100,
        fonts,
        loadAdditionalAsset: async () => {
          return null as any
        },
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('accepts a string asset (image)', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', fontSize: 20 }}>桜</div>,
      {
        width: 100,
        height: 100,
        fonts,
        loadAdditionalAsset: async () => {
          return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
        },
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('renders without crashing when lang is set (covers locale + getLangFromFontName indirectly)', async () => {
    const svg = await satori(
      <div lang='ja' style={{ display: 'flex', fontSize: 20 }}>
        ja text
      </div>,
      {
        width: 100,
        height: 100,
        fonts,
      }
    )
    expect(typeof svg).toBe('string')
  })

  it('renders with point scale factor option', async () => {
    const svg = await satori(
      <div style={{ display: 'flex', width: 100, height: 100, background: 'red' }} />,
      {
        width: 100,
        height: 100,
        fonts,
        pointScaleFactor: 2,
      }
    )
    expect(typeof svg).toBe('string')
  })
})
