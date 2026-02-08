import React from 'react';
import rEventsLogo from '../assets/rEventsLogo.png';
import rEventsLogoWhite from '../assets/rEventsLogoWhite.png';
import rickyImage from '../assets/ricky.png';

const AboutREvents: React.FC = () => {
  return (
    <section id="revents" className="py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <img
              src={rEventsLogo}
              alt="R Events"
              className="h-14 sm:h-16 md:h-20 w-auto mb-6 sm:mb-8 object-contain opacity-90 dark:hidden"
            />
            <img
              src={rEventsLogoWhite}
              alt="R Events"
              className="h-14 sm:h-16 md:h-20 w-auto mb-6 sm:mb-8 object-contain opacity-95 hidden dark:block"
            />
            <span className="text-xs tracking-[0.5em] uppercase opacity-50 mb-4 sm:mb-6 block text-slate-900 dark:text-white">R Events</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8 sm:mb-10 leading-tight text-slate-900 dark:text-white">
              Corporate Events. <br /> Professionally Done.
            </h2>
            <div className="space-y-6 sm:space-y-8 text-slate-600 dark:text-slate-400 font-light text-base sm:text-lg leading-relaxed">
              <p>
                R Events is a professional event management company specializing in corporate events that focus on team building, wellness, and collaboration.
              </p>
              <p>
                From tournaments to large-scale company festivals, we deliver structured and high-energy experiences—managed from start to finish.
              </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden relative group transition-colors duration-500">
                <img 
                  src={rickyImage} 
                  alt="Host Master Ricky Sebastian" 
                  className="w-full h-full object-cover opacity-60 transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0E0E11] to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-slate-900/50 dark:bg-white/50" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-900/50 dark:text-white/50">High Precision</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutREvents;
