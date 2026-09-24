import { cubicBezierAsString } from "./part-190.js";
import { isBezierDefinition } from "./part-511.js";
import { De } from "./part-512.js";
import { Ee } from "./part-513.js";
import { generateLinearEasing } from "./part-57.js";
import "./effect-499.js";
import "./effect-573.js";
let mapEasingToNativeEasing = function(a, b) {
  if (!a) return;
  if (typeof a == "function") return De() ? generateLinearEasing(a, b) : "ease-out";
  if (isBezierDefinition(a)) return cubicBezierAsString(a);
  if (Array.isArray(a)) return a.map((a2) => mapEasingToNativeEasing(a2, b) || Ee.easeOut);
  return Ee[a];
};
export {
  mapEasingToNativeEasing
};
