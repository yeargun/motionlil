import { V } from "./part-369.js";
import { ze } from "./part-370.js";
import { Ae } from "./part-371.js";
import { g } from "./part-39.js";
import { H } from "./part-486.js";
import { A } from "./part-572.js";
import { Ff } from "./part-608.js";
import { Gf } from "./part-609.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Zj = (vk, wk, Ak, Bk, Ck, Uk) => {
  if (Ck) {
    var Dk = Ak.opacity ?? null;
    if (null != Dk) {
      var Vk, Fk, Gk, Hk, Ik, Jk, Wk, Kk, Lk, kl, hl, Mk, il, Xk, Yk, gl, Nk, Zk, Ok, Pk, _k, Qk, Rk, Sk, xk, Tk, yk, zk, jl, $k, al, bl, cl, dl, el, fl, Ek = Dk;
    } else Ek = 1;
    Vk = V(Ek);
    Fk = wk.opacity ?? null;
    if (null != Fk) Gk = Fk;
    else Gk = 1;
    Hk = V(Gk);
    vk.opacity = /* @__PURE__ */ g(0, Vk, Ff(Bk));
    vk.opacityExit = /* @__PURE__ */ g(Hk, 0, Gf(Bk));
  } else {
    if (Uk) {
      Ik = wk.opacity ?? null;
      if (null != Ik) Jk = Ik;
      else Jk = 1;
      Wk = V(Jk);
      Kk = Ak.opacity ?? null;
      if (null != Kk) Lk = Kk;
      else Lk = 1;
      vk.opacity = /* @__PURE__ */ g(Wk, V(Lk), Bk);
    }
  }
  for (kl = A.length, jl = 0; jl < kl; jl = jl + 1) {
    hl = A[jl] || "";
    Mk = Ae(wk, hl);
    il = Ae(Ak, hl);
    if (null == Mk) {
      Xk = null == il;
      Yk = Xk;
    } else Yk = false;
    if (Yk) continue;
    if (null != Mk) gl = Mk;
    else gl = 0;
    if (null != il) Nk = il;
    else Nk = 0;
    if ("number" == typeof gl) {
      if (0 == gl) cl = true;
      else cl = false;
      dl = cl;
    } else dl = false;
    if ("number" == typeof Nk) {
      if (0 == Nk) al = true;
      else al = dl;
      bl = al;
    } else bl = dl;
    if (ze(gl) == ze(Nk)) $k = true;
    else $k = bl;
    if ($k) {
      Zk = /* @__PURE__ */ g(V(gl), V(Nk), Bk);
      if (Zk < 0) el = 0;
      else el = Zk;
      if (H.test(Nk)) Pk = true;
      else {
        Ok = H.test(gl);
        Pk = Ok;
      }
      if (Pk) {
        _k = `${el}%`;
        fl = _k;
      } else fl = el;
      vk[hl] = fl;
    } else vk[hl] = Nk;
  }
  if (null != (wk.rotate ?? null)) Rk = true;
  else {
    Qk = null != (Ak.rotate ?? null);
    Rk = Qk;
  }
  if (Rk) {
    Sk = wk.rotate ?? null;
    if (null != Sk) xk = Sk;
    else xk = 0;
    Tk = V(xk);
    yk = Ak.rotate ?? null;
    if (null != yk) zk = yk;
    else zk = 0;
    vk.rotate = /* @__PURE__ */ g(Tk, V(zk), Bk);
  }
};
export {
  Zj
};
