"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { TestimonialItem } from "@/lib/data";

interface TestimonialProps {
  items?: TestimonialItem[];
  imageSrc?: string;
  imageAlt?: string;
  ariaLabel?: string;
}

function QuoteCard({ item, reduce }: { item: TestimonialItem; reduce?: boolean | null }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <figure
      ref={cardRef}
      className="mx-auto flex min-h-svh w-[var(--container)] flex-col items-center justify-center py-[var(--section-space)] text-center"
    >
      <motion.div
        style={reduce ? undefined : { opacity }}
        className="flex flex-col items-center"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 24"
          className="mb-8 h-5 w-7 fill-current opacity-80"
        >
          <path d="M0 24V14C0 6 4 1 12 0l1 3C8 4 6 7 6 11h6v13H0Zm19 0V14c0-8 4-13 12-14l1 3c-5 1-7 4-7 8h6v13H19Z" />
        </svg>

        <blockquote className="max-w-[48rem]">
          <p className="[font-family:var(--font-heading)] text-[length:var(--text-h2)] uppercase leading-[1] tracking-[var(--heading-tracking)] text-balance [overflow-wrap:anywhere]">
            {item.quote}
          </p>
        </blockquote>

        <figcaption className="mt-10 flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="mb-2 h-px w-10 bg-current opacity-60"
          />
          <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]">
            {item.name}
          </p>
          {item.role && (
            <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-75">
              {item.role}
            </p>
          )}
        </figcaption>
      </motion.div>
    </figure>
  );
}

export default function TestimonialPhotoQuote({
  items = [],
  imageSrc = "/images/santorini-garden-1600.webp",
  imageAlt = "White villa with bougainvillea",
  ariaLabel = "Guest words",
}: TestimonialProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel}
      className="relative -mb-[100svh] text-white"
    >
      {/* Pinned Sticky Background Photo */}
      <div className="sticky top-0 h-svh overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"
        />
      </div>

      {/* Scrolling Testimonials Stack */}
      <div className="relative -mt-[100svh]">
        {items.map((item, idx) => (
          <QuoteCard key={idx} item={item} reduce={shouldReduceMotion} />
        ))}
      </div>

      {/* Spacer */}
      <div aria-hidden="true" className="h-svh" />
    </section>
  );
}
