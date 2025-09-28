import React from 'react';
import { useAppContext } from '../context/AppContext';
import { GithubIcon } from './icons';

const Footer: React.FC = () => {
    const { texts } = useAppContext();

    return (
        <footer className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                </div>
                <p>{texts.footer.text}</p>
            </div>
        </footer>
    );
}

export default Footer;
