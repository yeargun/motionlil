import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Qd = (vk, wk) => {
  if (null == wk) return false;
  if (vk == wk) return true;
  var xk = wk.parentElement;
  if (!xk) return false;
  return Qd(vk, xk);
};
export {
  Qd
};
