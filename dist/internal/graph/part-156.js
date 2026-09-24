import { getAnimatableNone } from "./part-124.js";
import { findValueType } from "./part-125.js";
import { isMotionValue } from "./part-126.js";
import { Od } from "./part-157.js";
import { oa } from "./part-453.js";
import { isNumericalString } from "./part-480.js";
import { isZeroValueString } from "./part-482.js";
let Nd = (a, b, c = null) => {
  let d = a.latestValues[b], e = a.current;
  if (d == null && e) d = ((a2, b2, c2) => a2.renderer.baseTarget(b2, c2))(a, a.props, b) ?? ((a2, b2, c2) => a2.renderer.read(a2, b2, c2))(a, e, b);
  if (d != null) {
    let e2 = false;
    if (typeof d == "string") e2 = isNumericalString(d) || isZeroValueString(d);
    if (e2) d = parseFloat(d);
    else if (findValueType(d) == null && oa.test(c)) d = getAnimatableNone(b, c);
    Od(a, b, isMotionValue(d) ? d.get() : d);
  }
  return isMotionValue(d) ? d.get() : d;
};
export {
  Nd
};
