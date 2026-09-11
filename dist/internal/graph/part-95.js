import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Wb = (vk, yk, zk) => {
  var wk = vk * vk, xk = zk * (yk * yk - wk) + wk;
  if (xk < 0) return 0;
  return Math.sqrt(xk);
};
export {
  Wb
};
