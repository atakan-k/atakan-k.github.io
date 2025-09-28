import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, 120);
      return () => clearTimeout(timer);
    } else {
      const blinkTimer = setTimeout(() => setIsTypingComplete(true), 500);
      return () => clearTimeout(blinkTimer);
    }
  }, [displayText, text]);

  return (
    <>
      {displayText}
      <span 
        className={`inline-block w-1 h-10 sm:h-12 md:h-14 bg-teal-500 dark:bg-teal-400 ml-1 transition-opacity duration-300 ${isTypingComplete ? 'animate-blink' : 'opacity-100'}`}
        style={{ animationPlayState: isTypingComplete ? 'running' : 'paused', opacity: isTypingComplete ? '' : '1' }}
      ></span>
    </>
  );
};

const Home: React.FC = () => {
  const { texts } = useAppContext();

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center -mt-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {texts.home.intro}{' '}
          <span className="text-teal-500 dark:text-teal-400">
            <Typewriter text={texts.home.name} />
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {texts.home.description}
        </p>
      </div>
    </section>
  );
};

export default Home;