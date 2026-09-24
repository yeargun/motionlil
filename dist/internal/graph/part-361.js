import { isVariantLabel } from "./part-128.js";
import { ad } from "./part-500.js";
import "./effect-499.js";
import "./effect-573.js";
let getVariantContext = function(a) {
  if (!a) return;
  let b = a.props;
  if (!a.isControllingVariants) {
    let c2 = a.parent, d = c2 ? getVariantContext(c2) || {} : {};
    if (b.initial !== void 0) d.initial = b.initial;
    return d;
  }
  let c = {};
  {
    let a2 = ad, d = 0;
    for (; d < a2.length; ++d) {
      let e = a2[d] ?? "";
      {
        let a3 = b[e];
        if (isVariantLabel(a3) || a3 === false) c[e] = a3;
      }
    }
  }
  return c;
};
export {
  getVariantContext
};
