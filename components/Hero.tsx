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

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-stretch min-h-screen lg:h-full pt-28 sm:pt-32 lg:pt-24 pb-16 sm:pb-20 lg:pb-12 gap-8 sm:gap-10 lg:gap-12 pr-4 sm:pr-6 md:pr-12">
        {/* Left: Full bio — scrollable, clear separation from navbar */}
        <div className="w-full lg:w-1/2 text-left flex flex-col min-w-0 lg:flex-shrink-0 lg:overflow-y-auto lg:pr-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif leading-[1.15] mb-6 sm:mb-8 text-slate-900 dark:text-white transition-colors duration-500 tracking-tight flex-shrink-0">
            Renowned Emcee &amp;<br className="sm:hidden" /> Master of Ceremonies
          </h1>

          <div className="space-y-5 sm:space-y-6 max-w-xl">
            <p className="text-[15px] sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Ricky Sebastian is a celebrated professional emcee, anchor, and event host based in Mumbai, India, widely recognised for his charismatic stage presence, sharp wit, and exceptional audience engagement. With over a decade of experience in the events and entertainment industry, Ricky has built a reputation for delivering high-impact, memorable experiences across weddings, corporate events, luxury celebrations, and international showcases.
            </p>

            <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              A testament to his excellence and consistency, Ricky is a <strong className="font-semibold text-slate-700 dark:text-slate-300">three-year consecutive</strong> winner of the Best Anchor Award by WedMeGood — one of India&apos;s most prestigious wedding platforms — reinforcing his position as a top-tier emcee in the industry.
            </p>

            <div className="pt-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-slate-500 dark:text-slate-500 block mb-3">International Event Footprint</span>
              <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Ricky&apos;s versatility and global appeal have taken him across multiple international destinations, where he has successfully hosted culturally diverse and high-profile events in Kuwait, Dubai, Oman, Bahrain, Hong Kong, Phuket, Kenya and more. Each destination reflects not just travel, but repeat trust — with clients valuing his professionalism, adaptability, and ability to connect seamlessly with global audiences.
              </p>
            </div>

            <div className="pt-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-slate-500 dark:text-slate-500 block mb-3">Style &amp; Strengths</span>
              <ul className="space-y-2 text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed list-none">
                <li className="flex gap-2.5"><span className="text-slate-400 dark:text-slate-500 mt-0.5">—</span> High-energy yet polished hosting</li>
                <li className="flex gap-2.5"><span className="text-slate-400 dark:text-slate-500 mt-0.5">—</span> Exceptional crowd engagement and spontaneity</li>
                <li className="flex gap-2.5"><span className="text-slate-400 dark:text-slate-500 mt-0.5">—</span> Cultural sensitivity and international adaptability</li>
                <li className="flex gap-2.5"><span className="text-slate-400 dark:text-slate-500 mt-0.5">—</span> Charismatic stage presence — balancing professionalism with fun</li>
                <li className="flex gap-2.5"><span className="text-slate-400 dark:text-slate-500 mt-0.5">—</span> Seamless event flow from formal to celebratory moments</li>
              </ul>
              <p className="mt-3 text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Whether hosting an intimate destination wedding or a large-scale corporate event, Ricky brings confidence, warmth, and precision to every stage he steps onto.
              </p>
            </div>

            <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed border-l-2 border-slate-300 dark:border-slate-600 pl-4 italic">
              With international experience across continents, industry recognition from WedMeGood, and a strong base in Mumbai&apos;s elite event circuit, Ricky Sebastian continues to set benchmarks as one of India&apos;s most sought-after and globally respected emcees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 flex-shrink-0 mt-10 sm:mt-12">
            <button 
              onClick={() => navigateTo('host')}
              className="group relative flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white dark:bg-white dark:text-black font-medium tracking-widest uppercase text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden shadow-xl min-h-[48px] rounded-sm"
            >
              <span className="relative z-10 font-bold">Host Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
            <button 
              onClick={() => navigateTo('revents')}
              className="px-6 sm:px-10 py-4 sm:py-5 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white font-medium tracking-widest uppercase text-[10px] hover:bg-slate-900 hover:text-white dark:hover:bg-white/5 transition-all backdrop-blur-sm min-h-[48px] rounded-sm"
            >
              View Events
            </button>
          </div>

          {/* Mobile / Tablet: carousel — contain so no image is ever cropped */}
          <div className="lg:hidden flex-1 min-h-0 flex justify-center items-center mt-4 sm:mt-6 w-full">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] bg-slate-100 dark:bg-slate-900 shadow-xl ring-1 ring-slate-300/60 dark:ring-white/10 ring-offset-2 ring-offset-white dark:ring-offset-[#0E0E11] w-full max-w-[90vw] sm:max-w-[85vw] aspect-[3/4] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={carouselIndex}
                  src={HERO_PHOTOS[carouselIndex]}
                  alt={`Ricky Sebastian ${carouselIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="max-w-full max-h-full w-auto h-auto min-w-0 min-h-0 grayscale-[0.3] dark:grayscale-[0.4] dark:brightness-90"
                  style={{ objectFit: 'contain' }}
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

        {/* Desktop: Right Section = full carousel, images always fit (no crop) */}
        <div className="hidden lg:flex lg:w-1/2 h-full min-h-0 relative flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900/80 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={carouselIndex}
              src={HERO_PHOTOS[carouselIndex]}
              alt={`Ricky Sebastian ${carouselIndex + 1}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="max-w-full max-h-full w-auto h-auto min-w-0 min-h-0 grayscale-[0.2] dark:grayscale-[0.3] dark:brightness-95"
              style={{ objectFit: 'contain' }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent dark:from-[#0E0E11]/50 pointer-events-none" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {HERO_PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === carouselIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
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
