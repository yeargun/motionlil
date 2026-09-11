import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { callMethod0, callMethod2, isFunction, windowGet } from "./../motion-dom/dom-host.js";
import { sd } from "./part-140.js";
import { f } from "./part-455.js";
import { z } from "./part-522.js";
let rd = (wk, xk, yk) => {
  var Bk = wk.valueSubscriptions.get(xk);
  if (Bk) Bk();
  var Ck = z.has(xk), Dk = wk.onBindTransformHook;
  if (Ck) {
    var Ek, zk, Ak, Fk = !!Dk, Gk = Fk;
  } else Gk = false;
  if (Gk) Dk();
  Ek = asMotionValue(yk).on("change", (ol, pl, ql) => {
    wk.latestValues[xk] = ol;
    if (wk.props.onUpdate) f.preRender(wk.notifyUpdateCallback, false, false);
    var rl = wk.projection;
    if (Ck) {
      var kl = null != rl, ll = kl;
    } else ll = false;
    if (ll) rl.isTransformDirty = true;
    sd(wk);
  });
  var vk = null;
  zk = windowGet("MotionCheckAppearSync");
  if (isFunction(zk)) {
    Ak = callMethod2(zk, "call", null, wk);
    if (isFunction(Ak)) vk = () => {
      callMethod0(Ak, "call");
    };
  }
  wk.valueSubscriptions.set(xk, () => {
    Ek();
    if (vk) vk();
  });
};
export {
  rd
};
