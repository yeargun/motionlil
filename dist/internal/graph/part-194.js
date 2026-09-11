import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Nd = (vk, wk) => {
  if (null == vk) return vk;
  if (!("object" == typeof vk)) return vk;
  var yk = vk.inherit;
  if ("boolean" == typeof yk) {
    var zk, Ak, Bk, Ck, Dk, Hk, Fk, Gk, xk, Ek = yk;
  } else Ek = false;
  if (Ek) {
    zk = null != wk;
    Ak = zk;
  } else Ak = false;
  if (Ak) {
    Bk = "object" == typeof wk;
    Ck = Bk;
  } else Ck = false;
  if (Ck) {
    Dk = {
      __proto__: null
    };
    Hk = wk;
    for (Fk in Hk) Dk[Fk] = wk[Fk];
    Gk = vk;
    for (xk in Gk) {
      if ("inherit" != xk) Dk[xk] = vk[xk];
    }
    return Dk;
  }
  return vk;
};
export {
  Nd
};
