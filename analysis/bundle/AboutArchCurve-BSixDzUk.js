import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./AnimatePresence-BNTS0YQZ.js";
import { t as a } from "./use-reduced-motion-C1Eci-zP.js";
import { t as o } from "./use-in-view-BJ7YAfH4.js";
import { t as s } from "./clsx-CdxywoMz.js";
import { t as c } from "./bundle-mjs-BHwMjErG.js";
import { n as l } from "./Media-nQn4h4A8.js";
import { a as u, r as d } from "./kitMotion-C_dZit-a.js";
import { t as f } from "./DrawOnScroll-DT8-q4eB.js";
import { t as p } from "./EraTitle-DO5beD5w.js";
var m = e(t(), 1),
  h = n(),
  g = (...e) => c(s(e)),
  _ = [0.25, 1, 0.5, 1],
  v = (e) =>
    `https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&w=1200`,
  y = ({
    title: e = `Three reasons to stay`,
    label: t = `A place to return to, year after year`,
    placeTitle: n = `By the sea`,
    description:
      s = `A small house on the Ribera, two minutes from the beach and the lanes of old Sitges, with Barcelona forty minutes up the coast.`,
    note: c = `A house, not a hotel`,
    items: y = [
      { imageSrc: v(9500327), imageAlt: `Bay with white houses and boats` },
      { imageSrc: v(31711941), imageAlt: `White terraces above the sea` },
    ],
    className: b,
  }) => {
    let x = a(),
      S = (0, m.useRef)(null);
    u(S, `200%`);
    let C = (0, m.useRef)(null),
      w = o(C, { once: !0, amount: 0.3 }),
      T = d(C, w),
      E = (0, m.useId)().replace(/:/g, ``),
      D = y.length,
      [O, k] = (0, m.useState)(0),
      A = D ? O % D : 0,
      j = (e) => k((t) => (t + e + D) % D);
    return (
      (0, m.useEffect)(() => {
        if (x || D < 2) return;
        let e = window.setInterval(() => k((e) => (e + 1) % D), 5e3);
        return () => window.clearInterval(e);
      }, [x, D]),
      (0, h.jsxs)(`section`, {
        ref: S,
        "aria-label": e || `About`,
        className: g(
          `relative z-10 rounded-t-[50vw] bg-secondary pb-[var(--section-space)] text-secondary-foreground`,
          b,
        ),
        children: [
          (0, h.jsxs)(`div`, {
            className: `relative mx-auto aspect-[2/1] w-full`,
            children: [
              e &&
                (0, h.jsxs)(`svg`, {
                  viewBox: `0 0 1000 500`,
                  "aria-hidden": `true`,
                  className: `absolute inset-0 h-full w-full overflow-visible`,
                  children: [
                    (0, h.jsx)(`defs`, {
                      children: (0, h.jsx)(`path`, {
                        id: E,
                        d: `M 110 500 A 390 390 0 0 1 890 500`,
                        fill: `none`,
                      }),
                    }),
                    (0, h.jsx)(r.text, {
                      fill: `currentColor`,
                      fontSize: 54,
                      textAnchor: `middle`,
                      className: `uppercase [font-family:var(--font-heading)]`,
                      initial: x ? !1 : { letterSpacing: `0em` },
                      whileInView: { letterSpacing: `0.35em` },
                      viewport: { once: !0, amount: 0.4 },
                      transition: { duration: 2.2, ease: _ },
                      children: (0, h.jsx)(`textPath`, {
                        href: `#${E}`,
                        startOffset: `50%`,
                        children: e,
                      }),
                    }),
                  ],
                }),
              e && (0, h.jsx)(`h2`, { className: `sr-only`, children: e }),
              (0, h.jsxs)(`div`, {
                className: `absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 pb-[clamp(1rem,3vw,3rem)]`,
                children: [
                  (0, h.jsx)(`svg`, {
                    viewBox: `0 0 40 40`,
                    "aria-hidden": `true`,
                    className: `h-8 w-8 text-current lg:h-10 lg:w-10`,
                    children: [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(
                      (e) =>
                        (0, h.jsx)(
                          `line`,
                          {
                            x1: `20`,
                            y1: `4`,
                            x2: `20`,
                            y2: `36`,
                            stroke: `currentColor`,
                            strokeWidth: `1`,
                            transform: `rotate(${e} 20 20)`,
                          },
                          e,
                        ),
                    ),
                  }),
                  (0, h.jsx)(`div`, {
                    className: `h-12 w-px`,
                    children: (0, h.jsx)(f, {
                      d: `M0.5 0 V48`,
                      viewBox: `0 0 1 48`,
                      strokeWidth: 1,
                      className: `h-12 text-current opacity-50`,
                    }),
                  }),
                  t &&
                    (0, h.jsx)(r.p, {
                      initial: x ? !1 : { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, amount: 0.6 },
                      transition: { duration: 0.8, ease: _ },
                      className: `max-w-[16rem] text-balance text-center text-[length:var(--text-label)] uppercase leading-[1.5] tracking-[var(--label-tracking)]`,
                      children: t,
                    }),
                ],
              }),
            ],
          }),
          (0, h.jsxs)(`div`, {
            className: `mx-auto flex w-[var(--container)] flex-col items-center pt-[var(--section-space)]`,
            children: [
              n && (0, h.jsx)(p, { text: n, className: `uppercase` }),
              D > 0 &&
                (0, h.jsx)(r.div, {
                  ref: C,
                  initial: x ? !1 : `hidden`,
                  animate: x || (w && T) ? `show` : `hidden`,
                  className: `mt-[clamp(2.5rem,5vw,4rem)] w-full max-w-[22rem] lg:max-w-[26rem]`,
                  children: (0, h.jsx)(r.div, {
                    variants: {
                      hidden: { clipPath: `inset(100% 0% 0% 0%)` },
                      show: {
                        clipPath: `inset(0% 0% 0% 0%)`,
                        transition: { duration: 1.2, ease: [0.75, 0, 0.25, 1] },
                      },
                    },
                    className: `relative aspect-[16/9] w-full overflow-hidden`,
                    children: (0, h.jsx)(i, {
                      initial: !1,
                      children: (0, h.jsx)(
                        l,
                        {
                          src: y[A].imageSrc,
                          alt: y[A].imageAlt ?? ``,
                          loading: `lazy`,
                          decoding: `async`,
                          initial: x ? !1 : { opacity: 0, scale: 1.08 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 1.2, ease: _ },
                          className: `absolute inset-0 h-full w-full object-cover`,
                        },
                        A,
                      ),
                    }),
                  }),
                }),
              D > 1 &&
                (0, h.jsxs)(`div`, {
                  className: `mt-6 flex items-center gap-6`,
                  children: [
                    (0, h.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `Previous photo`,
                      onClick: () => j(-1),
                      className: `flex h-10 w-10 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current`,
                      children: (0, h.jsx)(`svg`, {
                        viewBox: `0 0 16 16`,
                        fill: `none`,
                        className: `h-4 w-4`,
                        "aria-hidden": `true`,
                        children: (0, h.jsx)(`path`, {
                          d: `M10 3 5 8l5 5`,
                          stroke: `currentColor`,
                          strokeWidth: 1,
                        }),
                      }),
                    }),
                    (0, h.jsxs)(`div`, {
                      className: `flex items-center gap-4`,
                      children: [
                        (0, h.jsx)(`p`, {
                          className: `text-[length:var(--text-label)] font-semibold tabular-nums`,
                          children: A + 1,
                        }),
                        (0, h.jsx)(`div`, {
                          "aria-hidden": `true`,
                          className: `h-px w-16 bg-current/40`,
                          children: (0, h.jsx)(
                            r.div,
                            {
                              initial: x ? !1 : { scaleX: 0 },
                              animate: { scaleX: 1 },
                              transition: {
                                duration: x ? 0 : 5,
                                ease: `linear`,
                              },
                              className: `h-px w-full origin-left bg-current`,
                            },
                            A,
                          ),
                        }),
                        (0, h.jsx)(`p`, {
                          "aria-hidden": `true`,
                          className: `text-[length:var(--text-label)] font-semibold tabular-nums`,
                          children: D,
                        }),
                      ],
                    }),
                    (0, h.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `Next photo`,
                      onClick: () => j(1),
                      className: `flex h-10 w-10 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current`,
                      children: (0, h.jsx)(`svg`, {
                        viewBox: `0 0 16 16`,
                        fill: `none`,
                        className: `h-4 w-4`,
                        "aria-hidden": `true`,
                        children: (0, h.jsx)(`path`, {
                          d: `m6 3 5 5-5 5`,
                          stroke: `currentColor`,
                          strokeWidth: 1,
                        }),
                      }),
                    }),
                  ],
                }),
              s &&
                (0, h.jsx)(r.p, {
                  initial: x ? !1 : { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.4 },
                  transition: { duration: 0.8, ease: _ },
                  className: `mt-[clamp(2.5rem,5vw,4rem)] max-w-[34rem] text-balance text-center text-[length:var(--text-body)] leading-[1.55]`,
                  children: s,
                }),
              c &&
                (0, h.jsx)(r.p, {
                  initial: x ? !1 : { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0, amount: 0.6 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: `mt-6 text-center text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]`,
                  children: c,
                }),
            ],
          }),
        ],
      })
    );
  };
export { y as default };
