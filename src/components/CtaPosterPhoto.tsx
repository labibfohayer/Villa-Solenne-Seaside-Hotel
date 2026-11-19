"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import EraTitle from "./EraTitle";
import { EASE_OUT } from "@/lib/motion";

interface CtaProps {
  title?: string;
  script?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  ariaLabel?: string;
}

export default function CtaPosterPhoto({
  title = "A villa of your own",
  script = "Mallorca",
  description = "Four villas, open April to October",
  imageSrc = "/images/umbrella-chair-around-swimming-pool-neary-1600.webp",
  imageAlt = "Lounger by the pool steps against a sunlit wall",
  primaryButton = { text: "Book a villa", href: "#footer" },
  secondaryButton = {
    text: "Call +34 971 64 20 18",
    href: "tel:+34971642018",
  },
  ariaLabel,
}: CtaProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? title}
      className="relative -mb-[100svh] h-[200svh] bg-deep text-white"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* Background Image with Settle Zoom */}
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          style={shouldReduceMotion ? undefined : { scale }}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

        {/* Foreground Content */}
        <div className="relative mx-auto flex w-[var(--container)] flex-col items-center text-center">
          <EraTitle
            text={title}
            script={script}
            className="max-w-[4.3em] text-[length:var(--text-display)] leading-[0.86] text-white"
            scriptClassName="text-[length:calc(var(--text-display)*0.42)] text-white"
          />

          {description && (
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 }}
              className="mt-14 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.4em]"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.65 }}
            className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:gap-10"
          >
            {primaryButton && (
              <a
                href={primaryButton.href}
                className="group relative flex size-28 items-center justify-center rounded-full p-3 text-center"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="absolute inset-0 size-full -rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="50" cy="50" r="49.5" className="opacity-45" />
                  <circle
                    cx="50"
                    cy="50"
                    r="49.5"
                    pathLength={1}
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    className="transition-[stroke-dashoffset] duration-[var(--dur-slow)] ease-[var(--ease-in-out)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0] motion-reduce:transition-none"
                  />
                </svg>
                <p className="relative text-[length:var(--text-label)] font-semibold uppercase leading-[1.3] tracking-[0.14em]">
                  {primaryButton.text}
                </p>
              </a>
            )}

            {secondaryButton && (
              <a href={secondaryButton.href} className="btn-secondary">
                <p>{secondaryButton.text}</p>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
