import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { Language } from '../types.ts';

interface AppContextType {
  language: Language;
  toggleLanguage: () => void;
  texts: any;
}

const AppContext = createContext<AppContextType | null>(null);

import { translations } from '../constants.ts';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || Language.TR;
    }
    return Language.TR;
  });
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === Language.TR ? Language.EN : Language.TR));
  }, []);

  const texts = translations[language];

  return (
    <AppContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
