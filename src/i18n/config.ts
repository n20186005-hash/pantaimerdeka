export const locales = {
  ms: { label: 'Bahasa Melayu', code: 'ms', path: '/' },
  en: { label: 'English', code: 'en', path: '/en/' },
  zh: { label: '中文', code: 'zh', path: '/zh/' }
} as const;

export type LocaleKey = keyof typeof locales;
export const defaultLocale: LocaleKey = 'ms';
