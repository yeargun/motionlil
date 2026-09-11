import { od } from "./part-117.js";
import { yb } from "./part-516.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let uj = (vk) => {
  var xk, yk = od(vk), wk = 0;
  for (; wk < yb.length; ) {
    xk = yb[wk];
    if (yk(xk)) return xk;
    wk += 1;
  }
  return null;
};
export {
  uj
};
