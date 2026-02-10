import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView } from '../App';
import img01 from '../assets/weddings/01.jpeg';
import img02 from '../assets/weddings/02.jpeg';
import img03 from '../assets/weddings/03.jpeg';
import img04 from '../assets/weddings/04.jpeg';
import img05 from '../assets/weddings/05.jpeg';
import img06 from '../assets/weddings/06.jpeg';
import img07 from '../assets/weddings/07.jpeg';
import corporateExcellence from '../assets/rickycoorperate.png';
import luxuryWedding from '../assets/luxuryweddings.png';

const HERO_WEDDING_PHOTOS = [img01, img02, img03, img04, img05, img06, img07];

interface HostPageProps {
  navigateTo: (view: PageView) => void;
}

import FAQ from './FAQ';
import Clients from './Clients';

const IconWrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`flex-shrink-0 w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-slate-700/50 flex items-center justify-center text-slate-700 dark:text-slate-300 ${className}`}>{children}</span>
);

const CorporateIcons = {
  award: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v4a6 6 0 01-6 6h-2a6 6 0 01-6-6V3z" /><path d="M8 21h8M12 17v4M7 7h10" /></svg>
    </IconWrapper>
  ),
  leadership: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
    </IconWrapper>
  ),
  launch: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" /></svg>
    </IconWrapper>
  ),
  global: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
    </IconWrapper>
  ),
};

const WeddingIcons = {
  destination: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
    </IconWrapper>
  ),
  sangeet: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13M9 9l12-2" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    </IconWrapper>
  ),
  toastmaster: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8" /></svg>
    </IconWrapper>
  ),
  multilingual: () => (
    <IconWrapper>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /><path d="M9 9h6M9 15h6M12 7v10" /></svg>
    </IconWrapper>
  ),
};

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };
const viewport = { once: true, amount: 0.2 };
const stagger = { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

const HostPage: React.FC<HostPageProps> = ({ navigateTo }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % HERO_WEDDING_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero Section with image */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="lg:col-span-6 space-y-0">
            <motion.span variants={fadeUp} className="text-[10px] tracking-[0.6em] uppercase opacity-40 font-bold block mb-6 text-slate-900 dark:text-white">Emcee & Master of Ceremonies</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 sm:mb-10 text-slate-900 dark:text-white leading-tight">
              The Art of <br />Commanding Stages.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
              A host doesn’t just speak; a host sets the pulse. Ricky Sebastian brings a decade of curated energy to every microphone.
            </motion.p>
          </div>
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={carouselIndex}
                  src={HERO_WEDDING_PHOTOS[carouselIndex]}
                  alt="Ricky Sebastian commanding the stage"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {HERO_WEDDING_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === carouselIndex ? 'w-6 bg-slate-900 dark:bg-white' : 'w-1.5 bg-slate-400 dark:bg-white/40 hover:bg-slate-600 dark:hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 mb-20 sm:mb-32 items-center border-y border-slate-900/5 dark:border-white/5 py-16 sm:py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
           <motion.div
             className="lg:col-span-4"
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={viewport}
             transition={{ duration: 0.5, delay: 0.1 }}
           >
              <h2 className="text-3xl font-serif italic text-slate-900 dark:text-white">Philosophy of Presence.</h2>
           </motion.div>
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                 <h4 className="text-xs uppercase tracking-widest font-bold mb-4 opacity-40">Clarity over Noise</h4>
                 <p className="text-slate-500 dark:text-slate-400 font-light">In a world of distractions, a Master of Ceremonies must be the anchor. Ricky focuses on delivering brand messages with absolute clarity and zero fluff.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                 <h4 className="text-xs uppercase tracking-widest font-bold mb-4 opacity-40">Rhythm of Energy</h4>
                 <p className="text-slate-500 dark:text-slate-400 font-light">Understanding when to uplift and when to hold space. Every event has a rhythm; Ricky is the one who conducts it.</p>
              </motion.div>
           </div>
        </motion.div>

        <Clients />

        {/* Global Stats Bar */}
        <motion.div
          className="mb-20 sm:mb-32 p-6 sm:p-12 bg-slate-50 dark:bg-slate-900/50 rounded-2xl sm:rounded-3xl border border-slate-900/5 dark:border-white/5 flex flex-col sm:flex-row flex-wrap justify-between items-stretch sm:items-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
           {[
             { value: '8+', label: 'Countries Hosted' },
             { value: '500+', label: 'Stages Anchored' },
             { value: '1M+', label: 'Audience Reach' },
           ].map((stat, i) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={viewport}
               transition={{ duration: 0.4, delay: i * 0.08 }}
               whileHover={{ scale: 1.03 }}
               className="transition-colors"
             >
               <span className="text-4xl font-serif text-slate-900 dark:text-white">{stat.value}</span>
               <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2">{stat.label}</p>
             </motion.div>
           ))}
           <motion.button
             onClick={() => navigateTo('contact')}
             className="px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-black text-[10px] uppercase tracking-widest font-bold hover:scale-105 active:scale-[0.98] transition-transform w-full sm:w-auto min-h-[48px]"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={viewport}
             transition={{ duration: 0.4, delay: 0.3 }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
           >
             Check Availability
           </motion.button>
        </motion.div>

        {/* Formats Grid */}
        <div className="space-y-20 sm:space-y-32">
          {/* Corporate Galas */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-2xl"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={corporateExcellence} 
                alt="Ricky Sebastian hosting a corporate conference" 
                className="w-full h-full object-cover object-center transition-all duration-1000"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 sm:mb-8 text-slate-900 dark:text-white italic">Corporate Excellence</h2>
              <p className="text-slate-600 dark:text-slate-400 font-light text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                From CXO roundtables to massive award nights, Ricky anchors corporate events with the precise balance of formal gravitas and engaging charisma. Trusted by Fortune 500 companies to represent their brand values on stage.
              </p>
              <ul className="space-y-4 text-sm tracking-widest uppercase opacity-60 font-medium">
                {[
                  [CorporateIcons.award, 'Award Nights & Galas'],
                  [CorporateIcons.leadership, 'Leadership Summits'],
                  [CorporateIcons.launch, 'Product Launches'],
                  [CorporateIcons.global, 'Global Conferences'],
                ].map(([Icon, label], i) => (
                  <motion.li
                    key={String(label)}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  >
                    <Icon /><span>{label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Luxury Weddings */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="lg:order-2 aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-2xl flex items-center justify-center"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={luxuryWedding} 
                alt="Luxury Wedding – couple and host at elegantly decorated stage" 
                className="w-full h-full object-contain object-center transition-all duration-1000"
              />
            </motion.div>
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 sm:mb-8 text-slate-900 dark:text-white italic">Luxury Weddings</h2>
              <p className="text-slate-600 dark:text-slate-400 font-light text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Destination weddings are marathons of emotion. Ricky acts as the thread that binds ceremonies together—handling everything from high-energy Sangeets to the poise of a formal Reception.
              </p>
              <ul className="space-y-4 text-sm tracking-widest uppercase opacity-60 font-medium">
                {[
                  [WeddingIcons.destination, 'Destination Wedding Anchor'],
                  [WeddingIcons.sangeet, 'Sangeet Choreography Integration'],
                  [WeddingIcons.toastmaster, 'Formal Reception Toastmaster'],
                  [WeddingIcons.multilingual, 'Multi-Lingual Adaptability'],
                ].map(([Icon, label], i) => (
                  <motion.li
                    key={String(label)}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  >
                    <Icon /><span>{label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <FAQ />
      </div>
    </div>
  );
};

export default HostPage;
