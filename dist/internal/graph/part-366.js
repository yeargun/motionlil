import { sa } from "./part-287.js";
import { si } from "./part-365.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Xj = (vk, xk, yk) => {
  var wk = si(vk, yk), zk = xk.scroll;
  if (zk) {
    sa(wk.x, zk.offset.x);
    sa(wk.y, zk.offset.y);
  }
  return wk;
};
export {
  Xj
};
