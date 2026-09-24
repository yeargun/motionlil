import { resolveVariantFromProps } from "./part-134.js";
import "./effect-499.js";
import "./effect-573.js";
let resolveVariant = function(a, b = null, c = null) {
  let e = a.props;
  return resolveVariantFromProps(e, b, c ?? e.custom, a);
};
export {
  resolveVariant
};
