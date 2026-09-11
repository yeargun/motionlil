import { identity as asMotionValue, identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { Ag } from "./part-147.js";
import { yd } from "./part-166.js";
let Pg = (vk) => {
  var al = vk.unresolvedKeyframes, hl = vk.name, il = vk.element, gl = vk.motionValue;
  if (al.length > 0) {
    var bl = al[0];
    if ("number" == typeof bl) {
      var wk, yk, zk, Ak, Bk, Ck, Dk, Ek, dl, el, jl, Fk, Gk, cl, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, _k, $k, fl, xk = true;
    } else {
      wk = "string" == typeof bl;
      xk = wk;
    }
    if (xk) zk = true;
    else {
      yk = "boolean" == typeof bl;
      zk = yk;
    }
    if (zk) Bk = true;
    else {
      Ak = Array.isArray(bl);
      Bk = Ak;
    }
    if (Bk) Ek = true;
    else {
      if ("object" == typeof bl) {
        Ck = !!bl;
        Dk = Ck;
      } else Dk = false;
      Ek = Dk;
    }
    if (!Ek) {
      dl = null;
      if (gl != dl) {
        el = asMotionValue(gl).current;
        fl = el;
      } else fl = dl;
      jl = al[al.length - 1];
      if (null != fl) al[0] = fl;
      else {
        if (null != il) {
          Fk = null != hl;
          Gk = Fk;
        } else Gk = false;
        if (Gk) {
          cl = Ag(asVisualElement(il), hl, jl);
          if (null != cl) {
            if ("number" == typeof cl) Ik = true;
            else {
              Hk = "string" == typeof cl;
              Ik = Hk;
            }
            if (Ik) Kk = true;
            else {
              Jk = "boolean" == typeof cl;
              Kk = Jk;
            }
            if (Kk) Mk = true;
            else {
              Lk = Array.isArray(cl);
              Mk = Lk;
            }
            if (Mk) Pk = true;
            else {
              if ("object" == typeof cl) {
                Nk = !!cl;
                Ok = Nk;
              } else Ok = false;
              Pk = Ok;
            }
            Qk = Pk;
          } else Qk = false;
          if (Qk) al[0] = cl;
        }
      }
      if ("number" == typeof al[0]) Sk = true;
      else {
        Rk = "string" == typeof al[0];
        Sk = Rk;
      }
      if (Sk) Uk = true;
      else {
        Tk = "boolean" == typeof al[0];
        Uk = Tk;
      }
      if (Uk) Wk = true;
      else {
        Vk = Array.isArray(al[0]);
        Wk = Vk;
      }
      if (Wk) Zk = true;
      else {
        if ("object" == typeof al[0]) {
          Xk = !!al[0];
          Yk = Xk;
        } else Yk = false;
        Zk = Yk;
      }
      if (!Zk) al[0] = jl;
      if (null != gl) {
        _k = null == fl;
        $k = _k;
      } else $k = false;
      if ($k) asMotionValue(gl).set(al[0]);
    }
  }
  yd(al);
};
export {
  Pg
};
