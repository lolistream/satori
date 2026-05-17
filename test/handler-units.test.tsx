import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest'

import {
  asPointAutoPercentageLength,
  asPointPercentageLength,
  midline,
} from '../src/utils.js'
import { normalizeLocale } from '../src/language.js'
import {
  extractCustomProperties,
  mergeVariables,
  resolveVariables,
  resolveStyleVariables,
} from '../src/handler/variables.js'

describe('utils.ts pure helpers', () => {
  describe('asPointPercentageLength', () => {
    it('returns numbers as-is', () => {
      expect(asPointPercentageLength(42)).toBe(42)
    })
    it('returns formatted percentage strings', () => {
      expect(asPointPercentageLength('25%', 'width')).toBe('25%')
    })
    it('returns undefined on invalid percentage and warns', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const out = asPointPercentageLength('abc%', 'maxWidth')
      expect(out).toBeUndefined()
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
    it('returns undefined and warns on entirely invalid value', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const out = asPointPercentageLength('nonsense', 'minWidth')
      expect(out).toBeUndefined()
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
    it('warns without property name when omitted', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      asPointPercentageLength('nonsense')
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
  })

  describe('asPointAutoPercentageLength', () => {
    it('returns numbers as-is', () => {
      expect(asPointAutoPercentageLength(7)).toBe(7)
    })
    it('returns "auto" verbatim', () => {
      expect(asPointAutoPercentageLength('auto')).toBe('auto')
    })
    it('returns formatted percentage strings', () => {
      expect(asPointAutoPercentageLength('50%', 'flexBasis')).toBe('50%')
    })
    it('returns undefined on invalid percentage and warns', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const out = asPointAutoPercentageLength('NaN%', 'flexBasis')
      expect(out).toBeUndefined()
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
    it('returns undefined and warns on totally invalid value', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const out = asPointAutoPercentageLength('foobar', 'flexBasis')
      expect(out).toBeUndefined()
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
    it('warns without property name when omitted', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      asPointAutoPercentageLength('foobar')
      expect(warn).toHaveBeenCalled()
      warn.mockRestore()
    })
  })

  describe('midline', () => {
    it('converts camelCase to hyphenated', () => {
      expect(midline('backgroundColor')).toBe('background-color')
    })
    it('handles strings without capitals', () => {
      expect(midline('color')).toBe('color')
    })
    it('handles multiple capitals', () => {
      expect(midline('borderTopLeftRadius')).toBe('border-top-left-radius')
    })
  })
})

describe('language.ts normalizeLocale', () => {
  it('returns matching locale by prefix when input is set', () => {
    expect(normalizeLocale('ja')).toBe('ja-JP')
  })
  it('returns matching locale ignoring case', () => {
    expect(normalizeLocale('ZH-cn')).toBe('zh-CN')
  })
  it('returns undefined when no match', () => {
    expect(normalizeLocale('xx-XX')).toBeUndefined()
  })
  it('returns undefined when locale is not provided', () => {
    expect(normalizeLocale()).toBeUndefined()
  })
  it('returns undefined when empty string is provided', () => {
    expect(normalizeLocale('')).toBeUndefined()
  })
})

describe('handler/variables.ts', () => {
  it('extractCustomProperties returns variables and rest', () => {
    const { variables, remainingStyle } = extractCustomProperties({
      '--primary': 'red',
      color: 'blue',
    })
    expect(variables).toEqual({ '--primary': 'red' })
    expect(remainingStyle).toEqual({ color: 'blue' })
  })

  it('extractCustomProperties handles entirely-no-variable styles', () => {
    const { variables, remainingStyle } = extractCustomProperties({
      color: 'green',
      width: 100,
    })
    expect(variables).toEqual({})
    expect(remainingStyle).toEqual({ color: 'green', width: 100 })
  })

  it('mergeVariables overrides inherited with current', () => {
    expect(
      mergeVariables({ '--a': '1', '--b': '2' }, { '--b': 'B', '--c': '3' })
    ).toEqual({ '--a': '1', '--b': 'B', '--c': '3' })
  })

  it('resolveVariables returns numbers unchanged', () => {
    expect(resolveVariables(42 as any, {})).toBe(42)
  })

  it('resolveVariables returns strings without var() unchanged', () => {
    expect(resolveVariables('red', {})).toBe('red')
  })

  it('resolveVariables resolves basic var()', () => {
    expect(resolveVariables('var(--c)', { '--c': 'red' })).toBe('red')
  })

  it('resolveVariables falls back when undefined', () => {
    expect(resolveVariables('var(--c, blue)', {})).toBe('blue')
  })

  it('resolveVariables returns "initial" when var undefined and no fallback', () => {
    expect(resolveVariables('var(--missing)', {})).toBe('initial')
  })

  it('resolveVariables handles nested var() in declaration value', () => {
    expect(
      resolveVariables('var(--a)', { '--a': 'var(--b)', '--b': 'green' })
    ).toBe('green')
  })

  it('resolveVariables handles circular reference with fallback', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const out = resolveVariables('var(--a, gray)', {
      '--a': 'var(--a, gray)',
    })
    expect(out).toBe('gray')
    warn.mockRestore()
  })

  it('resolveVariables handles circular reference with no fallback', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const out = resolveVariables('var(--a)', {
      '--a': 'var(--a)',
    })
    expect(out).toBe('initial')
    warn.mockRestore()
  })

  it('resolveVariables handles empty var() (no nodes inside) and returns string', () => {
    // var() with no inner content is invalid - extractVarArgs returns null and the parser leaves it as-is
    const out = resolveVariables('var()', { '--x': 'red' })
    // The returned string should still be a string regardless (extractVarArgs return null path)
    expect(typeof out).toBe('string')
  })

  it('resolveVariables handles var() that begins with non-word (returns invalid)', () => {
    // `var( , red)` — first child is space then comma; varNameNode never set -> returns null
    const out = resolveVariables('var( , red)', {})
    expect(typeof out).toBe('string')
  })


  it('resolveStyleVariables resolves all properties', () => {
    const out = resolveStyleVariables(
      { background: 'var(--bg)', width: 100, color: 'var(--c, black)' },
      { '--bg': 'red' }
    )
    expect(out).toEqual({ background: 'red', width: 100, color: 'black' })
  })
})
