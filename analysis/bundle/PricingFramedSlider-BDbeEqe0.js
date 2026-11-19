import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-reduced-motion-C1Eci-zP.js";
import { t as s } from "./use-in-view-BJ7YAfH4.js";
import { t as c } from "./clsx-CdxywoMz.js";
import { t as l } from "./bundle-mjs-BHwMjErG.js";
import { n as u, t as d } from "./Media-nQn4h4A8.js";
import { a as f, r as p } from "./kitMotion-C_dZit-a.js";
import { t as m } from "./embla-carousel-react.esm-DUFGRTCV.js";
import { t as h } from "./EraTitle-DO5beD5w.js";
var g = e(t(), 1),
  _ = n(),
  v = (...e) => l(c(e)),
  y = ({
    title: e = `Rooms and suites`,
    script: t = `stay`,
    items: n = [
      {
        name: `Garden Room`,
        price: `€240`,
        period: `per night`,
        description: `A quiet room that opens onto the lemon garden.`,
        specs: [{ label: `Guests`, value: `2` }],
        cta: { text: `Book`, href: `#contact` },
      },
    ],
    imageSrc: c,
    imageAlt: l = ``,
    ariaLabel: y,
    className: b,
  }) => {
    let x = o(),
      S = (0, g.useRef)(null);
    f(S, `200%`);
    let C = (0, g.useRef)(null),
      w = s(C, { once: !0, margin: `0px 0px -10% 0px` }),
      T = p(C, w),
      { scrollYProgress: E } = i({
        target: S,
        offset: [`start start`, `end end`],
      }),
      D = a(E, [0, 1], [`0%`, `-6%`]),
      O = n.length,
      [k, A] = m({ loop: O > 1, align: `center` }),
      [j, M] = (0, g.useState)(0),
      [N, P] = (0, g.useState)(!1),
      F = (0, g.useCallback)((e) => M(e.selectedScrollSnap()), []);
    return (
      (0, g.useEffect)(() => {
        if (A)
          return (
            F(A),
            A.on(`select`, F).on(`reInit`, F),
            () => {
              A.off(`select`, F).off(`reInit`, F);
            }
          );
      }, [A, F]),
      (0, g.useEffect)(() => {
        if (!A || N || x || O < 2) return;
        let e = window.setInterval(() => A.scrollNext(), 6e3);
        return () => window.clearInterval(e);
      }, [A, N, x, O]),
      (0, _.jsxs)(`section`, {
        ref: S,
        "aria-label": y ?? e,
        className: v(
          `relative z-10 text-secondary-foreground`,
          !c && `-mt-16`,
          b,
        ),
        children: [
          c &&
            (0, _.jsx)(`div`, {
              className: `sticky top-0 h-svh w-full overflow-hidden`,
              children: (0, _.jsx)(u, {
                src: c,
                alt: l,
                loading: `lazy`,
                decoding: `async`,
                style: x ? void 0 : { y: D },
                className: `absolute inset-x-0 top-0 h-[106%] w-full object-cover`,
              }),
            }),
          (0, _.jsx)(`div`, {
            className: `relative z-10 bg-secondary py-[var(--section-space)] [clip-path:polygon(4rem_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%,0_4rem)]`,
            children: (0, _.jsxs)(`div`, {
              className: `mx-auto w-[var(--container)]`,
              children: [
                (0, _.jsx)(h, {
                  text: e,
                  script: t,
                  rule: !0,
                  className: `max-w-[4.05em]`,
                }),
                (0, _.jsxs)(r.div, {
                  ref: C,
                  initial: x ? !1 : `hidden`,
                  animate: x || (w && T) ? `show` : `hidden`,
                  onMouseEnter: () => P(!0),
                  onMouseLeave: () => P(!1),
                  className: `mt-[clamp(2.5rem,5vw,4rem)]`,
                  children: [
                    (0, _.jsx)(r.div, {
                      variants: {
                        hidden: { clipPath: `inset(100% 0% 0% 0%)` },
                        show: {
                          clipPath: `inset(0% 0% 0% 0%)`,
                          transition: {
                            duration: 0.9,
                            ease: [0.75, 0, 0.25, 1],
                          },
                        },
                      },
                      children: (0, _.jsx)(`div`, {
                        ref: k,
                        className: `overflow-hidden`,
                        children: (0, _.jsx)(`ul`, {
                          className: `flex`,
                          children: n.map((e, t) =>
                            (0, _.jsx)(
                              `li`,
                              {
                                "aria-roledescription": `slide`,
                                "aria-label": `${t + 1} of ${O}`,
                                className: `min-w-0 shrink-0 grow-0 basis-full`,
                                children: (0, _.jsxs)(`div`, {
                                  className: `grid grid-cols-1 gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[1fr_minmax(0,22rem)_1fr] lg:items-end xl:grid-cols-[1fr_minmax(0,26rem)_1fr]`,
                                  children: [
                                    e.imageSrc &&
                                      (0, _.jsx)(`div`, {
                                        className: `order-1 mx-auto flex aspect-[4/5] w-full max-w-[26rem] flex-col overflow-hidden rounded-[var(--radius-image)] lg:order-2`,
                                        children: (0, _.jsx)(d, {
                                          src: e.imageSrc,
                                          alt: e.imageAlt ?? ``,
                                          loading: `lazy`,
                                          decoding: `async`,
                                          className: `min-h-0 w-full flex-1 object-cover`,
                                        }),
                                      }),
                                    (0, _.jsx)(`h3`, {
                                      className: `order-2 text-center text-[length:var(--text-h1)] [overflow-wrap:anywhere] lg:order-4 lg:col-span-3`,
                                      children: e.name,
                                    }),
                                    e.specs &&
                                      e.specs.length > 0 &&
                                      (0, _.jsx)(`dl`, {
                                        className: `order-3 grid grid-cols-2 gap-x-[var(--gap)] gap-y-6 lg:order-1 lg:grid-cols-1 lg:justify-items-end lg:text-right`,
                                        children: e.specs.map((e, t) =>
                                          (0, _.jsxs)(
                                            `div`,
                                            {
                                              className: `flex flex-col gap-1.5`,
                                              children: [
                                                (0, _.jsx)(`dt`, {
                                                  className: `text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground`,
                                                  children: e.label,
                                                }),
                                                (0, _.jsx)(`dd`, {
                                                  className: `text-[length:var(--text-h3)] leading-none [font-family:var(--font-heading)]`,
                                                  children: e.value,
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                    (0, _.jsxs)(`div`, {
                                      className: `order-4 flex flex-col items-start gap-4 lg:order-3`,
                                      children: [
                                        (0, _.jsxs)(`div`, {
                                          className: `flex items-baseline gap-3`,
                                          children: [
                                            (0, _.jsx)(`p`, {
                                              className: `text-[length:var(--text-h1)] leading-none [font-family:var(--font-heading)]`,
                                              children: e.price,
                                            }),
                                            e.period &&
                                              (0, _.jsx)(`p`, {
                                                className: `text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-muted-foreground`,
                                                children: e.period,
                                              }),
                                          ],
                                        }),
                                        e.description &&
                                          (0, _.jsx)(`p`, {
                                            className: `max-w-[22rem] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground`,
                                            children: e.description,
                                          }),
                                        e.cta &&
                                          (0, _.jsx)(`a`, {
                                            href: e.cta.href,
                                            className: `btn-secondary`,
                                            children: e.cta.text,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              `${t}-${e.name}`,
                            ),
                          ),
                        }),
                      }),
                    }),
                    O > 1 &&
                      (0, _.jsxs)(`div`, {
                        className: `mt-[clamp(2rem,4vw,3rem)] flex items-center justify-center gap-6`,
                        children: [
                          (0, _.jsx)(`button`, {
                            type: `button`,
                            "aria-label": `Previous`,
                            onClick: () => A?.scrollPrev(),
                            className: `flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current`,
                            children: (0, _.jsx)(`svg`, {
                              viewBox: `0 0 16 16`,
                              fill: `none`,
                              className: `h-4 w-4`,
                              "aria-hidden": `true`,
                              children: (0, _.jsx)(`path`, {
                                d: `M10 3 5 8l5 5`,
                                stroke: `currentColor`,
                                strokeWidth: 1,
                              }),
                            }),
                          }),
                          (0, _.jsxs)(`div`, {
                            className: `flex items-center gap-4`,
                            children: [
                              (0, _.jsx)(`p`, {
                                "aria-hidden": `true`,
                                className: `text-[length:var(--text-label)] font-semibold tabular-nums`,
                                children: j + 1,
                              }),
                              (0, _.jsx)(`div`, {
                                "aria-hidden": `true`,
                                className: `h-px w-16 bg-current`,
                              }),
                              (0, _.jsx)(`p`, {
                                "aria-hidden": `true`,
                                className: `text-[length:var(--text-label)] font-semibold tabular-nums`,
                                children: O,
                              }),
                            ],
                          }),
                          (0, _.jsx)(`button`, {
                            type: `button`,
                            "aria-label": `Next`,
                            onClick: () => A?.scrollNext(),
                            className: `flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition-colors duration-300 hover:border-current`,
                            children: (0, _.jsx)(`svg`, {
                              viewBox: `0 0 16 16`,
                              fill: `none`,
                              className: `h-4 w-4`,
                              "aria-hidden": `true`,
                              children: (0, _.jsx)(`path`, {
                                d: `m6 3 5 5-5 5`,
                                stroke: `currentColor`,
                                strokeWidth: 1,
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
export { y as default };
