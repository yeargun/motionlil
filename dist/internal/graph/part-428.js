import { callFn0, callMethod0, callMethod1, constructConfigured, hasWindow, isFunction, windowGet } from "./../motion-dom/dom-host.js";
import { rk } from "./part-11.js";
import { Sd } from "./part-236.js";
import { We } from "./part-423.js";
import { qb } from "./part-427.js";
import { Gc } from "./part-560.js";
import { pf } from "./part-561.js";
import { Oc } from "./part-624.js";
import { Pc } from "./part-625.js";
import { Qc } from "./part-626.js";
import { Kb } from "./part-627.js";
import { Sc } from "./part-634.js";
var Ri;
var Si;
(function() {
  let a = (vk) => {
    if (!hasWindow()) return false;
    if (null != vk) return pf();
    return Gc();
  }, b = (vk) => {
    if (null == vk) {
      var wk = {
        rangeStart: "",
        rangeEnd: ""
      };
      wk.rangeStart = "contain 0%";
      wk.rangeEnd = "contain 100%";
      return wk;
    }
    if (qb(vk, Oc)) {
      var xk = {
        rangeStart: "",
        rangeEnd: ""
      };
      xk.rangeStart = "entry 0%";
      xk.rangeEnd = "entry 100%";
      return xk;
    }
    if (qb(vk, Pc)) {
      var yk = {
        rangeStart: "",
        rangeEnd: ""
      };
      yk.rangeStart = "exit 0%";
      yk.rangeEnd = "exit 100%";
      return yk;
    }
    if (qb(vk, Qc)) {
      var zk = {
        rangeStart: "",
        rangeEnd: ""
      };
      zk.rangeStart = "cover 0%";
      zk.rangeEnd = "cover 100%";
      return zk;
    }
    if (qb(vk, Kb)) {
      var Ak = {
        rangeStart: "",
        rangeEnd: ""
      };
      Ak.rangeStart = "contain 0%";
      Ak.rangeEnd = "contain 100%";
      return Ak;
    }
    return null;
  }, c = (vk) => {
    var Ak = {
      __proto__: null
    };
    Ak.value = 0;
    if ("object" == typeof vk) {
      var xk = vk.axis;
      if ("string" == typeof xk) {
        var Bk, wk, zk, yk = xk;
      } else yk = "y";
      zk = yk;
    } else zk = "y";
    Bk = We((Pk) => {
      var Qk = Pk.x.progress;
      if ("y" == zk) {
        var Rk = Pk.y.progress, Sk = Rk;
      } else Sk = Qk;
      Ak.value = Sk * rk;
    }, vk);
    wk = {
      __proto__: null
    };
    wk.currentTime = Ak;
    wk.cancel = Bk;
    return wk;
  };
  Ri = function(vk, yk, zk, Ak) {
    var Bk = vk.target;
    if (Bk) {
      var wk, xk, Ck = a(Bk), Dk = Ck;
    } else Dk = false;
    if (Dk) {
      if (b(Ak)) return wk = {
        __proto__: null
      }, wk.subject = Bk, wk.axis = zk, constructConfigured(windowGet("ViewTimeline"), wk);
      return c(vk);
    }
    if (a()) return xk = {
      __proto__: null
    }, xk.source = yk, xk.axis = zk, constructConfigured(windowGet("ScrollTimeline"), xk);
    return c(vk);
  };
  Si = function(vk, xk) {
    var Hk = Xe(xk), zk = null, Ck = xk.target;
    if (Ck) {
      var Dk, Ek, Fk, yk, wk, Gk, Ak = b(xk.offset), Bk = Ak;
    } else Bk = zk;
    if (Ck) {
      if (a(Ck)) {
        Dk = !!Bk;
        Ek = Dk;
      } else Ek = false;
      Gk = Ek;
    } else {
      Fk = a();
      Gk = Fk;
    }
    yk = {
      __proto__: null
    };
    if (Gk) {
      yk.timeline = Hk;
      if (Bk) {
        yk.rangeStart = Bk.rangeStart;
        yk.rangeEnd = Bk.rangeEnd;
      }
    } else yk.timeline = null;
    yk.observe = (il) => {
      if (isFunction(il.pause)) callMethod0(il, "pause");
      return Sd((rl) => {
        var tl = il.iterationDuration;
        if ("number" == typeof tl) {
          var sl, ul = tl;
        } else ul = 0;
        sl = ul * rl;
        if (isFunction(il.setPlaybackTime)) callMethod1(il, "setPlaybackTime", sl);
        else il.time = sl;
      }, Hk);
    };
    if (isFunction(vk.attachTimeline)) {
      wk = callMethod1(vk, "attachTimeline", yk);
      if (isFunction(wk)) return () => {
        callFn0(wk);
      };
    }
    return () => {
    };
  };
})();
var Xe = /* @__PURE__ */ (function() {
  let d = (vk) => {
    var wk = Sc.get(vk);
    if (wk) return wk;
    var xk = {
      inner: /* @__PURE__ */ new Map()
    };
    xk.inner = /* @__PURE__ */ new Map();
    Sc.set(vk, xk);
    return xk;
  }, e = (vk, wk) => {
    var xk = vk.inner.get(wk);
    if (xk) return xk;
    var yk = {
      inner: /* @__PURE__ */ new Map()
    };
    yk.inner = /* @__PURE__ */ new Map();
    vk.inner.set(wk, yk);
    return yk;
  };
  return function(vk) {
    var Ok = vk.container, xk = vk.source;
    if (xk) {
      var Mk, Rk, yk, Fk, Gk, Hk, Ik, Jk, Kk, Qk, Lk, zk, Ak, Bk, Ck, Sk, wk, Nk, Dk, Ek, Pk = xk;
    } else Pk = Ok;
    Mk = vk.axis;
    if ("string" == typeof Mk) Nk = Mk;
    else Nk = "y";
    Rk = d(Pk);
    yk = vk.target;
    if (!yk) {
      Fk = !("number" == typeof yk);
      Gk = Fk;
    } else Gk = false;
    if (Gk) {
      Hk = !("string" == typeof yk);
      Ik = Hk;
    } else Ik = false;
    if (Ik) {
      Jk = !("boolean" == typeof yk);
      Kk = Jk;
    } else Kk = false;
    if (Kk) Dk = "self";
    else Dk = yk;
    Qk = e(Rk, Dk).inner;
    Lk = vk.offset;
    if (Lk) {
      zk = Array.isArray(Lk);
      Ak = zk;
    } else Ak = false;
    if (Ak) {
      Bk = `${Nk}${Lk}`;
      Ek = Bk;
    } else {
      Ck = `${Nk}`;
      Ek = Ck;
    }
    Sk = Qk.get(Ek);
    if (Sk !== void 0) return Sk;
    wk = Ri(vk, Pk, Nk, Lk);
    Qk.set(Ek, wk);
    return wk;
  };
})();
export {
  Ri,
  Si,
  Xe
};
