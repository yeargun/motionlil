import { callFn2, isFunction } from "./../motion-dom/dom-host.js";
import { kb } from "./part-202.js";
import { lk } from "./part-5.js";
import { p } from "./part-521.js";
import { Ta } from "./part-574.js";
import { Ca } from "./part-599.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let bi = (vk, yk, zk) => {
  var ml, Mk, Wk, Xk, Yk, Zk, _k, $k, al, bl, cl, dl, el, fl, gl, hl, il, ol, pl, Nk, Pk, Ak, Ok, Bk, Ck, wk, xk, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Qk, Rk, Sk, Tk, jl, kl, ll, Vk, Lk, ql = p.length, Kk = lk, Uk = true, nl = 0;
  for (; nl < ql; ) {
    ml = p[nl] || "";
    Mk = vk[ml];
    if (!("number" == typeof Mk)) {
      Wk = !("string" == typeof Mk);
      Xk = Wk;
    } else Xk = false;
    if (Xk) {
      Yk = !("boolean" == typeof Mk);
      Zk = Yk;
    } else Zk = false;
    if (Zk) {
      _k = !Array.isArray(Mk);
      $k = _k;
    } else $k = false;
    if ($k) {
      if ("object" == typeof Mk) {
        al = !!Mk;
        bl = al;
      } else bl = false;
      cl = !bl;
      dl = cl;
    } else dl = false;
    if (dl) {
      Jk = Kk;
      Tk = Uk;
      Kk = Jk;
      Uk = Tk;
      nl += 1;
      continue;
    }
    if ("number" == typeof Mk) {
      if (ml.startsWith("scale")) {
        el = 1 == Mk;
        ll = el;
      } else {
        fl = 0 == Mk;
        ll = fl;
      }
      kl = ll;
    } else {
      gl = parseFloat(`${Mk}`);
      if (ml.startsWith("scale")) {
        hl = 1 == gl;
        jl = hl;
      } else {
        il = 0 == gl;
        jl = il;
      }
      kl = jl;
    }
    if (!kl) pl = true;
    else {
      ol = null != zk;
      pl = ol;
    }
    if (pl) {
      Nk = kb(Mk, Ta[ml]);
      if (!kl) {
        Pk = Ca[ml];
        if (Pk !== void 0) Vk = Pk;
        else Vk = ml;
        Ak = Kk + `${Vk}(${Nk}) `;
        Hk = Ak;
        Rk = false;
      } else {
        Hk = Kk;
        Rk = Uk;
      }
      if (null != zk) yk[ml] = Nk;
      Ik = Hk;
      Sk = Rk;
    } else {
      Ik = Kk;
      Sk = Uk;
    }
    Jk = Ik;
    Tk = Sk;
    Kk = Jk;
    Uk = Tk;
    nl += 1;
  }
  Ok = vk.pathRotation;
  if (Ok) {
    Bk = Kk + `rotate(${kb(Ok, Ta.pathRotation)}) `;
    Gk = Bk;
    Qk = false;
  } else {
    Gk = Kk;
    Qk = Uk;
  }
  Ck = Gk.trim();
  if (null != zk) {
    wk = isFunction(zk);
    xk = wk;
  } else xk = false;
  if (xk) {
    if (!Qk) Lk = Ck;
    else Lk = lk;
    Dk = `${callFn2(zk, yk, Lk)}`;
    Fk = Dk;
  } else {
    if (Qk) Ek = "none";
    else Ek = Ck;
    Fk = Ek;
  }
  return Fk;
};
export {
  bi
};
