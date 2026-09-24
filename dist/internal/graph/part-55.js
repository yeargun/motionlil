import { Ia } from "./part-464.js";
import "./effect-499.js";
import "./effect-573.js";
let calcGeneratorDuration = function(a) {
  let b = 0, c = a.next(b);
  while (!c.done && b < Ia) {
    b = b + 50;
    c = a.next(b);
  }
  return b >= Ia ? 1 / 0 : b;
};
export {
  calcGeneratorDuration
};
