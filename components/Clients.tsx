
import React, { useEffect, useState, useRef } from 'react';
import { CLIENT_LOGOS } from '../constants';
import { cn } from '../lib/utils';

const logoUrls = CLIENT_LOGOS.map(
  (c) => new URL(`../assets/logos/${c.file}`, import.meta.url).href
);

const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Create a long enough list for seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = (item as HTMLElement).cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      
      // Triple the content for small lists to prevent gaps
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
    <section className="relative py-12 sm:py-20 bg-white dark:bg-[#0E0E11] transition-colors duration-500 overflow-hidden">
      {/* Background Glows for Vibrancy */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-16 text-center relative z-10">
        <div className="inline-block group">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-slate-800 dark:text-white mb-3 px-2">
            Chosen by Leading Organizations
          </h2>
          <div className="relative h-[2px] w-full overflow-hidden">
             {/* Animated Underline */}
             <div className="absolute inset-0 bg-slate-200 dark:bg-white/10" />
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-rose-400 to-amber-400 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700 ease-in-out" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 mt-4 block font-bold">Partners in Excellence</span>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
        style={{ '--animation-duration': '120s', '--animation-direction': 'forwards' } as React.CSSProperties}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-16 md:gap-32 items-center py-8",
            start && "animate-scroll hover:[animation-play-state:paused]"
          )}
        >
          {CLIENT_LOGOS.map((client, idx) => (
            <li 
              key={`${client.name}-${idx}`}
              className="group relative flex items-center justify-center transition-all duration-500 h-12 md:h-16"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-rose-500/0 to-amber-500/0 group-hover:from-blue-500/5 group-hover:via-rose-500/5 group-hover:to-amber-500/5 blur-xl transition-all duration-700 rounded-full scale-150" />
              <img 
                src={logoUrls[idx]} 
                alt={`${client.name} Logo`}
                className="h-full w-auto object-contain grayscale-[0.4] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 dark:brightness-125 dark:group-hover:brightness-100 relative z-10"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
      
      {/* Visual Divider */}
      <div className="container mx-auto px-6 mt-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default Clients;
