import { calcRelativeAxisPosition } from "./part-305.js";
import "./effect-499.js";
import "./effect-573.js";
let calcRelativePosition = function(a, b, c, d = null) {
  let e = 0, f = 0;
  if (d) {
    e = d.x;
    f = d.y;
  }
  calcRelativeAxisPosition(a.x, b.x, c.x, e);
  calcRelativeAxisPosition(a.y, b.y, c.y, f);
};
export {
  calcRelativePosition
};
