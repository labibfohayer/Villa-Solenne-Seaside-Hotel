import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-reduced-motion-C1Eci-zP.js";
import { n as s } from "./Media-nQn4h4A8.js";
import { a as c } from "./kitMotion-C_dZit-a.js";
import { t as l } from "./EraTitle-DO5beD5w.js";
var u = e(t(), 1),
  d = n(),
  f = [0.25, 1, 0.5, 1],
  p = ({
    title: e = `Sea views from the roof`,
    script: t = `always`,
    description: n = `Open all year`,
    imageSrc:
      p = `https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    imageAlt: m = `Friends on a beach`,
    primaryButton: h = { text: `Book a stay`, href: `#contact` },
    secondaryButton: g,
    ariaLabel: _,
  }) => {
    let v = (0, u.useRef)(null);
    c(v, `200%`);
    let y = o(),
      { scrollYProgress: b } = i({
        target: v,
        offset: [`start end`, `end end`],
      }),
      x = a(b, [0, 1], [1.15, 1]);
    return (0, d.jsx)(`section`, {
      ref: v,
      "aria-label": _ ?? e,
      className: `relative -mb-[100svh] h-[200svh] bg-deep text-white`,
      children: (0, d.jsxs)(`div`, {
        className: `sticky top-0 flex h-svh items-center justify-center overflow-hidden`,
        children: [
          (0, d.jsx)(s, {
            src: p,
            alt: m,
            loading: `lazy`,
            decoding: `async`,
            style: y ? void 0 : { scale: x },
            className: `absolute inset-0 size-full object-cover object-center`,
          }),
          (0, d.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `absolute inset-0 bg-black/35`,
          }),
          (0, d.jsxs)(`div`, {
            className: `relative mx-auto flex w-[var(--container)] flex-col items-center text-center`,
            children: [
              (0, d.jsx)(l, {
                text: e,
                script: t,
                className: `max-w-[4.3em] text-[length:var(--text-display)] leading-[0.86] text-white`,
                scriptClassName: `text-[length:calc(var(--text-display)*0.42)] text-white`,
              }),
              n &&
                (0, d.jsx)(r.p, {
                  initial: y ? !1 : { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, ease: f, delay: 0.5 },
                  className: `mt-14 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.4em]`,
                  children: n,
                }),
              (0, d.jsxs)(r.div, {
                initial: y ? !1 : { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.8, ease: f, delay: 0.65 },
                className: `mt-10 flex flex-col items-center gap-6 lg:flex-row lg:gap-10`,
                children: [
                  h &&
                    (0, d.jsxs)(`a`, {
                      href: h.href,
                      className: `group relative flex size-28 items-center justify-center rounded-full p-3 text-center`,
                      children: [
                        (0, d.jsxs)(`svg`, {
                          "aria-hidden": `true`,
                          viewBox: `0 0 100 100`,
                          className: `absolute inset-0 size-full -rotate-90`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `1`,
                          children: [
                            (0, d.jsx)(`circle`, {
                              cx: `50`,
                              cy: `50`,
                              r: `49.5`,
                              className: `opacity-45`,
                            }),
                            (0, d.jsx)(`circle`, {
                              cx: `50`,
                              cy: `50`,
                              r: `49.5`,
                              pathLength: 1,
                              strokeDasharray: `1`,
                              strokeDashoffset: `1`,
                              className: `transition-[stroke-dashoffset] duration-[var(--dur-slow)] ease-[var(--ease-in-out)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0] motion-reduce:transition-none`,
                            }),
                          ],
                        }),
                        (0, d.jsx)(`p`, {
                          className: `relative text-[length:var(--text-label)] font-semibold uppercase leading-[1.3] tracking-[0.14em]`,
                          children: h.text,
                        }),
                      ],
                    }),
                  g &&
                    (0, d.jsx)(`a`, {
                      href: g.href,
                      className: `btn-secondary`,
                      children: (0, d.jsx)(`p`, {
                        className: `btn-label`,
                        children: g.text,
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
export { p as default };
