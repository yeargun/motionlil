import { callFn0, callMethod0, documentElement, getElementTagName } from "./../motion-dom/dom-host.js";
import { rk } from "./part-11.js";
import { u } from "./part-17.js";
import { fc } from "./part-209.js";
import { Ob } from "./part-41.js";
import { Zc } from "./part-44.js";
import { la } from "./part-622.js";
import { Hf } from "./part-623.js";
import { Kb } from "./part-627.js";
var Li = /* @__PURE__ */ (function() {
  let a = (vk, Hk) => {
    var Ik = [0, 0];
    Ik[0] = 0;
    Ik[1] = 0;
    var Jk, Kk, Lk, wk, Nk, xk, yk, zk, Ak, _k, Bk, Mk, Ok, Pk, Qk, Wk, $k, fl, Ck, Rk, Xk, Sk, al, bl, Yk, cl, dl, el, Tk, Dk, Ek, Zk, Gk, Uk, Vk, Fk = vk;
    for (; ; ) {
      if (null != Fk) {
        Jk = Fk != Hk;
        Kk = Jk;
      } else Kk = false;
      if (!Kk) {
        break;
      }
      Lk = Fk;
      if (fc(Lk)) {
        wk = Lk.offsetLeft;
        Nk = Lk.offsetTop;
        if ("number" == typeof wk) Ik[0] = Ik[0] + wk;
        if ("number" == typeof Nk) Ik[1] = Ik[1] + Nk;
        xk = Lk.offsetParent;
        Ek = xk;
      } else {
        yk = getElementTagName(Lk);
        if ("svg" == yk) Ak = true;
        else {
          zk = "SVG" == yk;
          Ak = zk;
        }
        if (Ak) {
          _k = callMethod0(Lk, "getBoundingClientRect");
          Bk = Lk.parentElement;
          if (null == Bk) break;
          Mk = callMethod0(Bk, "getBoundingClientRect");
          if (_k) {
            Ok = !!Mk;
            Pk = Ok;
          } else Pk = false;
          if (Pk) {
            Qk = _k.left;
            Wk = Mk.left;
            $k = _k.top;
            fl = Mk.top;
            if ("number" == typeof Qk && "number" == typeof Wk) Ik[0] = Ik[0] + (Qk - Wk);
            if ("number" == typeof $k && "number" == typeof fl) Ik[1] = Ik[1] + ($k - fl);
          }
          Dk = Bk;
        } else {
          if (Lk.getBBox) {
            Ck = callMethod0(Lk, "getBBox");
            if (Ck) {
              Rk = Ck.x;
              Xk = Ck.y;
              if ("number" == typeof Rk) Ik[0] = Ik[0] + Rk;
              if ("number" == typeof Xk) Ik[1] = Ik[1] + Xk;
            }
            for (Sk = Lk.parentNode, Gk = null, Vk = Sk; ; ) {
              if (null == Gk) {
                al = null != Vk;
                bl = al;
              } else bl = false;
              if (!bl) {
                break;
              }
              Yk = Vk;
              cl = getElementTagName(Yk);
              if ("svg" == cl) el = true;
              else {
                dl = "SVG" == cl;
                el = dl;
              }
              if (el) {
                Zk = Yk;
                Uk = Vk;
              } else {
                Tk = Yk.parentNode;
                Zk = Gk;
                Uk = Tk;
              }
              Gk = Zk;
              Vk = Uk;
            }
          } else break;
          Dk = Gk;
        }
        Ek = Dk;
      }
      Fk = Ek;
    }
    return Ik;
  }, b = () => {
    if (0 == la.size) {
      la.set("start", 0);
      la.set("center", 0.5);
      la.set("end", 1);
    }
  }, c = (vk, Ak, Bk = 0) => {
    b();
    if ("string" == typeof vk) {
      var Ck = la.get(vk);
      if (Ck !== void 0) {
        var Dk, Ek, Xk, Mk, Nk, Yk, Ok, Pk, Fk, Gk, Qk, Rk, Sk, Hk, Ik, Jk, Kk, Lk, wk, xk, zk, Tk, Uk, Vk, Wk, yk = Ck;
      } else yk = vk;
      zk = yk;
    } else zk = vk;
    if ("string" == typeof zk) {
      Dk = parseFloat(zk);
      if (zk.endsWith("px")) {
        Hk = Dk;
        wk = zk;
      } else {
        if (zk.endsWith("%")) {
          Ek = Dk / rk;
          Sk = 0;
          Lk = Ek;
        } else {
          if (zk.endsWith("vw")) {
            Xk = documentElement();
            if (Xk) {
              Mk = Xk.clientWidth;
              if ("number" == typeof Mk) Tk = Mk;
              else Tk = 0;
              Uk = Tk;
            } else Uk = 0;
            Nk = Dk / rk * Uk;
            Rk = Nk;
            Kk = zk;
          } else {
            if (zk.endsWith("vh")) {
              Yk = documentElement();
              if (Yk) {
                Ok = Yk.clientHeight;
                if ("number" == typeof Ok) Vk = Ok;
                else Vk = 0;
                Wk = Vk;
              } else Wk = 0;
              Pk = Dk / rk * Wk;
              Qk = Pk;
              Jk = zk;
            } else {
              Qk = 0;
              Jk = Dk;
            }
            Rk = Qk;
            Kk = Jk;
          }
          Sk = Rk;
          Lk = Kk;
        }
        Hk = Sk;
        wk = Lk;
      }
      Ik = Hk;
      xk = wk;
    } else {
      Ik = 0;
      xk = zk;
    }
    if ("number" == typeof xk) {
      Fk = Ak * xk;
      Gk = Fk;
    } else Gk = Ik;
    return Bk + Gk;
  }, d = (vk, Ak, Bk, Ck) => {
    var Dk = Hf;
    if (Array.isArray(vk)) {
      var wk, xk, Ek, Fk, Gk, yk, Nk, zk, Hk, Ik, Jk, Kk, Lk, Mk = vk;
    } else Mk = Dk;
    if ("number" == typeof vk) Kk = [vk, vk];
    else {
      if ("string" == typeof vk) {
        wk = vk.trim();
        if (wk.includes(" ")) {
          xk = wk.split(" ");
          if (xk.length >= 2) {
            Ek = [xk[0] || "", xk[1] || ""];
            Lk = Ek;
          } else Lk = Mk;
          Ik = Lk;
        } else {
          b();
          if (la.has(wk)) {
            Fk = [wk, wk];
            Hk = Fk;
          } else {
            Gk = [wk, "0"];
            Hk = Gk;
          }
          Ik = Hk;
        }
        Jk = Ik;
      } else Jk = Mk;
      Kk = Jk;
    }
    yk = Kk[0];
    Nk = Kk[1];
    zk = c(yk, Bk, Ck);
    return zk - c(Nk, Ak);
  }, e = (vk) => {
    var Jk = vk.getBBox, Ok = getElementTagName(vk);
    if (Jk) {
      var Ck, Dk, Kk, wk, Ek, Lk, Fk, Mk, xk, yk, zk, Gk, Hk, Ik, Nk, Ak = "svg" != Ok, Bk = Ak;
    } else Bk = false;
    if (Bk) {
      Ck = "SVG" != Ok;
      Dk = Ck;
    } else Dk = false;
    if (Dk) {
      Kk = callFn0(Jk);
      if (Kk) {
        wk = Kk.width;
        Ek = Kk.height;
        if ("number" == typeof wk) yk = wk;
        else yk = 0;
        if ("number" == typeof Ek) Gk = Ek;
        else Gk = 0;
        zk = yk;
        Hk = Gk;
      } else {
        zk = 0;
        Hk = 0;
      }
      Lk = [0, 0];
      Lk[0] = zk;
      Lk[1] = Hk;
      return Lk;
    }
    Fk = vk.clientWidth;
    Mk = vk.clientHeight;
    if ("number" == typeof Fk) Ik = Fk;
    else Ik = 0;
    if ("number" == typeof Mk) Nk = Mk;
    else Nk = 0;
    xk = [0, 0];
    xk[0] = Ik;
    xk[1] = Nk;
    return xk;
  };
  return function(vk, zk, Gk) {
    var Yk = Kb;
    if (null != Gk) {
      var Ok, Pk, Qk, Rk, $k, Hk, Ik, el, jl, Sk, Tk, fl, kl, wk, ol, rl, xk, pl, sl, Ak, al, ll, Uk, ul, vl, wl, xl, Jk, Bk, Ck, Zk, _k, Vk, Wk, bl, cl, Kk, Xk, gl, ml, hl, nl, yk, ql, tl, il, Dk, Ek, Fk, dl, Lk, Mk = "object" == typeof Gk, Nk = Mk;
    } else Nk = false;
    if (Nk) {
      Ok = Gk.offset;
      if (null != Ok) Zk = Ok;
      else Zk = Yk;
      _k = Zk;
    } else _k = Yk;
    if (null != Gk) {
      Pk = "object" == typeof Gk;
      Qk = Pk;
    } else Qk = false;
    if (Qk) {
      Rk = Gk.target;
      if (null != Rk) Vk = Rk;
      else Vk = vk;
      $k = Gk.axis;
      if ("string" == typeof $k) bl = $k;
      else bl = "y";
      Wk = Vk;
      cl = bl;
    } else {
      Wk = vk;
      cl = "y";
    }
    if ("y" == cl) {
    }
    Hk = [0, 0];
    Hk[0] = 0;
    Hk[1] = 0;
    if (Wk != vk) {
      Ik = a(Wk, vk);
      Kk = Ik;
    } else Kk = Hk;
    if (Wk == vk) {
      el = vk.scrollWidth;
      jl = vk.scrollHeight;
      if ("number" == typeof el) gl = el;
      else gl = 0;
      if ("number" == typeof jl) ml = jl;
      else ml = 0;
      Sk = [0, 0];
      Sk[0] = gl;
      Sk[1] = ml;
      Xk = Sk;
    } else {
      Tk = e(Wk);
      Xk = Tk;
    }
    fl = vk.clientWidth;
    kl = vk.clientHeight;
    if ("number" == typeof fl) hl = fl;
    else hl = 0;
    if ("number" == typeof kl) nl = kl;
    else nl = 0;
    wk = zk.x;
    ol = Kk[0];
    rl = Xk[0];
    if ("y" == cl) {
      xk = zk.y;
      pl = Kk[1];
      sl = Xk[1];
      yk = xk;
      ql = pl;
      tl = sl;
      il = nl;
    } else {
      yk = wk;
      ql = ol;
      tl = rl;
      il = hl;
    }
    yk.offset = [];
    Ak = !yk.interpolateFn;
    if (Array.isArray(_k)) {
      al = _k.length | 0;
      dl = al;
    } else dl = 0;
    for (Fk = Ak, Lk = 0; Lk < dl; ) {
      ll = d(_k[Lk], il, tl, ql);
      if (!Fk) {
        Uk = yk.interpolatorOffsets;
        if (Uk) {
          ul = Lk < Uk.length;
          vl = ul;
        } else vl = false;
        if (vl) {
          wl = ll != Uk[Lk];
          xl = wl;
        } else xl = false;
        if (xl) Dk = true;
        else Dk = Fk;
        Ek = Dk;
      } else Ek = Fk;
      yk.offset.push(ll);
      Fk = Ek;
      Lk += 1;
    }
    if (Fk) {
      Jk = Zc(yk.offset);
      Bk = {
        clampValues: false,
        ease: null
      };
      Bk.clampValues = false;
      Bk.ease = null;
      yk.interpolateFn = Ob(yk.offset, Jk, Bk);
      yk.interpolatorOffsets = [...yk.offset];
    }
    Ck = yk.interpolateFn;
    if (Ck) yk.progress = /* @__PURE__ */ u(0, 1, Ck(yk.current));
  };
})();
export {
  Li
};
