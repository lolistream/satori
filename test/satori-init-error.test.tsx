import { it, describe, expect, vi } from 'vitest'

// This test isolates a module re-import with `getYoga` mocked to return null
// so we can drive satori.ts's "Satori is not initialized" error.
describe('satori initialization', () => {
  it('throws when getYoga returns no Yoga instance', async () => {
    vi.resetModules()
    vi.doMock('../src/yoga.js', async () => {
      return {
        getYoga: async () => null,
      }
    })
    try {
      const { default: satori } = await import('../src/satori.js')
      await expect(
        satori(<div />, { width: 100, height: 100, fonts: [] })
      ).rejects.toThrowError(/Satori is not initialized/)
    } finally {
      vi.doUnmock('../src/yoga.js')
      vi.resetModules()
    }
  })
})
