"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import clsx from "clsx";
import { DestinationItem } from "@/lib/data";
import { EASE_OUT, EASE_IN_OUT } from "@/lib/motion";

interface ProcessProps {
  aside?: string;
  items?: DestinationItem[];
  ariaLabel?: string;
  className?: string;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export default function ProcessRouteLine({
  aside = "From Solenne",
  items = [],
  ariaLabel,
  className,
}: ProcessProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const count = Math.max(items.length, 1);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: entryProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    const idx = Math.min(count - 1, Math.max(0, Math.floor(val * count + 0.5)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  // Slide 0: Expanding arch window clip-path
  const archTop = useTransform(entryProgress, (e) => 38 - 83 * clamp01(e));
  const archSides = useTransform(entryProgress, (e) => 24 - 69 * clamp01(e));
  const archClip = useMotionTemplate`inset(${archTop}% ${archSides}% 0% ${archSides}% round 9999px 9999px 0px 0px)`;

  const currentItem = items[Math.min(activeIndex, items.length - 1)];
  const titleWords = (currentItem?.title ?? "").split(" ");

  const wordVariants = (delayStep: number) => ({
    enter: { y: "105%" },
    show: {
      y: "0%",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: EASE_OUT,
        delay: shouldReduceMotion ? 0 : delayStep,
      },
    },
    leave: {
      y: "-105%",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: EASE_IN_OUT,
      },
    },
  });

  return (
    <section
      aria-label={ariaLabel ?? aside ?? "Getting here"}
      className={clsx("relative bg-background text-white", className)}
    >
      <div
        ref={sectionRef}
        style={{ height: `${100 + count * 65}svh` }}
        className="relative"
      >
        <div
          ref={stickyRef}
          className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden px-[var(--gutter)] text-center"
        >
          {/* Slide 0: Arch entrance */}
          {items[0] && (
            <motion.div
              style={shouldReduceMotion ? undefined : { clipPath: archClip }}
              className="absolute inset-0 overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={items[0].imageSrc}
                  alt={items[0].imageAlt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
              </div>
            </motion.div>
          )}

          {/* Slides 1..N: Vertical curtain wipe reveals */}
          {items.slice(1).map((item, i) => {
            const idx = i + 1;
            // Linear progress for this wipe:
            const wipeFraction = (val: number) => {
              const start = (idx - 0.9) / count;
              const end = idx / count;
              if (val < start) return 0;
              if (val > end) return 1;
              return (val - start) / (end - start);
            };

            return (
              <SlideWipe
                key={idx}
                item={item}
                progress={scrollYProgress}
                fraction={wipeFraction}
                reduce={shouldReduceMotion}
              />
            );
          })}

          {/* Header Tag */}
          {aside && (
            <p className="absolute left-1/2 top-[18svh] -translate-x-1/2 whitespace-nowrap text-[length:var(--text-label)] font-semibold uppercase tracking-[0.6em]">
              {aside}
            </p>
          )}

          {/* Center Dynamic Destination Text */}
          <div className="relative flex min-h-[1.2em] w-full flex-col items-center text-[length:var(--text-display)] leading-[var(--heading-leading)] [font-family:var(--font-heading)]">
            <AnimatePresence mode="wait" initial={false}>
              {currentItem && (
                <motion.div
                  key={activeIndex}
                  initial="enter"
                  animate="show"
                  exit="leave"
                  className="flex flex-col items-center"
                >
                  <h2 aria-label={currentItem.title} className="text-balance uppercase">
                    {titleWords.map((word, wIdx) => (
                      <span key={wIdx}>
                        <div
                          aria-hidden="true"
                          className="inline-block overflow-hidden pb-[0.06em] align-top"
                        >
                          <motion.div
                            variants={wordVariants(wIdx * 0.08)}
                            className="inline-block"
                          >
                            {word}
                          </motion.div>
                        </div>
                        {wIdx < titleWords.length - 1 && " "}
                      </span>
                    ))}
                  </h2>

                  {currentItem.description && (
                    <div className="mt-[clamp(1.25rem,3svh,2rem)] overflow-hidden">
                      <motion.p
                        variants={wordVariants(0.2 + titleWords.length * 0.08)}
                        className="[font-family:var(--font-body)] text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]"
                      >
                        {currentItem.description}
                      </motion.p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideWipe({
  item,
  progress,
  fraction,
  reduce,
}: {
  item: DestinationItem;
  progress: any;
  fraction: (v: number) => number;
  reduce?: boolean | null;
}) {
  const wipeVal = useTransform(progress, (v: number) => fraction(v));
  const outerY = useTransform(wipeVal, (e) => `${100 - 100 * e}%`);
  const innerY = useTransform(wipeVal, (e) => `${-100 + 100 * e}%`);

  if (reduce) return null;

  return (
    <motion.div style={{ y: outerY }} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y: innerY }} className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
        </div>
      </motion.div>
    </motion.div>
  );
}
