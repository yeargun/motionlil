import { noop } from "./part-426.js";
import { clamp } from "./part-431.js";
import { easingDefinitionToFunction } from "./part-468.js";
import { isEasingArray } from "./part-469.js";
import { progress } from "./part-470.js";
import { getMixer } from "./part-53.js";
import { defaultOffset } from "./part-64.js";
import { convertOffsetToTimes } from "./part-65.js";
import "./effect-499.js";
import "./effect-573.js";
let keyframes = function(a) {
  let j, c = a.duration ?? 300, d = a.keyframes, e = a.times, f = a.ease ?? "easeInOut", g = {
    done: false,
    value: d[0]
  }, h = isEasingArray(f) ? (j = (a2) => easingDefinitionToFunction(a2), f).map(j) : ((a2, b) => a2.map((a3) => b))(d, easingDefinitionToFunction(f)), i = ((a2, b, c2) => {
    let d2 = a2.length;
    if (d2 == 1) return (a3) => b[0];
    if (d2 == 2 && b[0] === b[1]) return (a3) => b[1];
    let e2 = [];
    for (let a3 = 0; a3 < d2 - 1; ++a3) {
      let d3 = getMixer(b[a3])(b[a3], b[a3 + 1]), f2 = c2[a3] || noop;
      e2.push((a4) => d3(f2(a4)));
    }
    return (b2) => {
      b2 = clamp(a2[0], a2[a2.length - 1], b2);
      let c3 = 0;
      if (e2.length > 1) while (c3 < a2.length - 2 && b2 >= a2[c3 + 1 | 0]) c3 = c3 + 1 | 0;
      return e2[c3](progress(a2[c3], a2[c3 + 1 | 0], b2));
    };
  })(convertOffsetToTimes(e && e.length == d.length ? e : defaultOffset(d), c), d, h);
  return {
    calculatedDuration: c,
    next: (a2) => {
      g.value = i(a2);
      g.done = a2 >= c;
      return g;
    }
  };
};
export {
  keyframes
};
