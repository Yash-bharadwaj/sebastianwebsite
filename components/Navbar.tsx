import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView } from '../App';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  navigateTo: (view: PageView) => void;
  currentView: PageView;
}

const MOBILE_LINKS: { label: string; view: PageView }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Emcee', view: 'host' },
  { label: 'Events', view: 'revents' },
  { label: 'Testimonials', view: 'testimonials' },
  { label: 'Contact', view: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, navigateTo, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [mobileOpen]);

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
        
        <div className="hidden md:flex items-center space-x-8 text-sm md:text-base uppercase tracking-[0.2em] font-serif font-medium text-inherit">
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

        {/* Mobile: premium hamburger + Contact */}
        <div className="flex md:hidden items-center gap-2 flex-shrink-0">
          <button 
            onClick={() => navigateTo('contact')} 
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-serif font-medium border border-slate-900/30 dark:border-white/40 px-3 sm:px-4 py-2.5 rounded-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 min-h-[44px]"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-11 h-11 rounded-lg flex items-center justify-center hover:bg-slate-200/80 dark:hover:bg-white/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 ring-slate-400 dark:ring-white/30 text-slate-900 dark:text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{mobileOpen ? 'Close' : 'Menu'}</span>
            <div className="relative w-6 h-5 overflow-visible">
              <motion.span
                className="absolute left-0 w-full h-[3px] rounded-full bg-slate-900 dark:bg-white origin-center"
                style={{ top: 0 }}
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 9 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
              <motion.span
                className="absolute left-0 w-full h-[3px] rounded-full bg-slate-900 dark:bg-white origin-center"
                style={{ top: 9 }}
                animate={{
                  opacity: mobileOpen ? 0 : 1,
                  scaleX: mobileOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 w-full h-[3px] rounded-full bg-slate-900 dark:bg-white origin-center"
                style={{ top: 18 }}
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -9 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 pt-[var(--nav-height,72px)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute left-0 right-0 top-0 bg-white/95 dark:bg-[#0E0E11]/98 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-2xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className="flex items-center justify-end px-4 pt-4 pb-2">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
              <div className="container mx-auto px-6 py-2 pb-6 flex flex-col gap-1">
                {MOBILE_LINKS.map((item, i) => (
                  <motion.button
                    key={item.view}
                    onClick={() => { navigateTo(item.view); setMobileOpen(false); }}
                    className={`text-left py-4 px-2 -mx-2 rounded-lg font-serif text-base uppercase tracking-[0.2em] transition-colors duration-200 ${
                      currentView === item.view
                        ? 'text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  className="border-t border-slate-200/80 dark:border-white/10 mt-3 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <button
                    onClick={() => { toggleTheme(); setMobileOpen(false); }}
                    className="text-left py-2 px-2 -mx-2 text-xs uppercase tracking-[0.2em] font-serif text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {isDark ? 'Light mode' : 'Dark mode'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
