import { isDragActive } from "./part-239.js";
import { dg } from "./part-241.js";
import "./effect-499.js";
import "./effect-573.js";
let hover = function(a, b, c) {
  let d = dg(a, c || {}), e = d.eventOptions;
  d.elements.forEach((a2) => {
    let d2 = false, f = false, g, h, i, j = (b2) => {
      if (g) {
        g(b2);
        g = void 0;
      }
      a2.removeEventListener("pointerleave", h);
    };
    i = (a3) => {
      d2 = false;
      window.removeEventListener("pointerup", i);
      window.removeEventListener("pointercancel", i);
      if (f) {
        f = false;
        j(a3);
      }
    };
    h = (a3) => {
      if (a3.pointerType === "touch") return;
      if (d2) {
        f = true;
        return;
      }
      j(a3);
    };
    a2.addEventListener("pointerenter", (c2) => {
      if (c2.pointerType === "touch" || isDragActive()) return;
      f = false;
      let d3 = b(a2, c2);
      if (typeof d3 != "function") return;
      g = d3;
      a2.addEventListener("pointerleave", h, e);
    }, e);
    a2.addEventListener("pointerdown", () => {
      d2 = true;
      window.addEventListener("pointerup", i, e);
      window.addEventListener("pointercancel", i, e);
    }, e);
  });
  return d.cancel;
};
export {
  hover
};
