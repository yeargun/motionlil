import { kb } from "./part-202.js";
import { bi } from "./part-339.js";
import { z } from "./part-522.js";
import { Ta } from "./part-574.js";
import { Tb } from "./part-71.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let we = (vk, yk, Fk) => {
  var Gk, Vk, Wk, Xk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, $k, al, Qk, Rk, wk, Sk, Yk, zk, Ak, Bk, Ck, Dk, Ek, cl, Tk, xk, Uk, Zk, _k = vk.style, fl = vk.vars, el = vk.transformOrigin, bl = false, dl = false;
  for (Gk in yk) {
    Vk = yk[Gk];
    if (z.has(Gk)) {
      bl = true;
      continue;
    } else {
      if (Tb(Gk)) {
        fl[Gk] = Vk;
        continue;
      } else {
        Wk = kb(Vk, Ta[Gk]);
        if (Gk.startsWith("origin")) {
          el[Gk] = Wk;
          cl = true;
        } else {
          _k[Gk] = Wk;
          cl = dl;
        }
      }
    }
    dl = cl;
  }
  Xk = yk.transform;
  if ("number" == typeof Xk) Ik = true;
  else {
    Hk = "string" == typeof Xk;
    Ik = Hk;
  }
  if (Ik) Kk = true;
  else {
    Jk = "boolean" == typeof Xk;
    Kk = Jk;
  }
  if (Kk) Mk = true;
  else {
    Lk = Array.isArray(Xk);
    Mk = Lk;
  }
  if (Mk) Pk = true;
  else {
    if ("object" == typeof Xk) {
      Nk = !!Xk;
      Ok = Nk;
    } else Ok = false;
    Pk = Ok;
  }
  if (!Pk) {
    if (bl) al = true;
    else {
      $k = null != Fk;
      al = $k;
    }
    if (al) {
      Qk = vk.transform;
      if (!("object" == typeof Qk)) {
        Rk = {
          __proto__: null
        };
        vk.transform = Rk;
        Tk = Rk;
      } else Tk = Qk;
      _k.transform = bi(yk, Tk, Fk);
    } else {
      if (_k.transform) _k.transform = "none";
    }
  }
  if (dl) {
    wk = el.originX;
    Sk = el.originY;
    Yk = el.originZ;
    if (!("number" == typeof wk)) {
      zk = !("string" == typeof wk);
      Ak = zk;
    } else Ak = false;
    if (Ak) xk = "50%";
    else xk = wk;
    if (!("number" == typeof Sk)) {
      Bk = !("string" == typeof Sk);
      Ck = Bk;
    } else Ck = false;
    if (Ck) Uk = "50%";
    else Uk = Sk;
    if (!("number" == typeof Yk)) {
      Dk = !("string" == typeof Yk);
      Ek = Dk;
    } else Ek = false;
    if (Ek) Zk = 0;
    else Zk = Yk;
    _k.transformOrigin = `${xk} ${Uk} ${Zk}`;
  }
};
export {
  we
};
