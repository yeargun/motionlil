import { callMethod0, callMethod1, callMethod2 } from "./../motion-dom/dom-host.js";
import { D } from "./part-113.js";
import { S } from "./part-195.js";
import { sc } from "./part-321.js";
import { lk } from "./part-5.js";
function Yi(xk, Bk, Ck, Dk, Hk, Ik) {
  var Jk, Kk, pl, ql, Xk, kl, Lk, Mk, Nk, rl, Ok, Pk, Yk, Zk, _k, sl, $k, al, ll, bl, Qk, ml, tl, cl, Rk, yk, Ek, Fk, Gk, zk, Ak, dl, nl, Sk, Tk, Uk, Vk, Wk, fl, gl, hl, il, jl, el = false, ol = false;
  for (Jk in Ck) {
    if ("x" == Jk) dl = true;
    else dl = el;
    if ("y" == Jk) nl = true;
    else nl = ol;
    el = dl;
    ol = nl;
  }
  if (!el) Kk = !ol;
  else Kk = false;
  if (Kk) return;
  pl = callMethod2(Bk, "getValue", "x", Bk.latestValues.x);
  ql = callMethod2(Bk, "getValue", "y", Bk.latestValues.y);
  Xk = Ck.x;
  kl = Ck.y;
  var vk = 0, wk = 0;
  if (Array.isArray(Xk)) {
    Lk = Xk.length > 0;
    Mk = Lk;
  } else Mk = false;
  if (Mk) {
    Nk = Xk[0];
    if ("number" == typeof Nk) Wk = Nk;
    else Wk = 0;
    rl = Xk[(Xk.length | 0) - 1];
    if ("number" == typeof rl) vk = rl;
    Uk = Wk;
  } else {
    if ("number" == typeof Xk) {
      Ok = callMethod0(pl, "get");
      if ("number" == typeof Ok) Vk = Ok;
      else Vk = 0;
      vk = Xk;
      Tk = Vk;
    } else {
      Pk = callMethod0(pl, "get");
      if ("number" == typeof Pk) Sk = Pk;
      else Sk = 0;
      vk = Sk;
      Tk = Sk;
    }
    Uk = Tk;
  }
  if (Array.isArray(kl)) {
    Yk = kl.length > 0;
    Zk = Yk;
  } else Zk = false;
  if (Zk) {
    _k = kl[0];
    if ("number" == typeof _k) jl = _k;
    else jl = 0;
    sl = kl[(kl.length | 0) - 1];
    if ("number" == typeof sl) wk = sl;
    hl = jl;
  } else {
    if ("number" == typeof kl) {
      $k = callMethod0(ql, "get");
      if ("number" == typeof $k) il = $k;
      else il = 0;
      wk = kl;
      gl = il;
    } else {
      al = callMethod0(ql, "get");
      if ("number" == typeof al) fl = al;
      else fl = 0;
      wk = fl;
      gl = fl;
    }
    hl = gl;
  }
  ll = {
    x: 0,
    y: 0
  };
  ll.x = Uk;
  ll.y = hl;
  bl = wk;
  Qk = {
    x: 0,
    y: 0
  };
  Qk.x = vk;
  Qk.y = bl;
  ml = xk(ll, Qk);
  tl = null;
  cl = D(0, tl);
  Rk = {
    __proto__: null,
    delay: Hk
  };
  yk = S(Dk, "x");
  if (yk != tl) {
    Ek = "object" == typeof yk;
    Fk = Ek;
  } else Fk = false;
  if (Fk) {
    for (Gk in yk) {
      if ("path" != Gk) Rk[Gk] = yk[Gk];
    }
  }
  Rk.isSync = true;
  Rk.velocity = 0;
  Rk.onUpdate = (Rm) => {
    if ("number" == typeof Rm) {
      var Qm, Nm, Sm = Rm / 1e3, Tm = Sm;
    } else Tm = 0;
    Qm = ml(Tm);
    callMethod1(pl, "set", Qm.x);
    callMethod1(ql, "set", Qm.y);
    Nm = Qm.rotate;
    if ("number" == typeof Nm) callMethod1(callMethod2(Bk, "getValue", "pathRotation", 0), "set", Nm);
  };
  Rk.onComplete = () => {
    callMethod1(pl, "set", vk);
    callMethod1(ql, "set", wk);
  };
  callMethod1(cl, "start", sc(lk, cl, [0, 1e3], Rk, null, false));
  zk = cl.animation;
  if (zk) Ik.push(zk);
  Ak = null;
  Ck.x = Ak;
  Ck.y = Ak;
}
export {
  Yi
};
