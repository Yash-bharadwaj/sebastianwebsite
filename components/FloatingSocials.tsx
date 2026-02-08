
import React from 'react';

const SocialLink = ({ type, href }: { type: 'instagram' | 'facebook' | 'linkedin' | 'whatsapp'; href: string }) => {
  const icons = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-500 hover:scale-125 hover:translate-x-[-4px]"
    >
      {icons[type]}
    </a>
  );
};

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed right-0 md:right-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-end gap-1 sm:gap-2 group pointer-events-none md:pointer-events-auto w-12 sm:w-14 md:w-auto flex-shrink-0">
      {/* Upper line - hidden on small screens to reduce clutter */}
      <div className="hidden sm:block w-px h-12 sm:h-16 md:h-24 bg-gradient-to-t from-slate-900/20 dark:from-white/20 to-transparent mr-2 sm:mr-3 md:mr-5 flex-shrink-0" />
      
      <div className="flex flex-col items-center justify-center py-1.5 sm:py-2 md:py-4 px-0.5 sm:px-1 md:px-0 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-l-lg sm:rounded-l-xl md:rounded-l-2xl border-y border-l border-slate-900/5 dark:border-white/5 shadow-lg sm:shadow-xl md:shadow-2xl mr-0 md:mr-[-1px] pointer-events-auto min-w-0">
        <SocialLink type="instagram" href="https://www.instagram.com/rickysebastian10/?hl=en" />
        <SocialLink type="facebook" href="https://www.facebook.com/hostmasterrickysebastian/" />
        <SocialLink type="linkedin" href="https://www.linkedin.com/in/ricky-sebastian-0251b343/" />
        <SocialLink type="whatsapp" href="https://wa.me/919619204243" />
      </div>

      {/* Lower line */}
      <div className="hidden sm:block w-px h-12 sm:h-16 md:h-24 bg-gradient-to-b from-slate-900/20 dark:from-white/20 to-transparent mr-2 sm:mr-3 md:mr-5 flex-shrink-0" />
      
      {/* Vertical text label - hidden on very small to save space */}
      <div className="hidden md:flex mt-4 overflow-hidden h-32 items-center justify-center mr-2">
        <span className="rotate-90 text-[8px] uppercase tracking-[0.6em] font-bold text-slate-900/20 dark:text-white/20 whitespace-nowrap origin-center">
          Sebastian / R Events
        </span>
      </div>
    </div>
  );
};

export default FloatingSocials;
