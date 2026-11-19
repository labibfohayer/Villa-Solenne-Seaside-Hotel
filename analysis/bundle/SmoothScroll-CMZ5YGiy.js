import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
import { t as n } from "./jsx-runtime-BAjjBXwY.js";
import { t as r } from "./lenis-react-DPHPAgo_.js";
var i = e(t(), 1),
  a = n(),
  o = () => {
    let [e, t] = (0, i.useState)(!1);
    return (
      (0, i.useEffect)(() => {
        t(!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
      }, []),
      e
        ? (0, a.jsx)(r, { root: !0, options: { lerp: 0.1, anchors: !0 } })
        : null
    );
  };
export { o as t };
