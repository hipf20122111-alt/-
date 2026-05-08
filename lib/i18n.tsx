"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { translations, type Lang, type TranslationDict } from "./translations";

interface I18nContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: TranslationDict;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("tharwa.lang") as Lang | null)
        : null;
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("tharwa.lang", lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === "en" ? "ar" : "en")),
    []
  );

  return (
    <I18nContext.Provider
      value={{
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        t: translations[lang] as TranslationDict,
        toggle,
        setLang,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
