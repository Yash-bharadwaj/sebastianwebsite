"use client";

import React, { useState } from "react";
import type { Testimonial } from "../lib/testimonials";

const QUOTE_MAX_LENGTH = 220;

function StarRating({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          {star <= rating ? (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          ) : null}
        </svg>
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  const { quote, name, title, link, rating } = testimonial;
  const [expanded, setExpanded] = useState(false);
  const needsToggle = quote.length > QUOTE_MAX_LENGTH;
  const displayQuote =
    needsToggle && !expanded
      ? quote.slice(0, QUOTE_MAX_LENGTH).trim() + (quote.length > QUOTE_MAX_LENGTH ? "…" : "")
      : quote;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white px-6 py-6 dark:border-zinc-800 dark:bg-zinc-900/50 transition-colors duration-500 min-h-[280px] ${className}`}
    >
      <blockquote className="flex flex-col h-full">
        <StarRating rating={rating} className="mb-3" />
        <p className="text-sm leading-[1.65] font-light italic text-neutral-800 dark:text-gray-100 flex-1">
          "{displayQuote}"
        </p>
        {needsToggle && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 underline underline-offset-2"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
        <footer className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-1">
          <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-gray-200">
            {name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-gray-500">
            {title}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 mt-1"
          >
            View on WedMeGood →
          </a>
        </footer>
      </blockquote>
    </article>
  );
}

export { StarRating };
