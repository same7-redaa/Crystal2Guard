import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { en } from './locales/en';
import { ar } from './locales/ar';

type Translations = typeof en;
type Language = 'en' | 'ar';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations, subkey?: any, subkey2?: any) => string;
}

const translations = { en, ar };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: keyof Translations, subkey: any = undefined, subkey2: any = undefined): string => {
    const dictionary = translations[language];
    if (subkey2 !== undefined) {
      return (dictionary[key] as any)?.[subkey]?.[subkey2] || `${key}.${subkey}.${subkey2}`;
    }
    if (subkey !== undefined) {
      return (dictionary[key] as any)?.[subkey] || `${key}.${subkey}`;
    }
    return (dictionary[key] as any) || key;
  };
  

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
