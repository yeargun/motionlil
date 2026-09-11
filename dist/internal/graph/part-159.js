import { callMethod2 } from "./../motion-dom/dom-host.js";
import { vd } from "./part-155.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Eg = (vk, wk, yk, Ak, Dk) => {
  var Ek = null;
  if (Ak) {
    var Bk = Ak, Fk = Bk.delay;
    if (null != Fk) {
      var Gk, Hk, Ik, Jk, Kk, Ck, zk, xk, Qk, Nk, Ok, Rk, Sk, Tk, Uk, Vk, Wk, Lk, Mk, Pk = Fk;
    } else Pk = 0;
    Gk = Bk.duration;
    if (null != Gk) Nk = Gk;
    else Nk = 300;
    Hk = Bk.repeat;
    if (null != Hk) Rk = Hk;
    else Rk = 0;
    Ik = Bk.repeatType;
    if (null != Ik) Tk = Ik;
    else Tk = "loop";
    Jk = Bk.ease;
    if (null != Jk) Vk = Jk;
    else Vk = "easeOut";
    Kk = Bk.times;
    Qk = Pk;
    Ok = Nk;
    Sk = Rk;
    Uk = Tk;
    Wk = Vk;
    Lk = Kk;
  } else {
    Qk = 0;
    Ok = 300;
    Sk = 0;
    Uk = "loop";
    Wk = "easeOut";
    Lk = Ek;
  }
  Ck = {
    __proto__: null
  };
  Ck[wk] = yk;
  if (Lk) Ck.offset = Lk;
  zk = vd(Wk, Ok);
  if (Array.isArray(zk)) Ck.easing = zk;
  if ("reverse" == Uk) Mk = "alternate";
  else Mk = "normal";
  xk = {
    __proto__: null
  };
  xk.delay = Qk;
  xk.duration = Ok;
  if (!Array.isArray(zk)) xk.easing = zk;
  else xk.easing = "linear";
  xk.fill = "both";
  xk.iterations = Sk + 1;
  xk.direction = Mk;
  if (null != Dk) xk.pseudoElement = Dk;
  return callMethod2(vk, "animate", Ck, xk);
};
export {
  Eg
};
