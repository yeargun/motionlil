import { Hd } from "./part-152.js";
import { Kd } from "./part-155.js";
import { isWillChangeMotionValue } from "./part-333.js";
import { a } from "./part-425.js";
import "./effect-499.js";
import "./effect-573.js";
let addValueToWillChange = function(b, c) {
  let d = b, e = Kd(d, "willChange", null, false);
  if (isWillChangeMotionValue(e)) {
    e.add(c);
    return;
  }
  let f = a.WillChange;
  if (e == null && f != null) {
    let a2 = new f("auto");
    Hd(d, "willChange", a2);
    a2.add(c);
  }
};
export {
  addValueToWillChange
};
