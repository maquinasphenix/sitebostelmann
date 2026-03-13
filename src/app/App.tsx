import { useState, useEffect } from 'react';
import { MainPage } from './pages/MainPage';
import { EventMTB } from './pages/EventMTB';

type Page = 'home' | 'event-mtb';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToEvents = () => {
    setCurrentPage('event-mtb');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <MainPage onNavigateToEvents={navigateToEvents} />
      )}
      {currentPage === 'event-mtb' && (
        <EventMTB onBack={navigateToHome} />
      )}
    </>
  );
}