import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./react-CYSpVEiy.js";
import { t as i } from "./use-scroll-8ORUNK4x.js";
import { t as a } from "./use-transform-bpC3FWZk.js";
import { t as o } from "./use-reduced-motion-C1Eci-zP.js";
import { t as s } from "./clsx-CdxywoMz.js";
import { t as c } from "./bundle-mjs-BHwMjErG.js";
var l = e(t(), 1),
  u = n(),
  d = (...e) => c(s(e)),
  f = ({
    d: e,
    viewBox: t,
    className: n = ``,
    strokeWidth: s = 2,
    scrub: c = !0,
  }) => {
    let f = (0, l.useRef)(null),
      p = o(),
      m = Array.isArray(e) ? e : [e],
      { scrollYProgress: h } = i({
        target: f,
        offset: [`start 0.8`, `end 0.3`],
      }),
      g = a(h, [0, 0.02], [0, 1]),
      [, , _ = 1, v = 1] = t.split(/[\s,]+/).map(Number),
      y = v / _ < 0.05;
    return (0, u.jsx)(`div`, {
      ref: f,
      "aria-hidden": `true`,
      className: d(`relative w-full text-foreground`, n),
      children: (0, u.jsx)(`svg`, {
        viewBox: t,
        fill: `none`,
        preserveAspectRatio: y ? `none` : void 0,
        className: d(`block w-full overflow-visible`, y ? `h-px` : `h-full`),
        children: m.map((e, t) =>
          p
            ? (0, u.jsx)(
                `path`,
                {
                  d: e,
                  stroke: `currentColor`,
                  strokeWidth: s,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                },
                t,
              )
            : c
              ? (0, u.jsx)(
                  r.path,
                  {
                    d: e,
                    stroke: `currentColor`,
                    strokeWidth: s,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    style: { pathLength: h, opacity: g },
                  },
                  t,
                )
              : (0, u.jsx)(
                  r.path,
                  {
                    d: e,
                    stroke: `currentColor`,
                    strokeWidth: s,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    initial: { pathLength: 0, opacity: 0 },
                    whileInView: { pathLength: 1, opacity: 1 },
                    viewport: { once: !0, margin: `0px 0px -20% 0px` },
                    transition: {
                      pathLength: {
                        duration: 1.6,
                        delay: t * 0.15,
                        ease: [0.65, 0, 0.35, 1],
                      },
                      opacity: { duration: 0.01, delay: t * 0.15 },
                    },
                  },
                  t,
                ),
        ),
      }),
    });
  };
export { f as t };
