var e = 20,
  t = (e) => {
    ((e.defaultMuted = !0), (e.muted = !0));
  },
  n = (t, r, i = e) => {
    t.isConnected &&
      t.play().then(r, () => {
        i > 1 && window.setTimeout(() => n(t, r, i - 1), 600);
      });
  },
  r = (e) => {
    !e.autoplay ||
      !e.paused ||
      e.dataset.webildPlaying !== void 0 ||
      ((e.dataset.webildPlaying = ``), n(e, () => {}));
  },
  i = (e) => {
    e.dataset.webildVideo === void 0 &&
      ((e.dataset.webildVideo = ``),
      (e.muted || e.hasAttribute(`muted`) || e.autoplay) && t(e),
      e.setAttribute(`playsinline`, ``),
      r(e));
  },
  a = (e) => {
    (e instanceof HTMLVideoElement && i(e),
      e.querySelectorAll?.(`video`).forEach(i));
  },
  o = () =>
    document.querySelectorAll(`video`).forEach((e) => {
      (delete e.dataset.webildPlaying, r(e));
    }),
  s = !1,
  c = () => {
    s ||
      typeof document > `u` ||
      typeof MutationObserver > `u` ||
      ((s = !0),
      a(document),
      new MutationObserver((e) => {
        for (let t of e)
          if (t.type === `attributes`) {
            if (!(t.target instanceof HTMLVideoElement)) continue;
            (delete t.target.dataset.webildVideo,
              delete t.target.dataset.webildPlaying,
              i(t.target));
          } else
            t.addedNodes.forEach(
              (e) =>
                e instanceof Element &&
                a(
                  e.tagName === `SOURCE` && e.parentElement
                    ? e.parentElement
                    : e,
                ),
            );
      }).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: [`src`, `autoplay`],
      }),
      document.addEventListener(`touchstart`, o, { once: !0, passive: !0 }),
      document.addEventListener(`visibilitychange`, () => {
        document.visibilityState === `visible` && o();
      }));
  },
  l = (e) => {
    !e.paused ||
      e.readyState >= 2 ||
      (t(e), e.setAttribute(`playsinline`, ``), n(e, () => e.pause()));
  };
c();
export { l as t };
