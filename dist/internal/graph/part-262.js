import { callMethod1, callMethod2, getComputedStyleProperty, getComputedStyleValue, mapKeys } from "./../motion-dom/dom-host.js";
import { ik } from "./part-2.js";
import { E } from "./part-205.js";
import { Yd } from "./part-261.js";
import { lk } from "./part-5.js";
import { ok } from "./part-8.js";
import { pk } from "./part-9.js";
var Zd = /* @__PURE__ */ (function() {
  let a = (vk, wk, xk) => {
    if (null == wk) return;
    var yk = vk.style;
    if (yk) callMethod2(yk, "setProperty", ok, wk);
    xk.push(vk);
  }, b = (vk, xk, yk, Ck, Dk) => {
    if (null == yk) return;
    var Ek = vk.style;
    if (Ek) callMethod2(Ek, "setProperty", pk, yk);
    Ck.push(vk);
    if ("none" != yk) {
      var wk, Ak, Bk, zk = !!Dk;
    } else zk = false;
    if (zk) {
      wk = getComputedStyleValue(vk);
      if ("visible" != wk.overflowX) Bk = true;
      else {
        Ak = "visible" != wk.overflowY;
        Bk = Ak;
      }
      if (Bk) Dk.add(xk);
    }
  }, c = (vk, Ck, Dk, Ek, Hk, Ik, Kk, Lk, Nk) => {
    var Wk = [];
    if (Ik) {
      var Yk, Ok, Jk, Mk, wk, Pk, Qk, _k, Uk, Fk, Gk, xk, yk, $k, al, bl, cl, dl, el, fl, gl, hl, Zk, Vk, Rk, zk, Sk, Ak, Tk, Bk, Xk = Ik;
    } else Xk = Wk;
    Yk = [];
    if (Lk) Zk = Lk;
    else Zk = Yk;
    Ok = null;
    Jk = E(vk, Ok, Ok);
    Mk = [];
    if (Ek) {
      for (Vk = 0; Vk < Jk.length; Vk = Vk + 1) {
        wk = Jk[Vk];
        Pk = Ck.get(wk);
        if (Pk !== void 0) {
          Mk.push(Pk);
          continue;
        }
        Tk = `motion-view-${ka}`;
        ka = ka + 1 | 0;
        if (Vk < Ek.length) {
          Qk = Ek[Vk] || "";
          Rk = Qk;
        } else Rk = Tk;
        _k = wk.style;
        if (_k) callMethod2(_k, "setProperty", ik, Rk);
        Dk.push(wk);
        Ck.set(wk, Rk);
        a(wk, Hk, Xk);
        b(wk, Rk, Kk, Zk, Nk);
        Mk.push(Rk);
      }
      return Mk;
    }
    for (Uk = [], zk = 0; zk < Jk.length; zk = zk + 1) {
      Fk = Jk[zk];
      if (Ck.get(Fk) !== void 0) Uk.push(lk);
      else Uk.push(getComputedStyleProperty(Fk, ik));
    }
    for (Sk = 0; Sk < Jk.length; Sk = Sk + 1) {
      Gk = Jk[Sk];
      xk = Ck.get(Gk);
      if (xk !== void 0) {
        Mk.push(xk);
        continue;
      }
      yk = Uk[Sk] || "";
      if (yk != lk) {
        $k = "none" != yk;
        al = $k;
      } else al = false;
      if (al) {
        bl = "auto" != yk;
        cl = bl;
      } else cl = false;
      if (cl) {
        dl = "match-element" != yk;
        el = dl;
      } else el = false;
      if (el) {
        fl = !yk.startsWith("motion-view-");
        gl = fl;
      } else gl = false;
      if (gl) Ak = yk;
      else {
        Bk = `motion-view-${ka}`;
        ka = ka + 1 | 0;
        hl = Gk.style;
        if (hl) callMethod2(hl, "setProperty", ik, Bk);
        Dk.push(Gk);
        Ak = Bk;
      }
      Ck.set(Gk, Ak);
      a(Gk, Hk, Xk);
      b(Gk, Ak, Kk, Zk, Nk);
      Mk.push(Ak);
    }
    return Mk;
  };
  return function(vk, wk) {
    var xk, Lk, Nk, yk, zk, Rk, al, dl, Sk, Tk, Ak, Bk, bl, Uk, Ck, el, ml, gl, Dk, Ek, Ok, cl, Vk, Wk, Xk, nl, hl, il, Yk, ol, Zk, Pk, Mk, Qk, Fk, Gk, Hk, Ik, Jk, Kk, _k, fl, $k, jl, ll = mapKeys(vk[15]), kl = 0;
    for (; kl < ll.length; kl = kl + 1) {
      xk = ll[kl];
      Lk = callMethod1(vk[15], "get", xk);
      if (!Lk) Mk = {
        __proto__: null
      };
      else Mk = Lk;
      Nk = null;
      yk = callMethod1(vk[19], "get", xk);
      if ("string" == typeof yk) Qk = yk;
      else Qk = Nk;
      zk = null;
      Rk = "root" == xk;
      al = !!callMethod1(vk[16], "has", xk);
      if (!Rk) dl = al;
      else dl = false;
      if (dl) {
        if (callMethod1(vk[20], "has", xk)) Fk = "none";
        else Fk = "contain";
        Gk = Fk;
      } else Gk = zk;
      if (Rk) Tk = true;
      else {
        Sk = !al;
        Tk = Sk;
      }
      if (Tk) {
        if ("string" == typeof xk) {
          Ak = [xk];
          Kk = Ak;
        } else {
          Bk = [`${xk}`];
          Kk = Bk;
        }
        Jk = Kk;
      } else {
        if (callMethod1(vk[18], "has", xk)) {
          if ("old" == wk) {
            bl = vk[11];
            Uk = null;
            bl.set(xk, E(xk, Uk, Uk));
            Ck = c(xk, vk[0], vk[1], Uk, Qk, vk[2], Gk, vk[3], vk[4]);
            vk[10].set(xk, Ck);
            Hk = Ck;
          } else {
            el = vk[11].get(xk);
            if (el) {
              for (_k = 0; _k < el.length; _k = _k + 1) {
                ml = el[_k];
                gl = ml.style;
                if (gl) callMethod1(gl, "removeProperty", ik);
                vk[0].delete(ml);
              }
            }
            Dk = c(callMethod1(vk[18], "get", xk), vk[0], vk[1], vk[10].get(xk) ?? null, Qk, vk[2], Gk, vk[3], vk[4]);
            Hk = Dk;
          }
          Ik = Hk;
        } else {
          Ek = c(xk, vk[0], vk[1], null, Qk, vk[2], Gk, vk[3], vk[4]);
          Ik = Ek;
        }
        Jk = Ik;
      }
      for (fl = 0; fl < Jk.length; fl = fl + 1) {
        Ok = Jk[fl] || "";
        cl = vk[5].get(Ok);
        if (cl !== void 0) {
          Vk = cl != Mk;
          Wk = Vk;
        } else Wk = false;
        if (Wk) {
          Xk = {
            __proto__: null
          };
          nl = cl;
          for (hl in nl) Xk[hl] = cl[hl];
          for (il in Mk) Xk[il] = Mk[il];
          Yd(vk, Ok, Xk);
        } else Yd(vk, Ok, Mk);
        if (callMethod1(vk[17], "has", xk)) {
          Yk = callMethod1(vk[17], "get", xk);
          if ("boolean" == typeof Yk) vk[8].set(Ok, Yk);
        }
        ol = vk[9].get(Ok);
        Zk = {
          oldPos: null,
          newPos: null
        };
        jl = null;
        Zk.oldPos = jl;
        Zk.newPos = jl;
        if (ol) $k = ol;
        else {
          vk[9].set(Ok, Zk);
          $k = Zk;
        }
        Pk = [fl, Jk.length];
        if ("old" == wk) $k.oldPos = Pk;
        else $k.newPos = Pk;
      }
    }
  };
})();
var ka = 0;
export {
  Zd,
  ka
};
