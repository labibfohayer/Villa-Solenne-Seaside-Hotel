import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        deep: {
          DEFAULT: "var(--deep)",
          foreground: "var(--deep-foreground)",
        },
        border: "var(--border)",
        ring: "var(--ring)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Instrument Serif", "Bodoni 72", "Didot", "Georgia", "serif"],
        body: ["var(--font-body)", "Archivo", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        script: ["var(--font-script)", "Pinyon Script", "Snell Roundhand", "cursive"],
        sans: ["var(--font-sans)", "Archivo", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        "marquee-horizontal": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-horizontal 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
