import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.tsx';
import { projectsData } from '../constants.ts';
import { ArrowLeftIcon, GithubIcon } from '../components/icons.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { language, texts } = useAppContext();
  const project = projectsData[language].find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
            <h2 className="text-2xl font-bold">Proje bulunamadı.</h2>
            <Link to="/" className="text-teal-400 hover:underline mt-4 inline-block">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedSection className="py-0">
        <div className="mb-8">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
                <ArrowLeftIcon className="w-5 h-5"/>
                <span>{texts.projectPages.backButton}</span>
            </Link>
        </div>
        
        <img 
            src={project.imageUrl} 
            alt={`${project.title} preview`}
            className="w-full h-auto max-h-[450px] object-cover rounded-2xl mb-8 shadow-lg border border-gray-700"
            loading="lazy"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-teal-900 text-teal-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-4">
            {project.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>

        <div className="mt-12">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-full text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <GithubIcon className="w-6 h-6" />
                <span>Proje Linki</span>
            </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectDetail;
