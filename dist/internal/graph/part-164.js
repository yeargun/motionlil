import { getAnimatableNone } from "./part-124.js";
import { analyseComplexValue } from "./part-34.js";
let Ud = (a, b, c) => {
  let d;
  for (let b2 = 0; b2 < a.length && !d; ++b2) {
    let c2 = a[b2];
    if (typeof c2 == "string" && c2 != "auto" && c2 != "none" && c2 != "0" && analyseComplexValue(c2).values.length > 0) d = c2;
  }
  if (d && c) b.forEach((b2) => {
    a[b2] = getAnimatableNone(c, d);
  });
};
export {
  Ud
};
