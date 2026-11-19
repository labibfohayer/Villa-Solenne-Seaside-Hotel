"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import DrawOnScroll from "./DrawOnScroll";
import { EASE_OUT } from "@/lib/motion";
import { useWordLines } from "@/lib/useWordLines";

interface StatementProps {
  label?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  ariaLabel?: string;
}

export default function StatementPlusConcept({
  label = "The villas",
  title = "Four modern villas in the olive hills, each with its own pool, terrace and view of the sea",
  description = "White walls, local stone and timber, built low into the hill so every room opens onto the garden and the light.",
  imageSrc,
  imageAlt = "",
  className,
  ariaLabel,
}: StatementProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const words = title ? title.split(/\s+/).filter(Boolean) : [];
  const wordLines = useWordLines(wordsContainerRef, title);

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? label ?? "Statement"}
      className={clsx(
        "relative z-10 overflow-hidden bg-background py-[var(--section-space)] text-foreground",
        className
      )}
    >
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          aria-hidden={imageAlt === "" ? true : undefined}
          loading="lazy"
          decoding="async"
          style={shouldReduceMotion ? undefined : { y: parallaxY }}
          className="pointer-events-none absolute -left-[4vw] -top-[6%] w-[42vw] max-w-[34rem] object-contain lg:w-[28vw]"
        />
      )}

      <div className="relative mx-auto flex w-[var(--container)] flex-col items-center text-center">
        {/* Top Label */}
        {label && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]"
          >
            {label}
          </motion.p>
        )}

        {/* Display Heading with Superscript Plus Signs */}
        {words.length > 0 && (
          <h2
            aria-label={title}
            className="mt-[clamp(1.5rem,3vw,2.5rem)] max-w-[10.5em] text-[length:clamp(2rem,1.2rem+2.9vw,3.5rem)] uppercase leading-[0.98] tracking-[-0.01em] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
          >
            <motion.div
              ref={wordsContainerRef}
              aria-hidden="true"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {words.flatMap((word, idx) => {
                const lineIdx = wordLines[idx] ?? 0;
                const wordVariants = {
                  hidden: { y: "105%" },
                  show: {
                    y: "0%",
                    transition: {
                      duration: 1.2,
                      ease: EASE_OUT,
                      delay: lineIdx * 0.08,
                    },
                  },
                };
                const isEndOfLine =
                  idx === words.length - 1 || (wordLines[idx + 1] ?? 0) !== lineIdx;

                return [
                  <div
                    key={idx}
                    data-word={true}
                    className="relative inline-block align-top"
                  >
                    <div className="block overflow-hidden pb-[0.08em]">
                      <motion.div variants={wordVariants} className="block">
                        {word}
                      </motion.div>
                    </div>

                    {isEndOfLine && (
                      <div className="absolute left-full top-0 overflow-hidden pb-[0.08em] pl-[0.15em]">
                        <motion.div variants={wordVariants} className="block">
                          <sup className="align-[0.9em] text-[0.32em] leading-none font-bold">
                            +
                          </sup>
                        </motion.div>
                      </div>
                    )}
                  </div>,
                  idx < words.length - 1 ? " " : null,
                ];
              })}
            </motion.div>
          </h2>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
            className="mt-[clamp(2rem,4vw,3.5rem)] max-w-[24rem] text-balance text-[length:var(--text-body)] leading-[1.55] text-muted-foreground"
          >
            {description}
          </motion.p>
        )}

        {/* Star Compass Rose SVG */}
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="mt-[clamp(2rem,4vw,3rem)] h-8 w-8 text-current"
        >
          <path
            d="M20 4 V36 M4 20 H36 M8.7 8.7 L31.3 31.3 M31.3 8.7 L8.7 31.3"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="3"
            stroke="currentColor"
            strokeWidth={1}
            fill="none"
          />
        </svg>

        {/* Vertical Hairline */}
        <div className="mt-6 h-12 w-px">
          <DrawOnScroll
            d="M0.5 0 V48"
            viewBox="0 0 1 48"
            strokeWidth={1}
            className="h-12 text-current opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
