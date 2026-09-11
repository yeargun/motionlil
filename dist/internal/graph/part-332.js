import { hasOwn } from "./../motion-dom/dom-host.js";
let Yh = (vk, yk) => {
  var Ak = vk.protectedKeys, zk = vk.needsAnimating;
  if (hasOwn(Ak, yk)) {
    var wk = true != zk[yk], xk = wk;
  } else xk = false;
  zk[yk] = false;
  return xk;
};
export {
  Yh
};
