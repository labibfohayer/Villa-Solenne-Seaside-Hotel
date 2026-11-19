import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-motion-template-DKlVa3bl.js";
import { t as s } from "./use-reduced-motion-C1Eci-zP.js";
import { t as c } from "./clsx-CdxywoMz.js";
import { t as l } from "./bundle-mjs-BHwMjErG.js";
var u = e(t(), 1),
  d = n(),
  f = (...e) => l(c(e)),
  p = ({ children: e, className: t }) => {
    let n = (0, u.useRef)(null),
      c = s(),
      { scrollYProgress: l } = i({
        target: n,
        offset: [`start end`, `end start`],
      }),
      p = a(l, [0, 0.5], [38, -45], { clamp: !0 }),
      m = a(l, [0, 0.5], [24, -45], { clamp: !0 }),
      h = o`inset(${p}% ${m}% 0% ${m}% round 9999px 9999px 0px 0px)`,
      g = a(l, [0, 0.5, 1], [1.2, 1.05, 1]),
      _ = a(l, [0, 1], [`-4%`, `4%`]);
    return (0, d.jsx)(`div`, {
      ref: n,
      className: f(`relative overflow-hidden`, t),
      children: (0, d.jsx)(r.div, {
        style: c ? void 0 : { clipPath: h },
        className: `absolute inset-0`,
        children: (0, d.jsx)(r.div, {
          style: c ? void 0 : { scale: g, y: _ },
          className: `absolute inset-0`,
          children: e,
        }),
      }),
    });
  };
export { p as t };
