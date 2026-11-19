"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { EASE_OUT, EASE_IN_OUT, EASE_DIVE } from "@/lib/motion";

interface HeroProps {
  title?: string;
  script?: string;
  labelLeft?: string;
  labelRight?: string;
  marquee?: string[];
  imageSrc?: string;
  imageAlt?: string;
  cta?: {
    text: string;
    href: string;
  };
  intro?: boolean;
  introDelay?: number;
}

const StarMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => (
      <line
        key={angle}
        x1="20"
        y1="4"
        x2="20"
        y2="36"
        stroke="currentColor"
        strokeWidth="1"
        transform={`rotate(${angle} 20 20)`}
      />
    ))}
  </svg>
);

export default function HeroArchPoster({
  title = "Villa Solenne",
  script = "Mallorca",
  labelLeft = "Four villas",
  labelRight = "one quiet hill",
  marquee = ["Own pool", "Olive hills", "Sea air"],
  imageSrc = "/images/luxury-villa-arches-pool-1600.webp",
  imageAlt = "Stone villa with arched loggia, roses and striped loungers by the pool",
  cta = { text: "Book a villa", href: "#footer" },
  intro = true,
  introDelay = 0,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const isIntroActive = intro && !shouldReduceMotion;
  const [isIntroComplete, setIsIntroComplete] = useState(!isIntroActive);

  const [dimensions, setDimensions] = useState(() => {
    return {
      W: typeof window !== "undefined" ? window.innerWidth : 1440,
      H: typeof window !== "undefined" ? window.innerHeight : 900,
      start: (typeof window !== "undefined" ? window.innerWidth : 1440) * 0.26,
      risen: (typeof window !== "undefined" ? window.innerWidth : 1440) * 0.34,
      gap: (typeof window !== "undefined" ? window.innerWidth : 1440) * 0.02,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isLg = w >= 880;
      setDimensions({
        W: w,
        H: h,
        start: w * (isLg ? 0.26 : 0.5),
        risen: w * (isLg ? 0.34 : 0.64),
        gap: w * (isLg ? 0.02 : 0.035),
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const scrollNorm = useTransform(scrollY, (y) =>
    Math.min(1, Math.max(0, y / (dimensions.H || 900)))
  );
  const imageParallax = useTransform(scrollNorm, [0, 0.5], ["0%", "-8%"]);
  const contentParallax = useTransform(scrollNorm, [0, 0.4], ["0vh", "-80vh"]);

  // Magnetic Button Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Typography word measurements
  const words = title.split(/\s+/).filter(Boolean);
  const maxWordLen = Math.max(1, ...words.map((w) => w.length));
  const fitStyles = {
    "--fit": `${150 / maxWordLen}vw`,
    "--fit-lg": `${110 / maxWordLen}vw`,
  } as React.CSSProperties;
  const wordCharOffsets = words.map((_, i) =>
    words.slice(0, i).join("").length
  );

  const DURATION_TOTAL = 2.7;
  const TIME_MID = 1.05;
  const TIME_RISE = 1.8;

  const titleStartDelay = isIntroActive ? introDelay + TIME_RISE + 0.05 : introDelay;
  const scriptStartDelay = isIntroActive
    ? introDelay + TIME_RISE + 0.35
    : introDelay + words.join("").length * 0.03 + 0.4;
  const marqueeStartDelay = isIntroActive
    ? introDelay + TIME_RISE + 0.6
    : scriptStartDelay + 0.2;

  const { W, H } = dimensions;
  const Y_START = H * 1.04;
  const Y_RISEN = H * 0.2;
  const Y_END = -H * 0.45;
  const W_END = W * 1.6;

  const archClip = (extra: number) => {
    const calc = (w: number, top: number, width: number) => {
      const left = (w - width) / 2;
      const radius = width / 2;
      return `inset(${top}px ${left}px 0px ${left}px round ${radius}px ${radius}px 0px 0px)`;
    };
    return [
      calc(W, Y_START - extra, dimensions.start + extra * 2),
      calc(W, Y_START - extra, dimensions.start + extra * 2),
      calc(W, Y_RISEN - extra, dimensions.risen + extra * 2),
      calc(W, Y_END - extra, W_END + extra * 2),
    ];
  };

  const archTransition = {
    duration: DURATION_TOTAL,
    delay: introDelay,
    times: [0, TIME_MID / DURATION_TOTAL, TIME_RISE / DURATION_TOTAL, 1],
    ease: ["linear", EASE_IN_OUT, EASE_DIVE] as any,
  };

  const renderLetterByLetter = (
    text: string,
    delayBase: number,
    delayStep: number
  ) =>
    Array.from(text).map((char, idx) => (
      <motion.div
        key={idx}
        className="inline-block whitespace-pre"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.6,
          ease: EASE_OUT,
          delay: introDelay + delayBase + idx * delayStep,
        }}
      >
        {char}
      </motion.div>
    ));

  const marqueeList = marquee.length ? marquee : [""];

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      className="sticky top-0 z-[-1] h-svh bg-deep text-deep-foreground"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Intro Sequence Background Scene */}
        {!isIntroComplete && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: introDelay + TIME_RISE + 0.1 }}
            className="pointer-events-none absolute inset-0"
          >
            {/* Border frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: introDelay + 0.1 }}
              className="absolute inset-[0.75rem] rounded-[1.25rem] border border-deep-foreground/10 lg:inset-[1rem]"
            />

            {/* Giant Faint Cursive Watermark */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1, delay: introDelay + 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap [font-family:var(--font-script)] text-[38vw] leading-none normal-case"
            >
              {script}
            </motion.p>

            {/* Rotating Star mark at top */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: introDelay + 0.2 }}
              className="absolute left-1/2 top-[2rem] -ml-[0.875rem] size-[1.75rem] lg:top-[2.5rem]"
            >
              <StarMark className="size-full" />
            </motion.div>

            {/* Center Intro Words & Drawn Line */}
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center">
              {labelLeft && (
                <div className="absolute right-[calc(50%+clamp(8rem,16vw,15rem))] hidden overflow-hidden text-[length:var(--text-label)] uppercase tracking-[0.6em] lg:block">
                  {renderLetterByLetter(labelLeft, 0.35, 0.04)}
                </div>
              )}

              <div className="relative flex flex-col items-center">
                <div
                  style={fitStyles}
                  className="w-min text-center [font-family:var(--font-heading)] text-[length:min(clamp(1.625rem,4.4vw,4rem),var(--fit))] uppercase leading-[0.86] tracking-[-0.02em]"
                >
                  {words.flatMap((word, idx) => [
                    <div
                      key={idx}
                      className="inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-top"
                    >
                      {renderLetterByLetter(word, 0.2 + idx * 0.12, 0.025)}
                    </div>,
                    idx < words.length - 1 ? " " : null,
                  ])}
                </div>

                {script && (
                  <motion.p
                    initial={{ clipPath: "inset(-30% 100% -30% 0%)" }}
                    animate={{ clipPath: "inset(-30% 0% -30% 0%)" }}
                    transition={{
                      duration: 0.8,
                      ease: EASE_IN_OUT,
                      delay: introDelay + 0.55,
                    }}
                    className="mt-[0.1em] self-end -rotate-6 whitespace-nowrap [font-family:var(--font-script)] text-[clamp(1.5rem,2.6vw,2.4rem)] leading-none normal-case"
                  >
                    {script}
                  </motion.p>
                )}

                <div className="absolute top-[calc(100%+clamp(4rem,12vh,7rem))] h-[3.75rem] w-px bg-deep-foreground/15">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.9,
                      ease: EASE_IN_OUT,
                      delay: introDelay + 0.3,
                    }}
                    className="h-full w-full origin-top bg-deep-foreground/70"
                  />
                </div>
              </div>

              {labelRight && (
                <div className="absolute left-[calc(50%+clamp(8rem,16vw,15rem))] hidden overflow-hidden whitespace-nowrap text-[length:var(--text-label)] uppercase tracking-[0.6em] lg:block">
                  {renderLetterByLetter(labelRight, 0.35, 0.04)}
                </div>
              )}
            </div>

            {/* Bottom info tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: introDelay + 0.6 }}
              className="absolute inset-x-0 bottom-[2rem] flex flex-col items-center gap-1 text-center text-[0.5625rem] font-semibold uppercase tracking-[0.18em] lg:bottom-[2.5rem]"
            >
              <p>{title}</p>
              <p className="opacity-70">
                {[labelLeft, labelRight].filter(Boolean).join(" ")}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Outer Arch Border Rings */}
        {!isIntroComplete && (
          <>
            <motion.div
              aria-hidden="true"
              initial={{ clipPath: archClip(dimensions.gap)[0] }}
              animate={{ clipPath: archClip(dimensions.gap) }}
              transition={archTransition}
              className="pointer-events-none absolute inset-0 bg-deep-foreground/20"
            />
            <motion.div
              aria-hidden="true"
              initial={{ clipPath: archClip(dimensions.gap - 1)[0] }}
              animate={{ clipPath: archClip(dimensions.gap - 1) }}
              transition={archTransition}
              className="pointer-events-none absolute inset-0 bg-deep"
            />
          </>
        )}

        {/* Revealed Main Hero Image & Full Content */}
        <motion.div
          initial={isIntroActive ? { clipPath: archClip(0)[0] } : false}
          animate={
            isIntroComplete
              ? { clipPath: "inset(0px 0px 0px 0px round 0px 0px 0px 0px)" }
              : { clipPath: archClip(0) }
          }
          transition={isIntroComplete ? { duration: 0 } : archTransition}
          onAnimationComplete={() => setIsIntroComplete(true)}
          className="absolute inset-0 text-white"
        >
          {/* Background Image Container with Settle Animation */}
          <motion.div
            initial={isIntroActive ? { scale: 0.8, y: "-20vh" } : false}
            animate={{ scale: [0.8, 0.8, 1], y: ["-20vh", "-20vh", "0vh"] }}
            transition={
              isIntroActive
                ? {
                    duration: DURATION_TOTAL,
                    delay: introDelay,
                    times: [0, TIME_RISE / DURATION_TOTAL, 1],
                    ease: ["linear", EASE_DIVE] as any,
                  }
                : { duration: 0 }
            }
            className="absolute inset-0 origin-bottom"
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              loading="eager"
              style={shouldReduceMotion ? undefined : { y: imageParallax }}
              className="absolute inset-x-0 top-0 h-[110%] w-full origin-[50%_75%] object-cover object-center"
            />
            {/* Dark contrast overlays */}
            <div className="absolute inset-x-0 top-0 h-[110%] bg-black/25" />
            <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/25 to-transparent" />
            <div className="absolute inset-x-0 top-full h-[10%] bg-black/25" />
          </motion.div>

          {/* Foreground Hero Poster Content */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: contentParallax }}
            className="relative mx-auto flex h-full w-[var(--container)] flex-col items-center pt-[7.5rem] lg:pt-[clamp(4.5rem,9vh,7rem)]"
          >
            <div className="grid w-full grid-cols-2 items-end justify-items-center gap-x-[1.5rem] gap-y-[2rem] lg:grid-cols-[1fr_auto_1fr] lg:gap-[4vw]">
              {/* Left Side Label */}
              <div className="order-2 justify-self-start overflow-hidden lg:order-1 lg:justify-self-end lg:pb-[1.5em]">
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: titleStartDelay + 0.3,
                  }}
                  className="[font-family:var(--font-heading)] text-[length:6vw] uppercase leading-none lg:text-[clamp(1rem,1.5vw,1.375rem)]"
                >
                  {labelLeft}
                </motion.p>
              </div>

              {/* Main Center Title & Overlaid Script */}
              <div className="relative order-1 col-span-2 flex flex-col items-center lg:order-2 lg:col-span-1">
                <h1
                  aria-label={title}
                  style={fitStyles}
                  className="w-min text-center text-[length:min(25vw,var(--fit))] leading-[0.86] [font-family:var(--font-heading)] uppercase tracking-[-0.02em] lg:text-[length:min(var(--text-display),var(--fit-lg))]"
                >
                  <div aria-hidden="true">
                    {words.flatMap((word, wIdx) => [
                      <div
                        key={wIdx}
                        className="inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-top"
                      >
                        {Array.from(word).map((char, cIdx) => (
                          <motion.div
                            key={cIdx}
                            className="inline-block whitespace-pre"
                            initial={shouldReduceMotion ? false : { y: "120%" }}
                            animate={{ y: "0%" }}
                            transition={{
                              duration: 0.7,
                              ease: EASE_OUT,
                              delay: titleStartDelay + (wordCharOffsets[wIdx] + cIdx) * 0.025,
                            }}
                          >
                            {char}
                          </motion.div>
                        ))}
                      </div>,
                      wIdx < words.length - 1 ? " " : null,
                    ])}
                  </div>
                </h1>

                {script && (
                  <motion.p
                    aria-hidden="true"
                    initial={
                      shouldReduceMotion
                        ? false
                        : { clipPath: "inset(-20% 100% -20% 0%)" }
                    }
                    animate={{ clipPath: "inset(-20% 0% -20% 0%)" }}
                    transition={{
                      duration: 0.9,
                      ease: EASE_IN_OUT,
                      delay: scriptStartDelay,
                    }}
                    className="pointer-events-none mt-[0.1em] self-end whitespace-nowrap [font-family:var(--font-script)] text-[length:12.5vw] leading-none normal-case -rotate-6 lg:text-[length:calc(var(--text-display)*0.5)]"
                  >
                    {script}
                  </motion.p>
                )}
              </div>

              {/* Right Side Label */}
              <div className="order-3 justify-self-end overflow-hidden lg:justify-self-start lg:pb-[1.5em]">
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: titleStartDelay + 0.3,
                  }}
                  className="[font-family:var(--font-heading)] text-[length:6vw] uppercase leading-none lg:text-[clamp(1rem,1.5vw,1.375rem)]"
                >
                  {labelRight}
                </motion.p>
              </div>
            </div>

            {/* Continuous Marquee */}
            {marquee.length > 0 && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: marqueeStartDelay }}
                className="mt-[clamp(2.5rem,6vh,4rem)] w-[min(100%,22rem)] overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]"
              >
                <div className="flex w-max animate-marquee-horizontal motion-reduce:animate-none">
                  {[0, 1].map((copyIdx) => (
                    <div
                      key={copyIdx}
                      aria-hidden={copyIdx === 1 ? true : undefined}
                      className="flex shrink-0"
                    >
                      {[...marqueeList, ...marqueeList, ...marqueeList].map(
                        (item, mIdx) => (
                          <p
                            key={mIdx}
                            className="shrink-0 px-[1rem] text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-80"
                          >
                            {item} ·
                          </p>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Magnetic Circular CTA Button */}
          {cta && (
            <motion.a
              href={cta.href}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: marqueeStartDelay + 0.1,
              }}
              style={{ x: springX, y: springY }}
              className="group absolute bottom-[clamp(1.5rem,5vh,3rem)] left-1/2 -ml-[3.5rem] flex size-[7rem] items-center justify-center rounded-full"
            >
              <svg
                viewBox="0 0 112 112"
                fill="none"
                className="absolute inset-0 size-full -rotate-90"
              >
                <circle
                  cx="56"
                  cy="56"
                  r="55"
                  stroke="currentColor"
                  strokeOpacity={0.35}
                  strokeWidth={1}
                />
                <circle
                  cx="56"
                  cy="56"
                  r="55"
                  stroke="currentColor"
                  strokeWidth={1}
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="transition-[stroke-dashoffset] duration-[var(--dur-slow)] ease-[var(--ease-in-out)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
                />
              </svg>
              <p className="relative max-w-[5rem] text-center text-[length:var(--text-label)] uppercase leading-[1.3] tracking-[var(--label-tracking)]">
                {cta.text}
              </p>
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
