'use client';
import { ReactNode, createContext, useContext, useState } from 'react';
import englishData from '../data/english-site.json';
import portugueseData from '../data/portuguese-site.json';

type TranslationProvider = {
  children: ReactNode;
};

export enum Language {
  POR = 'POR',
  ENG = 'ENG',
}

type TranslationContextData = {
  currentTranslation: Language;
  setCurrentTranslation: (language: Language) => void;
  siteData: any;
};

const TranslationContext = createContext({} as TranslationContextData);

export default function TranslationProvider({ children }: TranslationProvider) {
  const [currentTranslation, setCurrentTranslation] = useState<Language>(Language.ENG);

  const siteData = currentTranslation === Language.ENG ? englishData : portugueseData;

  return (
    <TranslationContext.Provider value={{ currentTranslation, setCurrentTranslation, siteData }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
