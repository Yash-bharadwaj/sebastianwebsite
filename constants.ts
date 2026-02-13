
import { ServiceItem, Award } from './types';

export const COUNTRIES = [
  { name: 'Kuwait', code: 'kw' },
  { name: 'Dubai', code: 'ae' },
  { name: 'Oman', code: 'om' },
  { name: 'Bahrain', code: 'bh' },
  { name: 'Hong Kong', code: 'hk' },
  { name: 'Phuket', code: 'th' },
  { name: 'Kenya', code: 'ke' },
  { name: 'India', code: 'in' }
];

export const AWARDS: Award[] = [
  {
    title: 'Best Anchor Award',
    organization: 'WedMeGood',
    year: '2026'
  },
  {
    title: 'Best Anchor Award',
    organization: 'WedMeGood',
    year: '2025'
  },
  {
    title: 'Best Anchor Award',
    organization: 'WedMeGood',
    year: '2024'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Corporate Sports Days',
    description: 'High-energy outdoor engagement programs tailored for large workforces.'
  },
  {
    title: 'Inter-Corporate Tournaments',
    description: 'Professional-grade competitive leagues across various sporting disciplines.'
  },
  {
    title: 'Internal Leagues & Championships',
    description: 'Custom-designed sporting events fostering internal team cohesion.'
  },
  {
    title: 'Large-Scale Sports Carnivals',
    description: 'Massive multi-sport festivals celebrating employee wellness and culture.'
  },
  {
    title: 'End-to-End Event Operations',
    description: 'Comprehensive logistics management from concept to final whistle.'
  },
  {
    title: 'On-Ground Management & Safety',
    description: 'Rigorous safety planning and operational oversight.'
  }
];

const LOGO_FILES = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png'];

export const CLIENT_LOGOS = LOGO_FILES.map((file, i) => ({ name: `Partner ${i + 1}`, file }));

export const CLIENTS = CLIENT_LOGOS.map(c => c.name);

export const HERO_QUOTES = [
  "Authority is silent. Precision is absolute.",
  "The stage is a mirror of execution.",
  "Presence isn't performative. It's structural.",
  "Ricky Sebastian: The Voice. R Events: The Engine.",
  "Composed at the center of the stadium.",
  "Every second on stage is a calculated risk.",
  "Engineering energy with mathematical precision.",
  "The microphone is the face; the schedule is the spine.",
  "Where chaos meets its match: R Events.",
  "A decade of stages. A lifetime of discipline."
];
