import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_ITEMS = [
  {
    q: 'What types of events does Anchor Ricky Sebastian perform at?',
    a: 'Pre-Wedding (Roka), Wedding, Sagan, Cocktail Party, Bachelor/Spinster Party, and Private Parties.',
  },
  {
    q: 'Does Anchor Ricky Sebastian travel to other cities?',
    a: 'Yes. Same city, domestic, and international travel.',
  },
  {
    q: 'How much does Anchor Ricky Sebastian charge per event?',
    a: 'Pricing depends on event type, scale, and location. Get in touch for a tailored quote.',
  },
  {
    q: 'How many years of experience does Anchor Ricky Sebastian have?',
    a: '10+ years of experience anchoring and hosting events.',
  },
];

const FAQ: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-slate-900 dark:text-white mb-8 sm:mb-12">The questions everyone asks. (We don’t mind.)</h2>
        <div className="border-y border-slate-900/10 dark:border-white/10">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border-b border-slate-900/10 dark:border-white/10 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-left group min-h-[56px]"
              >
                <span className="text-sm sm:text-base md:text-lg font-medium text-slate-900 dark:text-white pr-2 sm:pr-4 text-left">{item.q}</span>
                <span className="flex-shrink-0 w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-900/20 dark:border-white/20 flex items-center justify-center transition-transform duration-200 group-hover:border-slate-900/40 dark:group-hover:border-white/40">
                  <svg className={`w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform duration-200 ${faqOpen === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {faqOpen === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 sm:pb-5 text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm sm:text-base pl-0 pr-4 sm:pr-12">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
