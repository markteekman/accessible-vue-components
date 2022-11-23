import { ref as r, openBlock as l, createElementBlock as a, createElementVNode as u, withKeys as k } from "vue";
const m = ["onKeydown"], p = {
  __name: "SkipLinks",
  setup(s) {
    const c = r(null), o = (n) => {
      n.setAttribute("tabindex", "-1"), n.focus();
    }, i = (n) => {
      const e = c.value.querySelector("a").getAttribute("href");
      if (document.querySelector(e)) {
        const t = document.querySelector(e);
        o(t);
      } else if (!document.querySelector(e) && document.querySelector("h1")) {
        const t = document.querySelector("h1");
        o(t);
      } else if (!document.querySelector(e) && !document.querySelector("h1")) {
        const t = document.querySelector("main");
        o(t);
      } else
        console.warn("SkipLinks are not set, either missing an h1, main landmark or main content id on the page.");
    };
    return (n, e) => (l(), a("div", {
      class: "avc-skiplinks",
      ref_key: "skipLinks",
      ref: c
    }, [
      u("a", {
        href: "#main-content",
        class: "skiplinks__skiplink",
        onKeydown: k(i, ["enter"])
      }, "Skip to main content", 40, m)
    ], 512));
  }
}, d = {
  install: (s) => {
    s.component("SkipLinks", p);
  }
};
export {
  d as default
};
