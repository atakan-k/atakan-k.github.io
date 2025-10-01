import React from 'react';
import { useAppContext } from '../context/AppContext.tsx';
import { LanguageIcon, MenuIcon } from './icons.tsx';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { language, toggleLanguage } = useAppContext();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
           <button 
            onClick={onMenuClick}
            className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
            aria-label="Open project menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          
          <a href="/" className="text-2xl font-bold text-white transition-colors">
            A<span className="text-teal-500">T</span>K
          </a>

          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="p-2 flex items-center space-x-1 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <LanguageIcon />
              <span className="font-bold text-sm">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
