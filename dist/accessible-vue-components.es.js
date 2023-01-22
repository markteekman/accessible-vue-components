import { ref as i, openBlock as l, createElementBlock as a, createElementVNode as u, withKeys as k, renderSlot as m, createTextVNode as d } from "vue";
const p = ["onKeydown"], _ = {
  __name: "SkipLinks",
  setup(s) {
    const c = i(null), o = (e) => {
      e.setAttribute("tabindex", "-1"), e.focus();
    }, r = (e) => {
      const t = c.value.querySelector("a").getAttribute("href");
      if (document.querySelector(t)) {
        const n = document.querySelector(t);
        o(n);
      } else if (!document.querySelector(t) && document.querySelector("h1")) {
        const n = document.querySelector("h1");
        o(n);
      } else if (!document.querySelector(t) && !document.querySelector("h1")) {
        const n = document.querySelector("main");
        o(n);
      } else
        console.warn("SkipLinks are not set, either missing an h1, main landmark or main content id on the page.");
    };
    return (e, t) => (l(), a("div", {
      class: "avc-skiplinks",
      ref_key: "skipLinks",
      ref: c
    }, [
      u("a", {
        href: "#main-content",
        class: "skiplinks__skiplink",
        onKeydown: k(r, ["enter"])
      }, [
        m(e.$slots, "default", {}, () => [
          d("Skip to main content")
        ])
      ], 40, p)
    ], 512));
  }
}, S = {
  install: (s) => {
    s.component("SkipLinks", _);
  }
};
export {
  S as default
};
