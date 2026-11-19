import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-spring-COrbYfYR.js";
import { t as s } from "./use-motion-value-voZS5v3L.js";
import { t as c } from "./use-reduced-motion-C1Eci-zP.js";
import { n as ee } from "./Media-nQn4h4A8.js";
var l = e(t(), 1),
  u = n(),
  d = [0.25, 1, 0.5, 1],
  f = [0.75, 0, 0.25, 1],
  p = [0.6, 0, 0, 1],
  m = 1.05,
  h = 1.8,
  g = 2.7,
  _ = `inset(0px 0px 0px 0px round 0px 0px 0px 0px)`,
  v = (e, t, n) => {
    let r = (e - n) / 2,
      i = n / 2;
    return `inset(${t}px ${r}px 0px ${r}px round ${i}px ${i}px 0px 0px)`;
  },
  y = ({ className: e }) =>
    (0, u.jsx)(`svg`, {
      viewBox: `0 0 40 40`,
      "aria-hidden": `true`,
      className: e,
      children: [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((e) =>
        (0, u.jsx)(
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
  b = ({
    title: e = `Villa Solenne`,
    script: t = `Sitges`,
    labelLeft: n = `A place`,
    labelRight: b = `to return to`,
    marquee: x = [`By day`, `By night`],
    imageSrc:
      S = `https://images.pexels.com/photos/35495060/pexels-photo-35495060.jpeg?auto=compress&cs=tinysrgb&w=1920`,
    imageAlt: C = ``,
    cta: w = { text: `Book a stay`, href: `#contact` },
    intro: T = !0,
    introDelay: E = 0,
  }) => {
    let D = c(),
      O = T && !D,
      [k, te] = (0, l.useState)(!O),
      [A] = (0, l.useState)(() => {
        let e = typeof window > `u` ? 1440 : window.innerWidth,
          t = typeof window > `u` ? 900 : window.innerHeight,
          n = e >= 880;
        return {
          W: e,
          H: t,
          start: e * (n ? 0.26 : 0.5),
          risen: e * (n ? 0.34 : 0.64),
          gap: e * (n ? 0.02 : 0.035),
        };
      }),
      j = (0, l.useRef)(null),
      { scrollY: M } = i(),
      N = a(M, (e) => Math.min(1, Math.max(0, e / A.H))),
      P = a(N, [0, 0.5], [`0%`, `-8%`]),
      F = a(N, [0, 0.4], [`0vh`, `-80vh`]),
      I = s(0),
      L = s(0),
      R = o(I, { stiffness: 180, damping: 18 }),
      z = o(L, { stiffness: 180, damping: 18 }),
      B = e.split(/\s+/).filter(Boolean),
      V = Math.max(1, ...B.map((e) => e.length)),
      H = { "--fit": `${150 / V}vw`, "--fit-lg": `${110 / V}vw` },
      U = B.map((e, t) => B.slice(0, t).join(``).length),
      W = O ? E + h + 0.05 : E,
      G = O ? E + h + 0.35 : E + B.join(``).length * 0.03 + 0.4,
      K = O ? E + h + 0.6 : G + 0.2,
      q = x.length ? x : [``],
      { W: J, H: Y } = A,
      X = Y * 1.04,
      ne = Y * 0.2,
      re = -Y * 0.45,
      ie = J * 1.6,
      Z = (e) => [
        v(J, X - e, A.start + e * 2),
        v(J, X - e, A.start + e * 2),
        v(J, ne - e, A.risen + e * 2),
        v(J, re - e, ie + e * 2),
      ],
      Q = {
        duration: g,
        delay: E,
        times: [0, m / g, h / g, 1],
        ease: [`linear`, f, p],
      },
      ae = (e) => {
        if (D) return;
        let t = e.currentTarget.getBoundingClientRect();
        (I.set((e.clientX - t.left - t.width / 2) * 0.3),
          L.set((e.clientY - t.top - t.height / 2) * 0.3));
      },
      oe = () => {
        (I.set(0), L.set(0));
      },
      $ = (e, t, n) =>
        Array.from(e).map((e, i) =>
          (0, u.jsx)(
            r.div,
            {
              className: `inline-block whitespace-pre`,
              initial: { y: `105%` },
              animate: { y: `0%` },
              transition: { duration: 0.6, ease: d, delay: E + t + i * n },
              children: e,
            },
            i,
          ),
        );
    return (0, u.jsx)(`section`, {
      ref: j,
      "aria-label": `Hero`,
      className: `sticky top-0 z-[-1] h-svh bg-deep text-deep-foreground`,
      children: (0, u.jsxs)(`div`, {
        className: `sticky top-0 h-svh overflow-hidden`,
        children: [
          !k &&
            (0, u.jsxs)(r.div, {
              "aria-hidden": `true`,
              initial: { opacity: 1 },
              animate: { opacity: 0 },
              transition: { duration: 0.5, delay: E + h + 0.1 },
              className: `pointer-events-none absolute inset-0`,
              children: [
                (0, u.jsx)(r.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: E + 0.1 },
                  className: `absolute inset-[0.75rem] rounded-[1.25rem] border border-deep-foreground/10 lg:inset-[1rem]`,
                }),
                (0, u.jsx)(r.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 0.05 },
                  transition: { duration: 1, delay: E + 0.5 },
                  className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap font-[family-name:var(--font-script)] text-[38vw] leading-none normal-case`,
                  children: t,
                }),
                (0, u.jsx)(r.div, {
                  initial: { opacity: 0, rotate: -45 },
                  animate: { opacity: 1, rotate: 0 },
                  transition: { duration: 0.8, ease: d, delay: E + 0.2 },
                  className: `absolute left-1/2 top-[2rem] -ml-[0.875rem] size-[1.75rem] lg:top-[2.5rem]`,
                  children: (0, u.jsx)(y, { className: `size-full` }),
                }),
                (0, u.jsxs)(`div`, {
                  className: `absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center`,
                  children: [
                    n &&
                      (0, u.jsx)(`div`, {
                        className: `absolute right-[calc(50%+clamp(8rem,16vw,15rem))] hidden overflow-hidden text-[length:var(--text-label)] uppercase tracking-[0.6em] lg:block`,
                        children: $(n, 0.35, 0.04),
                      }),
                    (0, u.jsxs)(`div`, {
                      className: `relative flex flex-col items-center`,
                      children: [
                        (0, u.jsx)(`div`, {
                          style: H,
                          className: `w-min text-center font-[family-name:var(--font-heading)] text-[length:min(clamp(1.625rem,4.4vw,4rem),var(--fit))] uppercase leading-[0.86] tracking-[-0.02em]`,
                          children: B.flatMap((e, t) => [
                            (0, u.jsx)(
                              `div`,
                              {
                                className: `inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-top`,
                                children: $(e, 0.2 + t * 0.12, 0.025),
                              },
                              t,
                            ),
                            t < B.length - 1 ? ` ` : null,
                          ]),
                        }),
                        t &&
                          (0, u.jsx)(r.p, {
                            initial: { clipPath: `inset(-30% 100% -30% 0%)` },
                            animate: { clipPath: `inset(-30% 0% -30% 0%)` },
                            transition: {
                              duration: 0.8,
                              ease: f,
                              delay: E + 0.55,
                            },
                            className: `mt-[0.1em] self-end -rotate-6 whitespace-nowrap font-[family-name:var(--font-script)] text-[clamp(1.5rem,2.6vw,2.4rem)] leading-none normal-case`,
                            children: t,
                          }),
                        (0, u.jsx)(`div`, {
                          className: `absolute top-[calc(100%+clamp(4rem,12vh,7rem))] h-[3.75rem] w-px bg-deep-foreground/15`,
                          children: (0, u.jsx)(r.div, {
                            initial: { scaleY: 0 },
                            animate: { scaleY: 1 },
                            transition: {
                              duration: 0.9,
                              ease: f,
                              delay: E + 0.3,
                            },
                            className: `h-full w-full origin-top bg-deep-foreground/70`,
                          }),
                        }),
                      ],
                    }),
                    b &&
                      (0, u.jsx)(`div`, {
                        className: `absolute left-[calc(50%+clamp(8rem,16vw,15rem))] hidden overflow-hidden whitespace-nowrap text-[length:var(--text-label)] uppercase tracking-[0.6em] lg:block`,
                        children: $(b, 0.35, 0.04),
                      }),
                  ],
                }),
                (0, u.jsxs)(r.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: E + 0.6 },
                  className: `absolute inset-x-0 bottom-[2rem] flex flex-col items-center gap-1 text-center text-[0.5625rem] font-semibold uppercase tracking-[0.18em] lg:bottom-[2.5rem]`,
                  children: [
                    (0, u.jsx)(`p`, { children: e }),
                    (0, u.jsx)(`p`, {
                      className: `opacity-70`,
                      children: [n, b].filter(Boolean).join(` `),
                    }),
                  ],
                }),
              ],
            }),
          !k &&
            (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(r.div, {
                  "aria-hidden": `true`,
                  initial: { clipPath: Z(A.gap)[0] },
                  animate: { clipPath: Z(A.gap) },
                  transition: Q,
                  className: `pointer-events-none absolute inset-0 bg-deep-foreground/20`,
                }),
                (0, u.jsx)(r.div, {
                  "aria-hidden": `true`,
                  initial: { clipPath: Z(A.gap - 1)[0] },
                  animate: { clipPath: Z(A.gap - 1) },
                  transition: Q,
                  className: `pointer-events-none absolute inset-0 bg-deep`,
                }),
              ],
            }),
          (0, u.jsxs)(r.div, {
            initial: O ? { clipPath: Z(0)[0] } : !1,
            animate: k ? { clipPath: _ } : { clipPath: Z(0) },
            transition: k ? { duration: 0 } : Q,
            onAnimationComplete: () => te(!0),
            className: `absolute inset-0 text-white`,
            children: [
              (0, u.jsxs)(r.div, {
                initial: O ? { scale: 0.8, y: `-20vh` } : !1,
                animate: { scale: [0.8, 0.8, 1], y: [`-20vh`, `-20vh`, `0vh`] },
                transition: O
                  ? {
                      duration: g,
                      delay: E,
                      times: [0, h / g, 1],
                      ease: [`linear`, p],
                    }
                  : { duration: 0 },
                className: `absolute inset-0 origin-bottom`,
                children: [
                  (0, u.jsx)(ee, {
                    src: S,
                    alt: C,
                    loading: `eager`,
                    fetchPriority: `high`,
                    decoding: `async`,
                    style: D ? void 0 : { y: P },
                    className: `absolute inset-x-0 top-0 h-[110%] w-full origin-[50%_75%] object-cover object-center`,
                  }),
                  (0, u.jsx)(`div`, {
                    className: `absolute inset-x-0 top-0 h-[110%] bg-black/25`,
                  }),
                  (0, u.jsx)(`div`, {
                    className: `absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-black/25 to-transparent`,
                  }),
                  (0, u.jsx)(`div`, {
                    className: `absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/25 to-transparent`,
                  }),
                  (0, u.jsx)(`div`, {
                    className: `absolute inset-x-0 top-full h-[10%] bg-black/25`,
                  }),
                ],
              }),
              (0, u.jsxs)(r.div, {
                style: D ? void 0 : { y: F },
                className: `relative mx-auto flex h-full w-[var(--container)] flex-col items-center pt-[7.5rem] lg:pt-[clamp(4.5rem,9vh,7rem)]`,
                children: [
                  (0, u.jsxs)(`div`, {
                    className: `grid w-full grid-cols-2 items-end justify-items-center gap-x-[1.5rem] gap-y-[2rem] lg:grid-cols-[1fr_auto_1fr] lg:gap-[4vw]`,
                    children: [
                      (0, u.jsx)(`div`, {
                        className: `order-2 justify-self-start overflow-hidden lg:order-1 lg:justify-self-end lg:pb-[1.5em]`,
                        children: (0, u.jsx)(r.p, {
                          initial: D ? !1 : { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            duration: 0.9,
                            ease: `easeOut`,
                            delay: W + 0.3,
                          },
                          className: `font-[family-name:var(--font-heading)] text-[length:6vw] uppercase leading-none lg:text-[clamp(1rem,1.5vw,1.375rem)]`,
                          children: n,
                        }),
                      }),
                      (0, u.jsxs)(`div`, {
                        className: `relative order-1 col-span-2 flex flex-col items-center lg:order-2 lg:col-span-1`,
                        children: [
                          (0, u.jsx)(`h1`, {
                            "aria-label": e,
                            style: H,
                            className: `w-min text-center text-[length:min(25vw,var(--fit))] leading-[0.86] lg:text-[length:min(var(--text-display),var(--fit-lg))]`,
                            children: (0, u.jsx)(`div`, {
                              "aria-hidden": `true`,
                              children: B.flatMap((e, t) => [
                                (0, u.jsx)(
                                  `div`,
                                  {
                                    className: `inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-top`,
                                    children: Array.from(e).map((e, n) =>
                                      (0, u.jsx)(
                                        r.div,
                                        {
                                          className: `inline-block whitespace-pre`,
                                          initial: D ? !1 : { y: `120%` },
                                          animate: { y: `0%` },
                                          transition: {
                                            duration: 0.7,
                                            ease: d,
                                            delay: W + (U[t] + n) * 0.025,
                                          },
                                          children: e,
                                        },
                                        n,
                                      ),
                                    ),
                                  },
                                  t,
                                ),
                                t < B.length - 1 ? ` ` : null,
                              ]),
                            }),
                          }),
                          t &&
                            (0, u.jsx)(r.p, {
                              "aria-hidden": `true`,
                              initial: D
                                ? !1
                                : { clipPath: `inset(-20% 100% -20% 0%)` },
                              animate: { clipPath: `inset(-20% 0% -20% 0%)` },
                              transition: { duration: 0.9, ease: f, delay: G },
                              className: `pointer-events-none mt-[0.1em] self-end whitespace-nowrap font-[family-name:var(--font-script)] text-[length:12.5vw] leading-none normal-case -rotate-6 lg:text-[length:calc(var(--text-display)*0.5)]`,
                              children: t,
                            }),
                        ],
                      }),
                      (0, u.jsx)(`div`, {
                        className: `order-3 justify-self-end overflow-hidden lg:justify-self-start lg:pb-[1.5em]`,
                        children: (0, u.jsx)(r.p, {
                          initial: D ? !1 : { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            duration: 0.9,
                            ease: `easeOut`,
                            delay: W + 0.3,
                          },
                          className: `font-[family-name:var(--font-heading)] text-[length:6vw] uppercase leading-none lg:text-[clamp(1rem,1.5vw,1.375rem)]`,
                          children: b,
                        }),
                      }),
                    ],
                  }),
                  x.length > 0 &&
                    (0, u.jsx)(r.div, {
                      initial: D ? !1 : { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.8, delay: K },
                      className: `mt-[clamp(2.5rem,6vh,4rem)] w-[min(100%,22rem)] overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]`,
                      children: (0, u.jsx)(`div`, {
                        className: `flex w-max animate-[marquee-horizontal_32s_linear_infinite] motion-reduce:animate-none`,
                        children: [0, 1].map((e) =>
                          (0, u.jsx)(
                            `div`,
                            {
                              "aria-hidden": e === 1 ? !0 : void 0,
                              className: `flex shrink-0`,
                              children: [...q, ...q, ...q].map((e, t) =>
                                (0, u.jsxs)(
                                  `p`,
                                  {
                                    className: `shrink-0 px-[1rem] text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-80`,
                                    children: [e, ` ·`],
                                  },
                                  t,
                                ),
                              ),
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                ],
              }),
              w &&
                (0, u.jsxs)(r.a, {
                  href: w.href,
                  onMouseMove: ae,
                  onMouseLeave: oe,
                  initial: D ? !1 : { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, ease: d, delay: K + 0.1 },
                  style: { x: R, y: z },
                  className: `group absolute bottom-[clamp(1.5rem,5vh,3rem)] left-1/2 -ml-[3.5rem] flex size-[7rem] items-center justify-center rounded-full`,
                  children: [
                    (0, u.jsxs)(`svg`, {
                      viewBox: `0 0 112 112`,
                      fill: `none`,
                      className: `absolute inset-0 size-full -rotate-90`,
                      children: [
                        (0, u.jsx)(`circle`, {
                          cx: `56`,
                          cy: `56`,
                          r: `55`,
                          stroke: `currentColor`,
                          strokeOpacity: 0.35,
                          strokeWidth: 1,
                        }),
                        (0, u.jsx)(`circle`, {
                          cx: `56`,
                          cy: `56`,
                          r: `55`,
                          stroke: `currentColor`,
                          strokeWidth: 1,
                          pathLength: 1,
                          strokeDasharray: `1`,
                          strokeDashoffset: `1`,
                          className: `transition-[stroke-dashoffset] duration-[var(--dur-slow)] ease-[var(--ease-in-out)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]`,
                        }),
                      ],
                    }),
                    (0, u.jsx)(`p`, {
                      className: `relative max-w-[5rem] text-center text-[length:var(--text-label)] uppercase leading-[1.3] tracking-[var(--label-tracking)]`,
                      children: w.text,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  };
export { b as default };
