'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

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
};

const TranslationContext = createContext({} as TranslationContextData);

export default function TranslationProvider({ children }: TranslationProvider) {
  const [currentTranslation, setCurrentTranslation] = useState<Language>(Language.ENG);

  return (
    <TranslationContext.Provider value={{ currentTranslation, setCurrentTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
