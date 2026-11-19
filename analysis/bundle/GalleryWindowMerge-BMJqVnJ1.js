import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-motion-template-DKlVa3bl.js";
import { t as s } from "./use-reduced-motion-C1Eci-zP.js";
import { t as c } from "./use-in-view-BJ7YAfH4.js";
import { t as l } from "./clsx-CdxywoMz.js";
import { t as u } from "./bundle-mjs-BHwMjErG.js";
import { n as d, t as f } from "./Media-nQn4h4A8.js";
import { a as p, n as m, r as h } from "./kitMotion-C_dZit-a.js";
import { t as g } from "./embla-carousel-react.esm-DUFGRTCV.js";
import { t as _ } from "./EraArchWindow-DZkXUX-f.js";
var v = e(t(), 1),
  y = n(),
  b = (...e) => u(l(e)),
  x = (e) =>
    `https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&w=1200`,
  S = [
    {
      title: `The lemon courtyard`,
      imageSrc: x(13888606),
      imageAlt: `Courtyard with lemon trees`,
    },
    {
      title: `The garden path`,
      imageSrc: x(17086146),
      imageAlt: `Stone path under a pergola`,
    },
    {
      title: `The shutters`,
      imageSrc: x(3445683),
      imageAlt: `White facade with blue shutters`,
    },
  ],
  C = [0.25, 1, 0.5, 1],
  w = [0, 0.55, 0.8],
  T = (e, t, n, r, i) =>
    o`inset(${a(e, w, t)}% ${a(e, w, n)}% ${a(e, w, r)}% ${a(e, w, i)}%)`,
  E = ({
    word: e = `Sitges`,
    quote: t = `We kept the old garden walls and let the light do the rest.`,
    credit: n = `Marta Roig, architect`,
    imageSrc: o = x(36808514),
    imageAlt: l = `White house with terraces under a blue sky`,
    items: u = S,
    ariaLabel: w,
    className: E,
  }) => {
    let D = (0, v.useRef)(null),
      O = (0, v.useRef)(null);
    p(O, `200%`);
    let k = s(),
      A = (0, v.useRef)(null),
      j = c(A, { once: !0, amount: 0.2 }),
      M = h(A, j),
      { scrollYProgress: N } = i({
        target: D,
        offset: [`start start`, `end end`],
      }),
      P = T(N, [10, 18.5, 0], [56, 50, 0], [45, 18.5, 0], [1, 1, 0]),
      F = T(N, [45, 18.5, 0], [1, 1, 0], [10, 18.5, 0], [56, 50, 0]),
      I = a(N, [0.45, 0.55, 0.62], [0, 1, 0]),
      L = a(N, m(0, 0.8), [1.12, 1]),
      R = a(N, m(0.58, 0.8), [`105%`, `0%`], { ease: (e) => 1 - (1 - e) ** 3 }),
      z = a(N, m(0.72, 0.86), [0, 1]),
      B = a(N, m(0.72, 0.86), [24, 0]),
      V = a(N, m(0.55, 0.8), [0, 1]),
      H = (180 / Math.max(e?.length ?? 0, 6)).toFixed(1),
      U = u.length,
      [W, G] = g({ loop: U > 1, align: `center`, active: U > 1 }),
      [K, q] = (0, v.useState)(0),
      J = (0, v.useCallback)((e) => q(e.selectedScrollSnap()), []);
    return (
      (0, v.useEffect)(() => {
        if (G)
          return (
            J(G),
            G.on(`select`, J).on(`reInit`, J),
            () => {
              G.off(`select`, J).off(`reInit`, J);
            }
          );
      }, [G, J]),
      (0, y.jsxs)(`section`, {
        ref: O,
        "aria-label": w ?? e ?? `Gallery`,
        "data-scene": !0,
        className: b(
          `relative bg-background py-[var(--section-space)] text-foreground`,
          E,
        ),
        children: [
          !k &&
            (0, y.jsx)(`div`, {
              ref: D,
              className: `relative hidden h-[300svh] lg:block`,
              children: (0, y.jsxs)(`div`, {
                className: `sticky top-0 h-svh w-full overflow-hidden`,
                children: [
                  (0, y.jsx)(r.div, {
                    style: { clipPath: P },
                    className: `absolute inset-0`,
                    children: (0, y.jsx)(d, {
                      src: o,
                      alt: l,
                      loading: `lazy`,
                      decoding: `async`,
                      style: { scale: L },
                      className: `h-full w-full object-cover`,
                    }),
                  }),
                  (0, y.jsx)(r.div, {
                    "aria-hidden": `true`,
                    style: { clipPath: F },
                    className: `absolute inset-0`,
                    children: (0, y.jsx)(d, {
                      src: o,
                      alt: ``,
                      loading: `lazy`,
                      decoding: `async`,
                      style: { scale: L },
                      className: `h-full w-full object-cover`,
                    }),
                  }),
                  (0, y.jsx)(r.div, {
                    "aria-hidden": `true`,
                    style: { opacity: I },
                    className: `absolute left-1/2 top-[18.5%] h-[63%] w-px -translate-x-1/2 bg-background`,
                  }),
                  (0, y.jsx)(r.div, {
                    "aria-hidden": `true`,
                    style: { opacity: V },
                    className: `absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent`,
                  }),
                  (0, y.jsx)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-start px-[var(--gutter)] pt-[4svh] text-center text-white`,
                    children: (0, y.jsx)(`div`, {
                      className: `overflow-hidden pb-[0.06em]`,
                      children: (0, y.jsx)(r.h2, {
                        style: {
                          y: R,
                          fontSize: `min(calc(var(--text-display) * 1.6), ${H}vw)`,
                        },
                        className: `uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]`,
                        children: e,
                      }),
                    }),
                  }),
                  (t || n) &&
                    (0, y.jsxs)(r.div, {
                      style: { opacity: z, y: B },
                      className: `absolute inset-x-0 bottom-[clamp(2rem,6svh,4rem)] mx-auto flex w-[var(--container)] flex-col items-center gap-3 text-center text-white`,
                      children: [
                        t &&
                          (0, y.jsx)(`p`, {
                            className: `max-w-[34rem] text-balance text-[length:var(--text-body-lg)] leading-[1.4]`,
                            children: t,
                          }),
                        n &&
                          (0, y.jsx)(`p`, {
                            className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]`,
                            children: n,
                          }),
                      ],
                    }),
                ],
              }),
            }),
          (0, y.jsxs)(`div`, {
            ref: A,
            className: b(
              `relative h-[85svh] min-h-[28rem] w-full overflow-hidden`,
              !k && `lg:hidden`,
            ),
            children: [
              (0, y.jsx)(d, {
                src: o,
                alt: l,
                loading: `lazy`,
                decoding: `async`,
                initial: k ? !1 : { scale: 1.15 },
                animate: j && M ? { scale: 1 } : void 0,
                transition: { duration: 1.2, ease: C },
                className: `absolute inset-0 h-full w-full object-cover`,
              }),
              (0, y.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent`,
              }),
              (0, y.jsx)(`div`, {
                className: `absolute inset-0 flex items-start justify-center px-[var(--gutter)] pt-[6svh] text-center text-white`,
                children: (0, y.jsx)(r.div, {
                  initial: k ? !1 : `hidden`,
                  whileInView: `show`,
                  viewport: { once: !0, amount: 0.4 },
                  className: `overflow-hidden pb-[0.06em]`,
                  children: (0, y.jsx)(r.h2, {
                    variants: {
                      hidden: { y: `105%` },
                      show: { y: `0%`, transition: { duration: 1.2, ease: C } },
                    },
                    style: {
                      fontSize: `min(calc(var(--text-display) * 1.2), 18vw, ${H}vw)`,
                    },
                    className: `uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]`,
                    children: e,
                  }),
                }),
              }),
              (t || n) &&
                (0, y.jsxs)(`div`, {
                  className: `absolute inset-x-0 bottom-8 mx-auto flex w-[var(--container)] flex-col items-center gap-3 text-center text-white`,
                  children: [
                    t &&
                      (0, y.jsx)(`p`, {
                        className: `max-w-[34rem] text-balance text-[length:var(--text-body)] leading-[1.4]`,
                        children: t,
                      }),
                    n &&
                      (0, y.jsx)(`p`, {
                        className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]`,
                        children: n,
                      }),
                  ],
                }),
            ],
          }),
          U > 0 &&
            (0, y.jsxs)(`div`, {
              className: `mx-auto mt-[var(--section-space)] w-[var(--container)]`,
              children: [
                (0, y.jsx)(`div`, {
                  ref: W,
                  className: `overflow-hidden`,
                  children: (0, y.jsx)(`ul`, {
                    className: `flex`,
                    children: u.map((e, t) =>
                      (0, y.jsxs)(
                        `li`,
                        {
                          "aria-roledescription": `slide`,
                          "aria-label": `${t + 1} of ${U}`,
                          className: `min-w-0 shrink-0 grow-0 basis-full px-[calc(var(--gap)/2)] lg:basis-[78%]`,
                          children: [
                            (0, y.jsx)(`div`, {
                              className: `border border-foreground/20 p-2`,
                              children: (0, y.jsx)(_, {
                                className: `aspect-[4/3] w-full rounded-[var(--radius-image)] lg:aspect-[16/9]`,
                                children: (0, y.jsx)(f, {
                                  src: e.imageSrc,
                                  alt: e.imageAlt ?? e.title,
                                  loading: `lazy`,
                                  decoding: `async`,
                                  draggable: !1,
                                  className: `absolute inset-0 h-full w-full object-cover`,
                                }),
                              }),
                            }),
                            (0, y.jsx)(`p`, {
                              className: b(
                                `mt-4 text-center text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground transition-opacity duration-[var(--dur-base)] [overflow-wrap:anywhere]`,
                                t === K ? `opacity-100` : `opacity-0`,
                              ),
                              children: e.title,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                U > 1 &&
                  (0, y.jsxs)(`div`, {
                    className: `mt-[clamp(1.5rem,3vw,2.5rem)] flex items-center justify-center gap-6`,
                    children: [
                      (0, y.jsx)(`button`, {
                        type: `button`,
                        "aria-label": `Previous photo`,
                        onClick: () => G?.scrollPrev(),
                        className: `flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/40 transition-colors duration-[var(--dur-fast)] hover:border-foreground`,
                        children: (0, y.jsx)(`svg`, {
                          "aria-hidden": `true`,
                          viewBox: `0 0 16 16`,
                          className: `size-3.5`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `1`,
                          children: (0, y.jsx)(`path`, {
                            d: `M15 8H2M7 3 2 8l5 5`,
                          }),
                        }),
                      }),
                      (0, y.jsxs)(`div`, {
                        className: `flex items-center gap-4 text-[length:var(--text-label)] font-semibold tabular-nums`,
                        children: [
                          (0, y.jsx)(`p`, {
                            "aria-hidden": `true`,
                            children: K + 1,
                          }),
                          (0, y.jsx)(`div`, {
                            "aria-hidden": `true`,
                            className: `h-px w-16 bg-current`,
                          }),
                          (0, y.jsx)(`p`, {
                            "aria-hidden": `true`,
                            children: U,
                          }),
                        ],
                      }),
                      (0, y.jsx)(`button`, {
                        type: `button`,
                        "aria-label": `Next photo`,
                        onClick: () => G?.scrollNext(),
                        className: `flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/40 transition-colors duration-[var(--dur-fast)] hover:border-foreground`,
                        children: (0, y.jsx)(`svg`, {
                          "aria-hidden": `true`,
                          viewBox: `0 0 16 16`,
                          className: `size-3.5`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `1`,
                          children: (0, y.jsx)(`path`, {
                            d: `M1 8h13M9 3l5 5-5 5`,
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  };
export { E as default };
