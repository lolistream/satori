// This function guesses the human language (writing system) of the given
// JavaScript string, using the Unicode Alias in extended RegExp.
//
// You can learn more about this in:
// - https://en.wikipedia.org/wiki/Script_(Unicode)
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
// - https://unicode.org/reports/tr18/#General_Category_Property
// - https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values

import createEmojiRegex from 'emoji-regex-xs'

const emojiRegex = new RegExp(createEmojiRegex(), 'u')

// Supported languages. The order matters.
// Usually, this is only for "special cases" like CJKV languages as latin
// characters are usually included in the base font, and can be safely fallback
// to the Noto Sans font. A list of special cases we want to support can be
// found here (sort by popularity):
// - https://fonts.google.com/noto/fonts?sort=popularity&noto.query=sans
//
// We can't tell if a hanzi(kanji) is Chinese or Japanese by regular expressions.
// - https://unicode.org/faq/han_cjk.html

const specialCode = {
  emoji: emojiRegex,
  symbol:
    /[\u0024\u002B\u003C-\u003E\u005E\u0060\u007C\u007E\u00A2-\u00A6\u00A8\u00A9\u00AC\u00AE-\u00B1\u00B4\u00B8\u00D7\u00F7\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E80-\u2EFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]/,
  math: /[\u002B\u003C-\u003E\u007C\u007E\u00AC\u00B1\u00D7\u00F7\u2044\u2052\u207A-\u207C\u208A-\u208C\u2140-\u2144\u214B\u2190-\u22FF\u2308-\u230B\u237C\u239B-\u23B5\u23B7\u23DC-\u23E2\u27C0-\u27FF\u2900-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C]/,
} as const

const code = {
  'ja-JP':
    /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3400-\u4DBF\u3000\uFF00-\uFFEF]/,
  'ko-KR':
    /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/,
  'zh-CN': /[\u4E00-\u9FFF\u3400-\u4DBF\u2E80-\u2FFF\uF900-\uFAFF]/,
  'zh-TW': /[\u4E00-\u9FFF\u3400-\u4DBF\u2E80-\u2FFF\uF900-\uFAFF]/,
  'zh-HK': /[\u4E00-\u9FFF\u3400-\u4DBF\u2E80-\u2FFF\uF900-\uFAFF]/,
  'th-TH': /[\u0E00-\u0E7F]/,
  'bn-IN': /[\u0980-\u09FF]/,
  'ar-AR':
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
  'ta-IN': /[\u0B80-\u0BFF]/,
  'ml-IN': /[\u0D00-\u0D7F]/,
  'he-IL': /[\u0590-\u05FF\uFB1D-\uFB4F]/,
  'te-IN': /[\u0C00-\u0C7F]/,
  devanagari: /[\u0900-\u097F\uA8E0-\uA8FF]/,
  kannada: /[\u0C80-\u0CFF]/,
} as const

type SpecialCodeKey = keyof typeof specialCode
type CodeKey = keyof typeof specialCode | keyof typeof code
export type Locale = keyof typeof code
export type LangCode = CodeKey | 'unknown'

export const locales = Object.keys({ ...code, ...specialCode }) as Locale[]
export function isValidLocale(x: any): x is Locale {
  return locales.includes(x)
}

export function detectLanguageCode(
  segment: string,
  locale?: Locale
): Array<Locale> | ['unknown'] | [SpecialCodeKey] {
  for (const c of Object.keys(specialCode) as SpecialCodeKey[]) {
    if (specialCode[c].test(segment)) {
      return [c]
    }
  }

  const languages = Object.keys(code).filter((lang) =>
    code[lang].test(segment)
  ) as Locale[]

  if (languages.length === 0) {
    return ['unknown']
  }

  if (locale) {
    const index = languages.findIndex((lang) => lang === locale)
    if (index !== -1) {
      languages.splice(index, 1)
      languages.unshift(locale)
    }
  }

  return languages
}

export function normalizeLocale(locale?: string): Locale | undefined {
  if (locale) {
    return locales.find((l) => l.toLowerCase().startsWith(locale.toLowerCase()))
  }
}
