import { calcRelativeAxis } from "./part-303.js";
import "./effect-499.js";
import "./effect-573.js";
let calcRelativeBox = function(a, b, c, d = null) {
  let e = 0, f = 0;
  if (d) {
    e = d.x;
    f = d.y;
  }
  calcRelativeAxis(a.x, b.x, c.x, e);
  calcRelativeAxis(a.y, b.y, c.y, f);
};
export {
  calcRelativeBox
};
