import React from 'react';
import Home from '../components/Home.tsx';
import About from '../components/About.tsx';
import Experience from '../components/Experience.tsx';
import Projects from '../components/Projects.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';

const MainPage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
