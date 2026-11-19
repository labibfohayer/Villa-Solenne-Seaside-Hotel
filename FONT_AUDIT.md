# 🔤 Comprehensive Font Audit (FONT_AUDIT.md)
**Project:** Seaside Hotel (Villa Solenne — Era Kit in Riviera Plum)  
**Target Reference:** `https://www.webild.io/templates/seaside-hotel` (Iframe Source: `https://webild-mcp-components.vercel.app/templates/seaside-hotel`)  
**Audited Viewports:** 1920px (Desktop), 1440px (Laptop), 1024px (Small Desktop/Tablet Landscape), 768px (Tablet), 375px (Mobile)  
**Audit Date:** November 19, 2026  
**Auditor Protocol:** Strict Watchdog & Zero-Regression Guardrails  

---

## 1. Real Font Identification & Network Verification

### 1.1 Original Font Files & Network Requests
Inspection of the original template network requests via Chrome DevTools confirms **three external web fonts** loaded from Google Fonts (`fonts.gstatic.com`):

| Font Family | Loaded Weights / Axes | File Format | Google Fonts URL Request |
| :--- | :--- | :--- | :--- |
| **Archivo** | Variable `wdth 100..125`, `wght 400..700` | WOFF2 | `family=Archivo:wdth,wght@100..125,400..700` |
| **Instrument Serif** | `wght 400` (normal & italic) | WOFF2 | `family=Instrument+Serif` |
| **Pinyon Script** | `wght 400` | WOFF2 | `family=Pinyon+Script` |

