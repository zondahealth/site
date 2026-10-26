export const supportedLocales = ["es", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "es";

// DECISIÓN I18N-1: el switch ES/EN queda oculto hasta que existan traducciones.
export const englishLocaleEnabled =
  process.env.NEXT_PUBLIC_ENABLE_EN === "true";
export const localeCookieName = "zonda-locale";
export const localeStorageKey = "zonda-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getSupportedLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
