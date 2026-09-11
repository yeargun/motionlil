import { we } from "./part-340.js";
import { gi } from "./part-346.js";
import { Ib } from "./part-600.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let hi = (vk, Ok, Sk, Uk, Yk) => {
  var gl, Gl, Ol, Jl, ql, xl, Zk, Pk, Qk, Rk, Tk, Vk, wk, hl, il, jl, kl, ll, ml, nl, ol, pl, xk, yk, zk, Wk, Xk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Hl, Pl, Ql, Kl, Ll, Ml, rl, sl, tl, ul, yl, zl, Al, Bl, Cl, _k, $k, al, bl, cl, dl, Tl, Lk, Mk, Nk, wl, El, fl, Sl = {
    __proto__: null
  }, Fl = null, Il = Fl, Rl = Fl, Nl = Fl, vl = Fl, Dl = 1, el = 0;
  for (gl in Ok) {
    if ("attrX" == gl) {
      Gl = Ok[gl];
      Hl = Gl;
      Ql = Rl;
      Ml = Nl;
      ul = vl;
      Cl = Dl;
      dl = el;
    } else {
      if ("attrY" == gl) {
        Ol = Ok[gl];
        Pl = Ol;
        Ll = Nl;
        tl = vl;
        Bl = Dl;
        cl = el;
      } else {
        if ("attrScale" == gl) {
          Jl = Ok[gl];
          Kl = Jl;
          sl = vl;
          Al = Dl;
          bl = el;
        } else {
          if ("pathLength" == gl) {
            ql = Ok[gl];
            rl = ql;
            zl = Dl;
            al = el;
          } else {
            if ("pathSpacing" == gl) {
              xl = Ok[gl];
              yl = xl;
              $k = el;
            } else {
              if ("pathOffset" == gl) {
                Zk = Ok[gl];
                _k = Zk;
              } else {
                Sl[gl] = Ok[gl];
                _k = el;
              }
              yl = Dl;
              $k = _k;
            }
            rl = vl;
            zl = yl;
            al = $k;
          }
          Kl = Nl;
          sl = rl;
          Al = zl;
          bl = al;
        }
        Pl = Rl;
        Ll = Kl;
        tl = sl;
        Bl = Al;
        cl = bl;
      }
      Hl = Il;
      Ql = Pl;
      Ml = Ll;
      ul = tl;
      Cl = Bl;
      dl = cl;
    }
    Il = Hl;
    Rl = Ql;
    Nl = Ml;
    vl = ul;
    Dl = Cl;
    el = dl;
  }
  we(vk, Sl, Uk);
  if (Sk) {
    Pk = vk.style;
    if (Pk.viewBox) {
      Qk = vk.attrs;
      Qk.viewBox = vk.style.viewBox;
    }
    return;
  }
  vk.attrs = vk.style;
  vk.style = {
    __proto__: null
  };
  for (Rk = vk.attrs, Tk = vk.style, Tl = 0; Tl < Ib.length; Tl = Tl + 1) {
    Vk = Ib[Tl] || "";
    wk = Rk[Vk];
    if ("number" == typeof wk) il = true;
    else {
      hl = "string" == typeof wk;
      il = hl;
    }
    if (il) kl = true;
    else {
      jl = "boolean" == typeof wk;
      kl = jl;
    }
    if (kl) ml = true;
    else {
      ll = Array.isArray(wk);
      ml = ll;
    }
    if (ml) pl = true;
    else {
      if ("object" == typeof wk) {
        nl = !!wk;
        ol = nl;
      } else ol = false;
      pl = ol;
    }
    if (pl) {
      Tk[Vk] = wk;
      Rk[Vk] = null;
    }
  }
  if (Tk.transform) yk = true;
  else {
    xk = !!Rk.transformOrigin;
    yk = xk;
  }
  if (yk) {
    zk = Rk.transformOrigin;
    if (!("number" == typeof zk)) {
      Wk = !("string" == typeof zk);
      Xk = Wk;
    } else Xk = false;
    if (Xk) Lk = "50% 50%";
    else Lk = zk;
    Tk.transformOrigin = Lk;
    Rk.transformOrigin = null;
  }
  if (Tk.transform) {
    if (null != Yk) {
      Ak = "object" == typeof Yk;
      Bk = Ak;
    } else Bk = false;
    if (Bk) {
      Ck = Yk.transformBox;
      if ("string" == typeof Ck) Mk = Ck;
      else Mk = "fill-box";
      Nk = Mk;
    } else Nk = "fill-box";
    Tk.transformBox = Nk;
    Rk.transformBox = null;
  }
  if ("number" == typeof Il) Ek = true;
  else {
    Dk = "string" == typeof Il;
    Ek = Dk;
  }
  if (Ek) Rk.x = Il;
  if ("number" == typeof Rl) Gk = true;
  else {
    Fk = "string" == typeof Rl;
    Gk = Fk;
  }
  if (Gk) Rk.y = Rl;
  if ("number" == typeof Nl) Ik = true;
  else {
    Hk = "string" == typeof Nl;
    Ik = Hk;
  }
  if (Ik) Rk.scale = Nl;
  if ("number" == typeof vl) Kk = true;
  else {
    Jk = "string" == typeof vl;
    Kk = Jk;
  }
  if (Kk) {
    if ("number" == typeof vl) wl = vl;
    else wl = 0;
    if ("number" == typeof Dl) El = Dl;
    else El = 1;
    if ("number" == typeof el) fl = el;
    else fl = 0;
    gi(Rk, wl, El, fl, false);
  }
};
export {
  hi
};
