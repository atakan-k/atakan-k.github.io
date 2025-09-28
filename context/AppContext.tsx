import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { Theme, Language } from '../types';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  texts: any;
}

const AppContext = createContext<AppContextType | null>(null);

import { translations } from '../constants';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || Theme.Dark;
    }
    return Theme.Dark;
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || Language.TR;
    }
    return Language.TR;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.Dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === Language.TR ? Language.EN : Language.TR));
  }, []);

  const texts = translations[language];

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, texts }}>
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
