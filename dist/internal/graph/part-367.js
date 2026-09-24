import { clamp } from "./part-431.js";
import "./effect-499.js";
import "./effect-573.js";
let steps = function(a, b = "end") {
  return (c) => {
    let d = b == "end", e = (d ? Math.min(c, 0.999) : Math.max(c, 1e-3)) * a;
    return clamp(0, 1, (d ? Math.floor(e) : Math.ceil(e)) / a);
  };
};
export {
  steps
};
