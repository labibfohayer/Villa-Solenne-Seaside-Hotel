import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./AnimatePresence-BNTS0YQZ.js";
import { t as s } from "./use-motion-value-event-Cf2P5EZX.js";
import { t as c } from "./use-motion-template-DKlVa3bl.js";
import { t as l } from "./use-reduced-motion-C1Eci-zP.js";
import { t as u } from "./use-in-view-BJ7YAfH4.js";
import { t as d } from "./clsx-CdxywoMz.js";
import { t as f } from "./bundle-mjs-BHwMjErG.js";
import { t as p } from "./Media-nQn4h4A8.js";
import { a as m } from "./kitMotion-C_dZit-a.js";
var h = e(t(), 1),
  g = n(),
  _ = (...e) => f(d(e)),
  v = [0.25, 1, 0.5, 1],
  y = [0.75, 0, 0.25, 1],
  b = (e) =>
    `https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
  x = (e) => Math.min(1, Math.max(0, e)),
  S = 0.9,
  C = 0.1,
  w = ({ item: e }) =>
    (0, g.jsxs)(g.Fragment, {
      children: [
        e.imageSrc &&
          (0, g.jsx)(p, {
            src: e.imageSrc,
            alt: e.imageAlt ?? ``,
            loading: `lazy`,
            decoding: `async`,
            className: `absolute inset-0 size-full object-cover`,
          }),
        (0, g.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `absolute inset-0 bg-black/40`,
        }),
      ],
    }),
  T = (e, t, n) => {
    let r = t === 0 ? 0 : t - S,
      i = t === n - 1 ? n : t + 1 - C,
      o = a(e, (e) => x((e * n - r) / (i - r)));
    return { life: o, y: a(o, (e) => `${3 - 6 * e}%`) };
  },
  E = ({ item: e, entry: t, progress: n, count: i, reduce: o }) => {
    let s = a(t, (e) => 38 - 83 * x(e)),
      l = a(t, (e) => 24 - 69 * x(e)),
      u = c`inset(${s}% ${l}% 0% ${l}% round 9999px 9999px 0px 0px)`,
      { life: d, y: f } = T(n, 0, i),
      p = a([t, d], ([e, t]) => 1.32 - 0.14 * x(e) - 0.1 * t);
    return (0, g.jsx)(r.div, {
      style: o ? void 0 : { clipPath: u },
      className: `absolute inset-0 overflow-hidden`,
      children: (0, g.jsx)(r.div, {
        style: o ? void 0 : { scale: p, y: f },
        className: `absolute inset-0`,
        children: (0, g.jsx)(w, { item: e }),
      }),
    });
  },
  D = ({ item: e, index: t, count: n, progress: i, reduce: o }) => {
    let s = a(i, (e) => x((e * n - (t - S)) / (S - C))),
      c = a(s, (e) => `${100 - 100 * e}%`),
      l = a(s, (e) => `${-100 + 100 * e}%`),
      { life: u, y: d } = T(i, t, n),
      f = a(u, (e) => 1.18 - 0.1 * e);
    return o
      ? null
      : (0, g.jsx)(r.div, {
          style: { y: c },
          className: `absolute inset-0 overflow-hidden`,
          children: (0, g.jsx)(r.div, {
            style: { y: l },
            className: `absolute inset-0`,
            children: (0, g.jsx)(r.div, {
              style: { scale: f, y: d },
              className: `absolute inset-0`,
              children: (0, g.jsx)(w, { item: e }),
            }),
          }),
        });
  },
  O = ({ index: e, count: t, progress: n, reduce: i, children: o }) => {
    let s = a(n, (n) => `${(n * t - e) * -10}svh`);
    return (0, g.jsx)(r.div, {
      style: i ? void 0 : { y: s },
      className: `flex flex-col items-center`,
      children: o,
    });
  },
  k = ({
    aside: e = `From Sitges`,
    items: t = [
      {
        title: `The beach`,
        description: `2 min`,
        imageSrc: b(1032650),
        imageAlt: `The sun setting over a sandy beach`,
      },
      {
        title: `The old town`,
        description: `5 min`,
        imageSrc: b(3445683),
        imageAlt: `White facade with blue wooden shutters`,
      },
      {
        title: `The airport`,
        description: `25 min`,
        imageSrc: b(358319),
        imageAlt: `A plane coming in to land`,
      },
      {
        title: `Barcelona`,
        description: `35 min`,
        imageSrc: b(1388030),
        imageAlt: `Barcelona rooftops at sunset`,
      },
    ],
    ariaLabel: n,
    className: a,
  }) => {
    let c = l() ?? !1,
      d = (0, h.useRef)(null),
      f = (0, h.useRef)(null),
      p = u(f, { once: !0, amount: 0.5 }),
      x = Math.max(t.length, 1),
      [S, C] = (0, h.useState)(0),
      { scrollYProgress: T } = i({
        target: d,
        offset: [`start start`, `end end`],
      }),
      { scrollYProgress: k } = i({
        target: d,
        offset: [`start end`, `start start`],
      });
    (m(d, `200%`),
      s(T, `change`, (e) => {
        let t = Math.min(x - 1, Math.max(0, Math.floor(e * x + 0.5)));
        C((e) => (e === t ? e : t));
      }));
    let A = t[Math.min(S, t.length - 1)],
      j = (A?.title ?? ``).split(` `),
      M = (e) => ({
        enter: { y: `105%` },
        show: {
          y: `0%`,
          transition: { duration: c ? 0 : 0.8, ease: v, delay: c ? 0 : e },
        },
        leave: { y: `-105%`, transition: { duration: c ? 0 : 0.4, ease: y } },
      });
    return (0, g.jsx)(`section`, {
      "aria-label": n ?? e ?? `Getting here`,
      className: _(`relative bg-background text-white`, a),
      children: (0, g.jsx)(`div`, {
        ref: d,
        style: { height: `${100 + x * 65}svh` },
        className: `relative`,
        children: (0, g.jsxs)(`div`, {
          ref: f,
          className: `sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden px-[var(--gutter)] text-center`,
          children: [
            t[0] &&
              (0, g.jsx)(E, {
                item: t[0],
                entry: k,
                progress: T,
                count: x,
                reduce: c,
              }),
            t
              .slice(1)
              .map((e, t) =>
                (0, g.jsx)(
                  D,
                  { item: e, index: t + 1, count: x, progress: T, reduce: c },
                  t,
                ),
              ),
            c &&
              A &&
              A !== t[0] &&
              (0, g.jsx)(`div`, {
                className: `absolute inset-0`,
                children: (0, g.jsx)(w, { item: A }),
              }),
            e &&
              (0, g.jsx)(`p`, {
                className: `absolute left-1/2 top-[18svh] -translate-x-1/2 whitespace-nowrap text-[length:var(--text-label)] font-semibold uppercase tracking-[0.6em]`,
                children: e,
              }),
            (0, g.jsx)(`div`, {
              className: `relative flex min-h-[1.2em] w-full flex-col items-center text-[length:var(--text-display)] leading-[var(--heading-leading)]`,
              children: (0, g.jsx)(o, {
                mode: `wait`,
                initial: !1,
                children:
                  p &&
                  A &&
                  (0, g.jsx)(
                    r.div,
                    {
                      initial: `enter`,
                      animate: `show`,
                      exit: `leave`,
                      className: `flex flex-col items-center`,
                      children: (0, g.jsxs)(O, {
                        index: S,
                        count: x,
                        progress: T,
                        reduce: c,
                        children: [
                          (0, g.jsx)(`h2`, {
                            "aria-label": A.title,
                            className: `text-balance uppercase`,
                            children: j.map((e, t) =>
                              (0, g.jsxs)(
                                h.Fragment,
                                {
                                  children: [
                                    (0, g.jsx)(`div`, {
                                      "aria-hidden": `true`,
                                      className: `inline-block overflow-hidden pb-[0.06em] align-top`,
                                      children: (0, g.jsx)(r.div, {
                                        variants: M(t * 0.08),
                                        className: `inline-block`,
                                        children: e,
                                      }),
                                    }),
                                    t < j.length - 1 && ` `,
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                          A.description &&
                            (0, g.jsx)(`div`, {
                              className: `mt-[clamp(1.25rem,3svh,2rem)] overflow-hidden`,
                              children: (0, g.jsx)(r.p, {
                                variants: M(0.2 + j.length * 0.08),
                                className: `font-[family-name:var(--font-body)] text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]`,
                                children: A.description,
                              }),
                            }),
                        ],
                      }),
                    },
                    S,
                  ),
              }),
            }),
          ],
        }),
      }),
    });
  };
export { k as default };
