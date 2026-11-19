import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-reduced-motion-C1Eci-zP.js";
import { t as s } from "./clsx-CdxywoMz.js";
import { t as c } from "./bundle-mjs-BHwMjErG.js";
import { n as l } from "./Media-nQn4h4A8.js";
import { t as u } from "./DrawOnScroll-DT8-q4eB.js";
import { t as d } from "./useWordLines-UmAMd4Zo.js";
var f = e(t(), 1),
  p = n(),
  m = (...e) => c(s(e)),
  h = [0.25, 1, 0.5, 1],
  g = ({
    label: e = `The house`,
    title:
      t = `Twenty rooms by the sea built around one garden and a long slow lunch`,
    description:
      n = `An old summer house on the Ribera, restored room by room, with the pool, the spa and the kitchen a few steps apart.`,
    imageSrc: s,
    imageAlt: c = ``,
    ariaLabel: g,
    className: _,
  }) => {
    let v = o(),
      y = (0, f.useRef)(null),
      { scrollYProgress: b } = i({
        target: y,
        offset: [`start end`, `end start`],
      }),
      x = a(b, [0, 1], [`-10%`, `10%`]),
      S = (0, f.useRef)(null),
      C = t.split(/\s+/).filter(Boolean),
      w = d(S, t);
    return (0, p.jsxs)(`section`, {
      ref: y,
      "aria-label": g ?? e ?? `Statement`,
      className: m(
        `relative z-10 overflow-hidden bg-background py-[var(--section-space)] text-foreground`,
        _,
      ),
      children: [
        s &&
          (0, p.jsx)(l, {
            src: s,
            alt: c,
            "aria-hidden": c === `` ? !0 : void 0,
            loading: `lazy`,
            decoding: `async`,
            style: v ? void 0 : { y: x },
            className: `pointer-events-none absolute -left-[4vw] -top-[6%] w-[42vw] max-w-[34rem] object-contain lg:w-[28vw]`,
          }),
        (0, p.jsxs)(`div`, {
          className: `relative mx-auto flex w-[var(--container)] flex-col items-center text-center`,
          children: [
            e &&
              (0, p.jsx)(r.p, {
                initial: v ? !1 : { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.6 },
                transition: { duration: 0.8, ease: h },
                className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]`,
                children: e,
              }),
            C.length > 0 &&
              (0, p.jsx)(`h2`, {
                "aria-label": t,
                className: `mt-[clamp(1.5rem,3vw,2.5rem)] max-w-[10.5em] text-[length:clamp(2rem,1.2rem+2.9vw,3.5rem)] uppercase leading-[0.98] tracking-[-0.01em] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]`,
                children: (0, p.jsx)(r.div, {
                  ref: S,
                  "aria-hidden": `true`,
                  initial: v ? !1 : `hidden`,
                  whileInView: `show`,
                  viewport: { once: !0, amount: 0.5 },
                  children: C.flatMap((e, t) => {
                    let n = w[t] ?? 0,
                      i = {
                        hidden: { y: `105%` },
                        show: {
                          y: `0%`,
                          transition: {
                            duration: 1.2,
                            ease: h,
                            delay: n * 0.08,
                          },
                        },
                      },
                      a = t === C.length - 1 || (w[t + 1] ?? 0) !== n;
                    return [
                      (0, p.jsxs)(
                        `div`,
                        {
                          "data-word": !0,
                          className: `relative inline-block align-top`,
                          children: [
                            (0, p.jsx)(`div`, {
                              className: `block overflow-hidden pb-[0.08em]`,
                              children: (0, p.jsx)(r.div, {
                                variants: i,
                                className: `block`,
                                children: e,
                              }),
                            }),
                            a &&
                              (0, p.jsx)(`div`, {
                                className: `absolute left-full top-0 overflow-hidden pb-[0.08em] pl-[0.15em]`,
                                children: (0, p.jsx)(r.div, {
                                  variants: i,
                                  className: `block`,
                                  children: (0, p.jsx)(`sup`, {
                                    className: `align-[0.9em] text-[0.32em] leading-none`,
                                    children: `+`,
                                  }),
                                }),
                              }),
                          ],
                        },
                        t,
                      ),
                      t < C.length - 1 ? ` ` : null,
                    ];
                  }),
                }),
              }),
            n &&
              (0, p.jsx)(r.p, {
                initial: v ? !1 : { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.6 },
                transition: { duration: 0.8, ease: h, delay: 0.2 },
                className: `mt-[clamp(2rem,4vw,3.5rem)] max-w-[24rem] text-balance text-[length:var(--text-body)] leading-[1.55] text-muted-foreground`,
                children: n,
              }),
            (0, p.jsxs)(`svg`, {
              "aria-hidden": `true`,
              viewBox: `0 0 40 40`,
              className: `mt-[clamp(2rem,4vw,3rem)] h-8 w-8 text-current`,
              children: [
                (0, p.jsx)(`path`, {
                  d: `M20 4 V36 M4 20 H36 M8.7 8.7 L31.3 31.3 M31.3 8.7 L8.7 31.3`,
                  stroke: `currentColor`,
                  strokeWidth: 1,
                  strokeLinecap: `round`,
                  fill: `none`,
                }),
                (0, p.jsx)(`circle`, {
                  cx: `20`,
                  cy: `20`,
                  r: `3`,
                  stroke: `currentColor`,
                  strokeWidth: 1,
                  fill: `none`,
                }),
              ],
            }),
            (0, p.jsx)(`div`, {
              className: `mt-6 h-12 w-px`,
              children: (0, p.jsx)(u, {
                d: `M0.5 0 V48`,
                viewBox: `0 0 1 48`,
                strokeWidth: 1,
                className: `h-12 text-current opacity-50`,
              }),
            }),
          ],
        }),
      ],
    });
  };
export { g as default };
