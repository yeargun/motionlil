import { callMethod2, isFunction, setValues } from "./../motion-dom/dom-host.js";
import { Lh } from "./part-315.js";
import { tc } from "./part-324.js";
import { mb } from "./part-334.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let _h = (vk, Ak, Bk, Ck, Dk, Ek, Fk) => {
  var Kk = [], Hk = vk.variantChildren;
  if (Hk) {
    var Gk, wk, xk, Mk, yk, Ik, zk, Lk = setValues(Hk), Jk = 0;
    for (; Jk < Lk.length; Jk = Jk + 1) {
      Gk = Lk[Jk];
      callMethod2(Gk, "notify", "AnimationStart", Ak);
      if (!isFunction(Ck)) wk = "number" == typeof Ck;
      else wk = false;
      if (wk) {
        xk = Bk + Ck;
        zk = xk;
      } else zk = Bk;
      Mk = zk + Lh(Hk, Gk, Ck, Dk, Ek);
      yk = {
        __proto__: null
      };
      for (Ik in Fk) yk[Ik] = Fk[Ik];
      yk.delay = Mk;
      Kk.push(uc(Gk, Ak, yk).then(/* @__PURE__ */ ((ll, ml) => (nl) => {
        callMethod2(ml, "notify", "AnimationComplete", ll);
        return true;
      })(Ak, Gk)));
    }
  }
  return Promise.all(Kk).then((ll) => true);
};
let uc = (xk, yk, zk) => {
  if (null == zk) {
    var Hk, Bk, Ik, Jk, Ck, Qk, Rk, Sk, Tk, _k, cl, dl, Uk, $k, al, Dk, bl, Kk, Vk, Wk, Lk, Mk, Xk, Nk, Ok, Ek, Fk, Yk, Gk, Zk, Pk, Ak = {
      __proto__: null
    };
  } else Ak = zk;
  Hk = null;
  if ("exit" == Ak.type) {
    Bk = xk.presenceContext;
    if (Bk) {
      Ik = Bk.custom;
      Nk = Ik;
    } else Nk = Hk;
    Ok = Nk;
  } else Ok = Hk;
  Jk = tc(xk, yk, Ok);
  Ck = {
    __proto__: null
  };
  if (null != Jk) {
    Qk = "object" == typeof Jk;
    Rk = Qk;
  } else Rk = false;
  if (Rk) {
    Sk = Jk.transition;
    if ("object" == typeof Sk) Yk = Sk;
    else {
      Tk = null;
      _k = xk.props;
      if (_k) {
        cl = "object" == typeof _k;
        dl = cl;
      } else dl = false;
      if (dl) {
        Uk = _k.transition;
        Zk = Uk;
      } else Zk = Tk;
      if (null != Zk) {
        $k = "object" == typeof Zk;
        al = $k;
      } else al = false;
      if (al) Fk = Zk;
      else Fk = Ck;
      Yk = Fk;
    }
    Gk = Yk;
  } else Gk = Ck;
  if (Ak.transitionOverride) {
    Dk = Ak.transitionOverride;
    Ek = Dk;
  } else Ek = Gk;
  var vk = () => Promise.resolve(true);
  if (null != Jk) {
    bl = Jk;
    vk = () => {
      var sm = mb(xk, bl, Ak), om = [], qm = 0;
      for (; qm < sm.length; qm = qm + 1) om.push(Promise.resolve(true));
      if (0 == om.length) return Promise.resolve(true);
      return Promise.all(om).then((Im) => true);
    };
  }
  var wk = (nm = 0) => Promise.resolve(true);
  Kk = xk.variantChildren;
  if (Kk) {
    Vk = !!Kk.size;
    Wk = Vk;
  } else Wk = false;
  if (Wk) wk = (rm = 0) => {
    var sm = Ek.delayChildren;
    if (!("number" == typeof sm)) {
      var wm, ym, tm, xm, zm, um = !isFunction(sm), vm = um;
    } else vm = false;
    if (vm) tm = 0;
    else tm = sm;
    wm = Ek.staggerChildren;
    if ("number" == typeof wm) xm = wm;
    else xm = 0;
    ym = Ek.staggerDirection;
    if ("number" == typeof ym) zm = ym;
    else zm = 1;
    return _h(xk, yk, rm, tm, xm, zm, Ak);
  };
  Lk = Ek.when;
  if (Lk) {
    if ("beforeChildren" == Lk) return vk().then((om) => wk(0));
    return wk(0).then((om) => vk());
  }
  Mk = Ak.delay;
  if ("number" == typeof Mk) Pk = Mk;
  else Pk = 0;
  Xk = vk();
  return Promise.all([Xk, wk(Pk)]).then((nm) => true);
};
export {
  _h,
  uc
};
