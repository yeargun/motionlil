import { Ig } from "./part-276.js";
import { Jg } from "./part-539.js";
import "./effect-499.js";
import "./effect-573.js";
let warnOnce = function(a, b, c = null) {
  if (a || Jg.has(b)) return;
  console.warn(Ig(b, c));
  Jg.add(b);
};
export {
  warnOnce
};
