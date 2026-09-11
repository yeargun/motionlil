import { Sb } from "./part-66.js";
var Qh = /* @__PURE__ */ (function() {
  let a = (vk, yk, zk, Ak, Bk, Ck, Dk) => {
    let Ek = 2 * (1 - vk), wk = 2 * vk, xk = Math.atan2(Ek * (Ck - Bk) + wk * (Dk - Ck), Ek * (zk - yk) + wk * (Ak - zk));
    return xk * (180 / Math.PI);
  }, b = (vk, wk, yk, Bk, Dk, Fk) => {
    var zk = yk - vk, Ck = Bk - wk, Gk = Math.sqrt(zk * zk + Ck * Ck);
    if (Gk > 0) {
      var Ek = Dk * Gk, Hk = wk + Ck * Fk + zk / Gk * Ek, Sk = vk + zk * Fk + (0 - Ck / Gk) * Ek, xk = {
        x: 0,
        y: 0
      };
      xk.x = Sk;
      xk.y = Hk;
      return xk;
    }
    var Ak = {
      x: 0,
      y: 0
    };
    Ak.x = vk;
    Ak.y = wk;
    return Ak;
  }, c = (vk) => {
    if (vk > 0) return 1;
    if (vk < 0) return -1;
    return 0;
  };
  return function(wk) {
    var Bk = null, zk = {
      strength: 0,
      peak: 0,
      direction: null,
      rotate: null
    };
    zk.strength = 0.5;
    zk.peak = 0.5;
    zk.direction = Bk;
    zk.rotate = false;
    if (wk) {
      var xk, Ck, Dk, Ek, yk, Ak = wk;
    } else Ak = zk;
    var vk = 0;
    xk = Ak.rotate;
    if (xk) vk = 1;
    else {
      if ("number" == typeof xk) vk = xk;
    }
    Ck = Ak.strength;
    Dk = Ak.peak;
    Ek = Ak.direction;
    yk = [null];
    yk[0] = null;
    return (il, jl) => {
      var pl = jl.x - il.x, ul = jl.y - il.y;
      if ("cw" == Ek) {
        var kl, cl, wl, dl, el, vl, ql, rl, sl, tl, ll, Vk, $k, fl, Wk, Xk, ml, nl, ol, gl, Zk, al, Yk = 0 - Ck;
      } else {
        if ("ccw" == Ek) Xk = Ck;
        else {
          if (Math.abs(pl) >= Math.abs(ul)) ml = pl;
          else ml = ul;
          if (ml < 0) Wk = 0 - Ck;
          else Wk = Ck;
          Xk = Wk;
        }
        Yk = Xk;
      }
      kl = b(il.x, il.y, jl.x, jl.y, Yk, Dk);
      if (null == Ek) {
        cl = il.x + pl * Dk;
        wl = il.y + ul * Dk;
        if (Math.abs(pl) < Math.abs(ul)) {
          dl = c(kl.x - cl);
          gl = dl;
        } else {
          el = c(kl.y - wl);
          gl = el;
        }
        vl = yk[0];
        if (null != vl) {
          ql = 0 != gl;
          rl = ql;
        } else rl = false;
        if (rl) {
          sl = gl != vl;
          tl = sl;
        } else tl = false;
        if (tl) {
          ll = b(il.x, il.y, jl.x, jl.y, 0 - Yk, Dk);
          nl = ll;
        } else {
          if (0 != gl) yk[0] = gl;
          nl = kl;
        }
        ol = nl;
      } else ol = kl;
      if (0 != vk) {
        Vk = a(0, il.x, ol.x, jl.x, il.y, ol.y, jl.y);
        $k = Sb(-180, 180, a(1, il.x, ol.x, jl.x, il.y, ol.y, jl.y) - Vk);
        Zk = Vk;
        al = $k;
      } else {
        Zk = 0;
        al = 0;
      }
      fl = vk;
      return (Ym) => {
        var _m = 1 - Ym, an = _m * _m, $m = 2 * _m * Ym, bn = Ym * Ym, Zm = {
          __proto__: null,
          x: an * il.x + $m * ol.x + bn * jl.x,
          y: an * il.y + $m * ol.y + bn * jl.y
        };
        if (0 != fl) Zm.rotate = Sb(-180, 180, a(Ym, il.x, ol.x, jl.x, il.y, ol.y, jl.y) - (Zk + al * Ym)) * fl;
        return Zm;
      };
    };
  };
})();
export {
  Qh
};
