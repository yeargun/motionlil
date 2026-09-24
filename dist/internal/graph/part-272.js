import { oc } from "./part-118.js";
import { interpolate } from "./part-261.js";
import { transformValue } from "./part-271.js";
import "./effect-499.js";
import "./effect-573.js";
let mapValue = function(a, b, c, d = null) {
  let e = interpolate(b, c, d);
  return transformValue(() => e(oc(a)));
};
export {
  mapValue
};
