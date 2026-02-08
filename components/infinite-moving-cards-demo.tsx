"use client";

import React from "react";
import { PageView } from "../App";
import { TESTIMONIALS } from "../lib/testimonials";
import { TestimonialCard } from "./TestimonialCard";

const HOME_TESTIMONIALS_COUNT = 6;

interface InfiniteMovingCardsDemoProps {
  navigateTo?: (view: PageView) => void;
}

export default function InfiniteMovingCardsDemo({ navigateTo }: InfiniteMovingCardsDemoProps) {
  const items = TESTIMONIALS.slice(0, HOME_TESTIMONIALS_COUNT);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-slate-900 dark:text-white tracking-tight px-2">
          Client Experiences
        </h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto">
          Real reviews from WedMeGood
        </p>
        {navigateTo && (
          <button
            onClick={() => navigateTo("testimonials")}
            className="mt-6 text-xs uppercase tracking-widest font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 underline underline-offset-4"
          >
            View all testimonials →
          </button>
        )}
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none p-0 m-0">
          {items.map((item, idx) => (
            <li key={idx}>
              <TestimonialCard testimonial={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
