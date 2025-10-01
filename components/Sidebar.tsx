import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.tsx';
import { projectsData, socialLinks } from '../constants.ts';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, CloseIcon } from './icons.tsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { language, texts } = useAppContext();
  const currentProjects = projectsData[language];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <aside className={`fixed top-0 left-0 h-full w-80 bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">{texts.sidebar.title}</h2>
                <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700" aria-label="Close menu">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <nav className="flex-grow p-6 overflow-y-auto">
                <ul className="space-y-4">
                    {currentProjects.map(project => (
                        <li key={project.id}>
                            <Link 
                                to={`/project/${project.id}`}
                                onClick={onClose}
                                className="block text-gray-300 hover:text-teal-400 transition-colors duration-200"
                            >
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-6 border-t border-gray-700">
                <div className="flex justify-center space-x-6">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon className="w-6 h-6" />
                    </a>
                    <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
                        <XIcon className="w-6 h-6" />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
