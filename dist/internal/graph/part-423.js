import { distance } from "./part-422.js";
import "./effect-499.js";
import "./effect-573.js";
let distance2D = function(a, b) {
  let c = distance(a.x, b.x), d = distance(a.y, b.y);
  return Math.sqrt(c * c + d * d);
};
export {
  distance2D
};
