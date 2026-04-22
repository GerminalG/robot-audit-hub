/**
 * Lightweight i18n context.
 * Wrap the app in <LanguageProvider> and use useTranslation() in components.
 *
 * Persists the selected language in localStorage so it survives page reloads.
 */
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LANGUAGES, LanguageCode, translations, Dictionary } from "./translations";

const STORAGE_KEY = "scanos.language";
const DEFAULT_LANGUAGE: LanguageCode = "en";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isSupported = (value: string | null): value is LanguageCode =>
  !!value && LANGUAGES.some((l) => l.code === value);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(stored) ? stored : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useTranslation = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used inside <LanguageProvider>");
  return ctx;
};
