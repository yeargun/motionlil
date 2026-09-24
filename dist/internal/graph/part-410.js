import { resize } from "./part-258.js";
import { oj } from "./part-401.js";
import { Jj } from "./part-408.js";
import { Kj } from "./part-409.js";
import { z } from "./part-426.js";
import { y } from "./part-427.js";
import { A } from "./part-428.js";
import { Lj } from "./part-585.js";
import { Mj } from "./part-586.js";
import { Nj } from "./part-587.js";
import { Oj } from "./part-588.js";
import { Pj } from "./part-589.js";
import "./effect-499.js";
import "./effect-573.js";
let scrollInfo = function(a, b) {
  let c = b || {}, d = c.container;
  if (d === void 0) d = document.scrollingElement;
  if (!d) return () => {
  };
  let e = d, f = Nj.get(e);
  if (!f) {
    f = /* @__PURE__ */ new Set();
    Nj.set(e, f);
  }
  let g = f, h = Jj(e, a, {
    time: 0,
    x: oj(),
    y: oj()
  }, c);
  g.add(h);
  if (!Lj.has(e)) {
    let a2 = (a3) => {
      g.forEach((a4) => {
        a4.notify();
      });
    }, b2 = (b3) => {
      g.forEach((a3) => {
        a3.measure(A.timestamp);
      });
      y.preUpdate(a2, false, false);
    }, c2 = (a3) => {
      y.read(b2, false, false);
    };
    Lj.set(e, c2);
    let d2 = Kj(e);
    window.addEventListener("resize", c2);
    if (e !== document.documentElement) Mj.set(e, resize(e, c2));
    d2.addEventListener("scroll", c2);
    c2(A);
  }
  if (c.trackContentSize && !Pj.has(e)) {
    let a2 = Lj.get(e), b2 = {
      width: e.scrollWidth,
      height: e.scrollHeight
    };
    Oj.set(e, b2);
    Pj.set(e, y.read((c2) => {
      let d2 = e.scrollWidth, f2 = e.scrollHeight;
      if (b2.width !== d2 || b2.height !== f2) {
        a2(A);
        b2.width = d2;
        b2.height = f2;
      }
    }, true, false));
  }
  let j = Lj.get(e);
  y.read(j, false, true);
  return () => {
    z(j);
    let a2 = Nj.get(e);
    if (!a2) return;
    a2.delete(h);
    if (a2.size) return;
    let c2 = Lj.get(e);
    Lj.delete(e);
    if (c2) {
      Kj(e).removeEventListener("scroll", c2);
      let a3 = Mj.get(e);
      if (a3) a3();
      window.removeEventListener("resize", c2);
    }
    let d2 = Pj.get(e);
    if (d2) {
      z(d2);
      Pj.delete(e);
    }
    Oj.delete(e);
  };
};
export {
  scrollInfo
};
