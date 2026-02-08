
import React from 'react';
import { PageView } from '../App';
import { motion } from 'motion/react';
import rEventsLogo from '../assets/rEventsLogo.png';
import rEventsLogoWhite from '../assets/rEventsLogoWhite.png';

interface REventsPageProps {
  navigateTo: (view: PageView) => void;
}

const REventsPage: React.FC<REventsPageProps> = ({ navigateTo }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header Section: flex — text left, big logo right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-16 sm:mb-24">
          <div className="flex-1 min-w-0 max-w-4xl">
            <span className="text-[10px] tracking-[0.6em] uppercase opacity-40 font-bold block mb-4 sm:mb-6 text-slate-900 dark:text-white">Professional Management</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 sm:mb-10 text-slate-900 dark:text-white leading-tight">
              Planning & <br /> Execution.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
              R Events specializes in corporate gatherings that prioritize team wellness, structured engagement, and flawless delivery.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center justify-center lg:justify-end lg:basis-[min(45%,420px)]">
            <img src={rEventsLogo} alt="R Events" className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto max-w-full object-contain opacity-90 dark:hidden" />
            <img src={rEventsLogoWhite} alt="R Events" className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto max-w-full object-contain opacity-95 hidden dark:block" />
          </div>
        </div>

        {/* Bento Grid: Our Approach */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif italic mb-8 sm:mb-12 text-slate-900 dark:text-white">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Main Strategy Card */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-12 rounded-2xl sm:rounded-[2.5rem] border border-slate-900/5 dark:border-white/5 flex flex-col justify-between group overflow-hidden relative">
               <div className="relative z-10">
                 <h3 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white italic">Strategic Design</h3>
                 <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                   We don't just organize events; we design formats that align with your corporate culture. Every activity is built to foster real connections among participants.
                 </p>
               </div>
               <div className="mt-12 relative z-10">
                 <button onClick={() => navigateTo('contact')} className="text-xs uppercase tracking-widest font-bold border-b border-slate-900 dark:border-white pb-1">Discuss a Plan</button>
               </div>
               {/* Decorative Gradient Overlay */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />
            </div>

            {/* On-Time Delivery Card */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-900/5 dark:border-white/5">
               <div className="flex items-start justify-between">
                  <h3 className="text-xl font-serif text-slate-900 dark:text-white italic">On-Time Execution</h3>
                  <div className="w-10 h-10 rounded-full bg-slate-900/5 dark:bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
               </div>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-4 leading-relaxed">
                 Reliability is our hallmark. We ensure every segment of your event runs on schedule, so you can focus on your guests.
               </p>
            </div>

            {/* Safety Card */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-900/5 dark:border-white/5">
               <h3 className="text-lg sm:text-xl font-serif text-slate-900 dark:text-white italic">Safety</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-4 leading-relaxed">
                 Medical support and rigorous on-ground risk planning for every participant.
               </p>
            </div>

            {/* Tech Card */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-900/5 dark:border-white/5">
               <h3 className="text-lg sm:text-xl font-serif text-slate-900 dark:text-white italic">Digital</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-4 leading-relaxed">
                 Real-time scoring and engagement apps for a modern experience.
               </p>
            </div>
          </div>
        </div>

        {/* Improved Services Grid */}
        <div className="mb-20 sm:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
             <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4 sm:mb-6 text-slate-900 dark:text-white italic">Our Services</h2>
                <p className="text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">We manage the entire lifecycle of your event, from initial concept to the final closing ceremony.</p>
             </div>
             <button onClick={() => navigateTo('contact')} className="px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white dark:bg-white dark:text-black font-medium tracking-widest uppercase text-[10px] min-h-[48px] w-full md:w-auto">View Packages</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Corporate Sports Days", desc: "Energy-driven events focused on team collaboration and employee health." },
              { title: "Team Tournaments", desc: "Professional-grade internal championships for sports like cricket, football, and more." },
              { title: "Carnivals & Festivals", desc: "Large-scale community events designed for families and employees." },
              { title: "End-to-End Logistics", desc: "Full venue management, staffing, and technical support for a seamless experience." },
              { title: "Wellness Workshops", desc: "Integrated fitness and mental well-being sessions within corporate formats." },
              { title: "Recognition Ceremonies", desc: "High-impact awards and closing galas to celebrate achievements." }
            ].map((service, i) => (
              <div key={i} className="group p-6 sm:p-10 bg-slate-50 dark:bg-slate-900/20 border border-slate-900/5 dark:border-white/5 rounded-xl sm:rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl mb-8 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full group-hover:bg-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Gallery Section - all images from assets/weddings */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-10 sm:mb-16 text-slate-900 dark:text-white italic text-center px-2">Moments Captured</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
            {(Object.entries(import.meta.glob<{ default: string }>('../assets/weddings/*.{jpeg,jpg}', { eager: true }))
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([path, m], i) => (
              <div key={path} className="relative group overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700">
                <img src={(m as { default: string }).default} alt={`Wedding moment ${i + 1}`} className="w-full group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-white text-[10px] uppercase tracking-widest font-bold border border-white/40 px-6 py-3 rounded-full backdrop-blur-md">View Experience</span>
                </div>
              </div>
            )))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 dark:bg-white p-8 sm:p-12 md:p-24 rounded-3xl sm:rounded-[4rem] text-center shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white dark:text-black mb-8 sm:mb-10 leading-tight px-1">Ready to plan your <br /> next event?</h2>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 sm:px-12 py-4 sm:py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs hover:scale-105 active:scale-[0.98] transition-transform min-h-[48px]"
            >
              Request Proposal
            </button>
          </div>
          {/* Subtle accent circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 dark:bg-black/5 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 dark:bg-black/5 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default REventsPage;
