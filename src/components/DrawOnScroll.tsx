"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import clsx from "clsx";

interface DrawOnScrollProps {
  d: string | string[];
  viewBox: string;
  className?: string;
  strokeWidth?: number;
  scrub?: boolean;
}

export default function DrawOnScroll({
  d,
  viewBox,
  className = "",
  strokeWidth = 2,
  scrub = true,
}: DrawOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const paths = Array.isArray(d) ? d : [d];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  const [, , width = 1, height = 1] = viewBox.split(/[\s,]+/).map(Number);
  const isHairline = height / width < 0.05;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={clsx("relative w-full text-foreground", className)}
    >
      <svg
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio={isHairline ? "none" : undefined}
        className={clsx("block w-full overflow-visible", isHairline ? "h-px" : "h-full")}
      >
        {paths.map((pathD, idx) =>
          shouldReduceMotion ? (
            <path
              key={idx}
              d={pathD}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : scrub ? (
            <motion.path
              key={idx}
              d={pathD}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: scrollYProgress, opacity }}
            />
          ) : (
            <motion.path
              key={idx}
              d={pathD}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 } as any}
              whileInView={{ pathLength: 1, opacity: 1 } as any}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{
                pathLength: {
                  duration: 1.6,
                  delay: idx * 0.15,
                  ease: [0.65, 0, 0.35, 1],
                },
                opacity: { duration: 0.01, delay: idx * 0.15 },
              }}
            />
          )
        )}
      </svg>
    </div>
  );
}
