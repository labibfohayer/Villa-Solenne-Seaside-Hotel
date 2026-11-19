"use client";

import { useRef, useState, useEffect, ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import DrawOnScroll from "./DrawOnScroll";
import { EASE_OUT, EASE_IN_OUT } from "@/lib/motion";

function useWordLines(ref: React.RefObject<HTMLDivElement | null>, text: string) {
  const [lines, setLines] = useState<number[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;
    let mounted = true;

    const measure = () => {
      const result: number[] = [];
      let lastTop = NaN;
      let lineIdx = -1;
      el.querySelectorAll("[data-word]").forEach((wordEl) => {
        const top = (wordEl as HTMLElement).offsetTop;
        if (lineIdx < 0 || Math.abs(top - lastTop) > 2) {
          lineIdx++;
          lastTop = top;
        }
        result.push(lineIdx);
      });
      setLines((prev) => (prev.join() === result.join() ? prev : result));
    };

    const schedule = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    measure();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => mounted && schedule());
    }

    const observer = new ResizeObserver(schedule);
    observer.observe(el);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [ref, text]);

  return lines;
}

interface EraTitleProps {
  text?: string;
  script?: string;
  as?: ElementType;
  align?: "center" | "left";
  rule?: boolean;
  delay?: number;
  play?: boolean;
  className?: string;
  scriptClassName?: string;
}

export default function EraTitle({
  text,
  script,
  as: Component = "h2",
  align = "center",
  rule = false,
  delay = 0,
  play,
  className,
  scriptClassName,
}: EraTitleProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const words = (text ?? "").split(/\s+/).filter(Boolean);
  const lineIndices = useWordLines(containerRef, text ?? "");
  const totalLines = words.length ? Math.max(0, ...lineIndices) + 1 : 0;

  if (!words.length && !script) return null;

  const animationControls =
    play === undefined
      ? {
          initial: shouldReduceMotion ? false : "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.3 },
        }
      : {
          initial: shouldReduceMotion ? false : "hidden",
          animate: play ? "show" : "hidden",
        };

  const wordVariant = (lineIndex: number) => ({
    hidden: { y: "105%" },
    show: {
      y: "0%",
      transition: {
        duration: 1.2,
        ease: EASE_OUT,
        delay: delay + lineIndex * 0.08,
      },
    },
  });

  const scriptVariant = {
    hidden: { clipPath: "inset(-20% 100% -20% 0%)" },
    show: {
      clipPath: "inset(-20% 0% -20% 0%)",
      transition: {
        duration: 1.2,
        ease: EASE_IN_OUT,
        delay: delay + 0.35 + totalLines * 0.08,
      },
    },
  };

  return (
    <div
      className={clsx(
        "flex w-full flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <motion.div className="relative" {...animationControls}>
        {words.length > 0 && (
          <Component
            aria-label={text}
            className={clsx(
              "text-[length:var(--text-h1)] [overflow-wrap:anywhere] uppercase [font-family:var(--font-heading)] leading-[var(--heading-leading)] tracking-[-0.02em]",
              className
            )}
          >
            <div ref={containerRef} aria-hidden="true">
              {words.flatMap((word, idx) => [
                <div
                  key={idx}
                  data-word
                  className="inline-block overflow-hidden pb-[0.06em] align-top"
                >
                  <motion.div
                    className="block"
                    variants={wordVariant(lineIndices[idx] ?? 0)}
                  >
                    {word}
                  </motion.div>
                </div>,
                idx < words.length - 1 ? " " : null,
              ])}
            </div>
          </Component>
        )}

        {script && (
          <motion.p
            aria-hidden={words.length ? true : undefined}
            className={clsx(
              "pointer-events-none [font-family:var(--font-script)] text-[length:calc(var(--text-h1)*0.62)] leading-none tracking-normal normal-case",
              words.length ? "ml-auto mt-[0.1em] w-max -rotate-6" : "relative",
              scriptClassName
            )}
            variants={scriptVariant}
          >
            {script}
          </motion.p>
        )}
      </motion.div>

      {rule && (
        <div className={clsx("h-12 w-px", script ? "mt-10" : "mt-6")}>
          <DrawOnScroll
            d="M0.5 0 V48"
            viewBox="0 0 1 48"
            strokeWidth={1}
            className="h-12 text-current opacity-50"
          />
        </div>
      )}
    </div>
  );
}
