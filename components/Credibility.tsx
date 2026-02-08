
import React from 'react';
import { AWARDS } from '../constants';

const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-[#0E0E11] border-y border-slate-900/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-slate-900 dark:text-white tracking-tight mb-12">
          Recognised for consistency, composure, and craft.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {AWARDS.map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <h3 className="text-xl font-serif mb-1 text-slate-900 dark:text-white">{award.title}</h3>
              <p className="text-xs tracking-widest uppercase opacity-50 text-slate-900 dark:text-white">{award.organization} — {award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
