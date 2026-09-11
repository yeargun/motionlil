import { callFn0, callMethod1, callMethod2, getComputedStyleValue, isFunction } from "./../motion-dom/dom-host.js";
import { C } from "./part-111.js";
import { nd } from "./part-115.js";
import { k } from "./part-120.js";
import { Xb } from "./part-131.js";
import { jb } from "./part-201.js";
import { fi } from "./part-345.js";
import { d } from "./part-348.js";
import { ji } from "./part-349.js";
import { ki } from "./part-350.js";
import { Zi } from "./part-440.js";
import { lk } from "./part-5.js";
import { z } from "./part-522.js";
import { Ib } from "./part-600.js";
function li(vk, wk) {
  Xb(vk);
  var yk = null;
  vk.KeyframeResolverType = yk;
  vk.childSubscription = yk;
  vk.sortInstanceNodePositionHook = (Rk, Uk) => {
    var Sk = callMethod1(Rk, "compareDocumentPosition", Uk);
    if ("number" == typeof Sk) {
      var Tk = Sk;
    } else Tk = 0;
    if (0 != (Tk & 2)) return 1;
    return -1;
  };
  vk.getBaseTargetFromPropsHook = (Rk, Sk) => {
    var Tk = Rk.style;
    if ("object" == typeof Tk) return Tk[Sk];
    return null;
  };
  vk.removeValueFromRenderStateHook = (Rk, Sk) => {
    var Tk = Sk.vars, Uk = Sk.style;
    if ("object" == typeof Tk) Tk[Rk] = null;
    if ("object" == typeof Uk) Uk[Rk] = null;
  };
  vk.handleChildMotionValueHook = () => {
    var Sk = vk.childSubscription;
    if (Sk) {
      Sk();
      vk.childSubscription = null;
    }
    var Tk = vk.props.children;
    if (k(Tk)) {
      var Uk = callMethod2(Tk, "on", "change", (hl) => {
        var il = vk.current;
        if (null != il) {
          if (null != hl) {
            var fl = `${hl}`, gl = fl;
          } else gl = lk;
          il.textContent = gl;
        }
      });
      if (isFunction(Uk)) vk.childSubscription = () => {
        callFn0(Uk);
      };
    }
  };
  var zk = {
    __proto__: null
  };
  if (wk != yk) {
    var Ak = wk;
  } else Ak = zk;
  vk.type = "svg";
  vk.options = Ak;
  vk.isSVGTagFlag = false;
  vk.scrapeMotionValuesFromPropsHook = (Rk, Sk, Tk) => fi(Rk, Sk, Tk);
  vk.buildHook = () => Zi(vk);
  vk.renderInstanceHook = (Rk, Sk, Tk, Uk) => {
    ji(Rk, Sk, Tk, Uk);
  };
  vk.measureViewportBoxHook = () => C();
  vk.getBaseTargetFromPropsHook = (Rk, Sk) => Rk[Sk];
  vk.readValueFromInstanceHook = (Rk, Tk) => {
    if (z.has(Tk)) {
      var Sk = nd(Tk);
      if (Sk) {
        var Uk = Sk.default;
        if (null != Uk) return Uk;
      }
      return 0;
    }
    if (Ib.indexOf(Tk) != -1) {
      var Xk = getComputedStyleValue(Rk)[Tk];
      if ("string" == typeof Xk) {
        var Vk, Wk, Yk = !!Xk, Zk = Yk;
      } else Zk = false;
      if (Zk) return Xk.trim();
    }
    if (!d.has(Tk)) {
      Vk = jb(Tk);
      Wk = Vk;
    } else Wk = Tk;
    return callMethod1(Rk, "getAttribute", Wk);
  };
  vk.preMountHook = (Sk) => {
    vk.isSVGTagFlag = ki(`${Sk.tagName}`);
  };
}
export {
  li
};
