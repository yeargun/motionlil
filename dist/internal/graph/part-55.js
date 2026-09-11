import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let pj = (vk, xk, yk) => {
  xk |= 0;
  yk |= 0;
  var wk = [...vk];
  if (xk < 0) {
    var Ck, Dk, zk, Ak, Bk = wk.length + xk | 0, Ek = Bk;
  } else Ek = xk;
  if (Ek >= 0) {
    Ck = Ek < wk.length;
    Dk = Ck;
  } else Dk = false;
  if (Dk) {
    if (yk < 0) {
      zk = wk.length + yk | 0;
      Ak = zk;
    } else Ak = yk;
    return [...wk.slice(0, Ak), wk.splice(xk, 1)[0], ...wk.slice(Ak)];
  }
  return wk;
};
export {
  pj
};
