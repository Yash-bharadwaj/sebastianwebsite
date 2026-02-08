import React from 'react';
import sebastian5 from '../assets/sebastianPics/sebastian5.jpeg';

const AboutRicky: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Portrait - single image */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl relative bg-slate-200 dark:bg-slate-900">
              <img
                src={sebastian5}
                alt="Ricky Sebastian"
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Frame Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-slate-900/10 dark:border-white/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-slate-900/10 dark:border-white/20 -z-10" />
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.5em] uppercase opacity-50 mb-6 block text-slate-900 dark:text-white">The Face</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8 sm:mb-10 leading-tight text-slate-900 dark:text-white transition-colors duration-500">
              The Voice That Carries <br /> the Room
            </h2>
            <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-400 font-light text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                Ricky Sebastian is a professional emcee and master of ceremonies based in Mumbai, trusted by brands and families alike to anchor moments that matter.
              </p>
              <p>
                With over a decade of experience across corporate forums, luxury weddings, and international showcases, Ricky brings clarity, confidence, and rhythm to every stage he steps on.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 border-t border-slate-900/10 dark:border-white/10 pt-8 sm:pt-12 text-slate-900 dark:text-white">
              <div>
                <span className="text-2xl font-serif block mb-1">10+ Years</span>
                <span className="text-[11px] uppercase tracking-widest opacity-40">Experience</span>
              </div>
              <div>
                <span className="text-2xl font-serif block mb-1">International</span>
                <span className="text-[11px] uppercase tracking-widest opacity-40">Hosting</span>
              </div>
              <div>
                <span className="text-2xl font-serif block mb-1">Corporate</span>
                <span className="text-[11px] uppercase tracking-widest opacity-40">& Luxury Events</span>
              </div>
              <div>
                <span className="text-2xl font-serif block mb-1">Award-Winning</span>
                <span className="text-[11px] uppercase tracking-widest opacity-40">Emcee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRicky;
