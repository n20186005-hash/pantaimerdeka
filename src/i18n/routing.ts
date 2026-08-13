import type { LocaleKey } from './config';
import { locales, defaultLocale } from './config';

export type LegalPageKind = 'privacy' | 'terms' | 'cookies';

const PATH_MAP: Record<LocaleKey, Record<LegalPageKind, string>> = {
  ms: { privacy: '/privasi/', terms: '/terma/', cookies: '/kuki/' },
  en: { privacy: '/en/privacy/', terms: '/en/terms/', cookies: '/en/cookies/' },
  zh: { privacy: '/zh/privacy/', terms: '/zh/terms/', cookies: '/zh/cookies/' }
};

export function legalPagePath(locale: LocaleKey, kind: LegalPageKind): string {
  return PATH_MAP[locale][kind];
}

export function getLocaleFromPath(pathname: string): LocaleKey {
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean.startsWith('/en')) return 'en';
  if (clean.startsWith('/zh')) return 'zh';
  return defaultLocale;
}

export function localizePath(pathname: string, target: LocaleKey): string {
  const hashIdx = pathname.indexOf('#');
  const hash = hashIdx >= 0 ? pathname.slice(hashIdx) : '';
  const pre = hashIdx >= 0 ? pathname.slice(0, hashIdx) : pathname;
  const base = pre.replace(/\/index\.html?$/, '/').replace(/[^/]$/, '$&/');
  const withoutLocale = base.replace(/^\/(en|zh)\//, '/');
  const localized = target === defaultLocale ? withoutLocale : `/${target}${withoutLocale === '/' ? '/' : withoutLocale}`;
  return `${localized}${hash}`;
}

export function hreflangEntries(pathname: string, site?: URL, legal?: LegalPageKind) {
  const entries: { code: string; href: string }[] = [];
  for (const key of Object.keys(locales) as LocaleKey[]) {
    const href = legal ? legalPagePath(key, legal) : localizePath(pathname, key);
    entries.push({
      code: key === 'zh' ? 'zh-Hans' : key,
      href: site ? new URL(href, site).toString() : href
    });
  }
  const xDefault = legal ? legalPagePath(defaultLocale, legal) : localizePath(pathname, defaultLocale);
  entries.push({
    code: 'x-default',
    href: site ? new URL(xDefault, site).toString() : xDefault
  });
  return entries;
}
