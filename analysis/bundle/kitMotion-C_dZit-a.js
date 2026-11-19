import { a as e } from "./chunk-BEqpzyXh.js";
import { t } from "./react-CFRkDy7n.js";
var n = e(t(), 1),
  r = (e, t = `150%`) => {
    (0, n.useEffect)(() => {
      let n = e.current;
      if (!n) return;
      let r = new IntersectionObserver(
        (e) => {
          e.some((e) => e.isIntersecting) &&
            (n.querySelectorAll(`img`).forEach((e) => {
              e.loading === `lazy` && (e.loading = `eager`);
            }),
            r.disconnect());
        },
        { rootMargin: `${t} 0px` },
      );
      return (r.observe(n), () => r.disconnect());
    }, [e, t]);
  },
  i = (e, t = !0, r = 2500) => {
    let [i, a] = (0, n.useState)(!1);
    return (
      (0, n.useEffect)(() => {
        if (!t || i) return;
        let n = e.current,
          o = n instanceof HTMLImageElement ? n : n?.querySelector(`img`);
        if (!o || o.complete) {
          a(!0);
          return;
        }
        o.loading === `lazy` && o.setAttribute(`loading`, `eager`);
        let s = () => a(!0);
        (o.addEventListener(`load`, s), o.addEventListener(`error`, s));
        let c = window.setTimeout(s, r);
        return () => {
          (o.removeEventListener(`load`, s),
            o.removeEventListener(`error`, s),
            window.clearTimeout(c));
        };
      }, [e, t, i, r]),
      i
    );
  },
  a = {
    ease: [0.22, 1, 0.36, 1],
    easeInOut: [0.65, 0, 0.35, 1],
    fast: 0.3,
    base: 0.7,
    slow: 1.2,
    distance: `24px`,
  },
  o = (e, t) => {
    let n = e.match(/cubic-bezier\(([^)]+)\)/);
    if (!n) return t;
    let r = n[1].split(`,`).map((e) => Number(e.trim()));
    return r.length === 4 && r.every((e) => Number.isFinite(e)) ? r : t;
  },
  s = (e, t) => {
    let n = e.trim();
    if (!n) return t;
    let r = parseFloat(n);
    return Number.isFinite(r) ? (n.endsWith(`ms`) ? r / 1e3 : r) : t;
  },
  c = (e) => {
    if (typeof window > `u`) return a;
    let t = getComputedStyle(e ?? document.documentElement),
      n = (e) => t.getPropertyValue(e);
    return {
      ease: o(n(`--ease-out`), a.ease),
      easeInOut: o(n(`--ease-in-out`), a.easeInOut),
      fast: s(n(`--dur-fast`), a.fast),
      base: s(n(`--dur-base`), a.base),
      slow: s(n(`--dur-slow`), a.slow),
      distance: n(`--reveal-distance`).trim() || a.distance,
    };
  },
  l = () => {
    let [e, t] = (0, n.useState)(a);
    return (
      (0, n.useEffect)(() => {
        t(c());
      }, []),
      e
    );
  },
  u = (e, t) => {
    let n = Math.min(1, Math.max(0.001, t));
    return [Math.min(n - 0.001, Math.max(0, e)), n];
  };
export { r as a, l as i, u as n, i as r, c as t };
