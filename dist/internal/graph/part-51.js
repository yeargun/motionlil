import { e } from "./part-27.js";
import { v } from "./part-28.js";
import { ea } from "./part-468.js";
import { Rb } from "./part-47.js";
import { _c } from "./part-48.js";
import { _ } from "./part-49.js";
import { lk } from "./part-5.js";
import { Rf } from "./part-50.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let $c = (Gk) => {
  var Xk = Gk.restSpeed, bl = Gk.restDelta, Nk = Gk.keyframes[0], il = Gk.keyframes[Gk.keyframes.length - 1], hl = {
    done: false,
    value: 0
  };
  hl.done = false;
  hl.value = Nk;
  var Kk = Gk.velocity;
  if (null != Kk) {
    var Lk, Pk, Sk, fl, jl, pl, rl, tl, wl, yl, zl, Tk, Qk, kl, ql, gl, sl, Mk, Ok, Rk, ll, Hk, Uk, Ik, Vk, Yk, cl, Wk, Zk, ml, ul, Jk, nl, vl, xl, _k, $k, dl, el, al, ol = Kk;
  } else ol = 0;
  Lk = Gk.keyframes;
  Pk = Gk.stiffness;
  Sk = Gk.damping;
  fl = Gk.mass;
  jl = -v(ol);
  pl = Gk.duration;
  rl = Gk.bounce;
  tl = Gk.visualDuration;
  wl = Gk.restSpeed;
  yl = Gk.restDelta;
  zl = {
    keyframes: [],
    stiffness: null,
    damping: null,
    mass: null,
    velocity: null,
    duration: null,
    bounce: null,
    visualDuration: null,
    restSpeed: null,
    restDelta: null
  };
  _(zl, Lk, Pk, Sk, fl, jl, pl, rl, tl, wl, yl);
  Tk = Rf(zl);
  Qk = Tk[1];
  kl = Tk[3];
  ql = Tk[4];
  gl = Tk[0];
  sl = Tk[5];
  Mk = Tk[2] / (2 * Math.sqrt(Qk * kl));
  Ok = il - Nk;
  Rk = v(Math.sqrt(Qk / kl));
  ll = Math.abs(Ok) < 5;
  if (null == Xk) {
    if (ll) _k = 0.01;
    else _k = 2;
    $k = _k;
  } else $k = Xk;
  if (null == bl) {
    if (ll) dl = 5e-3;
    else dl = 0.5;
    el = dl;
  } else el = bl;
  var Bk = 0;
  if (null != $k) Bk = $k;
  var Ck = 0;
  if (null != el) Ck = el;
  var vk = 0, xk = 0, zk = 0, Ak = 0, wk = 0, Dk = 0, Ek = 0, Fk = 0, yk = 0;
  if (Mk < 1) {
    yk = 0;
    vk = Rk * Math.sqrt(1 - Mk * Mk);
    Hk = Mk * Rk;
    Uk = Hk * Ok;
    xk = (gl + Uk) / vk;
    zk = Hk * xk + Ok * vk;
    Ak = Uk - xk * vk;
  } else {
    if (1 == Mk) {
      yk = 1;
      Dk = gl + Rk * Ok;
    } else {
      yk = 2;
      wk = Rk * Math.sqrt(Mk * Mk - 1);
      Ik = Mk * Rk;
      Vk = Ik * Ok;
      Yk = (gl + Vk) / wk;
      Ek = Ik * Yk - Ok * wk;
      Fk = Vk - Yk * wk;
    }
  }
  cl = (Pn) => {
    if (0 == yk) return il - Math.exp(-Mk * Rk * Pn) * (xk * Math.sin(vk * Pn) + Ok * Math.cos(vk * Pn));
    if (1 == yk) return il - Math.exp(-Rk * Pn) * (Ok + (gl + Rk * Ok) * Pn);
    var Kn = Math.min(wk * Pn, 300), Mn = -Kn;
    return il - Math.exp(-Mk * Rk * Pn) * ((gl + Mk * Rk * Ok) * ((Math.exp(Kn) - Math.exp(Mn)) / 2) + wk * Ok * ((Math.exp(Kn) + Math.exp(Mn)) / 2)) / wk;
  };
  Wk = (Rn) => {
    if (0 == yk) return Math.exp(-Mk * Rk * Rn) * (zk * Math.sin(vk * Rn) + Ak * Math.cos(vk * Rn));
    if (1 == yk) return Math.exp(-Rk * Rn) * (Rk * Dk * Rn - gl);
    var Fn = Math.min(wk * Rn, 300), Jn = -Fn;
    return Math.exp(-Mk * Rk * Rn) * (Ek * ((Math.exp(Fn) - Math.exp(Jn)) / 2) + Fk * ((Math.exp(Fn) + Math.exp(Jn)) / 2));
  };
  Zk = null;
  if (sl) al = ql;
  else al = Zk;
  ml = (Fn) => e(Wk(Fn));
  ul = (Fn) => hl;
  var Om = () => lk, Pm = () => {
  };
  Jk = {
    calculatedDuration: null,
    velocity: null,
    next: null,
    toString: null,
    toTransition: null
  };
  Jk.calculatedDuration = al;
  Jk.velocity = ml;
  Jk.next = ul;
  Jk.toString = Om;
  Jk.toTransition = Pm;
  nl = (ao) => {
    if (!sl) {
      var Hn, On, Qn, co, In, Jn, Rn, Kn, Ln, Mn, bo = Mk < 1;
    } else bo = false;
    if (bo) {
      Hn = Math.exp(-Mk * Rk * ao);
      On = Math.sin(vk * ao);
      Qn = Math.cos(vk * ao);
      co = il - Hn * (xk * On + Ok * Qn);
      if (Math.abs(e(Hn * (zk * On + Ak * Qn))) <= Bk) {
        In = Math.abs(il - co) <= Ck;
        Jn = In;
      } else Jn = false;
      hl.done = Jn;
      if (hl.done) hl.value = il;
      else hl.value = co;
      return hl;
    }
    Rn = cl(ao);
    if (!sl) {
      if (Math.abs(e(Wk(ao))) <= Bk) {
        Kn = Math.abs(il - Rn) <= Ck;
        Ln = Kn;
      } else Ln = false;
      hl.done = Ln;
    } else {
      if (null != ql) Mn = ql;
      else Mn = 0;
      hl.done = ao >= Mn;
    }
    if (hl.done) hl.value = il;
    else hl.value = Rn;
    return hl;
  };
  vl = (Fn) => e(Wk(Fn));
  xl = () => {
    let Fn = Math.min(Rb(Jk.next), ea);
    return `${Fn}ms ${_c((Rn) => Jk.next(Fn * Rn).value, Fn, 30)}`;
  };
  Jk.calculatedDuration = al;
  Jk.velocity = vl;
  Jk.next = nl;
  Jk.toString = xl;
  Jk.toTransition = () => {
  };
  return Jk;
};
export {
  $c
};
