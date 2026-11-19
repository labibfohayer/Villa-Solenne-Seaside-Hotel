"use client";

import { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import DrawOnScroll from "./DrawOnScroll";
import EraTitle from "./EraTitle";
import { EASE_OUT, EASE_IN_OUT } from "@/lib/motion";

interface AboutItem {
  imageSrc: string;
  imageAlt: string;
}

interface AboutProps {
  title?: string;
  label?: string;
  placeTitle?: string;
  description?: string;
  note?: string;
  items?: AboutItem[];
  className?: string;
}

export default function AboutArchCurve({
  title = "Above the cove",
  label = "Four villas in the olive hills of Mallorca",
  placeTitle = "Santanyí",
  description = "Four modern villas on a quiet hill above Cala s'Almunia, ten minutes from the market town of Santanyí, with pine woods and the sea on every side.",
  note = "Your own house, not a hotel",
  items = [
    {
      imageSrc: "/images/beautiful-aerial-view-cala-s-almunia-1600.webp",
      imageAlt: "Turquoise cove below pine woods and white houses",
    },
    {
      imageSrc: "/images/closeup-shot-growing-trees-field-sunlight-1600.webp",
      imageAlt: "Old olive trunks in a grove of long grass",
    },
  ],
  className,
}: AboutProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const arcId = useId().replace(/:/g, "");

  const count = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStep = (step: number) => {
    setActiveIndex((prev) => (prev + step + count) % count);
  };

  useEffect(() => {
    if (shouldReduceMotion || count < 2) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion, count, activeIndex]);

  return (
    <section
      ref={sectionRef}
      aria-label={title || "About"}
      className={clsx(
        "relative z-10 rounded-t-[50vw] bg-secondary pb-[var(--section-space)] text-secondary-foreground",
        className
      )}
    >
      {/* Semicircle Curved Title Arch */}
      <div className="relative mx-auto aspect-[2/1] w-full">
        {title && (
          <svg
            viewBox="0 0 1000 500"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <path
                id={arcId}
                d="M 110 500 A 390 390 0 0 1 890 500"
                fill="none"
              />
            </defs>
            <motion.text
              fill="currentColor"
              fontSize={54}
              textAnchor="middle"
              className="uppercase [font-family:var(--font-heading)]"
              initial={shouldReduceMotion ? false : { letterSpacing: "0em" }}
              whileInView={{ letterSpacing: "0.35em" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.2, ease: EASE_OUT }}
            >
              <textPath href={`#${arcId}`} startOffset="50%">
                {title}
              </textPath>
            </motion.text>
          </svg>
        )}
        {title && <h2 className="sr-only">{title}</h2>}

        {/* Central Sunburst & Vertical Drawn Line */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 pb-[clamp(1rem,3vw,3rem)]">
          <svg
            viewBox="0 0 40 40"
            aria-hidden="true"
            className="h-8 w-8 text-current lg:h-10 lg:w-10"
          >
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => (
              <line
                key={angle}
                x1="20"
                y1="4"
                x2="20"
                y2="36"
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(${angle} 20 20)`}
              />
            ))}
          </svg>

          <div className="h-12 w-px">
            <DrawOnScroll
              d="M0.5 0 V48"
              viewBox="0 0 1 48"
              strokeWidth={1}
              className="h-12 text-current opacity-50"
            />
          </div>

          {label && (
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="max-w-[16rem] text-balance text-center text-[length:var(--text-label)] uppercase leading-[1.5] tracking-[var(--label-tracking)]"
            >
              {label}
            </motion.p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto flex w-[var(--container)] flex-col items-center pt-[var(--section-space)]">
        {placeTitle && <EraTitle text={placeTitle} className="uppercase" />}

        {/* Framed Slider */}
        {count > 0 && (
          <motion.div
            ref={sliderRef}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-[clamp(2.5rem,5vw,4rem)] w-full max-w-[22rem] lg:max-w-[26rem]"
          >
            <motion.div
              variants={{
                hidden: { clipPath: "inset(100% 0% 0% 0%)" },
                show: {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: { duration: 1.2, ease: EASE_IN_OUT },
                },
              }}
              className="relative aspect-[16/9] w-full overflow-hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={activeIndex}
                  src={items[activeIndex].imageSrc}
                  alt={items[activeIndex].imageAlt}
                  loading="lazy"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: EASE_OUT }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

        {/* Slider Controls */}
        {count > 1 && (
          <div className="mt-6 flex items-center gap-6">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => handleStep(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth={1} />
              </svg>
            </button>

            <div className="flex items-center gap-4">
              <p className="text-[length:var(--text-label)] font-semibold tabular-nums">
                {activeIndex + 1}
              </p>
              <div aria-hidden="true" className="h-px w-16 bg-current/40">
                <motion.div
                  key={activeIndex}
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 5,
                    ease: "linear",
                  }}
                  className="h-px w-full origin-left bg-current"
                />
              </div>
              <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">
                {count}
              </p>
            </div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={() => handleStep(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth={1} />
              </svg>
            </button>
          </div>
        )}

        {description && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="mt-[clamp(2.5rem,5vw,4rem)] max-w-[34rem] text-balance text-center text-[length:var(--text-body)] leading-[1.55]"
          >
            {description}
          </motion.p>
        )}

        {note && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-center text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]"
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
