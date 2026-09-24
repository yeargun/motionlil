import { mixNumber } from "./part-47.js";
import { progress } from "./part-470.js";
import "./effect-499.js";
import "./effect-573.js";
let fillOffset = function(a, b) {
  let c = a[a.length - 1];
  for (let d = 1; d <= b; ++d) a.push(mixNumber(c, 1, progress(0, b, d)));
};
export {
  fillOffset
};
