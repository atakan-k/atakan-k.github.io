import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext.tsx';

const Typewriter: React.FC<{ text: string; startDelay?: number; speed?: number; className?: string, onComplete?: () => void }> = ({ text, startDelay = 0, speed = 100, className = '', onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayText('');
    setIsTyping(true);
    const startTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          if(onComplete) onComplete();
        }
      }, speed);
      return () => clearInterval(typingInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, startDelay, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
         <span 
          className="inline-block w-1 bg-teal-400 ml-1"
          style={{ height: '1em' }}
        ></span>
      )}
    </span>
  );
};

const Home: React.FC = () => {
  const { texts } = useAppContext();
  const [startAnimation, setStartAnimation] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500); // 0.5 saniye gecikme
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center -mt-20">
      <div className="max-w-4xl mx-auto px-4">
        {startAnimation ? (
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
               <Typewriter text={texts.home.intro} speed={80} onComplete={() => setIntroComplete(true)} />
               {introComplete && (
                <Typewriter text={texts.home.name} speed={80} className="text-teal-400" onComplete={() => setNameComplete(true)} />
               )}
               {nameComplete && (
                <span className="inline-block w-1 bg-teal-400 ml-1 animate-blink" style={{ height: '1em' }}></span>
               )}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              <Typewriter text={texts.home.description} startDelay={1500} speed={60}/>
            </p>
          </>
        ) : (
           // Animasyon başlamadan önce boş bir alan göstererek kaymayı engelle
           <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent leading-tight">
              {texts.home.fullIntro}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-transparent">
              {texts.home.description}
            </p>
           </>
        )}
      </div>
    </section>
  );
};

export default Home;
