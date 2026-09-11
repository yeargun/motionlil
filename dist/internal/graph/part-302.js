import { lb } from "./part-283.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let oe = (vk, zk, Ak, Bk, Ck) => {
  var wk = lb(vk - zk, 1 / Ak, Bk);
  if (null != Ck) {
    var xk = lb(wk, 1 / Ck, Bk), yk = xk;
  } else yk = wk;
  return yk;
};
export {
  oe
};
