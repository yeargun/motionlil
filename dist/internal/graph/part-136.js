import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { callMethod1, mapKeys } from "./../motion-dom/dom-host.js";
import { weakMapSet } from "./../motion-dom/weak-host.js";
import { qg } from "./part-126.js";
import { wg } from "./part-137.js";
import { rd } from "./part-138.js";
import { xg } from "./part-141.js";
import { yg } from "./part-143.js";
import { I } from "./part-518.js";
import { Ab } from "./part-550.js";
import { Cc } from "./part-551.js";
let Yb = (vk, wk) => {
  var yk = vk.preMountHook;
  if (yk) yk(wk);
  if (vk.hasBeenMounted) {
    var Ik = vk.initialValues;
    for (var zk in Ik) {
      var Mk = vk.values.get(zk);
      if (Mk !== void 0) {
        var Nk = asMotionValue(Mk);
        Nk.jump(vk.initialValues[zk], true);
      }
      var Ok = vk.latestValues;
      Ok[zk] = vk.initialValues[zk];
    }
  }
  vk.current = wk;
  vk.isMounted = true;
  weakMapSet(I, wk, vk);
  var Ak = vk.projection;
  if (null != Ak) {
    var xk, Bk, Ck, Dk, Ek, Lk, Pk, Qk, Fk, Gk, Hk, Jk = !Ak.instance, Kk = Jk;
  } else Kk = false;
  if (Kk) callMethod1(Ak, "mount", wk);
  xk = vk.parent;
  if (xk) {
    Bk = vk.isVariantNode;
    Ck = Bk;
  } else Ck = false;
  if (Ck) {
    Dk = !vk.isControllingVariants;
    Ek = Dk;
  } else Ek = false;
  if (Ek) vk.removeFromVariantTree = yg(xk, vk);
  for (Lk = mapKeys(vk.values), Hk = 0; Hk < Lk.length; Hk = Hk + 1) {
    Pk = `${Lk[Hk]}`;
    Qk = vk.values.get(Pk);
    if (Qk !== void 0) rd(vk, Pk, Qk);
  }
  Fk = vk.reducedMotionConfig;
  if ("never" == Fk) vk.shouldReduceMotion = false;
  else {
    if ("always" == Fk) vk.shouldReduceMotion = true;
    else {
      if (!Cc.current) qg();
      vk.shouldReduceMotion = Ab.current;
    }
  }
  Gk = vk.skipAnimationsConfig;
  if (null != Gk) vk.shouldSkipAnimations = Gk;
  else vk.shouldSkipAnimations = false;
  if (xk) wg(xk, vk);
  xg(vk, vk.props, vk.presenceContext);
  vk.hasBeenMounted = true;
};
export {
  Yb
};
