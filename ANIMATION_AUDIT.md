# 🎬 Comprehensive Animation Audit (ANIMATION_AUDIT.md)
**Project:** Seaside Hotel (Villa Solenne — Era Kit in Riviera Plum)  
**Target Reference:** `https://www.webild.io/templates/seaside-hotel` (Iframe Source: `https://webild-mcp-components.vercel.app/templates/seaside-hotel`)  
**Audited Library Stack:** Framer Motion (`react-CYSpVEiy.js`), Lenis Smooth Scroll (`lenis-DkV2Wnxd.js` / `lenis-react-DPHPAgo_.js`), Embla Carousel (`embla-carousel-react.esm-DUFGRTCV.js`), Native CSS Transitions.  
**Audit Date:** November 19, 2026  
**Auditor Protocol:** Strict Watchdog & Zero-Regression Guardrails  

---

## 1. Global Motion Design Tokens (`kitMotion.js`)

Extracted directly from the original template bundle `kitMotion-C_dZit-a.js`:

```javascript
const defaultMotion = {
  ease: [0.22, 1, 0.36, 1],       // fallback ease
  easeInOut: [0.65, 0, 0.35, 1],  // fallback easeInOut
  fast: 0.3,
  base: 0.7,
  slow: 1.2,
  distance: "24px"
};

// Computed from :root CSS variables:
// --ease-out: cubic-bezier(0.25, 1, 0.5, 1)      -> [0.25, 1, 0.5, 1]
// --ease-in-out: cubic-bezier(0.75, 0, 0.25, 1)  -> [0.75, 0, 0.25, 1]
// --dur-fast: 0.4s
// --dur-base: 0.8s
// --dur-slow: 1.2s
// --reveal-distance: 2rem
```

---

## 2. Animation Audit Comparison Table

