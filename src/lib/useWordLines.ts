"use client";

import { useState, useEffect } from "react";

export function useWordLines(
  ref: React.RefObject<HTMLDivElement | null>,
  text: string
) {
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
