import React from 'react';
import { PageView } from '../App';
import cleleb from '../assets/cleleb.jpeg';

const GRID_IMAGE_COUNT = 8;

// Curated order: 01–04, one from same-event (05), then other events (wed1, wed2, wed03) so 5,6,7 aren’t all same event
const MOMENTS_ORDER = ['01.jpeg', '02.jpeg', '03.jpeg', '04.jpeg', '05.jpeg', 'wed1.jpeg', 'df.jpeg', 'WhatsApp Image 2026-02-07 at 20.25.08.jpeg'];

interface EventsGridPreviewProps {
  navigateTo: (view: PageView) => void;
}

const EventsGridPreview: React.FC<EventsGridPreviewProps> = ({ navigateTo }) => {
  const glob = import.meta.glob<{ default: string }>('../assets/weddings/*.{jpeg,jpg}', { eager: true });
  const byBasename = Object.fromEntries(
    Object.entries(glob).map(([path, m]) => {
      const name = path.split('/').pop() ?? path;
      return [name, m.default];
    })
  );
  const images = MOMENTS_ORDER.map((name) => byBasename[name]).filter(Boolean);
  const fallback = Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, GRID_IMAGE_COUNT - 1)
    .map(([, m]) => m.default);
  const baseImages = images.length >= GRID_IMAGE_COUNT - 1 ? images.slice(0, GRID_IMAGE_COUNT - 1) : fallback;
  const finalImages = [cleleb, ...baseImages];

  if (finalImages.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold block mb-4 text-slate-900 dark:text-white">From Our Events</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-slate-900 dark:text-white mb-4">
            Moments Captured
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base max-w-xl mx-auto">
            A glimpse of celebrations we’ve brought to life.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {finalImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl bg-slate-200 dark:bg-slate-800 group"
            >
              <img
                src={src}
                alt={`Event moment ${i + 1}`}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${i === 0 ? 'object-contain' : 'object-cover'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => navigateTo('revents')}
            className="text-xs uppercase tracking-widest font-bold border-b border-slate-900 dark:border-white pb-1 text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsGridPreview;
