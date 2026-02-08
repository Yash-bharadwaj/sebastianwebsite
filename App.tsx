
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppleCardsCarouselDemo from './components/apple-cards-carousel-demo';
import AboutRicky from './components/AboutRicky';
import Credibility from './components/Credibility';
import International from './components/International';
import EventsGridPreview from './components/EventsGridPreview';
import InfiniteMovingCardsDemo from './components/infinite-moving-cards-demo';
import Transition from './components/Transition';
import AboutREvents from './components/AboutREvents';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Clients from './components/Clients';
import Footer from './components/Footer';
import HostPage from './components/HostPage';
import REventsPage from './components/REventsPage';
import ContactPage from './components/ContactPage';
import TestimonialsPage from './components/TestimonialsPage';
import FloatingSocials from './components/FloatingSocials';

export type PageView = 'home' | 'host' | 'revents' | 'testimonials' | 'contact';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<PageView>('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const toggleTheme = () => setIsDark(!isDark);
  const navigateTo = (view: PageView) => setCurrentView(view);

  const renderContent = () => {
    switch (currentView) {
      case 'host':
        return <HostPage navigateTo={navigateTo} />;
      case 'revents':
        return <REventsPage navigateTo={navigateTo} />;
      case 'testimonials':
        return <TestimonialsPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <Clients />
            <AppleCardsCarouselDemo />
            <AboutRicky />
            <International />
            <EventsGridPreview navigateTo={navigateTo} />
            <InfiniteMovingCardsDemo navigateTo={navigateTo} />
            <Transition />
            <AboutREvents />
            <Services />
            <Process />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-slate-200 dark:selection:bg-slate-800 transition-colors duration-500 bg-slate-50 dark:bg-[#0E0E11]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} navigateTo={navigateTo} currentView={currentView} />
      <FloatingSocials />
      <main>
        {renderContent()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
