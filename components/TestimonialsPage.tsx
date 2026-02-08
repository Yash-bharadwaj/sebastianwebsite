"use client";

import React from "react";
import { PageView } from "../App";
import { TESTIMONIALS } from "../lib/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialsPageProps {
  navigateTo: (view: PageView) => void;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ navigateTo }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0E0E11] transition-colors duration-500 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif italic text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4 px-2">
            Client Experiences
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-light text-base sm:text-lg max-w-xl mx-auto px-2">
            Real reviews from WedMeGood — all 5-star experiences.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none p-0 m-0">
          {TESTIMONIALS.map((item, idx) => (
            <li key={idx}>
              <TestimonialCard testimonial={item} />
            </li>
          ))}
        </ul>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <a
            href="https://www.wedmegood.com/profile/Anchor-Ricky-Sebastian-1229000/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs uppercase tracking-widest font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors rounded-full min-h-[48px] flex items-center justify-center"
          >
            View all reviews on WedMeGood
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
