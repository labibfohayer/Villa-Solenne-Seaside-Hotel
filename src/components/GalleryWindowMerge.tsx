"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import EraArchWindow from "./EraArchWindow";
import { GalleryItem } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";

interface GalleryProps {
  word?: string;
  quote?: string;
  credit?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: GalleryItem[];
  className?: string;
  ariaLabel?: string;
}

export default function GalleryWindowMerge({
  word = "Mallorca",
  quote = "We built low into the hill and kept every olive tree we found.",
  credit = "Marta Roig, architect of the villas",
  imageSrc = "/images/woman-enjoying-book-while-traveling-1600.webp",
  imageAlt = "Guest reading under a timber pergola on a white terrace",
  items = [],
  className,
  ariaLabel,
}: GalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  // Dual window merge clipPath math
  const w = [0, 0.55, 0.8];
  const pTop = useTransform(scrollYProgress, w, [10, 18.5, 0]);
  const pRight = useTransform(scrollYProgress, w, [56, 50, 0]);
  const pBottom = useTransform(scrollYProgress, w, [45, 18.5, 0]);
  const pLeft = useTransform(scrollYProgress, w, [1, 1, 0]);
  const clipLeft = useMotionTemplate`inset(${pTop}% ${pRight}% ${pBottom}% ${pLeft}%)`;

  const fTop = useTransform(scrollYProgress, w, [45, 18.5, 0]);
  const fRight = useTransform(scrollYProgress, w, [1, 1, 0]);
  const fBottom = useTransform(scrollYProgress, w, [10, 18.5, 0]);
  const fLeft = useTransform(scrollYProgress, w, [56, 50, 0]);
  const clipRight = useMotionTemplate`inset(${fTop}% ${fRight}% ${fBottom}% ${fLeft}%)`;

  const dividerOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.62], [0, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1.12, 1]);
  const titleY = useTransform(scrollYProgress, [0.58, 0.8], ["105%", "0%"], {
    ease: (t) => 1 - Math.pow(1 - t, 3),
  });
  const quoteOpacity = useTransform(scrollYProgress, [0.72, 0.86], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.72, 0.86], [24, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);

  const fontVw = (180 / Math.max(word.length, 6)).toFixed(1);

  // Lower carousel
  const count = items.length;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: count > 1,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      ref={containerRef}
      aria-label={ariaLabel ?? word ?? "Gallery"}
      data-scene={true}
      className={clsx(
        "relative bg-background py-[var(--section-space)] text-foreground",
        className
      )}
    >
      {/* Desktop 300svh Dual Window Merge Scene */}
      {!shouldReduceMotion && (
        <div ref={sceneRef} className="relative hidden h-[300svh] lg:block">
          <div className="sticky top-0 h-svh w-full overflow-hidden">
            {/* Left Window */}
            <motion.div style={{ clipPath: clipLeft }} className="absolute inset-0">
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                style={{ scale: imageScale }}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Right Window */}
            <motion.div
              aria-hidden="true"
              style={{ clipPath: clipRight }}
              className="absolute inset-0"
            >
              <motion.img
                src={imageSrc}
                alt=""
                loading="lazy"
                style={{ scale: imageScale }}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Center Hairline Divider */}
            <motion.div
              aria-hidden="true"
              style={{ opacity: dividerOpacity }}
              className="absolute left-1/2 top-[18.5%] h-[63%] w-px -translate-x-1/2 bg-background"
            />

            {/* Bottom Gradient Veil */}
            <motion.div
              aria-hidden="true"
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
            />

            {/* Title Centered at Top */}
            <div className="absolute inset-0 flex flex-col items-center justify-start px-[var(--gutter)] pt-[4svh] text-center text-white">
              <div className="overflow-hidden pb-[0.06em]">
                <motion.h2
                  style={{
                    y: titleY,
                    fontSize: `min(calc(var(--text-display) * 1.6), ${fontVw}vw)`,
                  }}
                  className="uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
                >
                  {word}
                </motion.h2>
              </div>
            </div>

            {/* Quote and Architect Credit */}
            {(quote || credit) && (
              <motion.div
                style={{ opacity: quoteOpacity, y: quoteY }}
                className="absolute inset-x-0 bottom-[clamp(2rem,6svh,4rem)] mx-auto flex w-[var(--container)] flex-col items-center gap-3 text-center text-white"
              >
                {quote && (
                  <p className="max-w-[34rem] text-balance text-[length:clamp(1.125rem,1.4vw,1.35rem)] leading-[1.4]">
                    {quote}
                  </p>
                )}
                {credit && (
                  <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                    {credit}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Mobile/Tablet Fallback Poster */}
      <div
        className={clsx(
          "relative h-[85svh] min-h-[28rem] w-full overflow-hidden",
          !shouldReduceMotion && "lg:hidden"
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
        />
        <div className="absolute inset-0 flex items-start justify-center px-[var(--gutter)] pt-[6svh] text-center text-white">
          <div className="overflow-hidden pb-[0.06em]">
            <motion.h2
              initial={shouldReduceMotion ? false : { y: "105%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
              style={{
                fontSize: `min(calc(var(--text-display) * 1.2), 18vw, ${fontVw}vw)`,
              }}
              className="uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
            >
              {word}
            </motion.h2>
          </div>
        </div>

        {(quote || credit) && (
          <div className="absolute inset-x-0 bottom-8 mx-auto flex w-[var(--container)] flex-col items-center gap-3 text-center text-white">
            {quote && (
              <p className="max-w-[34rem] text-balance text-[length:var(--text-body)] leading-[1.4]">
                {quote}
              </p>
            )}
            {credit && (
              <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                {credit}
              </p>
            )}
          </div>
        )}
      </div>

      {/* 4-Photo Arch Carousel */}
      {count > 0 && (
        <div className="mx-auto mt-[var(--section-space)] w-[var(--container)]">
          <div ref={emblaRef} className="overflow-hidden">
            <ul className="flex">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${count}`}
                  className="min-w-0 shrink-0 grow-0 basis-full px-[calc(var(--gap)/2)] lg:basis-[78%]"
                >
                  <div className="border border-foreground/20 p-2">
                    <EraArchWindow className="aspect-[4/3] w-full rounded-[var(--radius-image)] lg:aspect-[16/9]">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        loading="lazy"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </EraArchWindow>
                  </div>
                  <p
                    className={clsx(
                      "mt-4 text-center text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground transition-opacity duration-[var(--dur-base)] [overflow-wrap:anywhere]",
                      idx === selectedIndex ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {count > 1 && (
            <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/40 transition-colors duration-[var(--dur-fast)] hover:border-foreground"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M15 8H2M7 3 2 8l5 5" />
                </svg>
              </button>

              <div className="flex items-center gap-4 text-[length:var(--text-label)] font-semibold tabular-nums">
                <p aria-hidden="true">{selectedIndex + 1}</p>
                <div aria-hidden="true" className="h-px w-16 bg-current" />
                <p aria-hidden="true">{count}</p>
              </div>

              <button
                type="button"
                aria-label="Next photo"
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/40 transition-colors duration-[var(--dur-fast)] hover:border-foreground"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
