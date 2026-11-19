# 🏛️ Deep Reverse-Engineering Analysis: Villa Solenne (Seaside Hotel Template)

> **Source URL:** `https://www.webild.io/templates/seaside-hotel`  
> **Direct Engine Origin:** `https://webild-mcp-components.vercel.app/templates/seaside-hotel`  
> **Template Kit Name:** `Era` ("Riviera Plum" Palette)  
> **Target Rebuild Stack:** Next.js 15 (App Router) + Tailwind CSS + Framer Motion + Lenis Smooth Scroll + Embla Carousel

---

## 📑 Table of Contents
1. [Executive Summary & Site Architecture](#1-executive-summary--site-architecture)
2. [Sitemap & Route Structure](#2-sitemap--route-structure)
3. [Section-by-Section Anatomy & Exact Content](#3-section-by-section-anatomy--exact-content)
4. [Design Tokens & Exact Style Guide](#4-design-tokens--exact-style-guide)
5. [Typography Hierarchy & Font System](#5-typography-hierarchy--font-system)
6. [Motion Vocabulary & Animation Engineering](#6-motion-vocabulary--animation-engineering)
7. [Asset & Media Catalog](#7-asset--media-catalog)
8. [Responsive Breakpoint Behaviors](#8-responsive-breakpoint-behaviors)
9. [Component Architecture & State Plan](#9-component-architecture--state-plan)

---

## 1. Executive Summary & Site Architecture

"Villa Solenne" (`seaside-hotel`) is an editorial luxury resort showcase template engineered around theatrical, slow-luxury visual storytelling. 
Key architectural characteristics:
- **Zero Standard Grids:** Rather than typical card grids, sections arrive as architectural cutouts (arches, semicircles, chamfers) sliding over sticky held full-bleed photography.
- **Three Core Alternate Colors:**
  1. **Warm Cream** (`#f3f3ec` / `--background`)
  2. **Deep Plum** (`#340c24` / `--deep` & `--primary`)
  3. **Powder Blue** (`#b5cedb` / `--secondary` & `--accent`)
- **Dual Serif/Script Typography:** Giant condensed high-contrast uppercase serif headings paired with delicate rotated cursive script words laid diagonally across them (`-rotate-6` or `-rotate-12`), with microscopic tracked monospace/grotesk label text.
- **Smooth Inertial Physics:** Governed by Lenis smooth scrolling (`lerp: 0.1, anchors: true`) and synchronized Framer Motion scroll triggers.

---

## 2. Sitemap & Route Structure

The original template operates as a unified luxury single-page application with deep anchor navigation and modal interactions:

| Route / Anchor | Component | Description |
| :--- | :--- | :--- |
| `/` | `Page` | Full resort landing page and interactive showcase |
| `/#hero` | `HeroArchPoster` | Initial 2.8s theatrical opening, arch reveal, marquee, magnetic CTA |
| `/#about` | `AboutArchCurve` | Semicircle arch curve, location introduction, framed 2-photo slider |
| `/#testimonial` | `TestimonialPhotoQuote` | Held background photography with scrolling dual guest testimonials |
| `/#statement` | `StatementPlusConcept` | Cream architectural statement with superscript `+` line breaks |
| `/#process` | `ProcessRouteLine` | "Getting Here" sticky 4-step destination journey with wipe transitions |
| `/#pricing` | `PricingFramedSlider` | "The Four Villas" chamfered blue slider with villa specs and pricing |
| `/#gallery` | `GalleryWindowMerge` | "The Island" 300svh dual-window merge animation & 4-photo arch carousel |
| `/#cta` | `CtaPosterPhoto` | Held sea-view closing poster with circular drawing CTA |
| `/#footer` | `FooterPlumPhone` | Deep plum contact portal, giant click-to-call, address, and legal links |
| `[Modal Dialog]` | `NavbarSealCorner (Mobile)` | Fullscreen mobile navigation overlay with rounded arch clip-path entrance |

---

## 3. Section-by-Section Anatomy & Exact Content

### Section 0: Fixed Navigation (`NavbarSealCorner`)
- **Left Badge:** A continuously rotating 100x100 SVG circular seal (`animate-[spin_30s_linear_infinite]`):
  - Text along path (`M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0`): `VILLA SOLENNE · VILLA SOLENNE ·`
  - Center sunburst icon: 8 rotated lines with central circle.
- **Right Header CTA:** Pill button (`rounded-full border border-current px-[1.25rem]`):
  - Label: `BOOK A VILLA`
  - Link: `#footer`
- **Desktop Scroll Gauge:** Fixed on left edge at `top-1/2 -translate-y-1/2`:
  - 8rem tall vertical track with `scaleY: scrollYProgress` fill
  - 2-digit numerical tracker: `00` to `99`
- **Mobile Menu Drawer:**
  - Dialog overlay triggered by hamburger button.
  - Clip-path entrance: `inset(0% 0% 100% 0% round 0 0 50vw 50vw)` to `inset(0% 0% 0% 0% round 0 0 0vw 0vw)` in 0.8s (`ease: [0.75, 0, 0.25, 1]`).

### Section 1: Hero Opening & Poster (`HeroArchPoster`)
- **Signature Opening Animation (2.8s total):**
  1. *Phase 1 (0s - 1.05s):* Deep plum background (`#340c24`), thin inner frame (`border border-white/10`).
  2. *Phase 2 (0.2s - 1.8s):* Faint script watermark (`Mallorca`, 38vw, `-rotate-12`), rotating star mark, left label `FOUR VILLAS` and right label `ONE QUIET HILL` rising letter-by-letter.
  3. *Phase 3 (0.3s - 1.2s):* Center title `VILLA SOLENNE` rises letter-by-letter; script `Mallorca` sweeps in via horizontal clip-path mask. Vertical centerline draws down.
  4. *Phase 4 (1.8s - 2.7s):* An arch window clip-path (`inset(...) round 50% 50% 0 0`) rises from bottom, framing `luxury-villa-arches-pool-1600.webp`, dives open past viewport edges into full-bleed.
- **Hero Foreground Elements:**
  - Marquee: Infinite horizontal loop of `OWN POOL · OLIVE HILLS · SEA AIR ·` (`32s linear infinite`).
  - Interactive Magnetic CTA Button: 7rem diameter circle `BOOK A VILLA` with animated SVG perimeter ring that traces on hover (`stroke-dashoffset: 0`) and spring mouse magnetic attraction.

### Section 2: About Arch Curve (`AboutArchCurve`)
- **Powder Blue Architectural Canopy (`bg-secondary rounded-t-[50vw]`):**
  - Curved Title on SVG Arc (`d="M 110 500 A 390 390 0 0 1 890 500"`): `ABOVE THE COVE`
  - Letter spacing animates on scroll view from `0em` to `0.35em`.
  - Sunburst 8-point compass star + vertical animated hairline (`DrawOnScroll`).
  - Label: `FOUR VILLAS IN THE OLIVE HILLS OF MALLORCA`
  - Location Title: `SANTANYÍ` with masked word rise.
  - Framed 16:9 Image Slider:
    - Photo 1: `beautiful-aerial-view-cala-s-almunia-1600.webp`
    - Photo 2: `closeup-shot-growing-trees-field-sunlight-1600.webp`
    - 5-second autoplay timer bar with fraction indicator (`1 / 2`) and circular prev/next buttons.
  - Body Description: `"Four modern villas on a quiet hill above Cala s'Almunia, ten minutes from the market town of Santanyí, with pine woods and the sea on every side."`
  - Note: `YOUR OWN HOUSE, NOT A HOTEL`

### Section 3: Testimonial Quotes (`TestimonialPhotoQuote`)
- **Pinned Full-Bleed Photography (`santorini-garden-1600.webp`):**
  - Pinned sticky for viewport duration with 30% black veil and bottom fade gradient.
- **Scrolling Quotes (Dual Items):**
  1. `"WE HAD THE POOL, THE OLIVE TREES AND THE SEA TO OURSELVES. IT NEVER FELT LIKE A HOTEL."`
     - Author: `CLARA WEISS`
     - Role: `GUEST FROM VIENNA`
  2. `"BREAKFAST ON THE TERRACE, A SWIM IN THE COVE, DINNER UNDER THE OLIVES. WE DID NOTHING ELSE."`
     - Author: `TOM AND ANNA REED`
     - Role: `GUESTS FROM LONDON`
  - Header SVG quotes icon (`viewBox="0 0 32 24"`) and centered hairline separator.

### Section 4: Architectural Statement (`StatementPlusConcept`)
- **Warm Cream Ground (`bg-background text-foreground`):**
  - Section Tag: `THE VILLAS`
  - Giant Statement Heading with Superscript Plus Signs (`<sup>+</sup>`):
    `FOUR MODERN VILLAS IN THE +`  
    `OLIVE HILLS, EACH WITH ITS +`  
    `OWN POOL, TERRACE AND +`  
    `VIEW OF THE SEA +`
  - Body Description: `"White walls, local stone and timber, built low into the hill so every room opens onto the garden and the light."`
  - Compass Rose SVG + vertical hairline.

### Section 5: The Journey / Getting Here (`ProcessRouteLine`)
- **Sticky Scenic Route (`height: 360svh`):**
  - Sticky header label: `FROM SOLENNE` (`top-[18svh] tracking-[0.6em]`).
  - Slide 1: Enters through expanding arch window:
    - Destination: `THE COVE` | Time: `5 min`
    - Image: `aegean-cove-drone-1600.webp`
  - Slide 2: Curtain wipe reveal from bottom:
    - Destination: `THE HARBOUR` | Time: `10 min`
    - Image: `ibiza-coast-boats-1600.webp`
  - Slide 3: Curtain wipe reveal:
    - Destination: `THE SALT PANS` | Time: `20 min`
    - Image: `konnos-bay-cape-1600.webp`
  - Slide 4: Curtain wipe reveal:
    - Destination: `THE COAST PATH` | Time: `25 min`
    - Image: `aegean-coast-path-drone-1600.webp`

### Section 6: Villa Accommodations (`PricingFramedSlider`)
- **Chamfered Powder Blue Geometry:**
  - Geometric clip-path: `polygon(4rem 0, calc(100%-4rem) 0, 100% 4rem, 100% 100%, 0 100%, 0 4rem)`
  - Title: `THE FOUR VILLAS` with cursive script `stay`.
  - Interactive Embla Carousel (3 Villas):
    1. **Olive Villa**
       - Image: `potted-plant-bed-1600.webp`
       - Specs: `GUESTS: 4` | `SIZE: 120 m2` | `POOL: 8 m`
       - Price: `€690` / `PER NIGHT`
       - Description: `"Two bedrooms in the olive grove, a plunge pool and a shaded dining terrace."`
       - CTA: `BOOK THIS VILLA` (`href="#footer"`)
    2. **Pine Villa**
       - Image: `luxury-modern-spa-exterior-architecture-1600.webp`
       - Specs: `GUESTS: 6` | `SIZE: 180 m2` | `POOL: 12 m`
       - Price: `€840` / `PER NIGHT`
       - Description: `"Three bedrooms under the pines, a long pool and a roof terrace for sunset."`
       - CTA: `BOOK THIS VILLA` (`href="#footer"`)
    3. **Sea Villa**
       - Image: `outdoor-swimming-pool-with-umbrella-chair-1600.webp`
       - Specs: `GUESTS: 8` | `SIZE: 240 m2` | `POOL: 16 m`
       - Price: `€1,150` / `PER NIGHT`
       - Description: `"Our largest villa, with a stone pool edge that looks straight down to the cove."`
       - CTA: `BOOK THIS VILLA` (`href="#footer"`)
  - Navigation: Prev/Next round buttons, progress counter `1 --- 3`, 6-second auto-advance on idle.

### Section 7: Island Gallery (`GalleryWindowMerge`)
- **300svh Dual-Window Merge Scene:**
  - Desktop: Left and right rectangular window cutouts holding `woman-enjoying-book-while-traveling-1600.webp` scroll closer and merge into a single seamless image with center divider line fading out.
  - Giant Title: `MALLORCA`
  - Quote: `"We built low into the hill and kept every olive tree we found."`
  - Credit: `Marta Roig, architect of the villas`
- **4-Slide Arch Carousel:**
  1. `The timber screens` - `trendy-modern-design-twolevel-apartment-with-1600.webp`
  2. `The long table` - `arrangement-table-seats-new-year-s-1600.webp`
  3. `Afternoon light` - `window-shadow-bedroom-wall-1600.webp`
  4. `The olive terrace` - `olive-trees-1600.webp`
  - Each slide inside decorative border frame with arch cutout, navigation buttons, and counter `1 --- 4`.

### Section 8: Closing Poster (`CtaPosterPhoto`)
- **Full-Bleed Sea View Poster (`umbrella-chair-around-swimming-pool-neary-1600.webp`):**
  - Settles from `scale: 1.15` to `1` as you scroll into it.
  - Title: `A VILLA OF YOUR OWN` with cursive script `Mallorca`.
  - Subtitle: `FOUR VILLAS, OPEN APRIL TO OCTOBER`
  - Primary CTA: Circle button `BOOK A VILLA` with full drawing perimeter ring.
  - Secondary CTA: Pill button `CALL +34 971 64 20 18` (`href="tel:+34971642018"`).
  - Negative bottom margin (`-mb-[100svh]`) enables footer to slide over.

### Section 9: Footer & Contact Portal (`FooterPlumPhone`)
- **Plum Ground (`#340c24` / `text-white`):**
  - Star compass icon + `VILLA SOLENNE`.
  - Giant Display Phone: `+34 971 64 20 18` (`href="tel:+34971642018"`).
  - Email: `STAY@VILLASOLENNE.COM` (`href="mailto:stay@villasolenne.com"`).
  - Address: `Camí de s'Almunia 7` / `07650 Santanyí, Mallorca`.
  - Footer Columns:
    - **STAY:** `Villas` (`#pricing`), `Getting here` (`#process`), `The island` (`#gallery`).
    - **VISIT:** `Getting here` (`#process`), `Gift cards` (`#footer`), `Private events` (`#footer`).
    - **FOLLOW:** `Instagram` (`#`), `Newsletter` (`#`).
  - Actions & Legal:
    - `TO TOP` button (smooth scrolling).
    - `Villa Solenne 2026. All rights reserved.`

---

## 4. Design Tokens & Exact Style Guide

```css
:root {
  /* Colors */
  --background: #f3f3ec;
  --foreground: #17233b;
  --card: #eae8dd;
  --card-foreground: #17233b;
  --primary: #340c24;
  --primary-foreground: #f3f3ec;
  --secondary: #b5cedb;
  --secondary-foreground: #17233b;
  --muted: #eae8dd;
  --muted-foreground: #3f4a5e;
  --accent: #b5cedb;
  --accent-foreground: #17233b;
  --deep: #340c24;
  --deep-foreground: #f3f3ec;
  --border: #c9c8bc;
  --ring: #17233b;

  /* Typography */
  --font-heading: "Instrument Serif", "Bodoni 72", Didot, Georgia, serif;
  --font-body: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-script: "Pinyon Script", "Snell Roundhand", cursive;
  --font-sans: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-label: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Typography Scales */
  --text-display: clamp(3.5rem, 8vw, 8.5rem);
  --text-h1: clamp(2.5rem, 5.5vw, 5.5rem);
  --text-h2: clamp(1.8rem, 3.5vw, 3.2rem);
  --text-h3: clamp(1.2rem, 2vw, 1.8rem);
  --text-body: clamp(0.9375rem, 1.1vw, 1.0625rem);
  --text-label: 0.6875rem;

  /* Spacing */
  --container: min(92vw, 84rem);
  --gutter: clamp(1.25rem, 3vw, 2.5rem);
  --section-space: clamp(4.5rem, 10vw, 9rem);
  --label-tracking: 0.28em;

  /* Radii */
  --radius: 0rem;
  --radius-card: 0rem;
  --radius-image: 0rem;
  --radius-button: 999px;

  /* Motion & Easings */
  --ease-in-out: cubic-bezier(0.75, 0, 0.25, 1);
  --ease-out: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-dive: cubic-bezier(0.6, 0, 0, 1);
  --dur-fast: 0.4s;
  --dur-base: 0.8s;
  --dur-slow: 1.2s;
}
```

---

## 5. Typography Hierarchy & Font System

1. **Heading Serif:** `Instrument Serif` (Google Fonts, weights 400). Used for all uppercase display titles (`VILLA SOLENNE`, `ABOVE THE COVE`, `THE FOUR VILLAS`, `MALLORCA`, etc.). High contrast, tight leading (`0.86 - 0.98`), uppercase only.
2. **Body & Monospace:** `Archivo` (Google Fonts, weights 300, 400, 500, 600, 700). Used for body paragraphs, specs, links, and microscopic tracked label caps (`letter-spacing: 0.28em` to `0.6em`).
3. **Cursive Script:** `Pinyon Script` (Google Fonts, weight 400). Used for the signature diagonal script overlays (`Mallorca`, `stay`) angled at `-6deg` to `-12deg`.

---

## 6. Motion Vocabulary & Animation Engineering

The original site operates on 5 immutable motion paradigms:
1. **The Arch Window:** A rounded-top arch clip-path (`inset(...) round 50% 50% 0 0`) that expands and dives outward past the screen bounds on initial load and section reveals.
2. **Masked Caps Rise:** High-contrast serif lines emerge from beneath overflow-hidden masks (`y: 105%` to `y: 0%` with cubic-bezier `[0.25, 1, 0.5, 1]`), accompanied by the cursive script word drawing in left-to-right (`clipPath: inset(-20% 100% -20% 0%)` -> `inset(-20% 0% -20% 0%)`).
3. **The Slide-Over:** Seamless stacking where shaped or flat sections (such as the chamfered villa section or plum footer) glide smoothly over held background images without jarring layout breaks.
4. **The Hairline Draw:** Vertical reference lines and circular button strokes drawing on scroll via SVG `pathLength` / `strokeDashoffset`.
5. **The Settle:** Held hero and poster images settling smoothly from `1.15x` scale down to `1.0x` as the user navigates into their focal zone.

---

## 7. Asset & Media Catalog

All 17 original 1600px WebP images have been downloaded and verified:
1. `luxury-villa-arches-pool-1600.webp` - Hero opening arch photo
2. `beautiful-aerial-view-cala-s-almunia-1600.webp` - About section slider photo 1
3. `closeup-shot-growing-trees-field-sunlight-1600.webp` - About section slider photo 2
4. `santorini-garden-1600.webp` - Testimonial section held backdrop
5. `aegean-cove-drone-1600.webp` - Destination 1: The Cove
6. `ibiza-coast-boats-1600.webp` - Destination 2: The Harbour
7. `konnos-bay-cape-1600.webp` - Destination 3: The Salt Pans
8. `aegean-coast-path-drone-1600.webp` - Destination 4: The Coast Path
9. `potted-plant-bed-1600.webp` - Olive Villa photo
10. `luxury-modern-spa-exterior-architecture-1600.webp` - Pine Villa photo
11. `outdoor-swimming-pool-with-umbrella-chair-1600.webp` - Sea Villa photo
12. `woman-enjoying-book-while-traveling-1600.webp` - Gallery dual-window merge backdrop
13. `trendy-modern-design-twolevel-apartment-with-1600.webp` - Gallery arch item 1
14. `arrangement-table-seats-new-year-s-1600.webp` - Gallery arch item 2
15. `window-shadow-bedroom-wall-1600.webp` - Gallery arch item 3
16. `olive-trees-1600.webp` - Gallery arch item 4
17. `umbrella-chair-around-swimming-pool-neary-1600.webp` - Closing CTA held backdrop

---

## 8. Responsive Breakpoint Behaviors

- **Desktop (1920px & 1440px):** Full-bleed layouts, left vertical scroll gauge active with 8rem track and 2-digit percentage counter, dual-window merge active over 300svh scroll scene, 3-column villa slider layout.
- **Tablet (768px):** Side gauge hidden, villa slider reflows with centered image and dual-column specs, gallery merge collapses into full-height single picture with scale settle.
- **Mobile (375px):** Fixed badge scales cleanly, hamburger toggle enables fullscreen animated arch drawer menu, hero typography adjusts with fluid `clamp()`, and horizontal marquees provide compact luxury texture.

---

## 9. Component Architecture & State Plan

```
src/
├── app/
│   ├── layout.tsx         # Root layout, Google Fonts (Instrument Serif, Archivo, Pinyon Script)
│   ├── page.tsx           # Assembles all 9 sections in precise visual sequence
│   └── globals.css        # Exact design tokens, keyframes, utilities
├── components/
│   ├── SmoothScroll.tsx   # Lenis integration with prefers-reduced-motion check
│   ├── Navbar.tsx         # Spinning badge, book button, scroll progress bar, mobile modal
│   ├── Hero.tsx           # 2.8s intro, arch dive, marquee, magnetic CTA button
│   ├── About.tsx          # Semicircle arc text, location header, 2-photo autoplay slider
│   ├── Testimonials.tsx   # Pinned photo backdrop, dual scrolling blockquotes
│   ├── Statement.tsx      # Serif statement with superscript '+' line breaks
│   ├── Process.tsx        # 4-step journey with arch entrance and curtain wipe reveals
│   ├── Pricing.tsx        # Chamfered blue slider, villa cards, spec definitions
│   ├── Gallery.tsx        # Dual-window merge animation, 4-photo arch carousel
│   ├── CtaPoster.tsx      # Held sea-view closing photo, drawing circle button
│   └── Footer.tsx         # Plum footer, huge phone link, address, navigation links
├── lib/
│   ├── data.ts            # Content strings, villa details, destination steps, testimonials
│   └── motion.ts          # Exact bezier easings, duration tokens, motion variants
└── public/
    └── images/            # All 17 high-resolution WebP photographs
```
