import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <AppProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        <Background />
        <Header />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
