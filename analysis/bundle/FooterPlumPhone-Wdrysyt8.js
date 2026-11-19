import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./react-CYSpVEiy.js";
import { t as n } from "./use-reduced-motion-C1Eci-zP.js";
import { t as r } from "./clsx-CdxywoMz.js";
import { t as i } from "./bundle-mjs-BHwMjErG.js";
var a = e(),
  o = (...e) => i(r(e)),
  s = [
    {
      title: `Stay`,
      links: [
        { text: `Rooms`, href: `#rooms` },
        { text: `Spa`, href: `#spa` },
        { text: `Restaurant`, href: `#restaurant` },
      ],
    },
    {
      title: `Visit`,
      links: [
        { text: `Getting here`, href: `#contact` },
        { text: `Gift cards`, href: `#contact` },
      ],
    },
    {
      title: `Follow`,
      links: [
        { text: `Instagram`, href: `#` },
        { text: `Newsletter`, href: `#` },
      ],
    },
  ],
  c = [0.25, 1, 0.5, 1],
  l = ({
    phone: e = `+34 938 11 42 00`,
    email: r = `stay@villasolenne.es`,
    address: i = [`Passeig de la Ribera 42`, `08870 Sitges, Spain`],
    columns: l = s,
    legal: u = `Villa Solenne. All rights reserved.`,
    brand: d = `Villa Solenne`,
    toTopText: f = `To top`,
    ariaLabel: p,
    className: m,
  }) => {
    let h = n();
    return (0, a.jsxs)(`footer`, {
      "aria-label": p ?? `${d} contact`,
      className: o(
        `relative z-10 bg-deep pt-[var(--section-space)] pb-[clamp(1.5rem,3vw,2.5rem)] text-deep-foreground`,
        m,
      ),
      children: [
        (0, a.jsxs)(`div`, {
          className: `mx-auto flex w-[var(--container)] flex-col items-center text-center`,
          children: [
            (0, a.jsxs)(`svg`, {
              "aria-hidden": `true`,
              viewBox: `0 0 40 40`,
              className: `h-10 w-10 text-current`,
              children: [
                (0, a.jsx)(`path`, {
                  d: `M20 4 V36 M4 20 H36 M8.7 8.7 L31.3 31.3 M31.3 8.7 L8.7 31.3`,
                  stroke: `currentColor`,
                  strokeWidth: 1,
                  strokeLinecap: `round`,
                  fill: `none`,
                }),
                (0, a.jsx)(`circle`, {
                  cx: `20`,
                  cy: `20`,
                  r: `3`,
                  stroke: `currentColor`,
                  strokeWidth: 1,
                  fill: `none`,
                }),
              ],
            }),
            (0, a.jsx)(`p`, {
              className: `mt-6 text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-70`,
              children: d,
            }),
            (0, a.jsx)(t.div, {
              initial: h ? !1 : `hidden`,
              whileInView: `show`,
              viewport: { once: !0, amount: 0.3 },
              className: `mt-[clamp(2rem,5vw,4rem)] overflow-hidden pb-[0.06em]`,
              children: (0, a.jsx)(t.a, {
                href: `tel:${e.replace(/[^\d+]/g, ``)}`,
                variants: {
                  hidden: { y: `105%` },
                  show: { y: `0%`, transition: { duration: 1.2, ease: c } },
                },
                className: `block text-balance text-[length:min(var(--text-display),11vw)] uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]`,
                children: e,
              }),
            }),
            r &&
              (0, a.jsx)(`a`, {
                href: `mailto:${r}`,
                className: `btn-link mt-[clamp(1.5rem,3vw,2.5rem)] [overflow-wrap:anywhere]`,
                children: r,
              }),
            i.length > 0 &&
              (0, a.jsx)(`div`, {
                className: `mt-6 flex flex-col gap-1`,
                children: i.map((e, t) =>
                  (0, a.jsx)(
                    `p`,
                    {
                      className: `text-[length:var(--text-small)] leading-[1.5] opacity-80`,
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
          ],
        }),
        (0, a.jsx)(`div`, {
          className: `mx-auto mt-[var(--section-space)] w-[var(--container)] border-t border-deep-foreground/20 pt-[clamp(1.5rem,3vw,2.5rem)]`,
          children: (0, a.jsxs)(`div`, {
            className: `flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between`,
            children: [
              l.length > 0 &&
                (0, a.jsx)(`div`, {
                  className: `grid grid-cols-2 gap-x-[var(--gap)] gap-y-8 lg:flex lg:gap-[clamp(2rem,5vw,5rem)]`,
                  children: l.map((e, t) =>
                    (0, a.jsxs)(
                      `nav`,
                      {
                        "aria-label": e.title,
                        className: `flex min-w-0 flex-col gap-3`,
                        children: [
                          (0, a.jsx)(`p`, {
                            className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60`,
                            children: e.title,
                          }),
                          e.links.map((e, t) =>
                            (0, a.jsx)(
                              `a`,
                              {
                                href: e.href,
                                className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] [overflow-wrap:anywhere]`,
                                children: e.text,
                              },
                              t,
                            ),
                          ),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              (0, a.jsxs)(`div`, {
                className: `flex flex-col items-start gap-4 lg:items-end`,
                children: [
                  (0, a.jsx)(`button`, {
                    type: `button`,
                    onClick: () =>
                      window.scrollTo({
                        top: 0,
                        behavior: h ? `auto` : `smooth`,
                      }),
                    className: `btn-link`,
                    children: f,
                  }),
                  u &&
                    (0, a.jsx)(`p`, {
                      className: `text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] opacity-60`,
                      children: u,
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { l as default };
