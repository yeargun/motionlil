import "./effect-499.js";
import "./effect-573.js";
let buildSVGPath = function(a, b, c = 1, d = 0, e = true) {
  a.pathLength = 1;
  a[e ? "stroke-dashoffset" : "strokeDashoffset"] = `${-d}`;
  a[e ? "stroke-dasharray" : "strokeDasharray"] = `${b} ${c}`;
};
export {
  buildSVGPath
};
