import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./AnimatePresence-BNTS0YQZ.js";
import { t as s } from "./use-reduced-motion-C1Eci-zP.js";
import { t as c } from "./useMenuDialog-CofZbzF1.js";
var l = e(t(), 1),
  u = n(),
  d = [0.25, 1, 0.5, 1],
  f = ({
    brand: e = `Villa Solenne`,
    navItems: t = [],
    cta: n = { text: `Book a stay`, href: `#contact` },
    menuText: f = `Menu`,
    closeText: p = `Close`,
    delay: m = 2.2,
  }) => {
    let h = s(),
      [g, _] = (0, l.useState)(!1),
      v = (0, l.useRef)(null),
      y = (0, l.useId)(),
      { scrollYProgress: b } = i(),
      x = a(b, (e) => String(Math.round(e * 100)).padStart(2, `0`));
    c(g, v, () => _(!1));
    let S = `${e} · ${e} · `;
    return (0, u.jsxs)(u.Fragment, {
      children: [
        (0, u.jsxs)(r.nav, {
          "aria-label": `Main`,
          initial: h || !m ? !1 : { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, delay: m },
          className: `pointer-events-none fixed inset-0 z-50 text-white mix-blend-difference`,
          children: [
            (0, u.jsxs)(`a`, {
              href: `#`,
              "aria-label": e,
              className: `pointer-events-auto absolute left-[var(--gutter)] top-[clamp(1rem,3vh,1.75rem)] block size-[4.5rem]`,
              children: [
                (0, u.jsxs)(`svg`, {
                  viewBox: `0 0 100 100`,
                  fill: `none`,
                  className: `absolute inset-0 size-full animate-[spin_30s_linear_infinite] motion-reduce:animate-none`,
                  children: [
                    (0, u.jsx)(`defs`, {
                      children: (0, u.jsx)(`path`, {
                        id: y,
                        d: `M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0`,
                      }),
                    }),
                    (0, u.jsx)(`text`, {
                      fill: `currentColor`,
                      className: `text-[length:var(--text-label)] uppercase tracking-[0.3em]`,
                      children: (0, u.jsx)(`textPath`, {
                        href: `#${y}`,
                        textLength: `236`,
                        children: S,
                      }),
                    }),
                  ],
                }),
                (0, u.jsxs)(`svg`, {
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: 1,
                  className: `absolute left-1/2 top-1/2 size-[1.25rem] -translate-x-1/2 -translate-y-1/2`,
                  children: [
                    [0, 45, 90, 135].map((e) =>
                      (0, u.jsx)(
                        `path`,
                        { d: `M12 1 V23`, transform: `rotate(${e} 12 12)` },
                        e,
                      ),
                    ),
                    (0, u.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3.2` }),
                  ],
                }),
              ],
            }),
            (0, u.jsxs)(`div`, {
              className: `pointer-events-auto absolute right-[var(--gutter)] top-[clamp(1rem,3vh,1.75rem)] flex h-[4.5rem] items-center gap-[0.75rem]`,
              children: [
                n &&
                  (0, u.jsx)(`a`, {
                    href: n.href,
                    className: `flex h-[2.75rem] items-center whitespace-nowrap rounded-full border border-current px-[1.25rem] text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] transition-opacity duration-300 hover:opacity-70`,
                    children: n.text,
                  }),
                t.length > 0 &&
                  (0, u.jsxs)(`button`, {
                    type: `button`,
                    "aria-expanded": g,
                    "aria-label": g ? p : f,
                    onClick: () => _((e) => !e),
                    className: `flex size-[2.75rem] flex-col items-center justify-center gap-[0.3rem] rounded-full border border-current lg:hidden`,
                    children: [
                      (0, u.jsx)(`div`, {
                        "aria-hidden": `true`,
                        className: `h-px w-[1rem] bg-current`,
                      }),
                      (0, u.jsx)(`div`, {
                        "aria-hidden": `true`,
                        className: `h-px w-[1rem] bg-current`,
                      }),
                    ],
                  }),
              ],
            }),
            (0, u.jsxs)(`div`, {
              className: `absolute left-[calc(var(--gutter)+2.25rem)] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[0.75rem] lg:flex`,
              children: [
                (0, u.jsx)(`div`, {
                  className: `relative h-[8rem] w-px bg-current/25`,
                  children: (0, u.jsx)(r.div, {
                    style: { scaleY: b },
                    className: `absolute inset-0 origin-top bg-current`,
                  }),
                }),
                (0, u.jsx)(r.p, {
                  "aria-hidden": `true`,
                  className: `text-[length:var(--text-label)] tabular-nums tracking-[0.1em]`,
                  children: x,
                }),
              ],
            }),
          ],
        }),
        (0, u.jsx)(o, {
          children:
            g &&
            (0, u.jsxs)(
              r.div,
              {
                ref: v,
                role: `dialog`,
                "aria-modal": `true`,
                "aria-label": f,
                initial: h
                  ? { opacity: 0 }
                  : { clipPath: `inset(0% 0% 100% 0% round 0 0 50vw 50vw)` },
                animate: h
                  ? { opacity: 1 }
                  : { clipPath: `inset(0% 0% 0% 0% round 0 0 0vw 0vw)` },
                exit: h
                  ? { opacity: 0 }
                  : { clipPath: `inset(0% 0% 100% 0% round 0 0 50vw 50vw)` },
                transition: { duration: 0.8, ease: [0.75, 0, 0.25, 1] },
                className: `fixed inset-0 z-[70] flex flex-col bg-deep px-[var(--gutter)] pb-[var(--gutter)] pt-[clamp(1rem,3vh,1.75rem)] text-deep-foreground lg:hidden`,
                children: [
                  (0, u.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, u.jsx)(`button`, {
                      type: `button`,
                      onClick: () => _(!1),
                      "aria-label": p,
                      className: `flex size-[2.75rem] items-center justify-center rounded-full border border-current`,
                      children: (0, u.jsxs)(`div`, {
                        "aria-hidden": `true`,
                        className: `relative size-[1rem]`,
                        children: [
                          (0, u.jsx)(`div`, {
                            className: `absolute left-0 top-1/2 h-px w-full rotate-45 bg-current`,
                          }),
                          (0, u.jsx)(`div`, {
                            className: `absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current`,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, u.jsx)(`ul`, {
                    className: `mt-[clamp(2rem,8vh,4rem)] flex flex-col items-center gap-[0.5rem] text-center`,
                    children: t.map((e, t) =>
                      (0, u.jsx)(
                        `li`,
                        {
                          className: `overflow-hidden`,
                          children: (0, u.jsx)(r.a, {
                            href: e.href,
                            onClick: () => _(!1),
                            initial: h ? !1 : { y: `100%` },
                            animate: { y: `0%` },
                            transition: {
                              duration: 0.8,
                              ease: d,
                              delay: 0.3 + t * 0.06,
                            },
                            className: `block font-[family-name:var(--font-heading)] text-[length:var(--text-h1)] uppercase leading-[0.9] tracking-[-0.02em] [overflow-wrap:anywhere]`,
                            children: e.name,
                          }),
                        },
                        `${t}-${e.href}`,
                      ),
                    ),
                  }),
                  n &&
                    (0, u.jsx)(`div`, {
                      className: `mt-auto flex justify-center pt-[2rem]`,
                      children: (0, u.jsx)(`a`, {
                        href: n.href,
                        onClick: () => _(!1),
                        className: `btn-secondary w-full`,
                        children: (0, u.jsx)(`p`, {
                          className: `btn-label`,
                          children: n.text,
                        }),
                      }),
                    }),
                ],
              },
              `panel`,
            ),
        }),
      ],
    });
  };
export { f as default };
