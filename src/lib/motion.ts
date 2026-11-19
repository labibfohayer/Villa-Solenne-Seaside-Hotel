export const EASE_OUT = [0.25, 1, 0.5, 1] as const;
export const EASE_IN_OUT = [0.75, 0, 0.25, 1] as const;
export const EASE_DIVE = [0.6, 0, 0, 1] as const;

export const DUR_FAST = 0.4;
export const DUR_BASE = 0.8;
export const DUR_SLOW = 1.2;

export const maskedRiseVariants = (delay: number = 0) => ({
  hidden: { y: "105%" },
  show: {
    y: "0%",
    transition: {
      duration: DUR_SLOW,
      ease: EASE_OUT,
      delay,
    },
  },
});

export const scriptDrawVariants = (delay: number = 0) => ({
  hidden: { clipPath: "inset(-20% 100% -20% 0%)" },
  show: {
    clipPath: "inset(-20% 0% -20% 0%)",
    transition: {
      duration: DUR_SLOW,
      ease: EASE_IN_OUT,
      delay,
    },
  },
});
