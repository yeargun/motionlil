import { C } from "./part-111.js";
import { ra } from "./part-276.js";
import { ie } from "./part-286.js";
import { Ih } from "./part-299.js";
import { Jh } from "./part-301.js";
import { ca } from "./part-381.js";
import { Ee } from "./part-385.js";
import { Ai } from "./part-389.js";
import { He } from "./part-391.js";
import { Le } from "./part-396.js";
import { G } from "./part-457.js";
import { r } from "./part-591.js";
import { K } from "./part-611.js";
let Fe = (vk) => {
  var wk = vk.relativeParent;
  if (!wk) return;
  if (wk.resolvedRelativeTargetAt != G.timestamp) Ge(wk, true);
};
let Ge = (vk, xk) => {
  var Jk = Le(vk);
  if (Jk.isProjectionDirty) vk.isProjectionDirty = true;
  if (Jk.isTransformDirty) vk.isTransformDirty = true;
  if (Jk.isSharedProjectionDirty) vk.isSharedProjectionDirty = true;
  if (null != vk.resumingFrom) {
    var Kk, Mk, Nk, Ok, ll, ml, nl, Dl, Pk, yk, zk, Ak, Ll, Bk, Qk, Rk, Sk, Tk, Uk, Vk, Wk, Xk, ol, pl, ql, rl, Yk, Zk, _k, Nl, sl, Ml, El, Fl, tl, ul, vl, wl, xl, yl, zl, Gl, Hl, $k, al, bl, Al, Bl, cl, dl, el, fl, gl, hl, Cl, Il, Jl, Ck, wk, Dk, Ek, Fk, Gk, Hk, Ik, il, Kl, jl, kl, Lk = true;
  } else {
    Kk = vk != Jk;
    Lk = Kk;
  }
  if (xk) Ik = false;
  else Ik = true;
  if (Lk) {
    Mk = vk.isSharedProjectionDirty;
    Nk = Mk;
  } else Nk = false;
  if (Nk) Hk = false;
  else Hk = Ik;
  if (vk.isProjectionDirty) Gk = false;
  else Gk = Hk;
  Ok = vk.parent;
  if (Ok) {
    ll = Ok.isProjectionDirty;
    ml = ll;
  } else ml = false;
  if (ml) Fk = false;
  else Fk = Gk;
  if (vk.attemptToResolveRelativeTarget) Ek = false;
  else Ek = Fk;
  if (vk.root.updateBlockedByResize) Dk = false;
  else Dk = Ek;
  if (Dk) return;
  nl = vk.options.layout;
  Dl = vk.options.layoutId;
  Pk = vk.layout;
  if (!Pk) Ak = true;
  else {
    if (!nl) {
      yk = null == Dl;
      zk = yk;
    } else zk = false;
    Ak = zk;
  }
  if (Ak) return;
  Ll = Pk;
  vk.resolvedRelativeTargetAt = G.timestamp;
  Bk = He(vk);
  if (Bk) {
    Qk = vk.linkedParentVersion != Bk.layoutVersion;
    Rk = Qk;
  } else Rk = false;
  if (Rk) {
    Sk = !Bk.options.layoutRoot;
    Tk = Sk;
  } else Tk = false;
  if (Tk) {
    jl = null;
    vk.relativeParent = jl;
    vk.relativeTarget = jl;
    vk.relativeTargetOrigin = jl;
  }
  if (!vk.targetDelta) {
    Uk = !vk.relativeTarget;
    Vk = Uk;
  } else Vk = false;
  if (Vk) {
    Wk = null;
    if (Bk) {
      Xk = Bk.layout;
      il = Xk;
    } else il = Wk;
    if (false != vk.options.layoutAnchor) {
      ol = !!Bk;
      pl = ol;
    } else pl = false;
    if (pl) {
      ql = !!il;
      rl = ql;
    } else rl = false;
    if (rl) Je(vk, Bk, Ll.layoutBox, il.layoutBox);
    else {
      kl = null;
      vk.relativeParent = kl;
      vk.relativeTarget = kl;
      vk.relativeTargetOrigin = kl;
    }
  }
  if (!vk.relativeTarget) {
    Yk = !vk.targetDelta;
    Zk = Yk;
  } else Zk = false;
  if (Zk) return;
  if (!vk.target) {
    vk.target = C();
    vk.targetWithTransforms = C();
  }
  _k = vk.target;
  Nl = vk.relativeTarget;
  sl = vk.relativeTargetOrigin;
  Ml = vk.relativeParent;
  El = null;
  if (Ml) {
    Fl = Ml.target;
    Kl = Fl;
  } else Kl = El;
  if (Nl) {
    tl = !!sl;
    ul = tl;
  } else ul = false;
  if (ul) {
    vl = !!Ml;
    wl = vl;
  } else wl = false;
  if (wl) {
    xl = !!Kl;
    yl = xl;
  } else yl = false;
  if (yl) {
    Fe(vk);
    if (_k) Ih(_k, Nl, Kl, Ee(vk.options.layoutAnchor));
  } else {
    if (vk.targetDelta) {
      if (null != vk.resumingFrom) {
        if (_k) Ai(vk, Ll.layoutBox, false, _k);
      } else {
        if (_k) ra(_k, Ll.layoutBox);
      }
      zl = vk.targetDelta;
      if (_k) {
        Gl = !!zl;
        Hl = Gl;
      } else Hl = false;
      if (Hl) ie(_k, zl);
    } else {
      if (_k) ra(_k, Ll.layoutBox);
    }
  }
  if (vk.attemptToResolveRelativeTarget) {
    vk.attemptToResolveRelativeTarget = false;
    if (Bk) {
      $k = null != Bk.resumingFrom;
      al = $k;
    } else al = false;
    bl = al == (null != vk.resumingFrom);
    if (false != vk.options.layoutAnchor) {
      Al = !!Bk;
      Bl = Al;
    } else Bl = false;
    if (Bl) cl = bl;
    else cl = false;
    if (cl) {
      dl = !Bk.options.layoutScroll;
      el = dl;
    } else el = false;
    if (el) {
      fl = 1 != vk.animationProgress;
      gl = fl;
    } else gl = false;
    if (gl) {
      hl = vk.target;
      Cl = Bk.target;
      if (hl) {
        Il = !!Cl;
        Jl = Il;
      } else Jl = false;
      if (Jl) Je(vk, Bk, hl, Cl);
    } else {
      Ck = null;
      vk.relativeParent = Ck;
      vk.relativeTarget = Ck;
    }
  }
  if (r.value) {
    wk = K;
    wk.calculatedTargetDeltas = ca("calculatedTargetDeltas") + 1;
  }
};
let Je = (vk, wk, xk, zk) => {
  vk.relativeParent = wk;
  vk.linkedParentVersion = wk.layoutVersion;
  Fe(vk);
  let Ak = C();
  vk.relativeTargetOrigin = Ak;
  Jh(Ak, xk, zk, Ee(vk.options.layoutAnchor));
  let yk = C();
  vk.relativeTarget = yk;
  ra(yk, Ak);
};
export {
  Fe,
  Ge,
  Je
};
