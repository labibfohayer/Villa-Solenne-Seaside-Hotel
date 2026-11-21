# 🌊 Villa Solenne — Seaside Hotel (Pixel-Perfect Replica)

[![Live Demo](https://img.shields.io/badge/Live_Demo-villasolenne.pages.dev-success?style=for-the-badge&logo=cloudflare&logoColor=white)](https://villasolenne.pages.dev/)

An exact, pixel-perfect reverse engineered replica of the **Seaside Hotel (Villa Solenne)** template from [webild.io](https://www.webild.io/templates/seaside-hotel). Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll** in the signature **Riviera Plum** palette.

---

## ✨ Features & Architecture

- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS.
- **Animations:** Framer Motion (line-by-line staggered titles, dual-window 300svh merge scene, settling zoom parallax, 3-stage hero arch curtain, interactive magnetic buttons, animated SVG seals).
- **Smooth Scrolling:** Lenis smooth scrolling with anchor link support.
- **Typography:** Exact Google Fonts with variable axes:
  - Heading: *Instrument Serif*
  - Body & Labels: *Archivo* (`wdth 100..125`, `wght 400..700`)
  - Accent / Script: *Pinyon Script*
- **Responsive:** Verified across 1920px (Desktop), 1440px (Laptop), 1024px (Tablet Landscape), 768px (Tablet Portrait), and 375px (Mobile).
- **Assets:** High-resolution WebP imagery with semantic alt tags and responsive aspect ratios.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/labibfohayer/Villa-Solenne-Seaside-Hotel.git
cd Villa-Solenne-Seaside-Hotel

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser for local development, or view the live production deployment at **[villasolenne.pages.dev](https://villasolenne.pages.dev/)**.

### Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📑 Reports & Audits

- [`ANALYSIS.md`](./ANALYSIS.md) — Comprehensive DOM, style token, and component reverse engineering specification.
- [`FONT_AUDIT.md`](./FONT_AUDIT.md) — Element-by-element font metrics and rendered style comparison table.
- [`ANIMATION_AUDIT.md`](./ANIMATION_AUDIT.md) — Detailed inspection of Framer Motion variants, easing curves, and keyframe delays.
- [`FINAL_REPORT.md`](./FINAL_REPORT.md) — Verification scorecard across all responsive viewports.

---

## 📄 License

MIT License. Designed & developed with love.
