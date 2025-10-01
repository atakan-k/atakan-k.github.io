import React from 'react';
import { useAppContext } from '../context/AppContext.tsx';
import AnimatedSection from './AnimatedSection.tsx';
import { experienceData } from '../constants.ts';
import type { Experience as ExperienceType } from '../types.ts';

const ExperienceCard: React.FC<{ item: ExperienceType }> = ({ item }) => {
  return (
    <a
      href="https://technopat.net/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
    >
      <div className="flex-shrink-0 w-20 h-20 sm:w-16 sm:h-16 bg-gray-700/50 rounded-xl flex items-center justify-center shadow-inner p-2 mx-auto sm:mx-0">
        <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-contain" loading="lazy" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white text-center sm:text-left">{item.title}</h3>
        <p className="font-semibold text-teal-400 text-center sm:text-left">{item.company}</p>
        <p className="text-sm text-gray-400 mt-1 mb-3 text-center sm:text-left">{item.date}</p>
        <p className="text-gray-300">{item.description}</p>
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
      <h2 className="text-3xl font-bold text-center text-white mb-12">
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
