import { identity as asMotionValue, identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { D } from "./part-113.js";
import { _b } from "./part-144.js";
import { Ma } from "./part-146.js";
let Sh = (vk, yk, zk) => {
  var xk = asVisualElement(vk);
  if (xk.values.get(yk) !== void 0) {
    var Ak = null, wk = Ma(xk, yk, Ak, false);
    if (wk != Ak) asMotionValue(wk).set(zk);
  } else _b(xk, yk, D(zk, null));
};
export {
  Sh
};
