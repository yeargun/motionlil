import { Qd } from "./part-159.js";
import { resolveVariant } from "./part-330.js";
import { animateTarget } from "./part-336.js";
import { animateVariant } from "./part-337.js";
import "./effect-499.js";
import "./effect-573.js";
let animateVisualElement = function(a, b, c) {
  let g, d = c || {};
  Qd(a, "AnimationStart", b);
  return (Array.isArray(b) ? Promise.all((g = (b2) => animateVariant(a, b2, d), b).map(g)) : typeof b == "string" ? animateVariant(a, b, d) : Promise.all(animateTarget(a, typeof b == "function" ? resolveVariant(a, b, d.custom) : b, d))).then((c2) => {
    Qd(a, "AnimationComplete", b);
    return true;
  });
};
export {
  animateVisualElement
};
