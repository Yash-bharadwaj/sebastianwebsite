
import React, { useEffect, useState, useRef } from 'react';
import { COUNTRIES } from '../constants';
import { cn } from '../lib/utils';

const International: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the list to create the infinite effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = (item as HTMLElement).cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.6em] uppercase opacity-40 font-bold block mb-4 sm:mb-6 text-slate-900 dark:text-white">Global Footprint</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 sm:mb-8 italic text-slate-900 dark:text-white leading-tight px-2">
            Trusted Across Borders
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-light text-base sm:text-lg leading-relaxed px-2">
            Ricky’s work spans cultures, formats, and audiences — hosting high-profile events across international destinations with ease and adaptability.
          </p>
        </div>
      </div>
      
      {/* Infinite Scroller Container */}
      <div 
        ref={containerRef}
        className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
        style={{ '--animation-duration': '40s', '--animation-direction': 'forwards' } as React.CSSProperties}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
            start && "animate-scroll hover:[animation-play-state:paused]"
          )}
        >
          {COUNTRIES.map((country, idx) => (
            <li 
              key={`${country.code}-${idx}`}
              className="group relative flex items-center space-x-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-900/[0.03] dark:border-white/[0.03] hover:border-slate-900/10 dark:hover:border-white/10 transition-all duration-500 w-[280px] md:w-[320px] shadow-sm hover:shadow-md"
            >
              {/* Flag Container */}
              <div className="relative w-16 h-12 md:w-20 md:h-14 flex-shrink-0 overflow-hidden rounded shadow-sm transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={`https://flagcdn.com/w160/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs tracking-[0.3em] uppercase opacity-40 font-semibold mb-1 text-slate-900 dark:text-white group-hover:opacity-60 transition-opacity">
                  Location
                </span>
                <span className="text-sm md:text-base tracking-[0.1em] font-serif italic text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {country.name}
                </span>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-900 dark:bg-white/20 group-hover:w-full transition-all duration-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom subtle detail */}
      <div className="mt-20 flex justify-center">
        <div className="flex items-center space-x-3 opacity-20">
          <div className="w-12 h-[1px] bg-slate-900 dark:bg-white" />
          <span className="text-[10px] uppercase tracking-[0.4em]">Continuous Global Presence</span>
          <div className="w-12 h-[1px] bg-slate-900 dark:bg-white" />
        </div>
      </div>
    </section>
  );
};

export default International;
