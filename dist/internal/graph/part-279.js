import { nc } from "./part-278.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ee = (vk) => {
  if (!nc(vk.scale)) {
    var wk, yk, zk, xk = true;
  } else {
    wk = !nc(vk.scaleX);
    xk = wk;
  }
  if (xk) zk = true;
  else {
    yk = !nc(vk.scaleY);
    zk = yk;
  }
  return zk;
};
export {
  ee
};