| Animation Feature / Component | Original Parameters (Duration, Easing, Delay, Stagger, Offset) | Replica Parameters | Status | Root Cause & Surgical Fix Required |
| :--- | :--- | :--- | :--- | :--- |
| **Global Smooth Scroll** (`SmoothScroll`) | Lenis: `options: { lerp: 0.1, anchors: true }`<br>Respects `prefers-reduced-motion: reduce` | Lenis: `options: { lerp: 0.1, smoothWheel: true }` | ⚠️ **CLOSE** | Add `anchors: true` to match exact link scrolling behavior of original. |
| **Scroll SVG Stroke Draw** (`DrawOnScroll`) | `offset: ["start 0.8", "end 0.3"]`<br>`opacity: [0, 0.02] -> [0, 1]`<br>When unscrolled: `duration: 1.6s, delay: idx * 0.15s, ease: [0.65, 0, 0.35, 1]` | `offset: ["start 0.8", "end 0.3"]`<br>`opacity: [0, 0.02] -> [0, 1]` | ✅ **MATCH** | Scroll scrub and stroke settings match original exactly. |
| **Section Title Word Stagger** (`EraTitle`) | Words grouped by line using `useWordLines`<br>All words on same line reveal together<br>`delay: baseDelay + lineIndex * 0.08s`<br>Word motion: `y: 105% -> 0%`<br>`duration: 1.2s, ease: [0.25, 1, 0.5, 1]` | Individual word stagger: `delay: baseDelay + wordIndex * 0.08s`<br>`duration: 1.2s, ease: [0.25, 1, 0.5, 1]` | ❌ **MISMATCH** | Replica staggers every single word (`wordIndex * 0.08`), whereas original groups words by rendered line and animates line-by-line (`lineIndex * 0.08`). |
| **Section Title Script Reveal** (`EraTitle`) | `hidden: { clipPath: "inset(-20% 100% -20% 0%)" }`<br>`show: { clipPath: "inset(-20% 0% -20% 0%)" }`<br>`duration: 1.2s, ease: [0.75, 0, 0.25, 1]`<br>`delay: baseDelay + 0.35 + totalLines * 0.08s` | `delay: baseDelay + 0.35 + words.length * 0.08s` | ❌ **MISMATCH** | Replica delay uses `words.length` instead of `totalLines`, causing script text (e.g., "Santanyí") to appear ~0.3s too late on multi-word headings. |
| **Navbar Seal Spin** (`NavbarSealCorner`) | CSS Keyframe animation: `animate-[spin_30s_linear_infinite]`<br>SVG `textLength: 236` | `animate-[spin_30s_linear_infinite]` | ✅ **MATCH** | Identical continuous 30s linear spin. |
| **Navbar Fade In Delay** (`NavbarSealCorner`) | `initial: { opacity: 0 }`, `animate: { opacity: 1 }`<br>`duration: 0.8s, delay: 2.2s` | `duration: 0.8s, delay: 2.2s` | ✅ **MATCH** | Identical. |
| **Hero Curtain Reveal Sequence** (`HeroArchPoster`) | Total duration: `2.7s`<br>Keyframe times: `[0, 1.05/2.7, 1.8/2.7, 1]`<br>Easing: `["linear", [0.75, 0, 0.25, 1], [0.6, 0, 0, 1]]`<br>Arch expanding: `start -> risen -> fullscreen`<br>Overlay fade-out: `duration: 0.5s, delay: 1.9s` | Total duration: `2.7s`<br>Keyframe times: `[0, 1.05/2.7, 1.8/2.7, 1]`<br>Easing: `["linear", [0.75, 0, 0.25, 1], [0.6, 0, 0, 1]]`<br>Overlay fade-out: `duration: 0.5s, delay: 1.9s` | ✅ **MATCH** | Identical 3-stage arch expansion math. |
| **Hero Magnetic Button** (`HeroArchPoster`) | Framer Motion spring: `stiffness: 180, damping: 18`<br>Tracking multiplier: `0.3` | `stiffness: 180, damping: 18`<br>Multiplier: `0.3` | ✅ **MATCH** | Identical magnetic spring feel. |
| **About Semicircle Arc Letter-Spacing** (`AboutArchCurve`) | `initial: { letterSpacing: "0em" }`<br>`whileInView: { letterSpacing: "0.35em" }`<br>`viewport: { once: true, amount: 0.4 }`<br>`duration: 2.2s, ease: [0.25, 1, 0.5, 1]` | `initial: { letterSpacing: "0em" }`<br>`whileInView: { letterSpacing: "0.35em" }`<br>`duration: 2.2s, ease: [0.25, 1, 0.5, 1]` | ✅ **MATCH** | Identical arc animation. |
| **About Image Slider Card Clip Reveal** (`AboutArchCurve`) | `hidden: { clipPath: "inset(100% 0% 0% 0%)" }`<br>`show: { clipPath: "inset(0% 0% 0% 0%)" }`<br>`duration: 1.2s, ease: [0.75, 0, 0.25, 1]` | `hidden: { clipPath: "inset(100% 0% 0% 0%)" }`<br>`show: { clipPath: "inset(0% 0% 0% 0%)" }`<br>`duration: 1.2s, ease: [0.75, 0, 0.25, 1]` | ✅ **MATCH** | Identical. |
| **About Slider Progress Indicator** (`AboutArchCurve`) | Scale line from 0 to 1 over `5.0s`, `ease: "linear"`<br>Autoplay cycle: `5000ms` | `scaleX: 0 -> 1` over `5s`, `ease: "linear"` | ✅ **MATCH** | Identical 5s slide interval. |
| **Testimonial Fade In** (`TestimonialPhotoQuote`) | `offset: ["start end", "center center"]`<br>`opacity: useTransform(scrollYProgress, [0, 1], [0.2, 1])` | `offset: ["start end", "center center"]`<br>`opacity: [0.2, 1]` | ✅ **MATCH** | Identical scroll fade. |
| **Statement Branch Parallax** (`StatementPlusConcept`) | `offset: ["start end", "end start"]`<br>`y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])` | `y: ["-10%", "10%"]` | ✅ **MATCH** | Identical gentle parallax. |
| **Statement Superscript Plus (`+`) Reveal** (`StatementPlusConcept`) | Plus signs animate with parent line word variants: `hidden: { y: "105%" }, show: { y: "0%" }` attached to the right of the last word of each line | Plus signs animate with words | ✅ **MATCH** | Identical line-end plus reveals. |
| **Process Steps Sticky Transition** (`ProcessRouteLine`) | `S = 0.9, C = 0.1`<br>Active step transition clamped normalized scroll<br>Cards slide from `100%` to `0%` to `-100%` with life zoom `1.18 - 0.1 * e` | Normalized slice math with `S=0.9, C=0.1` | ✅ **MATCH** | Identical step interpolation. |
| **Suites Carousel Drag & Auto-Advance** (`PricingFramedSlider`) | Embla Carousel: `align: "center", loop: count > 1`<br>Autoplay: `6000ms`<br>Background Parallax: `useTransform(scrollYProgress, [0, 1], ["0%", "-6%"])` | Embla Carousel: `align: "center"`<br>Autoplay: `6000ms`<br>Parallax: `["0%", "-6%"]` | ✅ **MATCH** | Identical 6s loop & parallax. |
| **Dual Window Merge Scene Title Reveal** (`GalleryWindowMerge`) | `titleY: useTransform(scrollYProgress, [0.58, 0.8], ["105%", "0%"], { ease: t => 1 - Math.pow(1 - t, 3) })`<br>Uses cubic ease-out curve on transform interpolation | `titleY: useTransform(scrollYProgress, [0.58, 0.8], ["105%", "0%"])` (linear interpolation) | ❌ **MISMATCH** | Replica uses default linear transform interpolation instead of cubic ease-out curve (`t => 1 - Math.pow(1 - t, 3)`), making title rise slightly too stiffly. |
| **CTA Circular Button Hover Ring** (`CtaPosterPhoto`) | Circular SVG `pathLength: 1, strokeDasharray: "1", strokeDashoffset: "1"`<br>On hover: `group-hover:[stroke-dashoffset:0]`<br>`duration-[var(--dur-slow)] ease-[var(--ease-in-out)]` (1.2s cubic-bezier(0.75, 0, 0.25, 1)) | Identical SVG dashoffset transition on hover with `duration-[var(--dur-slow)] ease-[var(--ease-in-out)]` | ✅ **MATCH** | Identical magnetic-style border draw on hover. |
| **Footer Phone Reveal** (`FooterPlumPhone`) | `initial: { y: "105%" }, whileInView: { y: "0%" }`<br>`viewport: { once: true, amount: 0.3 }`<br>`duration: 1.2s, ease: [0.25, 1, 0.5, 1]` | `duration: 1.2s, ease: [0.25, 1, 0.5, 1]` | ✅ **MATCH** | Identical mask reveal. |

---

## 3. Summary of Animation Action Items

To bring animation timing, easing, and stagger to 100% parity with the original:

1. **`src/components/EraTitle.tsx`:**
   - Group words by rendered line (using `useWordLines` calculation).
   - Change word stagger delay from `delay + wordIndex * 0.08` to `delay + lineIndex * 0.08` so words on the same line emerge together.
   - Change script accent delay from `delay + 0.35 + words.length * 0.08` to `delay + 0.35 + totalLines * 0.08`.

2. **`src/components/GalleryWindowMerge.tsx`:**
   - Add `{ ease: (t: number) => 1 - Math.pow(1 - t, 3) }` to `useTransform(scrollYProgress, [0.58, 0.8], ["105%", "0%"])` for smooth cubic-eased text rise.

3. **`src/components/SmoothScroll.tsx`:**
   - Ensure Lenis options include `anchors: true` alongside `lerp: 0.1`.
