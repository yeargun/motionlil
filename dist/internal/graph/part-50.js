import { rk } from "./part-11.js";
import { u } from "./part-17.js";
import { e } from "./part-27.js";
import { v } from "./part-28.js";
import { va } from "./part-465.js";
var Rf = /* @__PURE__ */ (function() {
  let a = (vk, wk, xk) => {
    var yk, zk = xk, Ak = 1;
    for (; Ak < 12; ) {
      yk = zk - vk(zk) / wk(zk);
      zk = yk;
      Ak += 1;
    }
    return zk;
  }, b = (xk, yk, Dk) => {
    var Gk = va, Ik = xk;
    Gk(Ik <= e(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    var vk = 1 - yk;
    vk = /* @__PURE__ */ u(0.05, 1, vk);
    xk = /* @__PURE__ */ u(0.01, 10, v(xk));
    var wk = (Bl) => 0;
    if (vk < 1) {
      wk = (Fl) => {
        let Gl = Fl * vk, Hl = vk;
        return 1e-3 - (Gl - 0) / (Fl * Math.sqrt(1 - Hl * Hl)) * Math.exp(-(Gl * xk));
      };
      var zk, Ek, Ak, Hk, Fk, Jk, Bk, Ck = (Kl) => {
        var Ll = Kl * vk * xk, Fl = Ll * 0 + 0, Nl = vk * vk * Kl * Kl * xk, Ml = Math.exp(-Ll), Cl = vk, Hl = Kl * Kl * Math.sqrt(1 - Cl * Cl);
        if (-wk(Kl) + 1e-3 > 0) {
          var Dl = -1;
        } else Dl = 1;
        return Dl * ((Fl - Nl) * Ml) / Hl;
      };
    } else {
      wk = (El) => -1e-3 + Math.exp(-El * xk) * ((El - 0) * xk + 1);
      Ck = (Dl) => Math.exp(-Dl * xk) * ((0 - Dl) * (xk * xk));
    }
    zk = a(wk, Ck, 5 / xk);
    xk = e(xk);
    if (zk != zk) return Ek = xk, Ak = [0, 0, 0], Ak[0] = rk, Ak[1] = 10, Ak[2] = Ek, Ak;
    Hk = zk * zk * Dk;
    Fk = vk * 2 * Math.sqrt(Dk * Hk);
    Jk = xk;
    Bk = [0, 0, 0];
    Bk[0] = Hk;
    Bk[1] = Fk;
    Bk[2] = Jk;
    return Bk;
  }, c = (vk) => {
    if (null != vk.stiffness) {
      var wk, yk, zk, xk = true;
    } else {
      wk = null != vk.damping;
      xk = wk;
    }
    if (xk) zk = true;
    else {
      yk = null != vk.mass;
      zk = yk;
    }
    return zk;
  }, d = (vk) => {
    if (null != vk.duration) {
      var wk, xk = true;
    } else {
      wk = null != vk.bounce;
      xk = wk;
    }
    return xk;
  };
  return function(vk) {
    var Ak = null, Hk = vk.velocity;
    if (Hk != Ak) {
      var Ik, Rk, Yk, al, bl, cl, Jk, Kk, Lk, Sk, Tk, Bk, Ck, wk, Mk, Uk, Dk, xk, fl, Nk, Ok, Pk, Vk, Wk, Xk, Zk, _k, $k, Ek, Fk, Gk, dl, el, yk, Qk, zk, gl = Hk;
    } else gl = 0;
    Ik = vk.stiffness;
    if (null != Ik) Pk = Ik;
    else Pk = rk;
    Rk = vk.damping;
    if (null != Rk) Xk = Rk;
    else Xk = 10;
    Yk = vk.mass;
    if (null != Yk) $k = Yk;
    else $k = 1;
    al = vk.duration;
    if (null != al) Gk = al;
    else Gk = Ak;
    if (!c(vk)) {
      bl = d(vk);
      cl = bl;
    } else cl = false;
    if (cl) {
      Jk = vk.visualDuration;
      if (null != Jk) {
        Kk = 6.283185307179586 / (Jk * 1.2);
        Lk = Kk * Kk;
        Sk = vk.bounce;
        if (null != Sk) yk = Sk;
        else yk = 0;
        Tk = 2 * /* @__PURE__ */ u(0.05, 1, 1 - yk) * Math.sqrt(Lk);
        Nk = Lk;
        Vk = Tk;
        Zk = 1;
        Ek = Gk;
        dl = false;
      } else {
        Bk = vk.duration;
        if (null != Bk) Qk = Bk;
        else Qk = 800;
        Ck = vk.bounce;
        if (null != Ck) zk = Ck;
        else zk = 0.3;
        wk = b(Qk, zk, $k);
        Mk = wk[0];
        Uk = wk[1];
        Dk = wk[2];
        Nk = Mk;
        Vk = Uk;
        Zk = 1;
        Ek = Dk;
        dl = true;
      }
      fl = 0;
      Ok = Nk;
      Wk = Vk;
      _k = Zk;
      Fk = Ek;
      el = dl;
    } else {
      fl = gl;
      Ok = Pk;
      Wk = Xk;
      _k = $k;
      Fk = Gk;
      el = false;
    }
    xk = [0, 0, 0, 0, null, false];
    xk[0] = fl;
    xk[1] = Ok;
    xk[2] = Wk;
    xk[3] = _k;
    xk[4] = Fk;
    xk[5] = el;
    return xk;
  };
})();
export {
  Rf
};
