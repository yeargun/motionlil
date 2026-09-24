import { isCSSVariableName } from "./part-25.js";
import { Ih } from "./part-341.js";
import { buildTransform } from "./part-342.js";
import { Kh } from "./part-343.js";
import { Bb } from "./part-477.js";
import "./effect-499.js";
import "./effect-573.js";
let buildHTMLStyles = function(a, b, c) {
  let d = a.style, e = a.transformOrigin, f = false, g = false;
  for (let c2 in b) {
    let h = b[c2];
    if (Bb.has(c2)) f = true;
    else if (isCSSVariableName(c2)) a.vars[c2] = h;
    else if (c2.startsWith("origin")) {
      g = true;
      e[c2] = Ih(h, c2);
    } else d[c2] = Ih(h, c2);
  }
  if (!b.transform) {
    if (f || c) d.transform = buildTransform(b, a.transform, c);
    else if (d.transform) d.transform = "none";
  }
  if (g) d.transformOrigin = `${Kh(e.originX, "50%")} ${Kh(e.originY, "50%")} ${Kh(e.originZ, 0)}`;
};
export {
  buildHTMLStyles
};
