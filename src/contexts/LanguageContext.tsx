'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en, { type EnTranslations } from '@/translations/en';
import zh from '@/translations/zh';
import ja from '@/translations/ja';
import ko from '@/translations/ko';
import ms from '@/translations/ms';

export type Lang = 'en' | 'zh' | 'ja' | 'ko' | 'ms';
export type Translations = EnTranslations;

const translations = { en, zh, ja, ko, ms } as const;

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('cofreth-lang') as Lang | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('cofreth-lang', l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
