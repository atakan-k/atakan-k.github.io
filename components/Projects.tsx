import React from 'react';
import { useAppContext } from '../context/AppContext';
import AnimatedSection from './AnimatedSection';
import { projectsData } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons';

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
  <a 
    href={item.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 group"
  >
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
      <ExternalLinkIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors" />
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

const Projects: React.FC = () => {
  const { texts, language } = useAppContext();
  const sectionId = language === 'tr' ? 'projeler' : 'projects';
  const currentProjects = projectsData[language];

  return (
    <AnimatedSection id={sectionId}>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {texts.projects.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} item={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
