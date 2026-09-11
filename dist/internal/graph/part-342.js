import { callFn0, callMethod1, callMethod2, getComputedStyleField, getComputedStyleProperty, isFunction } from "./../motion-dom/dom-host.js";
import { k } from "./part-120.js";
import { Xb } from "./part-131.js";
import { qa } from "./part-173.js";
import { Mg } from "./part-175.js";
import { ve } from "./part-338.js";
import { we } from "./part-340.js";
import { xe } from "./part-341.js";
import { lk } from "./part-5.js";
import { z } from "./part-522.js";
import { Tb } from "./part-71.js";
function ci(vk, wk) {
  Xb(vk);
  var yk = null;
  vk.KeyframeResolverType = yk;
  vk.childSubscription = yk;
  vk.sortInstanceNodePositionHook = (Mk, Pk) => {
    var Nk = callMethod1(Mk, "compareDocumentPosition", Pk);
    if ("number" == typeof Nk) {
      var Ok = Nk;
    } else Ok = 0;
    if (0 != (Ok & 2)) return 1;
    return -1;
  };
  vk.getBaseTargetFromPropsHook = (Mk, Nk) => {
    var Ok = Mk.style;
    if ("object" == typeof Ok) return Ok[Nk];
    return null;
  };
  vk.removeValueFromRenderStateHook = (Mk, Nk) => {
    var Ok = Nk.vars, Pk = Nk.style;
    if ("object" == typeof Ok) Ok[Mk] = null;
    if ("object" == typeof Pk) Pk[Mk] = null;
  };
  vk.handleChildMotionValueHook = () => {
    var Nk = vk.childSubscription;
    if (Nk) {
      Nk();
      vk.childSubscription = null;
    }
    var Ok = vk.props.children;
    if (k(Ok)) {
      var Pk = callMethod2(Ok, "on", "change", (cl) => {
        var dl = vk.current;
        if (null != dl) {
          if (null != cl) {
            var al = `${cl}`, bl = al;
          } else bl = lk;
          dl.textContent = bl;
        }
      });
      if (isFunction(Pk)) vk.childSubscription = () => {
        callFn0(Pk);
      };
    }
  };
  vk.type = "html";
  if (wk != yk) vk.options = wk;
  else vk.options = {
    __proto__: null
  };
  vk.scrapeMotionValuesFromPropsHook = (Mk, Nk, Ok) => ve(Mk, Nk, Ok);
  vk.buildHook = () => {
    let Nk = vk.renderState, Ok = vk.latestValues;
    we(Nk, Ok, vk.props.transformTemplate);
  };
  vk.renderInstanceHook = (Mk, Nk, Ok, Pk) => {
    xe(Mk, Nk, Ok, Pk);
  };
  vk.readValueFromInstanceHook = (Tk, Wk) => {
    if (z.has(Wk)) {
      var Xk = vk.projection;
      if (null != Xk) {
        var Pk, Qk, Uk, Vk, Rk, Sk, Nk = !!Xk.isProjecting, Ok = Nk;
      } else Ok = false;
      if (Ok) return qa(Wk);
      return Mg(Tk, Wk);
    }
    if (Tb(Wk)) {
      Pk = getComputedStyleProperty(Tk, Wk);
      Sk = Pk;
    } else {
      Qk = getComputedStyleField(Tk, Wk);
      Sk = Qk;
    }
    if (!Sk) {
      Uk = !("number" == typeof Sk);
      Vk = Uk;
    } else Vk = false;
    if (Vk) Rk = 0;
    else Rk = Sk;
    if ("string" == typeof Rk) return Rk.trim();
    return Rk;
  };
}
export {
  ci
};
