import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView } from '../App';

import sebastian1 from '../assets/sebastianPics/sebastian1.jpeg';
import sebastian3 from '../assets/sebastianPics/sebastian3.jpeg';
import sebastian4 from '../assets/sebastianPics/sebastian4.jpeg';
import sebastian5 from '../assets/sebastianPics/sebastian5.jpeg';
import sebastian6 from '../assets/sebastianPics/sebastian6.jpeg';
import sebastian7 from '../assets/sebastianPics/sebastian7.jpeg';
import sebastian8 from '../assets/sebastianPics/sebastian8.jpeg';

const HERO_PHOTOS = [
  sebastian1, sebastian3, sebastian4,
  sebastian5, sebastian6, sebastian7, sebastian8,
];

const FLOATING_CARDS = [
  { label: 'Award Winning', sub: 'Emcee' },
  { label: 'Trusted', sub: 'by 100+ Brands' },
  { label: '10+ Years', sub: 'Experience' },
  { label: 'International', sub: 'Hosting' },
  { label: '500+ Events', sub: 'Delivered' },
  { label: 'Corporate & Luxury', sub: 'Specialist' },
];

interface HeroProps {
  navigateTo: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-x-hidden overflow-y-auto lg:overflow-hidden lg:h-screen bg-white dark:bg-[#0E0E11] transition-colors duration-500">
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[180px] bg-slate-400 dark:bg-slate-600 opacity-10 dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center min-h-screen lg:h-full py-16 lg:py-0 gap-8 sm:gap-12 lg:gap-8 pr-14 sm:pr-16 md:pr-12 lg:pr-12">
        {/* Left Side: Content + Mobile carousel — flex column, no static sizes */}
        <div className="w-full lg:w-1/2 pt-20 sm:pt-24 lg:pt-0 text-left flex flex-col flex-1 min-w-0 lg:flex-shrink-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif leading-[1.1] mb-4 sm:mb-6 text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
            Renowned Emcee &amp;<br className="sm:hidden" /> Master of Ceremonies
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4 sm:mb-6 max-w-lg transition-colors duration-500">
            Award-winning professional emcee and event host from Mumbai with over a decade of experience. Known for charismatic stage presence, sharp wit, and exceptional audience engagement across weddings, corporate events, and luxury celebrations.
          </p>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-2 max-w-lg transition-colors duration-500">
            Three-year consecutive <strong className="font-semibold text-slate-700 dark:text-slate-300">Best Anchor</strong> by WedMeGood (2024, 2025, 2026) — India&apos;s leading wedding platform.
          </p>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6 sm:mb-10 md:mb-16 max-w-lg transition-colors duration-500">
            Hosted internationally in Kuwait, Dubai, Oman, Bahrain, Hong Kong, Phuket, Kenya and more — trusted for professionalism and seamless connection with global audiences.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-0 space-y-0 sm:space-x-10 flex-shrink-0">
            <button 
              onClick={() => navigateTo('host')}
              className="group relative flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 bg-slate-900 text-white dark:bg-white dark:text-black font-medium tracking-widest uppercase text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden shadow-2xl min-h-[48px]"
            >
              <span className="relative z-10 font-bold">Host Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
            <button 
              onClick={() => navigateTo('revents')}
              className="px-8 sm:px-12 py-4 sm:py-6 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white font-medium tracking-widest uppercase text-[10px] hover:bg-slate-900 hover:text-white dark:hover:bg-white/5 transition-all backdrop-blur-sm min-h-[48px]"
            >
              View Events
            </button>
          </div>

          {/* Mobile / Tablet: carousel uses flex, no static sizes — fills remaining space */}
          <div className="lg:hidden flex-1 min-h-0 flex justify-center items-center mt-4 sm:mt-6 w-full">
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-200 dark:bg-slate-900 shadow-2xl border border-slate-200/80 dark:border-white/10 w-full max-w-[90vw] sm:max-w-[85vw] aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={carouselIndex}
                  src={HERO_PHOTOS[carouselIndex]}
                  alt={`Ricky Sebastian ${carouselIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.4] dark:brightness-90"
                />
              </AnimatePresence>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {HERO_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === carouselIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Right Side - Image Carousel, dome shape */}
        <div className="hidden lg:flex lg:w-1/2 h-full items-stretch relative flex-shrink-0 pl-4">
          <div 
            className="w-full h-full min-h-[70vh] overflow-hidden bg-slate-200 dark:bg-slate-900 relative shadow-2xl"
            style={{ borderRadius: '1.5rem 1.5rem 50% 50% / 1.5rem 1.5rem 35% 35%' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={carouselIndex}
                src={HERO_PHOTOS[carouselIndex]}
                alt={`Ricky Sebastian ${carouselIndex + 1}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.4] dark:brightness-90"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {HERO_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === carouselIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating trust cards - right side, a little left, responsive */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden flex justify-end items-start">
        <div 
          className="hidden md:flex flex-col gap-2 sm:gap-3 md:gap-4 w-[130px] sm:w-[150px] md:w-[160px] pt-[12%] sm:pt-[14%] md:pt-[16%] lg:pt-[18%]"
          style={{ marginRight: 'clamp(2rem, 10vw, 6rem)' }}
        >
          {FLOATING_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white/95 dark:bg-white/10 backdrop-blur-md border border-slate-200/80 dark:border-white/15 shadow-lg shrink-0"
              initial={{ opacity: 0, x: 16 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.1 },
                x: { duration: 0.5, delay: i * 0.1 },
                y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span className="block text-xs sm:text-sm font-semibold tracking-tight text-slate-900 dark:text-white">{card.label}</span>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-slate-600 dark:text-slate-400 mt-0.5">{card.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes vertical-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 60s linear infinite;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
