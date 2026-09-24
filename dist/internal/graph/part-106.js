import { translateAxis } from "./part-100.js";
import { measureViewportBox } from "./part-105.js";
import "./effect-499.js";
import "./effect-573.js";
let measurePageBox = function(a, b, c) {
  let d = measureViewportBox(a, c), e = b.scroll;
  if (e) {
    let a2 = e.offset;
    translateAxis(d.x, a2.x);
    translateAxis(d.y, a2.y);
  }
  return d;
};
export {
  measurePageBox
};
