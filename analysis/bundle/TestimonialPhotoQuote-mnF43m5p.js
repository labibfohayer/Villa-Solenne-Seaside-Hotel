import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-reduced-motion-C1Eci-zP.js";
import { t as s } from "./Media-nQn4h4A8.js";
import { a as c } from "./kitMotion-C_dZit-a.js";
var l = e(t(), 1),
  u = n(),
  d = [
    {
      quote: `We came for three nights and stayed for a week. It felt like a house, not a hotel.`,
      name: `Clara Weiss`,
      role: `Guest from Vienna`,
    },
  ],
  f = ({ item: e, reduce: t }) => {
    let n = (0, l.useRef)(null),
      { scrollYProgress: o } = i({
        target: n,
        offset: [`start end`, `center center`],
      }),
      s = a(o, [0, 1], [0.2, 1]);
    return (0, u.jsx)(`figure`, {
      ref: n,
      className: `mx-auto flex min-h-svh w-[var(--container)] flex-col items-center justify-center py-[var(--section-space)] text-center`,
      children: (0, u.jsxs)(r.div, {
        style: t ? void 0 : { opacity: s },
        className: `flex flex-col items-center`,
        children: [
          (0, u.jsx)(`svg`, {
            "aria-hidden": `true`,
            viewBox: `0 0 32 24`,
            className: `mb-8 h-5 w-7 fill-current opacity-80`,
            children: (0, u.jsx)(`path`, {
              d: `M0 24V14C0 6 4 1 12 0l1 3C8 4 6 7 6 11h6v13H0Zm19 0V14c0-8 4-13 12-14l1 3c-5 1-7 4-7 8h6v13H19Z`,
            }),
          }),
          (0, u.jsx)(`blockquote`, {
            className: `max-w-[48rem]`,
            children: (0, u.jsx)(`p`, {
              className: `font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] uppercase leading-[1] tracking-[var(--heading-tracking)] text-balance [overflow-wrap:anywhere]`,
              children: e.quote,
            }),
          }),
          (0, u.jsxs)(`figcaption`, {
            className: `mt-10 flex flex-col items-center gap-2`,
            children: [
              (0, u.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `mb-2 h-px w-10 bg-current opacity-60`,
              }),
              (0, u.jsx)(`p`, {
                className: `text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)]`,
                children: e.name,
              }),
              e.role &&
                (0, u.jsx)(`p`, {
                  className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-75`,
                  children: e.role,
                }),
            ],
          }),
        ],
      }),
    });
  },
  p = ({
    items: e = d,
    imageSrc:
      t = `https://images.pexels.com/photos/18222953/pexels-photo-18222953.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    imageAlt: n = `White villa with bougainvillea`,
    ariaLabel: r = `Guest words`,
  }) => {
    let i = o() ?? !1,
      a = (0, l.useRef)(null);
    return (
      c(a, `200%`),
      (0, u.jsxs)(`section`, {
        ref: a,
        "aria-label": r,
        className: `relative -mb-[100svh] text-white`,
        children: [
          (0, u.jsxs)(`div`, {
            className: `sticky top-0 h-svh overflow-hidden`,
            children: [
              (0, u.jsx)(s, {
                src: t,
                alt: n,
                loading: `lazy`,
                decoding: `async`,
                className: `absolute inset-0 size-full object-cover object-center`,
              }),
              (0, u.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `absolute inset-0 bg-black/30`,
              }),
              (0, u.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent`,
              }),
            ],
          }),
          (0, u.jsx)(`div`, {
            className: `relative -mt-[100svh]`,
            children: e.map((e, t) => (0, u.jsx)(f, { item: e, reduce: i }, t)),
          }),
          (0, u.jsx)(`div`, { "aria-hidden": `true`, className: `h-svh` }),
        ],
      })
    );
  };
export { p as default };
