
"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const video1 = new URL("../assets/videos/WhatsApp Video 2026-02-03 at 18.20.50.mp4", import.meta.url).href;
const video2 = new URL("../assets/videos/WhatsApp Video 2026-02-03 at 18.21.31.mp4", import.meta.url).href;
const video3 = new URL("../assets/videos/WhatsApp Video 2026-02-03 at 18.22.59.mp4", import.meta.url).href;
const video4 = new URL("../assets/videos/winner.mp4", import.meta.url).href;
const video5 = new URL("../assets/videos/03.mp4", import.meta.url).href;
const video6 = new URL("../assets/videos/WhatsApp Video 2026-02-08 at 11.38.40.mp4", import.meta.url).href;

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.videoSrc ?? card.src} card={card} index={index} />
  ));

  return (
    <section id="showcase" className="w-full bg-slate-50 dark:bg-[#0E0E11] transition-colors duration-500 py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="font-serif italic text-2xl sm:text-3xl md:text-6xl text-slate-900 dark:text-white leading-tight">
          Moments captured <br /> across the globe.
        </h2>
        <p className="mt-4 sm:mt-6 text-slate-500 dark:text-slate-400 font-light text-base sm:text-lg max-w-xl">
          From high-stakes boardrooms to electric stadiums, explore the versatility of Ricky Sebastian and the precision of R Events.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = ({ text }: { text: string }) => {
  return (
    <div className="space-y-8">
      <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-14 rounded-3xl">
        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-2xl font-light leading-relaxed">
          {text}
        </p>
      </div>
      <img
        src="https://picsum.photos/seed/event/1200/800"
        alt="Event Detail"
        className="w-full rounded-3xl object-cover aspect-video grayscale dark:brightness-75 transition-all hover:grayscale-0"
      />
    </div>
  );
};

const data = [
  {
    category: "Corporate Sports",
    title: "Football & Sports Events.",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    videoSrc: video6,
    content: <DummyContent text="R Events brings the same energy and precision to the field — hosting football and corporate sports events that keep the crowd on their feet." />,
  },
  {
    category: "Moments",
    title: "Captured across the globe.",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    videoSrc: video1,
    content: <DummyContent text="Ricky Sebastian and R Events in action — hosting, energy, and precision on stage." />,
  },
  {
    category: "Moments",
    title: "Events that resonate.",
    src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    videoSrc: video2,
    content: <DummyContent text="From corporate galas to celebrations — every moment anchored with clarity and presence." />,
  },
  {
    category: "Moments",
    title: "Stories from the stage.",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    videoSrc: video3,
    content: <DummyContent text="Destination weddings, international forums, and high-energy events — all delivered with the same care." />,
  },
  {
    category: "Moments",
    title: "Energy on stage.",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    videoSrc: video4,
    content: <DummyContent text="Ricky brings presence and precision to every event — from intimate gatherings to large-scale celebrations." />,
  },
  {
    category: "Moments",
    title: "Moments that matter.",
    src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    videoSrc: video5,
    content: <DummyContent text="Capturing the pulse of the room and keeping guests engaged from start to finish." />,
  },
];
