import { gh } from "./part-294.js";
import { noop } from "./part-426.js";
import "./effect-499.js";
import "./effect-573.js";
let animateView = function(a, b) {
  let c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set(), i = null, j = null, k = new Promise((a2, b2) => {
    i = a2;
    j = b2;
  });
  k.catch(noop);
  let l = null, m = (a2, b2, d2) => {
    let e2 = l.currentSubject;
    if (!c.has(e2)) c.set(e2, {});
    c.get(e2)[a2] = {
      keyframes: b2,
      options: d2 === void 0 ? {} : d2
    };
    return l;
  };
  l = {
    currentSubject: "root",
    targets: c,
    resolveDefs: d,
    cropOverride: e,
    pairs: f,
    classNames: g,
    flatGroups: h,
    notifyReady: i,
    notifyReject: j,
    readyPromise: k,
    update: a,
    options: Object.assign({
      interrupt: "wait"
    }, b),
    add: (a2, b2) => {
      l.currentSubject = a2;
      d.add(a2);
      if (b2 !== void 0) f.set(a2, b2);
      if (!c.has(a2)) c.set(a2, {});
      return l;
    },
    crop: (a2) => {
      e.set(l.currentSubject, a2 === void 0 || a2);
      return l;
    },
    group: (a2) => {
      h[a2 === void 0 || a2 ? "delete" : "add"](l.currentSubject);
      return l;
    },
    class: (a2) => {
      g.set(l.currentSubject, a2);
      return l;
    },
    layout: (a2) => m("layout", {}, a2),
    enter: (a2, b2) => m("enter", a2, b2),
    exit: (a2, b2) => m("exit", a2, b2),
    new: (a2, b2) => m("new", a2, b2),
    old: (a2, b2) => m("old", a2, b2),
    updateTarget: m,
    then: (a2, b2) => k.then(a2, b2)
  };
  gh(l);
  return l;
};
export {
  animateView
};
