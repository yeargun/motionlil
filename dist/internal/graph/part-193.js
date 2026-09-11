import { weakMapGet as weakMapGetAnimationMap, weakMapSet } from "./../motion-dom/weak-host.js";
import { Hc } from "./part-571.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Vg = (vk) => {
  var wk = weakMapGetAnimationMap(Hc, vk);
  if (wk) return wk;
  var xk = /* @__PURE__ */ new Map();
  weakMapSet(Hc, vk, xk);
  return xk;
};
export {
  Vg
};
