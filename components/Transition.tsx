
import React from 'react';
import rEventsLogo from '../assets/rEventsLogo.png';
import rEventsLogoWhite from '../assets/rEventsLogoWhite.png';

const Transition: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 md:py-48 bg-iridescent animate-rainbow-slow relative overflow-hidden transition-colors duration-1000">
      {/* Decorative Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900/5 dark:via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 max-w-5xl mx-auto">
          <div className="flex-shrink-0 relative">
            <img
              src={rEventsLogo}
              alt="R Events"
              className="h-24 sm:h-32 md:h-44 w-auto object-contain opacity-90 dark:hidden"
            />
            <img
              src={rEventsLogoWhite}
              alt="R Events"
              className="h-24 sm:h-32 md:h-44 w-auto object-contain opacity-95 hidden dark:block"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 italic text-slate-900 dark:text-white leading-tight px-2 sm:px-0">
              "We plan ahead and run the show — so your event runs smoothly and you can enjoy it."
            </h2>
            <div className="w-12 h-px bg-slate-900/10 dark:bg-white/10 mb-6 sm:mb-8 md:mx-0 mx-auto" />
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <p>
                R Events designs and delivers experiences that bring people together and leave a lasting impression.
              </p>
              <p>
                From corporate conferences and award nights to weddings and destination events, we handle planning, hosting, and on-the-day execution so you can focus on your guests.
              </p>
              <p>
                Clear processes, a single point of contact, and attention to detail — that’s how we make every event run smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-900/5 dark:via-white/10 to-transparent" />
      
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Transition;
