import { pa } from "./part-109.js";
import { C } from "./part-111.js";
import { ra } from "./part-276.js";
import { de } from "./part-277.js";
import { Gh } from "./part-293.js";
import { Hh } from "./part-297.js";
import { te } from "./part-314.js";
import { ca } from "./part-381.js";
import { yi } from "./part-387.js";
import { Bi } from "./part-393.js";
import { Ke } from "./part-395.js";
import { Le } from "./part-396.js";
import { G } from "./part-457.js";
import { r } from "./part-591.js";
import { K } from "./part-611.js";
let Ci = (vk) => {
  var xk = Le(vk);
  if (null != vk.resumingFrom) {
    var _k, Wk, gl, hl, il, jl, kl, ll, sl, Ck, Dk, Ek, Fk, Gk, Hk, Xk, Ik, Jk, Kk, ml, tl, al, Lk, Mk, Nk, Ok, Pk, Qk, yk, zk, Ak, Yk, bl, cl, Bk, Zk, dl, el, nl, ol, pl, ql, fl, wk, Rk, Sk, Tk, Uk, Vk, rl, $k = true;
  } else {
    _k = vk != xk;
    $k = _k;
  }
  if (vk.isProjectionDirty) Uk = false;
  else Uk = true;
  Wk = vk.parent;
  if (Wk) {
    gl = Wk.isProjectionDirty;
    hl = gl;
  } else hl = false;
  if (hl) Tk = false;
  else Tk = Uk;
  if ($k) {
    if (vk.isSharedProjectionDirty) jl = true;
    else {
      il = vk.isTransformDirty;
      jl = il;
    }
    kl = jl;
  } else kl = false;
  if (kl) Sk = false;
  else Sk = Tk;
  if (vk.resolvedRelativeTargetAt == G.timestamp) Rk = false;
  else Rk = Sk;
  if (Rk) return;
  ll = vk.options.layout;
  sl = vk.options.layoutId;
  if (Wk) {
    Ck = Wk.isTreeAnimating;
    Vk = Ck;
  } else Vk = false;
  if (Vk) Ek = true;
  else {
    Dk = null != vk.currentAnimation;
    Ek = Dk;
  }
  if (Ek) Gk = true;
  else {
    Fk = !!vk.pendingAnimation;
    Gk = Fk;
  }
  vk.isTreeAnimating = Gk;
  if (!vk.isTreeAnimating) {
    Hk = null;
    vk.targetDelta = Hk;
    vk.relativeTarget = Hk;
  }
  Xk = vk.layout;
  if (!Xk) Kk = true;
  else {
    if (!ll) {
      Ik = null == sl;
      Jk = Ik;
    } else Jk = false;
    Kk = Jk;
  }
  if (Kk) return;
  ra(vk.layoutCorrected, Xk.layoutBox);
  ml = vk.treeScale.x;
  tl = vk.treeScale.y;
  Gh(vk.layoutCorrected, vk.treeScale, Bi(vk), $k);
  al = xk.layout;
  if (al) {
    Lk = !xk.target;
    Mk = Lk;
  } else Mk = false;
  if (Mk) {
    if (1 != vk.treeScale.x) Ok = true;
    else {
      Nk = 1 != vk.treeScale.y;
      Ok = Nk;
    }
    Pk = Ok;
  } else Pk = false;
  if (Pk) {
    xk.target = al.layoutBox;
    xk.targetWithTransforms = C();
  }
  Qk = xk.target;
  if (!Qk) {
    if (vk.prevProjectionDelta) {
      vk.prevProjectionDelta = pa();
      vk.projectionDelta = pa();
      vk.projectionDeltaWithTransform = pa();
      Ke(vk);
    }
    return;
  }
  if (!vk.projectionDelta) zk = true;
  else {
    yk = !vk.prevProjectionDelta;
    zk = yk;
  }
  if (zk) {
    vk.prevProjectionDelta = pa();
    vk.projectionDelta = pa();
    vk.projectionDeltaWithTransform = pa();
  } else {
    Ak = vk.projectionDelta;
    Yk = vk.prevProjectionDelta;
    if (Ak) {
      bl = !!Yk;
      cl = bl;
    } else cl = false;
    if (cl) {
      de(Yk.x, Ak.x);
      de(Yk.y, Ak.y);
    }
  }
  Bk = vk.projectionDelta;
  if (Bk) Hh(Bk, vk.layoutCorrected, Qk, vk.latestValues);
  Zk = vk.prevProjectionDelta;
  if (vk.treeScale.x != ml) el = true;
  else {
    dl = vk.treeScale.y != tl;
    el = dl;
  }
  if (Bk) {
    nl = !!Zk;
    ol = nl;
  } else ol = false;
  if (ol) {
    if (!te(Bk.x, Zk.x)) ql = true;
    else {
      pl = !te(Bk.y, Zk.y);
      ql = pl;
    }
    rl = ql;
  } else rl = false;
  if (el) fl = true;
  else fl = rl;
  if (fl) {
    vk.hasProjected = true;
    Ke(vk);
    yi(vk, "projectionUpdate", Qk);
  }
  if (r.value) {
    wk = K;
    wk.calculatedProjections = ca("calculatedProjections") + 1;
  }
};
export {
  Ci
};
