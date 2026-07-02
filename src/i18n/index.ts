import { defaultLocale, isLocale, locales, type Locale } from './config';
import en from './locales/en';
import ja from './locales/ja';
import ko from './locales/ko';
import type { Translations } from './types';

const translations: Record<Locale, Translations> = { ko, en, ja };

export function getTranslations(lang: string): Translations {
  return translations[isLocale(lang) ? lang : defaultLocale];
}

export function getStaticLangPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export function localizedPath(lang: Locale, path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (normalized === '/') {
    return `/${lang}/`;
  }

  return `/${lang}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

export function switchLocalePath(currentPath: string, newLocale: Locale): string {
  const segments = currentPath.split('/').filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = newLocale;
  } else {
    segments.unshift(newLocale);
  }

  const nextPath = `/${segments.join('/')}`;
  return currentPath.endsWith('/') && !nextPath.endsWith('/') ? `${nextPath}/` : nextPath;
}

export function localizeProjectHref(lang: Locale, href: string): string {
  if (href.startsWith('http')) {
    return href;
  }

  if (href === '/') {
    return localizedPath(lang, '/');
  }

  return localizedPath(lang, href);
}

export {
  locales,
  defaultLocale,
  isLocale,
  dateLocales,
  htmlLang,
  localeFonts,
  localeLabels
} from './config';
export type { Locale, Translations };
