
import React from 'react';
import { motion } from 'motion/react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-48 bg-[#0E0E11] text-white transition-colors duration-1000 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-slate-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 sm:mb-32 md:mb-40 gap-10 sm:gap-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.span
              className="text-[9px] tracking-[0.7em] uppercase opacity-30 font-bold block mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Operational Architecture
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif italic mb-6 sm:mb-8 leading-[0.95] tracking-tighter">
              The Blueprint of <br /> Flawless Events.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
              R Events operates at the intersection of cultural insight and logistical absolute. We don't leave energy to chance; we engineer it.
            </p>
          </motion.div>

          <motion.div
            className="lg:pt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                <svg className="w-5 h-5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7-7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </motion.div>
        </div>

        <div className="space-y-16 sm:space-y-28 md:space-y-36">
          {PROCESS.map((step, idx) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row gap-10 md:gap-20 items-start group ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              {/* Step Number - scroll reveal */}
              <div className="flex-shrink-0">
                <motion.div
                  className="text-6xl md:text-8xl font-serif font-bold text-transparent group-hover:opacity-100 group-hover:text-white transition-all duration-1000 select-none"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
                  initial={{ opacity: 0, scale: 0.5, y: 32 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                >
                  0{idx + 1}
                </motion.div>
              </div>

              {/* Step Content */}
              <div className="max-w-xl md:pt-12">
                 <h3 className="text-xl sm:text-2xl md:text-4xl font-serif italic mb-4 sm:mb-6 group-hover:translate-x-4 transition-transform duration-700">
                   {step.title}
                 </h3>
                 <p className="text-sm sm:text-base md:text-lg text-slate-500 group-hover:text-slate-300 font-light leading-relaxed transition-colors duration-700">
                   {step.description}
                 </p>

                 <div className="mt-8 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Conclusion Card */}
        <motion.div
          className="mt-24 sm:mt-40 md:mt-56 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] -z-10" />
          <div className="p-6 sm:p-12 md:p-24 border border-white/10 rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] flex flex-col items-center text-center">
             <span className="text-[9px] tracking-[0.45em] uppercase opacity-30 mb-4 sm:mb-6 font-bold">The Commitment</span>
             <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif italic mb-8 sm:mb-10 max-w-3xl leading-tight px-1">
               "Military-grade planning meets global stage-craft."
             </h4>
             <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-24">
                <div className="text-center">
                   <span className="block text-3xl md:text-5xl font-serif mb-2">100%</span>
                   <span className="text-[9px] uppercase tracking-widest opacity-30">Accountability</span>
                </div>
                <div className="text-center">
                   <span className="block text-3xl md:text-5xl font-serif mb-2">Zero</span>
                   <span className="text-[9px] uppercase tracking-widest opacity-30">Operational Delay</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
