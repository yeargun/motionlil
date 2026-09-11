import { documentElement, documentGet, documentScrollingElement, getComputedStyleValue } from "./../motion-dom/dom-host.js";
import { lk } from "./part-5.js";
import { cd } from "./part-65.js";
let Mi = (vk, zk, Pk) => {
  if (null != zk) {
    var Rk, Sk, Tk, Zk, _k, Uk, Vk, Ak, Wk, Bk, Xk, Ck, Yk, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, wk, Ok, xk, yk, Qk = zk;
  } else Qk = vk;
  Pk.x.targetOffset = 0;
  Pk.y.targetOffset = 0;
  if (Qk != vk) {
    for (Ok = Qk; ; ) {
      if (null != Ok) {
        Rk = Ok != vk;
        Sk = Rk;
      } else Sk = false;
      if (!Sk) {
        break;
      }
      Tk = Ok.offsetLeft;
      Zk = Ok.offsetTop;
      if ("number" == typeof Tk) {
        _k = Pk.x;
        _k.targetOffset = Pk.x.targetOffset + Tk;
      }
      if ("number" == typeof Zk) {
        Uk = Pk.y;
        Uk.targetOffset = Pk.y.targetOffset + Zk;
      }
      Vk = Ok.offsetParent;
      Ok = Vk;
    }
  }
  if (Qk == vk) {
    Ak = Qk.scrollWidth;
    Wk = Qk.scrollHeight;
    if ("number" == typeof Ak) Pk.x.targetLength = Ak;
    if ("number" == typeof Wk) Pk.y.targetLength = Wk;
  } else {
    Bk = Qk.clientWidth;
    Xk = Qk.clientHeight;
    if ("number" == typeof Bk) Pk.x.targetLength = Bk;
    if ("number" == typeof Xk) Pk.y.targetLength = Xk;
  }
  Ck = vk.clientWidth;
  Yk = vk.clientHeight;
  if ("number" == typeof Ck) Pk.x.containerLength = Ck;
  if ("number" == typeof Yk) Pk.y.containerLength = Yk;
  if (null != vk) {
    Dk = null != Qk;
    Ek = Dk;
  } else Ek = false;
  if (Ek) {
    Fk = Qk != vk;
    Gk = Fk;
  } else Gk = false;
  if (Gk) {
    Hk = vk != documentElement();
    Ik = Hk;
  } else Ik = false;
  if (Ik) {
    Jk = vk != documentScrollingElement();
    Kk = Jk;
  } else Kk = false;
  if (Kk) {
    Lk = vk != documentGet("body");
    Mk = Lk;
  } else Mk = false;
  if (Mk) {
    Nk = getComputedStyleValue(vk);
    if (Nk) {
      wk = Nk.position;
      if ("string" == typeof wk) xk = wk;
      else xk = lk;
      yk = xk;
    } else yk = lk;
    cd("static" != yk, "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.", null);
  }
};
export {
  Mi
};
