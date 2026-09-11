import { callFn1, callFn2 } from "./../motion-dom/dom-host.js";
import { Sd } from "./part-236.js";
import { We } from "./part-423.js";
import { Xe } from "./part-428.js";
var Ti = /* @__PURE__ */ (function() {
  let a = (vk) => {
    if (null == vk) {
      var wk, yk, zk, xk = true;
    } else {
      wk = !("object" == typeof vk);
      xk = wk;
    }
    if (xk) return false;
    if (null != vk.target) zk = true;
    else {
      yk = null != vk.offset;
      zk = yk;
    }
    return zk;
  }, b = (vk) => {
    var wk = vk.length;
    if ("number" == typeof wk) return 2 == wk;
    return false;
  };
  return function(wk, xk) {
    if (b(wk)) {
      var yk, Ak, zk = true;
    } else {
      yk = a(xk);
      zk = yk;
    }
    if (zk) {
      var vk = "y";
      Ak = xk.axis;
      if ("string" == typeof Ak) vk = Ak;
      return We((Ok) => {
        var Pk = Ok.x;
        if ("y" == vk) {
          var Qk = Ok.y, Rk = Qk;
        } else Rk = Pk;
        callFn2(wk, Rk.progress, Ok);
      }, xk);
    }
    return Sd((Nk) => {
      callFn1(wk, Nk);
    }, Xe(xk));
  };
})();
export {
  Ti
};
