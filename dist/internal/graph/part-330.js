import { identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { callFn1, constructConfigured, isFunction } from "./../motion-dom/dom-host.js";
import { _b } from "./part-144.js";
import { Ma } from "./part-146.js";
import { Vh } from "./part-329.js";
import { da } from "./part-453.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Wh = (vk, zk) => {
  var Fk = asVisualElement(vk), Ak = null, wk = Ma(Fk, "willChange", Ak, false);
  if (wk != Ak) {
    var Dk, xk, yk, Ek, Bk = Vh(wk), Ck = Bk;
  } else Ck = false;
  if (Ck) {
    Dk = wk.add;
    if (isFunction(Dk)) callFn1(Dk, zk);
    return;
  }
  if (null == wk) {
    xk = da.WillChange;
    if (null != xk) {
      yk = constructConfigured(xk, "auto");
      _b(Fk, "willChange", yk);
      Ek = yk.add;
      if (isFunction(Ek)) callFn1(Ek, zk);
    }
  }
};
export {
  Wh
};
