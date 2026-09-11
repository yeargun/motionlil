import { U } from "./part-367.js";
import { lk } from "./part-5.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Yj = (vk, yk, zk) => {
  var tl = vk.x.translate / yk.x, vl = vk.y.translate / yk.y;
  if (null != zk) {
    var Ik = U(zk.z);
    if (null != Ik) {
      var Jk, Kk, Lk, Mk, Nk, nl, ol, pl, ul, wl, xl, yl, zl, Al, Ak, Ok, Bk, Ck, Dk, Ek, Fk, Gk, Hk, ql, wk, xk, Pk, Qk, Rk, Sk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, _k, $k, al, bl, cl, dl, el, sl, fl, gl, hl, il, jl, kl, ll, ml, rl = Ik;
    } else rl = 0;
    sl = rl;
  } else sl = 0;
  if (0 != tl) Kk = true;
  else {
    Jk = 0 != vl;
    Kk = Jk;
  }
  if (Kk) Mk = true;
  else {
    Lk = 0 != sl;
    Mk = Lk;
  }
  if (Mk) {
    Nk = `translate3d(${tl}px, ${vl}px, ${sl}px) `;
    el = Nk;
  } else el = lk;
  if (1 != yk.x) ol = true;
  else {
    nl = 1 != yk.y;
    ol = nl;
  }
  if (ol) {
    fl = el + `scale(${1 / yk.x}, ${1 / yk.y}) `;
    dl = fl;
  } else dl = el;
  if (null != zk) {
    pl = U(zk.transformPerspective);
    ul = U(zk.rotate);
    wl = U(zk.pathRotation);
    xl = U(zk.rotateX);
    yl = U(zk.rotateY);
    zl = U(zk.skewX);
    Al = U(zk.skewY);
    if (null != pl) {
      Ak = pl;
      if (0 != Ak) {
        Ok = `perspective(${Ak}px) ${dl}`;
        bl = Ok;
      } else bl = dl;
      cl = bl;
    } else cl = dl;
    if (null != ul) {
      Bk = ul;
      if (0 != Bk) {
        gl = cl + `rotate(${Bk}deg) `;
        $k = gl;
      } else $k = cl;
      al = $k;
    } else al = cl;
    if (null != wl) {
      Ck = wl;
      if (0 != Ck) {
        hl = al + `rotate(${Ck}deg) `;
        Zk = hl;
      } else Zk = al;
      _k = Zk;
    } else _k = al;
    if (null != xl) {
      Dk = xl;
      if (0 != Dk) {
        il = _k + `rotateX(${Dk}deg) `;
        Xk = il;
      } else Xk = _k;
      Yk = Xk;
    } else Yk = _k;
    if (null != yl) {
      Ek = yl;
      if (0 != Ek) {
        jl = Yk + `rotateY(${Ek}deg) `;
        Vk = jl;
      } else Vk = Yk;
      Wk = Vk;
    } else Wk = Yk;
    if (null != zl) {
      Fk = zl;
      if (0 != Fk) {
        kl = Wk + `skewX(${Fk}deg) `;
        Tk = kl;
      } else Tk = Wk;
      Uk = Tk;
    } else Uk = Wk;
    if (null != Al) {
      Gk = Al;
      if (0 != Gk) {
        ll = Uk + `skewY(${Gk}deg) `;
        Qk = ll;
      } else Qk = Uk;
      Rk = Qk;
    } else Rk = Uk;
    Sk = Rk;
  } else Sk = dl;
  Hk = vk.x.scale * yk.x;
  ql = vk.y.scale * yk.y;
  if (1 != Hk) xk = true;
  else {
    wk = 1 != ql;
    xk = wk;
  }
  if (xk) {
    ml = Sk + `scale(${Hk}, ${ql})`;
    Pk = ml;
  } else Pk = Sk;
  if (0 == Pk.length) return "none";
  return Pk;
};
export {
  Yj
};
