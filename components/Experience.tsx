import React from 'react';
import { useAppContext } from '../context/AppContext';
import AnimatedSection from './AnimatedSection';
import { experienceData } from '../constants';
import type { Experience } from '../types';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => {
  const Logo = item.logo;
  return (
    <a
      href="https://technopat.net/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-6 p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
    >
      <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-inner p-1">
        <Logo className="w-full h-full" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
        <p className="font-semibold text-teal-600 dark:text-teal-400">{item.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{item.date}</p>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    </a>
  );
};

const Experience: React.FC = () => {
  const { texts, language } = useAppContext();
  const sectionId = language === 'tr' ? 'deneyim' : 'experience';
  const currentExperience = experienceData[language];

  return (
    <AnimatedSection id={sectionId}>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {texts.experience.title}
      </h2>
      <div className="space-y-8">
        {currentExperience.map((exp, index) => (
          <ExperienceCard key={index} item={exp} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
