import { removeAxisTransforms } from "./part-309.js";
import { ph } from "./part-548.js";
import { qh } from "./part-549.js";
import "./effect-499.js";
import "./effect-573.js";
let removeBoxTransforms = function(a, b, c = null, d = null) {
  removeAxisTransforms(a.x, b, ph, c ? c.x : null, d ? d.x : null);
  removeAxisTransforms(a.y, b, qh, c ? c.y : null, d ? d.y : null);
};
export {
  removeBoxTransforms
};
