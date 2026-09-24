import { getOriginIndex } from "./part-264.js";
import { easingDefinitionToFunction } from "./part-468.js";
import "./effect-499.js";
import "./effect-573.js";
let stagger = function(a = 0.1, b = null) {
  let c = 0, d = 0, e = null;
  if (b != null) {
    c = b.startDelay ?? 0;
    d = b.from ?? 0;
    e = b.ease;
  }
  return (b2, f) => {
    let g = typeof d == "number" ? d : getOriginIndex(d, f), h = a * Math.abs(g - b2);
    if (e) {
      let b3 = f * a;
      h = easingDefinitionToFunction(e)(h / b3) * b3;
    }
    return c + h;
  };
};
export {
  stagger
};
