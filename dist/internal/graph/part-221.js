import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gh = (vk) => {
  var wk = vk.pointerType;
  if ("string" == typeof wk) {
    var zk, xk = "mouse" == wk, yk = xk;
  } else yk = false;
  if (yk) {
    zk = vk.button;
    if (!("number" == typeof zk)) return true;
    return zk <= 0;
  }
  return false != vk.isPrimary;
};
export {
  gh
};
