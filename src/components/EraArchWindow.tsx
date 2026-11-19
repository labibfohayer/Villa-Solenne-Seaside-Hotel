"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from "framer-motion";
import clsx from "clsx";

interface EraArchWindowProps {
  children: ReactNode;
  className?: string;
}

export default function EraArchWindow({ children, className }: EraArchWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const p = useTransform(scrollYProgress, [0, 0.5], [38, -45], { clamp: true });
  const m = useTransform(scrollYProgress, [0, 0.5], [24, -45], { clamp: true });
  const clipPath = useMotionTemplate`inset(${p}% ${m}% 0% ${m}% round 9999px 9999px 0px 0px)`;

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div
      ref={containerRef}
      className={clsx("relative overflow-hidden", className)}
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { clipPath }}
        className="absolute inset-0"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { scale, y }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
