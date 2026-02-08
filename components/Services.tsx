
import React from 'react';
import { SERVICES } from '../constants';

const ServiceIcon = ({ index }: { index: number }) => {
  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 12-5 5-5-5"/><path d="m17 7-5 5-5-5"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21 1.96 2 4.5 2s4.5-.79 4.5-2c0-.83-.5-2.24-2-3.5"/><path d="M15 7c-1.5 1.26-2 2.67-2 3.5 0 1.21 1.96 2 4.5 2s4.5-.79 4.5-2c0-.83-.5-2.24-2-3.5"/><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ];
  return icons[index] || icons[0];
};

const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-900/5 dark:bg-white/5">
          {SERVICES.map((service, index) => (
            <div key={index} className="relative bg-white dark:bg-[#0E0E11] p-6 sm:p-12 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all group overflow-hidden">
              {/* Subtle hover iridescent accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-300 via-rose-300 to-amber-300 opacity-0 group-hover:opacity-40 transition-opacity" />
              
              <div className="text-slate-900 dark:text-white mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <ServiceIcon index={index} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-500 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
