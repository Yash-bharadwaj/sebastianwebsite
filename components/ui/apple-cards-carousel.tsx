"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface CarouselProps {
  // Use React.ReactNode[] instead of JSX.Element[] to avoid 'Cannot find namespace JSX' error
  items: React.ReactNode[];
  initialScroll?: number;
}

export type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  videoSrc?: string;
  objectFit?: 'cover' | 'contain';
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-auto overflow-y-hidden overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y" }}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-3 sm:gap-4 pl-4 sm:pl-6",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-4 sm:mr-10 flex justify-end gap-2 container mx-auto px-4 sm:px-6 max-w-7xl">
          <button
            className="relative z-40 flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 disabled:opacity-20 transition-all touch-manipulation"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-slate-500 dark:text-slate-400" />
          </button>
          <button
            className="relative z-40 flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 disabled:opacity-20 transition-all touch-manipulation"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-slate-500 dark:text-slate-400" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const isVideoCard = !!card.videoSrc;

  return (
    <>
      {!isVideoCard && (
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-[100] h-screen overflow-auto flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 h-full w-full bg-black/60 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                ref={containerRef}
                className="relative z-[110] w-full max-w-5xl h-[80vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 shadow-2xl"
              >
                <div className="sticky top-0 right-0 z-[120] flex justify-end p-6 bg-gradient-to-b from-white dark:from-slate-900 to-transparent">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:scale-110 transition-transform"
                    onClick={handleClose}
                  >
                    <IconX className="h-6 w-6" />
                  </button>
                </div>
                <div className="px-6 pb-20 md:px-12">
                  <p className="text-xs uppercase tracking-[0.3em] font-medium text-blue-500 dark:text-blue-400 mb-4">
                    {card.category}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                    {card.title}
                  </h2>
                  <div className="py-10">{card.content}</div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}
      {isVideoCard ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 group md:h-[40rem] md:w-96"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1/3 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="relative z-40 p-8">
            <p className="text-left font-sans text-sm font-medium text-white/90 md:text-base uppercase tracking-widest">
              {card.category}
            </p>
            <h3 className="mt-2 max-w-xs text-left font-serif text-xl font-semibold [text-wrap:balance] text-white md:text-3xl leading-tight drop-shadow-md">
              {card.title}
            </h3>
          </div>
          <video
            src={card.videoSrc}
            muted
            loop
            playsInline
            autoPlay
            controls
            className="absolute inset-0 z-10 w-full h-full object-cover"
          />
        </motion.div>
      ) : (
        <motion.button
          onClick={handleOpen}
          className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 group md:h-[40rem] md:w-96 transition-transform hover:scale-[1.02]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-40 p-8">
            <p className="text-left font-sans text-sm font-medium text-white/80 md:text-base uppercase tracking-widest">
              {card.category}
            </p>
            <h3 className="mt-2 max-w-xs text-left font-serif text-xl font-semibold [text-wrap:balance] text-white md:text-3xl leading-tight">
              {card.title}
            </h3>
          </div>
          <BlurImage
            src={card.src}
            alt={card.title}
            className={cn("absolute inset-0 z-10", card.objectFit === 'contain' ? 'object-contain' : 'object-cover')}
          />
        </motion.button>
      )}
    </>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
}: {
  src: string;
  className?: string;
  alt: string;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-700",
        isLoading ? "blur-xl grayscale scale-110" : "blur-0 grayscale-0 scale-100",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt}
    />
  );
};