import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let te = (vk, wk) => {
  if (vk.translate == wk.translate) {
    var zk, Ak, xk = vk.scale == wk.scale, yk = xk;
  } else yk = false;
  if (yk) {
    zk = vk.originPoint == wk.originPoint;
    Ak = zk;
  } else Ak = false;
  return Ak;
};
export {
  te
};
