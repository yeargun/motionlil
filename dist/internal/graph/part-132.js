import { bd } from "./part-501.js";
import { cd } from "./part-502.js";
import "./effect-499.js";
import "./effect-573.js";
let initPrefersReducedMotion = function() {
  cd.current = true;
  if (typeof window == "undefined") return;
  if (window.matchMedia) {
    let a = window.matchMedia("(prefers-reduced-motion)");
    a.addEventListener("change", () => {
      bd.current = a.matches;
    });
    bd.current = a.matches;
  } else bd.current = false;
};
export {
  initPrefersReducedMotion
};
