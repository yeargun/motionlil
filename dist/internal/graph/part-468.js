import { Wa, cubicBezier, noop } from "./part-426.js";
import "./effect-499.js";
import "./effect-573.js";
let easingDefinitionToFunction = (a) => {
  if (Array.isArray(a)) return cubicBezier(a[0], a[1], a[2], a[3]);
  if (typeof a == "string") return Wa[a] ?? noop;
  return a;
};
export {
  easingDefinitionToFunction
};
