import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-reduced-motion-C1Eci-zP.js";
import { t as a } from "./clsx-CdxywoMz.js";
import { t as o } from "./bundle-mjs-BHwMjErG.js";
import { t as s } from "./DrawOnScroll-DT8-q4eB.js";
import { t as c } from "./useWordLines-UmAMd4Zo.js";
var l = e(t(), 1),
  u = n(),
  d = (...e) => o(a(e)),
  f = [0.25, 1, 0.5, 1],
  p = ({
    text: e,
    script: t,
    as: n = `h2`,
    align: a = `center`,
    rule: o = !1,
    delay: p = 0,
    play: m,
    className: h,
    scriptClassName: g,
  }) => {
    let _ = i(),
      v = n,
      y = (0, l.useRef)(null),
      b = (e ?? ``).split(/\s+/).filter(Boolean),
      x = c(y, e ?? ``),
      S = b.length ? Math.max(0, ...x) + 1 : 0;
    if (!b.length && !t) return null;
    let C =
        m === void 0
          ? {
              initial: _ ? !1 : `hidden`,
              whileInView: `show`,
              viewport: { once: !0, amount: 0.3 },
            }
          : { initial: _ ? !1 : `hidden`, animate: m ? `show` : `hidden` },
      w = (e) => ({
        hidden: { y: `105%` },
        show: {
          y: `0%`,
          transition: { duration: 1.2, ease: f, delay: p + e * 0.08 },
        },
      }),
      T = {
        hidden: { clipPath: `inset(-20% 100% -20% 0%)` },
        show: {
          clipPath: `inset(-20% 0% -20% 0%)`,
          transition: {
            duration: 1.2,
            ease: [0.75, 0, 0.25, 1],
            delay: p + 0.35 + S * 0.08,
          },
        },
      };
    return (0, u.jsxs)(`div`, {
      className: d(
        `flex w-full flex-col`,
        a === `center` ? `items-center text-center` : `items-start text-left`,
      ),
      children: [
        (0, u.jsxs)(r.div, {
          className: `relative`,
          ...C,
          children: [
            b.length > 0 &&
              (0, u.jsx)(v, {
                "aria-label": e,
                className: d(
                  `text-[length:var(--text-h1)] [overflow-wrap:anywhere]`,
                  h,
                ),
                children: (0, u.jsx)(`div`, {
                  ref: y,
                  "aria-hidden": `true`,
                  children: b.flatMap((e, t) => [
                    (0, u.jsx)(
                      `div`,
                      {
                        "data-word": !0,
                        className: `inline-block overflow-hidden pb-[0.06em] align-top`,
                        children: (0, u.jsx)(r.div, {
                          className: `block`,
                          variants: w(x[t] ?? 0),
                          children: e,
                        }),
                      },
                      t,
                    ),
                    t < b.length - 1 ? ` ` : null,
                  ]),
                }),
              }),
            t &&
              (0, u.jsx)(r.p, {
                "aria-hidden": b.length ? !0 : void 0,
                className: d(
                  `pointer-events-none font-[family-name:var(--font-script)] text-[length:calc(var(--text-h1)*0.62)] leading-none tracking-normal normal-case`,
                  b.length ? `ml-auto mt-[0.1em] w-max -rotate-6` : `relative`,
                  g,
                ),
                variants: T,
                children: t,
              }),
          ],
        }),
        o &&
          (0, u.jsx)(`div`, {
            className: d(`h-12 w-px`, t ? `mt-10` : `mt-6`),
            children: (0, u.jsx)(s, {
              d: `M0.5 0 V48`,
              viewBox: `0 0 1 48`,
              strokeWidth: 1,
              className: `h-12 text-current opacity-50`,
            }),
          }),
      ],
    });
  };
export { p as t };
