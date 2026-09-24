import { Af } from "./part-217.js";
import { Ff } from "./part-218.js";
import { r } from "./part-22.js";
import { hj } from "./part-395.js";
import { ij } from "./part-396.js";
import { lj } from "./part-398.js";
import { removeItem } from "./part-79.js";
import "./effect-499.js";
import "./effect-573.js";
let createScopedAnimate = function(a = null) {
  let b = null, c = {};
  if (a) {
    b = a.scope;
    let d = a.reduceMotion;
    if (d != null) c.reduceMotion = d;
    let e = a.skipAnimations;
    if (e != null) c.skipAnimations = e;
  }
  return (a2, d, e) => {
    let f = hj(a2), g = Object.assign({}, c, f ? d : e), h = g.onComplete;
    r(g, "onComplete");
    let j = f ? ij(a2, g, b, lj) : lj(a2, d, g, b), k = {
      animations: []
    };
    Ff(k, j);
    if (typeof h == "function") Af(k).then(h);
    if (b) {
      let a3 = b;
      a3.animations.push(k);
      Af(k).then((b2) => {
        removeItem(a3.animations, k);
        return true;
      });
    }
    return k;
  };
};
export {
  createScopedAnimate
};
