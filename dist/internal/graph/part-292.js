import { mapEasingToNativeEasing } from "./part-191.js";
import { wf, zf } from "./part-216.js";
import { getValueTransition } from "./part-223.js";
import { resolveElements } from "./part-231.js";
import { warnOnce } from "./part-277.js";
import { Kg } from "./part-278.js";
import { Lg } from "./part-279.js";
import { Mg } from "./part-280.js";
import { Ng } from "./part-281.js";
import { Pg } from "./part-282.js";
import { Qg } from "./part-283.js";
import { Rg } from "./part-284.js";
import { Sg } from "./part-285.js";
import { getViewAnimationLayerInfo } from "./part-286.js";
import { getViewAnimations } from "./part-287.js";
import { Vg } from "./part-288.js";
import { Xg } from "./part-289.js";
import { Yg } from "./part-290.js";
import { Zg } from "./part-291.js";
import { secondsToMilliseconds } from "./part-432.js";
import { Hg } from "./part-538.js";
import { ah } from "./part-541.js";
import { bh } from "./part-542.js";
import { ch } from "./part-543.js";
let _g = (a) => {
  let b = a.update, c = a.targets, d = a.resolveDefs, e = a.cropOverride, f = a.pairs, g = a.classNames, h = a.flatGroups, i = a.options;
  if (!document.startViewTransition) return (async (a2) => {
    await a2();
    let d2 = {
      animations: []
    };
    zf(d2, [], wf);
    return d2;
  })(b);
  let j = /* @__PURE__ */ new Map(), k = [], l = [], m = [], n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), w = (a2, b2, c2, d2) => {
    let e2 = resolveElements(a2), f2 = b2;
    if (!b2) f2 = e2.map((a3) => {
      if (j.has(a3)) return;
      return getComputedStyle(a3).getPropertyValue("view-transition-name");
    });
    return e2.map((a3, e3) => {
      let g2 = j.get(a3);
      if (g2) return g2;
      let h2 = f2[e3];
      if (b2 || !h2 || h2 == "none" || h2 == "auto" || h2 == "match-element" || h2.startsWith("motion-view-")) {
        if (!b2 || h2 == null) h2 = Kg();
        Lg(a3, "view-transition-name", h2);
        k.push(a3);
      }
      return ((a4, b3, c3, d3) => {
        j.set(a4, b3);
        if (c3) {
          Lg(a4, "view-transition-class", c3);
          l.push(a4);
        }
        if (d3) {
          Lg(a4, "view-transition-group", d3);
          m.push(a4);
          if (d3 != "none") {
            let c4 = getComputedStyle(a4);
            if (c4.overflowX != "visible" || c4.overflowY != "visible") n.add(b3);
          }
        }
        return b3;
      })(a3, h2, c2, d2);
    });
  }, x = (a2) => {
    c.forEach((b2, c2) => {
      let i2 = g.get(c2), k2 = c2 !== "root" && d.has(c2), l2, m2 = [c2];
      if (k2) {
        l2 = "contain";
        if (h.has(c2)) l2 = "none";
        if (!f.has(c2)) m2 = w(c2, null, i2, l2);
        else if (a2 == "old") {
          t.set(c2, resolveElements(c2));
          m2 = w(c2, null, i2, l2);
          s.set(c2, m2);
        } else {
          let a3 = t.get(c2);
          if (a3) a3.forEach((a4) => {
            Mg(a4, "view-transition-name");
            j.delete(a4);
          });
          m2 = w(f.get(c2), s.get(c2), i2, l2);
        }
      }
      let n2 = e.get(c2);
      m2.forEach((c3, d2) => {
        let e2 = o.get(c3), f2 = b2;
        if (e2 && e2 !== b2) f2 = Object.assign({}, e2, b2);
        o.set(c3, f2);
        if (n2 !== void 0) q.set(c3, n2);
        let g2 = r.get(c3) || {};
        g2[a2] = [d2, m2.length];
        r.set(c3, g2);
      });
    });
  }, y = (a2, b2) => {
    let c2 = r.get(a2) || {}, d2 = c2.new;
    if (b2 == "old") d2 = c2.old;
    else if (b2 != "new") d2 = d2 ?? c2.old;
    return d2 ?? [-1, 1];
  }, z = (a2, b2, c2, d2, e2) => {
    let f2 = a2 || {}, h2 = (bh[b2] || []).map((a3) => (f2[a3] || {}).options).find((a3) => a3), j2 = Xg(getValueTransition(i, c2), getValueTransition(h2 || {}, c2));
    if (typeof j2.delay == "function") j2.delay = j2.delay(d2, e2);
    return j2;
  }, A = (a2) => {
    let b2 = y(a2, "group"), c2 = b2[0];
    if (c2 == -1) c2 = 0;
    let d2 = z(o.get(a2), "group", "layout", c2, b2[1]);
    if (d2.duration) d2.duration = secondsToMilliseconds(d2.duration);
    let e2 = Yg(d2);
    return {
      delay: secondsToMilliseconds(e2.delay || 0),
      duration: e2.duration,
      ease: e2.ease
    };
  }, B = (a2) => {
    j.forEach((b2, c2) => {
      let d2 = c2.getBoundingClientRect && c2.getBoundingClientRect();
      if (d2 && d2.height) {
        let e2 = getComputedStyle(c2), f2 = {};
        Hg.forEach((a3) => {
          f2[a3] = e2[a3];
        });
        let g2 = u.get(b2) || {};
        g2[a2] = {
          width: d2.width,
          height: d2.height,
          radii: f2
        };
        u.set(b2, g2);
      }
    });
  }, D = () => {
    if (!Object.keys(c.get("root") || {}).length) Qg(":root", {
      "view-transition-name": "none"
    });
    Qg("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
      "animation-timing-function": "linear !important"
    });
    p.forEach((a2) => {
      Qg(`::view-transition-group(${a2})`, {
        overflow: "clip"
      });
      Qg(`::view-transition-old(${a2}), ::view-transition-new(${a2})`, {
        width: "100%",
        height: "100%",
        "object-fit": "cover"
      });
    });
    n.forEach((a2) => {
      Qg(`::view-transition-group-children(${a2})`, {
        overflow: "clip"
      });
    });
    Rg();
  }, E = () => {
    Ng(k, l, m);
    Sg();
  }, F = null;
  try {
    x("old");
    B("old");
    D();
    F = document.startViewTransition(() => Promise.resolve(b()).then(() => {
      x("new");
      B("new");
      p.clear();
      r.forEach((a2, b2) => {
        let d2 = q.get(b2) ?? ((a3) => {
          let b3 = u.get(a3);
          if (!b3) return false;
          let c2 = b3.old, d3 = b3.new;
          if (!c2 || !d3 || !c2.height || !d3.height) return false;
          return Math.abs(c2.width / c2.height - d3.width / d3.height) > 0.2;
        })(b2);
        if (b2 !== "root" && d2) p.add(b2);
      });
      D();
    }));
  } catch (a2) {
    E();
    return Promise.reject(a2);
  }
  F.finished.finally(E);
  return new Promise((a2, b2) => {
    F.ready.then(() => {
      let f2, g2, b3 = getViewAnimations(), c2 = [], d2 = /* @__PURE__ */ new Set(), e2 = /* @__PURE__ */ new Set();
      o.forEach((a3, b4) => {
        let f3 = r.get(b4), g3 = !!f3.new && !f3.old, h2 = !!f3.old && !f3.new, j2 = (a3.enter || {}).keyframes || {}, k2 = (a3.exit || {}).keyframes || {};
        ah.forEach((f4) => {
          let l2 = a3[f4];
          if (!l2 || f4 == "enter" && !g3 || f4 == "exit" && !h2) return;
          let m2 = Pg(f4), n2 = y(b4, m2);
          if (n2[0] == -1) return;
          let o2 = l2.keyframes, p2 = l2.options;
          for (let a4 in o2) {
            let l3 = o2[a4];
            if (l3 == null) continue;
            if (a4 == "x" || a4 == "y") {
              warnOnce(false, `animateView() animates view-transition layers with CSS properties; the "${a4}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`);
              continue;
            }
            if (f4 == "new" && g3 && j2[a4] != null || f4 == "old" && h2 && k2[a4] != null) continue;
            let q2 = Xg(getValueTransition(i, a4), getValueTransition(p2, a4));
            if (!Array.isArray(l3)) {
              let b5 = f4 == "enter" ? k2[a4] : void 0, c3;
              if (b5 != null) c3 = Array.isArray(b5) ? b5[b5.length - 1] : b5;
              else if (a4 == "opacity" || (m2 == "new" ? g3 : h2)) c3 = ch[m2][a4];
              if (c3 !== void 0) l3 = [c3, l3];
            }
            if (typeof q2.delay == "function") q2.delay = q2.delay(n2[0], n2[1]);
            if (q2.duration) q2.duration = secondsToMilliseconds(q2.duration);
            if (q2.delay) q2.delay = secondsToMilliseconds(q2.delay);
            c2.push(Zg(Object.assign(q2, {
              element: document.documentElement,
              name: a4,
              pseudoElement: `::view-transition-${m2}(${b4})`,
              keyframes: l3
            }), null));
            d2.add(`${b4}:${m2}`);
            if (a4 == "opacity") e2.add(`${b4}:${m2}`);
          }
        });
      });
      b3.forEach((a3) => {
        if (a3.playState == "finished") return;
        let b4 = a3.effect, f3 = getViewAnimationLayerInfo(b4.pseudoElement);
        if (!f3) return;
        let g3 = f3.layer, h2 = f3.type;
        if (d2.has(`${g3}:${h2}`)) {
          let d3 = e2.has(`${g3}:new`) && e2.has(`${g3}:old`) && b4.getKeyframes();
          if (d3) d3 = d3.some((a4) => a4.mixBlendMode);
          if (d3) c2.push(Zg(null, a3));
          else a3.cancel();
          return;
        }
        let i2 = h2 == "old" ? "new" : h2 == "new" ? "old" : "";
        if (i2 != "" && d2.has(`${g3}:${i2}`) && !e2.has(`${g3}:${i2}`)) {
          a3.cancel();
          return;
        }
        let j2 = r.get(g3), k2 = (h2 == "old" || h2 == "new") && !!j2 && !!j2.old && !!j2.new, l2 = null;
        if (h2.startsWith("group")) {
          let a4 = A(g3);
          l2 = {
            delay: a4.delay,
            duration: a4.duration,
            easing: mapEasingToNativeEasing(a4.ease, a4.duration)
          };
        } else {
          let a4 = k2 ? "group" : h2, b5 = y(g3, a4), c3 = b5[0];
          if (c3 == -1) c3 = 0;
          let d3 = z(o.get(g3), a4, a4 == "group" ? "layout" : "", c3, b5[1]), e3 = d3.visualDuration;
          if (d3.duration) d3.duration = secondsToMilliseconds(d3.duration);
          d3 = Yg(d3);
          l2 = {
            delay: secondsToMilliseconds(d3.delay || 0),
            duration: k2 && e3 !== void 0 ? secondsToMilliseconds(e3) : d3.duration,
            easing: k2 ? "linear" : mapEasingToNativeEasing(d3.ease, d3.duration)
          };
        }
        b4.updateTiming(l2);
        c2.push(Zg(null, a3));
      });
      u.forEach((a3, b4) => {
        if (!p.has(b4)) return;
        let d3 = A(b4), e3 = (a3.old || {}).radii || {}, f3 = (a3.new || {}).radii || {};
        Hg.forEach((a4) => {
          let g3 = e3[a4] || f3[a4] || "0px", h2 = f3[a4] || e3[a4] || "0px";
          if (Vg(g3) && Vg(h2)) return;
          c2.push(Zg({
            element: document.documentElement,
            name: a4,
            pseudoElement: `::view-transition-group(${b4})`,
            keyframes: [g3, h2],
            delay: d3.delay,
            duration: d3.duration,
            ease: d3.ease
          }, null));
        });
      });
      (f2 = void 0, g2 = {
        animations: []
      }, zf(g2, c2, wf), a2).call(f2, g2);
    }).catch(() => F.updateCallbackDone.then(() => {
      let b3, c2, d2;
      return (b3 = void 0, c2 = [], d2 = {
        animations: []
      }, zf(d2, c2, wf), a2).call(b3, d2);
    }, b2));
  });
};
export {
  _g
};
