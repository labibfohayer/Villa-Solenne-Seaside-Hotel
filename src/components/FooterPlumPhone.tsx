"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { FooterColumn } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";

interface FooterProps {
  phone?: string;
  email?: string;
  address?: string[];
  columns?: FooterColumn[];
  legal?: string;
  brand?: string;
  toTopText?: string;
  className?: string;
  ariaLabel?: string;
}

export default function FooterPlumPhone({
  phone = "+34 971 64 20 18",
  email = "stay@villasolenne.com",
  address = ["Camí de s'Almunia 7", "07650 Santanyí, Mallorca"],
  columns = [],
  legal = "Villa Solenne 2026. All rights reserved.",
  brand = "Villa Solenne",
  toTopText = "To top",
  className,
  ariaLabel,
}: FooterProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      id="footer"
      aria-label={ariaLabel ?? `${brand} contact`}
      className={clsx(
        "relative z-10 min-h-svh flex flex-col justify-between bg-deep pt-[var(--section-space)] pb-[clamp(1.5rem,3vw,2.5rem)] text-deep-foreground",
        className
      )}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col items-center text-center">
        {/* Star Compass Rose SVG */}
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="h-10 w-10 text-current"
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

        {/* Brand Name */}
        <p className="mt-6 text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-70">
          {brand}
        </p>

        {/* Giant Click-to-Call Phone Number */}
        <div className="mt-[clamp(2rem,5vw,4rem)] overflow-hidden pb-[0.06em]">
          <motion.a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { y: "105%" },
              show: { y: "0%", transition: { duration: 1.2, ease: EASE_OUT } },
            }}
            className="block text-balance text-[length:min(var(--text-display),11vw)] uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [overflow-wrap:anywhere]"
          >
            {phone}
          </motion.a>
        </div>

        {/* Email Link */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="btn-link mt-[clamp(1.5rem,3vw,2.5rem)] [overflow-wrap:anywhere]"
          >
            {email}
          </a>
        )}

        {/* Address Lines */}
        {address.length > 0 && (
          <div className="mt-6 flex flex-col gap-1">
            {address.map((line, idx) => (
              <p
                key={idx}
                className="text-[length:var(--text-small)] leading-[1.5] opacity-80"
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Footer Navigation Columns and Legal */}
      <div className="mx-auto mt-[var(--section-space)] w-[var(--container)] border-t border-deep-foreground/20 pt-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {columns.length > 0 && (
            <div className="grid grid-cols-2 gap-x-[var(--gap)] gap-y-8 lg:flex lg:gap-[clamp(2rem,5vw,5rem)]">
              {columns.map((col, idx) => (
                <nav
                  key={idx}
                  aria-label={col.title}
                  className="flex min-w-0 flex-col gap-3"
                >
                  <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60">
                    {col.title}
                  </p>
                  {col.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.href}
                      className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] [overflow-wrap:anywhere] transition-opacity hover:opacity-70"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
          )}

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <button type="button" onClick={scrollToTop} className="btn-link">
              {toTopText}
            </button>
            {legal && (
              <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60">
                {legal}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
