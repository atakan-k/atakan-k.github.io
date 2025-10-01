import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.tsx';
import AnimatedSection from './AnimatedSection.tsx';
import { projectsData } from '../constants.ts';
import type { Project } from '../types.ts';

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
  <Link 
    to={`/project/${item.id}`}
    className="block p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 group h-full flex flex-col justify-between"
  >
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{item.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {item.tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-teal-900 text-teal-200">
          {tag}
        </span>
      ))}
    </div>
  </Link>
);

const Projects: React.FC = () => {
  const { texts, language } = useAppContext();
  const sectionId = language === 'tr' ? 'projeler' : 'projects';
  const currentProjects = projectsData[language];

  return (
    <AnimatedSection id={sectionId}>
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        {texts.projects.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
