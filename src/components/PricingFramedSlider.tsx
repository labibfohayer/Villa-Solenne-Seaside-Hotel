"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import EraTitle from "./EraTitle";
import { VillaItem } from "@/lib/data";
import { EASE_IN_OUT } from "@/lib/motion";

interface PricingProps {
  title?: string;
  script?: string;
  items?: VillaItem[];
  className?: string;
  ariaLabel?: string;
}

export default function PricingFramedSlider({
  title = "The four villas",
  script = "stay",
  items = [],
  className,
  ariaLabel,
}: PricingProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const count = items.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: count > 1,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  // Autoplay 6s
  useEffect(() => {
    if (!emblaApi || isHovered || shouldReduceMotion || count < 2) return;
    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => window.clearInterval(timer);
  }, [emblaApi, isHovered, shouldReduceMotion, count]);

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? title}
      className={clsx(
        "relative z-10 -mt-16 text-secondary-foreground",
        className
      )}
    >
      <div className="relative z-10 bg-secondary py-[var(--section-space)] [clip-path:polygon(4rem_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%,0_4rem)]">
        <div className="mx-auto w-[var(--container)]">
          <EraTitle
            text={title}
            script={script}
            rule={true}
            className="max-w-[4.05em]"
          />

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mt-[clamp(2.5rem,5vw,4rem)]"
          >
            <motion.div
              variants={{
                hidden: { clipPath: "inset(100% 0% 0% 0%)" },
                show: {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: {
                    duration: 0.9,
                    ease: EASE_IN_OUT,
                  },
                },
              }}
            >
              <div ref={emblaRef} className="overflow-hidden">
                <ul className="flex">
                  {items.map((villa, idx) => (
                    <li
                      key={`${idx}-${villa.name}`}
                      aria-roledescription="slide"
                      aria-label={`${idx + 1} of ${count}`}
                      className="min-w-0 shrink-0 grow-0 basis-full"
                    >
                      <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[1fr_minmax(0,22rem)_1fr] lg:items-end xl:grid-cols-[1fr_minmax(0,26rem)_1fr]">
                        {/* Villa Image */}
                        {villa.imageSrc && (
                          <div className="order-1 mx-auto flex aspect-[4/5] w-full max-w-[26rem] flex-col overflow-hidden rounded-[var(--radius-image)] lg:order-2">
                            <img
                              src={villa.imageSrc}
                              alt={villa.imageAlt ?? ""}
                              loading="lazy"
                              className="min-h-0 w-full flex-1 object-cover"
                            />
                          </div>
                        )}

                        {/* Villa Name */}
                        <h3 className="order-2 text-center text-[length:var(--text-h1)] [font-family:var(--font-heading)] uppercase leading-[0.9] tracking-[-0.02em] [overflow-wrap:anywhere] lg:order-4 lg:col-span-3">
                          {villa.name}
                        </h3>

                        {/* Left Side: Specs List */}
                        {villa.specs && villa.specs.length > 0 && (
                          <dl className="order-3 grid grid-cols-2 gap-x-[var(--gap)] gap-y-6 lg:order-1 lg:grid-cols-1 lg:justify-items-end lg:text-right">
                            {villa.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="flex flex-col gap-1.5">
                                <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">
                                  {spec.label}
                                </dt>
                                <dd className="text-[length:var(--text-h3)] leading-none [font-family:var(--font-heading)] uppercase">
                                  {spec.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        )}

                        {/* Right Side: Price, Description & CTA */}
                        <div className="order-4 flex flex-col items-start gap-4 lg:order-3">
                          <div className="flex items-baseline gap-3">
                            <p className="text-[length:var(--text-h1)] leading-none [font-family:var(--font-heading)]">
                              {villa.price}
                            </p>
                            {villa.period && (
                              <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground">
                                {villa.period}
                              </p>
                            )}
                          </div>
                          {villa.description && (
                            <p className="max-w-[22rem] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">
                              {villa.description}
                            </p>
                          )}
                          {villa.cta && (
                            <a href={villa.cta.href} className="btn-secondary">
                              {villa.cta.text}
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Slider Controls */}
            {count > 1 && (
              <div className="mt-[clamp(2rem,4vw,3rem)] flex items-center justify-center gap-6">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>

                <div className="flex items-center gap-4">
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">
                    {selectedIndex + 1}
                  </p>
                  <div aria-hidden="true" className="h-px w-16 bg-current" />
                  <p aria-hidden="true" className="text-[length:var(--text-label)] font-semibold tabular-nums">
                    {count}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => emblaApi?.scrollNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth={1} />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
