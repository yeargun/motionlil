import { lk } from "./part-5.js";
import { tf } from "./part-569.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Rg = (vk) => {
  var Ak = vk.match(tf);
  if (!Array.isArray(Ak)) {
    var wk = null;
    return [wk, wk];
  }
  var xk = Ak[1], Bk = Ak[2], Ek = Ak[3];
  if ("string" == typeof xk) {
    if (xk != lk) {
      var Ck, Dk, zk, yk = xk;
    } else yk = lk;
    zk = yk;
  } else zk = lk;
  if (zk == lk) {
    if ("string" == typeof Bk) Ck = Bk;
    else Ck = zk;
    Dk = Ck;
  } else Dk = zk;
  return [`--${Dk}`, Ek];
};
export {
  Rg
};
