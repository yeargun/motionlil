import { analyseComplexValue } from "./part-34.js";
import { ca } from "./part-35.js";
import { da } from "./part-36.js";
import { ea } from "./part-37.js";
import { fa } from "./part-38.js";
import { ha } from "./part-39.js";
import "./effect-499.js";
import "./effect-573.js";
let oa = {
  test: ha,
  parse: da,
  createTransformer: ea,
  getAnimatableNone: function(a) {
    let b = analyseComplexValue(a), c = [];
    for (let a2 = 0; a2 < b.values.length; ++a2) c.push(fa(b.values[a2], b.split[a2] ?? ""));
    return ca(b)(c);
  }
};
export {
  oa
};
