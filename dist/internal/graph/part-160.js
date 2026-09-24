import { Sd } from "./part-504.js";
import "./effect-499.js";
import "./effect-573.js";
let parseCSSVariable = function(a) {
  let b = Sd.exec(a);
  if (!b) return [void 0];
  return ["--" + (b[1] ?? b[2]), b[3]];
};
export {
  parseCSSVariable
};
