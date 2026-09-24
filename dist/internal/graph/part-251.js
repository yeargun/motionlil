import { isHTMLElement } from "./part-236.js";
import { dg } from "./part-241.js";
import { isNodeOrChild } from "./part-243.js";
import { isElementKeyboardAccessible } from "./part-245.js";
import { lg } from "./part-249.js";
import { mg } from "./part-250.js";
import { ig } from "./part-531.js";
import { ng } from "./part-532.js";
import "./effect-499.js";
import "./effect-573.js";
let press = function(a, b, c) {
  let d = c || {}, e = dg(a, d), f = e.eventOptions, h = (a2) => {
    let c2 = a2.currentTarget;
    if (!mg(a2) || ng.has(a2)) return;
    ig.add(c2);
    if (d.stopPropagation) ng.add(a2);
    let e2 = b(c2, a2), g = {}, h2, i;
    for (let a3 in f) g[a3] = f[a3];
    g.capture = true;
    let j = (a3, b2) => {
      window.removeEventListener("pointerup", h2, g);
      window.removeEventListener("pointercancel", i, g);
      if (ig.has(c2)) ig.delete(c2);
      if (!mg(a3)) return;
      if (typeof e2 == "function") e2(a3, {
        success: b2
      });
    };
    h2 = (a3) => {
      j(a3, c2 === window || c2 === document || !!d.useGlobalTarget || isNodeOrChild(c2, a3.target));
    };
    i = (a3) => {
      j(a3, false);
    };
    window.addEventListener("pointerup", h2, g);
    window.addEventListener("pointercancel", i, g);
  };
  e.elements.forEach((a2) => {
    (d.useGlobalTarget ? window : a2).addEventListener("pointerdown", h, f);
    if (isHTMLElement(a2)) {
      a2.addEventListener("focus", (a3) => {
        lg(a3, f);
      });
      if (!isElementKeyboardAccessible(a2) && !a2.hasAttribute("tabindex")) a2.tabIndex = 0;
    }
  });
  return e.cancel;
};
export {
  press
};
