'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import enMessages from '../../messages/en.json';
import esMessages from '../../messages/es.json';
import {
  defaultLocale,
  isLocale,
  Locale,
  localeCookieName,
  localeStorageKey,
  supportedLocales,
} from '../lib/locale';

const dictionaries = {
  en: enMessages,
  es: esMessages,
};

type Messages = typeof esMessages;
type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  raw: <T = unknown>(path: string) => T;
  t: (path: string) => string;
  forceLightHeader: boolean;
  setForceLightHeader: (value: boolean) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readPath(messages: Messages, path: string) {
  return path
    .split('.')
    .reduce<unknown>(
      (current, key) =>
        current && typeof current === 'object'
          ? (current as Record<string, unknown>)[key]
          : undefined,
      messages
    );
}

function readString(messages: Messages, path: string) {
  const value = readPath(messages, path);
  return typeof value === 'string' ? value : path;
}

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [forceLightHeader, setForceLightHeader] = useState(false);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    if (isLocale(storedLocale)) {
      setLocaleState(storedLocale);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      window.localStorage.setItem(localeStorageKey, nextLocale);
      document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = nextLocale;
    };

    return {
      locale,
      raw: <T = unknown,>(path: string) =>
        readPath(dictionaries[locale], path) as T,
      setLocale,
      t: (path: string) => readString(dictionaries[locale], path),
      forceLightHeader,
      setForceLightHeader,
    };
  }, [locale, forceLightHeader]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
