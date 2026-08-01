export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  id: "id",
};

export const localeOg: Record<Locale, string> = {
  en: "en_US",
  id: "id_ID",
};

export const localeDate: Record<Locale, string> = {
  en: "en-US",
  id: "id-ID",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
