import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ti = (wk, xk, yk, zk) => {
  var vk = zk;
  if (null == vk) vk = {
    __proto__: null,
    passive: true
  };
  wk.addEventListener(xk, yk, vk);
  return () => {
    wk.removeEventListener(xk, yk, vk);
  };
};
export {
  ti
};
