import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Background from './components/Background';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
