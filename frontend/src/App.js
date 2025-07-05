import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import WhatIsAICOOPage from './pages/WhatIsAICOOPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'what-is-ai-coo':
        return <WhatIsAICOOPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      case 'feedback':
        return <FeedbackPage />;
      default:
        return <HomePage />;
    }
  };

  // Simple client-side routing
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
} 