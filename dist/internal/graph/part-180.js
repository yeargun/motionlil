import { Nd } from "./part-156.js";
import { getVariableValue } from "./part-161.js";
import { fillWildcards } from "./part-162.js";
import { ae } from "./part-170.js";
import { ge } from "./part-176.js";
import { se } from "./part-181.js";
import { isCSSVariableToken } from "./part-26.js";
import { containsCSSVariable } from "./part-27.js";
import { findDimensionValueType } from "./part-45.js";
import { Cb } from "./part-478.js";
let re = (a) => {
  let c = a.unresolvedKeyframes, d = a.element, e = a.name;
  if (a.isAsync && !(d && d.current)) return;
  let f = a.motionValue;
  if (c[0] === null) {
    let a2 = f ? f.get() : void 0, b = c[c.length - 1];
    if (a2 != null) c[0] = a2;
    else if (d && e) {
      let g2, f2 = d, a3 = Nd((g2 = e, f2), g2, b);
      if (a3 != null) c[0] = a3;
    }
    if (c[0] === void 0) c[0] = b;
    if (f && a2 == null) f.set(c[0]);
  }
  fillWildcards(c);
  if (!a.isAsync) return;
  let g = d.current;
  for (let b = 0; b < c.length; ++b) {
    let d2 = c[b];
    if (typeof d2 == "string") {
      let e2 = d2.trim();
      if (isCSSVariableToken(e2)) {
        let d3 = getVariableValue(e2, g);
        if (d3 !== void 0) c[b] = d3;
        if (b == c.length - 1) a.finalKeyframe = e2;
      }
    }
  }
  se(a);
  if (!(typeof e == "string" && Cb.has(e) && c.length == 2)) return;
  let h = c[0], i = c[1], j = findDimensionValueType(h), k = findDimensionValueType(i);
  if (containsCSSVariable(h) != containsCSSVariable(i) && ge(e)) {
    a.needsMeasurement = true;
    return;
  }
  if (j === k) return;
  if (ae(j) && ae(k)) {
    for (let a2 = 0; a2 < c.length; ++a2) {
      let b = c[a2];
      if (typeof b == "string") c[a2] = parseFloat(b);
    }
  } else if (ge(e)) a.needsMeasurement = true;
};
export {
  re
};
