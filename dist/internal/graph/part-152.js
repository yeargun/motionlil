import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ac = (vk) => {
  if (!("number" == typeof vk)) {
    var xk, yk, zk, wk = !("string" == typeof vk);
  } else wk = false;
  if (wk) xk = !("boolean" == typeof vk);
  else xk = false;
  if (xk) {
    yk = !!vk;
    zk = yk;
  } else zk = false;
  if (zk) return !!vk.applyToOptions;
  return false;
};
export {
  ac
};
