import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Theme } from '../types';
import { SunIcon, MoonIcon, LanguageIcon, MenuIcon, CloseIcon } from './icons';

const Header: React.FC = () => {
  const { theme, toggleTheme, language, toggleLanguage, texts } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = texts.navLinks.map((link: {id: string, label: string}) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={() => setIsMenuOpen(false)}
      className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-colors text-2xl md:text-base"
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              A<span className="text-teal-500">.</span>K<span className="text-teal-500">.</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks}
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === Theme.Light ? <MoonIcon /> : <SunIcon />}
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 flex items-center space-x-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle language"
              >
                <LanguageIcon />
                <span className="font-bold text-sm">{language.toUpperCase()}</span>
              </button>
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-white dark:bg-gray-900 md:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav 
            className="flex flex-col items-center space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;