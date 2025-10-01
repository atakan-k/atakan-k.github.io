import React from 'react';
import { useAppContext } from '../context/AppContext.tsx';
import AnimatedSection from './AnimatedSection.tsx';
import { MailIcon } from './icons.tsx';

const Contact: React.FC = () => {
  const { texts, language } = useAppContext();
  const sectionId = language === 'tr' ? 'iletisim' : 'contact';

  return (
    <AnimatedSection id={sectionId}>
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        {texts.contact.title}
      </h2>
      <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        {texts.contact.content}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={`mailto:${texts.contact.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <MailIcon className="w-6 h-6" />
          <span>{texts.contact.email}</span>
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
