import { od } from "./part-117.js";
import { zb } from "./part-517.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let mg = (vk) => {
  var xk = od(vk), wk = 0;
  for (; wk < zb.length; ) {
    if (xk(zb[wk])) return zb[wk];
    wk += 1;
  }
  return null;
};
export {
  mg
};
