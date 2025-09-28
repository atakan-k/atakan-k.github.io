import React from 'react';
import { useAppContext } from '../context/AppContext';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const { texts, language } = useAppContext();
  const sectionId = language === 'tr' ? 'hakkimda' : 'about';

  return (
    <AnimatedSection id={sectionId}>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {texts.about.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
            <img 
                src="https://picsum.photos/seed/atakan/400/400" 
                alt="Atakan Karakuş" 
                className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-teal-500/50"
            />
        </div>
        <div className="w-full md:w-2/3 text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {texts.about.content.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