### 1.2 Original CSS Font Stacks & Fallbacks (`:root`)
Extracted directly from the original stylesheet `theme-C9yMrgpL.css`:
```css
:root {
  --font-body: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-heading: "Instrument Serif", "Bodoni 72", Didot, Georgia, serif;
  --font-label: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-script: "Pinyon Script", "Snell Roundhand", cursive;
  --font-sans: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: "Instrument Serif", "Bodoni 72", Didot, Georgia, serif;
  --font-mono: "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

### 1.3 Font Rendering Properties
- `-webkit-font-smoothing: antialiased;`
- `-moz-osx-font-smoothing: grayscale;`
- `font-display: swap;`

---

## 2. Canonical Typography Scales: Original vs. Replica

The underlying root cause of font size discrepancies across the website is the CSS custom property scale definitions in `:root`. Below is the exact comparison:

| Design Token | Original Target Formula | Replica Current Formula | Status | Impact |
| :--- | :--- | :--- | :--- | :--- |
| `--text-display` | `clamp(3.75rem, 1.2rem + 10.6vw, 11rem)` | `clamp(3.5rem, 8vw, 8.5rem)` | ❌ **MISMATCH** | Replica is up to 2.5rem smaller at desktop (136px vs 176px) |
| `--text-h1` | `clamp(3rem, 1rem + 7.2vw, 7.5rem)` | `clamp(2.5rem, 5.5vw, 5.5rem)` | ❌ **MISMATCH** | Replica is up to 2rem smaller at 1920px (88px vs 120px) |
| `--text-h2` | `clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem)` | `clamp(1.8rem, 3.5vw, 3.2rem)` | ❌ **MISMATCH** | Replica is undersized on desktop and laptop viewports |
| `--text-h3` | `clamp(1.375rem, 1.1rem + 1vw, 2rem)` | `clamp(1.2rem, 2vw, 1.8rem)` | ❌ **MISMATCH** | Replica suite titles and card headings undersized |
| `--text-body` | `1rem` (16px fixed) | `clamp(0.9375rem, 1.1vw, 1.0625rem)` | ❌ **MISMATCH** | Replica fluctuates between 15px and 17px instead of 16px |
| `--text-body-lg` | `clamp(1.0625rem, 1rem + .25vw, 1.25rem)` | *Missing token* | ❌ **MISSING** | Large descriptions not scaled accurately |
| `--text-small` | `.875rem` (14px) | `0.8125rem` (13px) | ❌ **MISMATCH** | Suite specs and address lines are 1px too small |
| `--text-label` | `.75rem` (12px) | `0.6875rem` (11px) | ❌ **MISMATCH** | All buttons, badges, navigation, and eyebrows are 1px too small |
| `--label-tracking` | `.2em` | `0.28em` | ❌ **MISMATCH** | Label letter-spacing is overly spaced (3.08px vs 2.4px) |
| `--heading-leading` | `.88` | `0.86` | ❌ **MISMATCH** | Leading is tighter than original |
| `--heading-tracking` | `-.02em` | `-0.02em` | ✅ **MATCH** | Identical |
| `--heading-weight` | `400` | `400` | ✅ **MATCH** | Identical |

---

## 3. Element-by-Element Font Audit Table

Side-by-side audit of every text element and component on the page across viewports:

| Element / Component | Original (Rendered Font, Size, Weight, LineHeight, Spacing) | Replica (Rendered Font, Size, Weight, LineHeight, Spacing) | Status | Root Cause & Surgical Fix Required |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar Seal Wordmark** (`NavbarSealCorner`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px`, LS: `3.6px (.3em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `3.3px (.3em)` | ❌ **MISMATCH** | `--text-label` is 11px instead of 12px; fallback font string missing `"Helvetica Neue", Helvetica, Arial, sans-serif`. |
| **Navbar CTA Button** (`NavbarSealCorner`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | `--text-label` 11px vs 12px; `--label-tracking` 0.28em vs 0.2em. |
| **Navbar Scroll Counter** (`NavbarSealCorner`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px`, LS: `1.2px (.1em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `1.1px (.1em)` | ❌ **MISMATCH** | `--text-label` 11px vs 12px. |
| **Hero Eyebrows Left/Right** (`HeroArchPoster`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px`, LS: `7.2px (.6em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `6.6px (.6em)` | ❌ **MISMATCH** | Size 11px vs 12px causes LS computation 6.6px instead of 7.2px. |
| **Hero Title ("VILLA SOLENNE")** (`HeroArchPoster`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(3.75rem, 1.2rem + 10.6vw, 11rem)`<br>Weight: `400`, LH: `0.86 - 0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(3.5rem, 8vw, 8.5rem)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Heading clamp scale is significantly smaller at 1920px (8.5rem vs 11rem) and 1440px (7.2rem vs 9.8rem); fallback string missing `"Bodoni 72", Didot, Georgia, serif`. |
| **Hero Cursive Watermark** (`HeroArchPoster`) | `"Pinyon Script", "Snell Roundhand", cursive`<br>Size: `38vw`<br>Weight: `400`, LH: `1`, LS: `normal` | `"Pinyon Script", "Pinyon Script Fallback"`<br>Size: `38vw`<br>Weight: `400`, LH: `1`, LS: `normal` | ❌ **MISMATCH** | Fallback string missing `"Snell Roundhand", cursive` in CSS token. |
| **Hero Intro Script Badge** (`HeroArchPoster`) | `"Pinyon Script", "Snell Roundhand", cursive`<br>Size: `clamp(1.5rem, 2.6vw, 2.4rem)`<br>Weight: `400`, LH: `1`, LS: `normal` | `"Pinyon Script", "Pinyon Script Fallback"`<br>Size: `clamp(1.5rem, 2.6vw, 2.4rem)`<br>Weight: `400`, LH: `1`, LS: `normal` | ❌ **MISMATCH** | Fallback string missing. |
| **Hero Marquee Labels** (`HeroArchPoster`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Hero Floating CTA Button** (`HeroArchPoster`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **About Semicircle Arc Title** (`AboutArchCurve`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `54px`<br>Weight: `400`, LS: `0.35em` animated | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `54px`<br>Weight: `400`, LS: `0.35em` animated | ❌ **MISMATCH** | Fallback font stack missing. |
| **About Eyebrow / Subtitle** (`AboutArchCurve`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px (1.5)`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **About Section H1 Heading** (`AboutArchCurve` via `EraTitle`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(3rem, 1rem + 7.2vw, 7.5rem)`<br>Weight: `400`, LH: `0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(2.5rem, 5.5vw, 5.5rem)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Size formula clamp(2.5rem, 5.5vw, 5.5rem) undershoots; leading 0.86 vs 0.88; fallback font stack missing. |
| **About Script Accent ("Santanyí")** (`AboutArchCurve` via `EraTitle`) | `"Pinyon Script", "Snell Roundhand", cursive`<br>Size: `calc(var(--text-h1) * 0.62)`<br>Weight: `400`, LH: `1`, LS: `normal` | `"Pinyon Script", "Pinyon Script Fallback"`<br>Size: `calc(var(--text-h1) * 0.62)`<br>Weight: `400`, LH: `1`, LS: `normal` | ❌ **MISMATCH** | Size is affected by smaller `--text-h1`; fallback font stack missing. |
| **About Slider Counter Numbers** (`AboutArchCurve`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `normal` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `normal` | ❌ **MISMATCH** | Size 11px vs 12px. |
| **About Description Paragraph** (`AboutArchCurve`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `16px (1rem)`<br>Weight: `400`, LH: `24.8px (1.55)`, LS: `normal` | `Archivo, "Archivo Fallback"`<br>Size: `clamp(0.9375rem, 1.1vw, 1.0625rem)`<br>Weight: `400`, LH: `24px (1.55)`, LS: `normal` | ❌ **MISMATCH** | Fluid clamp causes size discrepancy (15px-17px) instead of 16px. |
| **About Note ("Your own house...")** (`AboutArchCurve`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Testimonial Blockquote Quote** (`TestimonialPhotoQuote`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem)`<br>Weight: `400`, LH: `1.0`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(1.8rem, 3.5vw, 3.2rem)`<br>Weight: `400`, LH: `1.0`, LS: `-0.02em` | ❌ **MISMATCH** | Size formula clamp(1.8rem, 3.5vw, 3.2rem) vs clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem); fallback font stack missing. |
| **Testimonial Author & Role** (`TestimonialPhotoQuote`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600 (name) / 400 (role)`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600 (name) / 400 (role)`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Statement Eyebrow ("The house")** (`StatementPlusConcept`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Statement Heading ("Twenty rooms...")** (`StatementPlusConcept`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(2rem, 1.2rem + 2.9vw, 3.5rem)`<br>Weight: `400`, LH: `0.98`, LS: `-0.01em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(1.8rem, 3.5vw, 3.2rem)`<br>Weight: `400`, LH: `0.98`, LS: `-0.01em` | ❌ **MISMATCH** | Size formula clamp(1.8rem, 3.5vw, 3.2rem) vs clamp(2rem, 1.2rem + 2.9vw, 3.5rem). |
| **Statement Plus Superscript (`+`)** (`StatementPlusConcept`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `0.32em`<br>Weight: `400`, LH: `1`, vertical-align: `0.9em` | `Archivo, "Archivo Fallback"`<br>Size: `0.32em`<br>Weight: `400`, LH: `1`, vertical-align: `0.9em` | ❌ **MISMATCH** | Fallback stack missing. |
| **Statement Description** (`StatementPlusConcept`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `16px (1rem)`<br>Weight: `400`, LH: `24.8px (1.55)`, LS: `normal` | `Archivo, "Archivo Fallback"`<br>Size: `clamp(0.9375rem, 1.1vw, 1.0625rem)`<br>Weight: `400`, LH: `24px (1.55)`, LS: `normal` | ❌ **MISMATCH** | Fluid clamp size vs 16px. |
| **Process Eyebrow ("02 / THE ARCHITECTURE")** (`ProcessRouteLine` via `EraTitle`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Process Steps Number & Title** (`ProcessRouteLine`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `18px`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Process Step Big Headings** (`ProcessRouteLine`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem)`<br>Weight: `400`, LH: `0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(1.8rem, 3.5vw, 3.2rem)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Size clamp(1.8rem, 3.5vw, 3.2rem) vs clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem); Leading 0.86 vs 0.88. |
| **Process Step Descriptions** (`ProcessRouteLine`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `16px (1rem)`<br>Weight: `400`, LH: `24.8px (1.55)`, LS: `normal` | `Archivo, "Archivo Fallback"`<br>Size: `clamp(0.9375rem, 1.1vw, 1.0625rem)`<br>Weight: `400`, LH: `24px (1.55)`, LS: `normal` | ❌ **MISMATCH** | Fluid clamp size vs 16px. |
| **Pricing Card Titles ("Villa Almunia")** (`PricingFramedSlider`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(1.375rem, 1.1rem + 1vw, 2rem)`<br>Weight: `400`, LH: `0.95`, LS: `-0.01em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(1.2rem, 2vw, 1.8rem)`<br>Weight: `400`, LH: `0.95`, LS: `-0.01em` | ❌ **MISMATCH** | Size formula clamp(1.2rem, 2vw, 1.8rem) vs clamp(1.375rem, 1.1rem + 1vw, 2rem). |
| **Pricing Specs (Guests, Beds, Sqm)** (`PricingFramedSlider`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `14px (.875rem)`<br>Weight: `400`, LH: `21px (1.5)`, LS: `normal` | `Archivo, "Archivo Fallback"`<br>Size: `13px (.8125rem)`<br>Weight: `400`, LH: `19.5px (1.5)`, LS: `normal` | ❌ **MISMATCH** | `--text-small` is 13px (.8125rem) instead of 14px (.875rem). |
| **Pricing Rates ("FROM €620 / NIGHT")** (`PricingFramedSlider`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `14px (.875rem)`<br>Weight: `600`, LH: `21px (1.5)`, LS: `.05em` | `Archivo, "Archivo Fallback"`<br>Size: `13px (.8125rem)`<br>Weight: `600`, LH: `19.5px (1.5)`, LS: `.05em` | ❌ **MISMATCH** | Size 13px vs 14px. |
| **Gallery Quotes & Credits** (`GalleryWindowMerge`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `16px (1rem)` (quote) / `12px (.75rem)` (credit)<br>Weight: `400` / `600`, LH: `1.5`, LS: `normal` / `.2em` | `Archivo, "Archivo Fallback"`<br>Size: `15px-17px` / `11px`<br>Weight: `400` / `600`, LH: `1.5`, LS: `normal` / `.28em` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |
| **Gallery Big Serif Wordmark ("SITGES / MALLORCA")** (`GalleryWindowMerge`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(4.5rem, 15vw, 14rem)`<br>Weight: `400`, LH: `0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(4.5rem, 15vw, 14rem)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Leading 0.86 vs 0.88; fallback font stack missing. |
| **CTA Poster Display Title** (`CtaPosterPhoto`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `clamp(3.75rem, 1.2rem + 10.6vw, 11rem)`<br>Weight: `400`, LH: `0.86 - 0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `clamp(3.5rem, 8vw, 8.5rem)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Size scale mismatch: 8.5rem max vs 11rem max. |
| **CTA Poster Action Button** (`CtaPosterPhoto`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `600`, LH: `1.3`, LS: `1.68px (.14em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `600`, LH: `1.3`, LS: `1.54px (.14em)` | ❌ **MISMATCH** | Size 11px vs 12px; letter-spacing 1.54px vs 1.68px. |
| **Footer Giant Phone Number** (`FooterPlumPhone`) | `"Instrument Serif", "Bodoni 72", Didot, Georgia, serif`<br>Size: `min(clamp(3.75rem, 1.2rem + 10.6vw, 11rem), 11vw)`<br>Weight: `400`, LH: `0.88`, LS: `-0.02em` | `Instrument Serif, "Instrument Serif Fallback"`<br>Size: `min(clamp(3.5rem, 8vw, 8.5rem), 11vw)`<br>Weight: `400`, LH: `0.86`, LS: `-0.02em` | ❌ **MISMATCH** | Size scale formula and leading 0.86 vs 0.88. |
| **Footer Brand, Links, To Top, Legal** (`FooterPlumPhone`) | `Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif`<br>Size: `12px (.75rem)`<br>Weight: `400 / 600`, LH: `18px (1.5)`, LS: `2.4px (.2em)` | `Archivo, "Archivo Fallback"`<br>Size: `11px (.6875rem)`<br>Weight: `400 / 600`, LH: `16.5px`, LS: `3.08px (.28em)` | ❌ **MISMATCH** | Size 11px vs 12px; tracking 0.28em vs 0.2em. |

---

## 4. Summary of Font Action Items

To achieve 100% font match across every element, the following targeted changes are required:

1. **Update Root Typography Tokens in `src/app/globals.css`:**
   - Change `--text-display` from `clamp(3.5rem, 8vw, 8.5rem)` to `clamp(3.75rem, 1.2rem + 10.6vw, 11rem)`.
   - Change `--text-h1` from `clamp(2.5rem, 5.5vw, 5.5rem)` to `clamp(3rem, 1rem + 7.2vw, 7.5rem)`.
   - Change `--text-h2` from `clamp(1.8rem, 3.5vw, 3.2rem)` to `clamp(1.875rem, 1.3rem + 2.6vw, 3.5rem)`.
   - Change `--text-h3` from `clamp(1.2rem, 2vw, 1.8rem)` to `clamp(1.375rem, 1.1rem + 1vw, 2rem)`.
   - Change `--text-body` from `clamp(0.9375rem, 1.1vw, 1.0625rem)` to `1rem` (16px).
   - Add `--text-body-lg: clamp(1.0625rem, 1rem + .25vw, 1.25rem);`.
   - Change `--text-small` from `0.8125rem` to `.875rem` (14px).
   - Change `--text-label` from `0.6875rem` to `.75rem` (12px).
   - Change `--label-tracking` from `0.28em` to `.2em`.
   - Change `--heading-leading` from `0.86` to `.88`.

2. **Update Font Family Fallbacks in `src/app/layout.tsx` & `src/app/globals.css`:**
   - Include complete fallback stacks matching the original template:
     - `--font-body: var(--font-body), "Helvetica Neue", Helvetica, Arial, sans-serif;`
     - `--font-heading: var(--font-heading), "Bodoni 72", Didot, Georgia, serif;`
     - `--font-script: var(--font-script), "Snell Roundhand", cursive;`
     - `--font-label: var(--font-body), "Helvetica Neue", Helvetica, Arial, sans-serif;`
   - In `layout.tsx`, ensure `Archivo` loads the full variable axes `wdth,wght@100..125,400..700` and preconnect links match Google Fonts CDN exactly.
