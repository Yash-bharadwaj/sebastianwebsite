
import React, { useState, useEffect } from 'react';
import { PageView } from '../App';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  navigateTo: (view: PageView) => void;
  currentView: PageView;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, navigateTo, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <button onClick={() => { navigateTo('home'); setMobileOpen(false); }} className={`${currentView === 'home' ? 'opacity-100' : 'opacity-70 dark:opacity-80'} hover:opacity-100 transition-opacity`}>Home</button>
      <button onClick={() => { navigateTo('host'); setMobileOpen(false); }} className={`${currentView === 'host' ? 'opacity-100' : 'opacity-70 dark:opacity-80'} hover:opacity-100 transition-opacity`}>Emcee</button>
      <button onClick={() => { navigateTo('revents'); setMobileOpen(false); }} className={`${currentView === 'revents' ? 'opacity-100' : 'opacity-70 dark:opacity-80'} hover:opacity-100 transition-opacity`}>Events</button>
      <button onClick={() => { navigateTo('testimonials'); setMobileOpen(false); }} className={`${currentView === 'testimonials' ? 'opacity-100' : 'opacity-70 dark:opacity-80'} hover:opacity-100 transition-opacity`}>Testimonials</button>
      <button onClick={() => { navigateTo('contact'); setMobileOpen(false); }} className={`border px-6 py-2.5 text-sm md:text-base transition-all text-inherit border-slate-900/30 dark:border-white/40 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white ${currentView === 'contact' ? 'bg-slate-900 text-white dark:bg-white dark:text-black dark:border-white' : ''}`}>Contact</button>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-slate-900 dark:text-white ${scrolled || currentView !== 'home' ? 'bg-white/90 dark:bg-[#0E0E11]/90 backdrop-blur-md py-4 shadow-sm dark:shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center gap-2 min-w-0">
        <button 
          onClick={() => navigateTo('home')}
          className="flex flex-col text-left group text-inherit min-w-0 flex-shrink"
        >
          <span className="text-base sm:text-xl font-serif tracking-widest uppercase group-hover:italic transition-all text-inherit truncate max-w-[180px] sm:max-w-none">Ricky Sebastian</span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-70 dark:opacity-60 font-sans ml-0 sm:ml-1 text-inherit block">Master of Ceremonies</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8 text-sm md:text-base uppercase tracking-widest font-medium text-inherit">
          {navLinks}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-inherit"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>

        {/* Mobile: menu button + dropdown with Contact */}
        <div className="flex md:hidden items-center gap-2 flex-shrink-0">
          <button 
            onClick={() => navigateTo('contact')} 
            className="text-xs sm:text-sm uppercase tracking-widest font-medium border border-slate-900/30 dark:border-white/40 px-3 sm:px-4 py-2.5 rounded hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all min-h-[44px]"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0E0E11] border-t border-slate-200 dark:border-white/10 shadow-lg py-4 px-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
          <button onClick={() => { navigateTo('home'); setMobileOpen(false); }} className="text-left py-2 border-b border-slate-100 dark:border-white/5">Home</button>
          <button onClick={() => { navigateTo('host'); setMobileOpen(false); }} className="text-left py-2 border-b border-slate-100 dark:border-white/5">Emcee</button>
          <button onClick={() => { navigateTo('revents'); setMobileOpen(false); }} className="text-left py-2 border-b border-slate-100 dark:border-white/5">Events</button>
          <button onClick={() => { navigateTo('testimonials'); setMobileOpen(false); }} className="text-left py-2 border-b border-slate-100 dark:border-white/5">Testimonials</button>
          <button onClick={() => { navigateTo('contact'); setMobileOpen(false); }} className="text-left py-2">Contact</button>
          <button onClick={() => { toggleTheme(); setMobileOpen(false); }} className="text-left py-2 pt-4 text-xs opacity-70">Toggle theme</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
