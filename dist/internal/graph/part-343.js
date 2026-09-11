import { C } from "./part-111.js";
import { Xb } from "./part-131.js";
function di(vk, wk) {
  Xb(vk);
  var yk = {
    __proto__: null
  };
  if (null != wk) {
    var zk = wk;
  } else zk = yk;
  vk.type = "object";
  vk.options = zk;
  vk.renderState = {
    __proto__: null,
    output: {
      __proto__: null
    }
  };
  vk.readValueFromInstanceHook = (Pk, Sk) => {
    var Tk = Pk[Sk];
    if ("string" == typeof Tk) {
      var Qk, Rk = true;
    } else {
      Qk = "number" == typeof Tk;
      Rk = Qk;
    }
    if (Rk) return Tk;
    return null;
  };
  vk.getBaseTargetFromPropsHook = (Pk, Qk) => null;
  vk.removeValueFromRenderStateHook = (Pk, Qk) => {
    var Rk = Qk.output;
    if ("object" == typeof Rk) Rk[Pk] = null;
  };
  vk.measureViewportBoxHook = () => C();
  vk.buildHook = () => {
    var Rk = vk.renderState.output;
    if ("object" == typeof Rk) {
      var Sk = vk.latestValues;
      for (var Qk in Sk) Rk[Qk] = vk.latestValues[Qk];
    }
  };
  vk.renderInstanceHook = (Pk, Qk, Sk, Uk) => {
    var Tk = Qk.output;
    if ("object" == typeof Tk) for (var Rk in Tk) Pk[Rk] = Tk[Rk];
  };
  vk.sortInstanceNodePositionHook = (Pk, Qk) => 0;
}
export {
  di
};
