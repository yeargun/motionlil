import { isCurrentRealmElement } from "./../motion-dom/dom-host.js";
import { Ig } from "./part-163.js";
import { ha } from "./part-563.js";
import { q } from "./part-565.js";
import { sf } from "./part-566.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Jg = (vk) => {
  var yk = vk.subject;
  if (null == yk) return false;
  if (!isCurrentRealmElement(yk)) return false;
  if (!sf()) return false;
  var zk = vk.name;
  if (null == zk) return false;
  if (ha.has(zk)) {
    var Qk, Rk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, wk, xk, Sk = true;
  } else {
    if (q.has(zk)) {
      Qk = Ig(vk.keyframes);
      Rk = Qk;
    } else Rk = false;
    Sk = Rk;
  }
  if (!Sk) return false;
  if ("transform" == zk) {
    Ak = vk.transformTemplate;
    if (null != Ak) {
      Bk = !!Ak;
      Ck = Bk;
    } else Ck = false;
    if (Ck) return false;
  }
  Dk = vk.onUpdate;
  if (null != Dk) {
    Ek = !!Dk;
    Fk = Ek;
  } else Fk = false;
  if (Fk) return false;
  Gk = vk.repeatDelay;
  if (null != Gk) {
    Hk = 0 != Gk;
    Ik = Hk;
  } else Ik = false;
  if (Ik) return false;
  Jk = vk.repeatType;
  if (null != Jk) {
    Kk = "mirror" == Jk;
    Lk = Kk;
  } else Lk = false;
  if (Lk) return false;
  Mk = vk.damping;
  if (null != Mk) {
    Nk = 0 == Mk;
    Ok = Nk;
  } else Ok = false;
  if (Ok) return false;
  Pk = vk.type;
  if ("string" == typeof Pk) {
    wk = "inertia" == Pk;
    xk = wk;
  } else xk = false;
  if (xk) return false;
  return true;
};
export {
  Jg
};
