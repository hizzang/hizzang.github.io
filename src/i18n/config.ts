export const locales = ['ko', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

export const localeLabels: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語'
};

export const htmlLang: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
  ja: 'ja'
};

export const dateLocales: Record<Locale, string> = {
  ko: 'ko-KR',
  en: 'en-US',
  ja: 'ja-JP'
};

export const localeFonts: Record<
  Locale,
  { family: string; googleFonts: string }
> = {
  ko: {
    family: '"Noto Sans KR", "Apple SD Gothic Neo", sans-serif',
    googleFonts:
      'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700&display=swap'
  },
  en: {
    family: '"Inter", "Helvetica Neue", helvetica, arial, sans-serif',
    googleFonts:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
  },
  ja: {
    family: '"Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
    googleFonts:
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700&display=swap'
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
