import { hd } from "./part-133.js";
import "./effect-499.js";
import "./effect-573.js";
let resolveVariantFromProps = function(a, b, c, d) {
  if (typeof b == "function") b = hd(b, a, c, d);
  if (typeof b == "string") {
    let c2 = a.variants;
    b = c2 && c2[b];
  }
  if (typeof b == "function") b = hd(b, a, c, d);
  return b;
};
export {
  resolveVariantFromProps
};
