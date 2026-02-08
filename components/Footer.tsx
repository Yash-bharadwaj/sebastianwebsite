
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  navigateTo: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-[#0E0E11] text-slate-900 dark:text-white pt-16 sm:pt-24 pb-10 sm:pb-12 border-t border-slate-900/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif italic mb-8 sm:mb-10 leading-tight px-1">
            "Whether you need a host for your stage or a plan for your event — we are here to help."
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6">
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white dark:bg-white dark:text-black font-medium tracking-widest uppercase text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors w-full sm:w-auto min-h-[48px]"
            >
              Contact Ricky
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 sm:px-10 py-4 sm:py-5 border border-slate-900/20 dark:border-white/20 text-slate-900 dark:text-white font-medium tracking-widest uppercase text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-white/10 transition-all w-full sm:w-auto min-h-[48px]"
            >
              Plan a Corporate Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 border-t border-slate-900/5 dark:border-white/5 pt-8 sm:pt-12 text-sm font-light text-slate-500">
          <div>
            <div className="text-slate-900 dark:text-white font-serif text-lg tracking-widest uppercase mb-4 transition-colors">Ricky Sebastian</div>
            <p className="leading-relaxed">Master of Ceremonies <br /> & Director of R Events.</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest mb-4 opacity-50 font-sans tracking-[0.4em]">Explore</div>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('host')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Emcee (Hosting)</button></li>
              <li><button onClick={() => navigateTo('revents')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Events (R Events)</button></li>
              <li><button onClick={() => navigateTo('testimonials')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <div className="text-xs uppercase tracking-widest mb-4 opacity-50 font-sans tracking-[0.4em]">Presence</div>
            <p>Mumbai, India</p>
            <p>Global Availability</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest mb-4 opacity-50 font-sans tracking-[0.4em]">Legal</div>
            <p>&copy; {new Date().getFullYear()} Ricky Sebastian. All Rights Reserved.</p>
            <p className="mt-2 text-[10px] opacity-30 italic">Built with Precision.</p>
          </div>
        </div>

        {/* Premium credit: designed & developed with love */}
        <div className="border-t border-slate-900/5 dark:border-white/5 mt-10 sm:mt-12 pt-8 sm:pt-10 text-center">
          <p className="text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 tracking-wide flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            <span>Designed & developed with</span>
            <span className="inline-flex items-center justify-center">
              <span className="animate-heart-pulse inline-block text-rose-500 dark:text-rose-400" aria-hidden>
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
            </span>
            <span>and passion by</span>
            <a
              href="https://linktr.ee/yashwanthbharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white underline underline-offset-2 decoration-slate-400 dark:decoration-slate-500 hover:decoration-slate-600 dark:hover:decoration-slate-300 transition-colors"
            >
              Yashwanth Bharadwaj
            </a>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes heart-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.9; }
        }
        .animate-heart-pulse {
          animation: heart-pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
