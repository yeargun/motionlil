import { arrayFromNullable, documentQuerySelectorAll, isEventTarget, querySelectorAll } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let E = (vk, wk, xk) => {
  if (null == vk) return [];
  if (isEventTarget(vk)) return [vk];
  else {
    if ("string" == typeof vk) {
      var yk = null;
      if (xk) {
        var Ak, Bk, Dk, zk = xk.entries.get(vk) ?? null, Ck = zk;
      } else Ck = yk;
      if (Ck) return Ck;
      if (wk) {
        Ak = querySelectorAll(wk.current, vk);
        Dk = Ak;
      } else {
        Bk = documentQuerySelectorAll(vk);
        Dk = Bk;
      }
      if (xk) xk.entries.set(vk, Dk);
      return Dk;
    }
  }
  return arrayFromNullable(vk);
};
export {
  E
};
