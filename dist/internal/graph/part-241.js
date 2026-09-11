import { qh } from "./part-240.js";
import { na } from "./part-37.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Fj = (yk = 0.1, zk) => {
  var wk = 0, vk = 0, Bk = null, xk = Bk;
  if (zk != Bk) {
    var Ak = zk;
    if ("object" == typeof Ak) {
      var Ck = Ak.startDelay;
      if ("number" == typeof Ck) wk = Ck;
      var Dk = Ak.from;
      if ("number" == typeof Dk) vk = Dk;
      else {
        if ("string" == typeof Dk) vk = Dk;
      }
      var Ek = Ak.ease;
      if ("string" == typeof Ek) xk = Ek;
    }
  }
  return (el, fl) => {
    if ("number" == typeof vk) {
      var _k, $k, Wk, al, cl, Zk = vk, bl = Zk;
    } else {
      _k = qh(vk, fl);
      bl = _k;
    }
    $k = yk * Math.abs(bl - el);
    if (null != xk) {
      Wk = fl * yk;
      al = na(xk)($k / Wk) * Wk;
      cl = al;
    } else cl = $k;
    return wk + cl;
  };
};
export {
  Fj
};
