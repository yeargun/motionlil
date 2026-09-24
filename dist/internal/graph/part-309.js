import { removeAxisDelta } from "./part-308.js";
import "./effect-499.js";
import "./effect-573.js";
let removeAxisTransforms = function(a, b, c, d = null, e = null) {
  removeAxisDelta(a, b[c[0] ?? ""], b[c[1] ?? ""], b[c[2] ?? ""], b.scale, d, e);
};
export {
  removeAxisTransforms
};
