import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.tsx';
import Header from './components/Header.tsx';
import Background from './components/Background.tsx';
import Sidebar from './components/Sidebar.tsx';
import MainPage from './pages/MainPage.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppProvider>
      <HashRouter>
        <div className="min-h-screen text-gray-300">
          <Background />
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
