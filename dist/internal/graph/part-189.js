import { Hd } from "./part-181.js";
import { Md } from "./part-188.js";
let Sg = (vk, xk, yk, zk, Ak) => {
  var Bk = null;
  if (Ak != Bk) {
    var Mk = Ak.current;
    if (null != Mk) {
      var Fk, Gk, Nk, Hk, Ik, Jk, Kk, Dk, Ek, wk, Ck = Bk, Lk = 0;
      while (Lk < vk.length) {
        Fk = vk[Lk];
        if ("string" == typeof Fk) {
          Gk = Fk.trim();
          Nk = Md(Gk, Mk, 1);
          if (null != Nk) {
            vk[Lk] = Nk;
            if (Lk == vk.length - 1) Ik = Gk;
            else Ik = Ck;
            Jk = Ik;
          } else Jk = Ck;
          Kk = Jk;
        } else Kk = Ck;
        Ck = Kk;
        Lk += 1;
      }
      Dk = Ck;
    } else Dk = Bk;
    Ek = Dk;
  } else Ek = Bk;
  Hk = {
    name: null,
    element: null,
    finalKeyframe: null,
    suspendedScrollY: null,
    unresolvedKeyframes: [],
    motionValue: null,
    onComplete: null,
    state: "",
    isAsync: false,
    needsMeasurement: false,
    readKeyframesHook: null,
    measureInitialStateHook: null,
    measureEndStateHook: null,
    removedTransforms: null,
    measuredOrigin: null
  };
  Hd(Hk, vk, xk, yk, zk, Ak, true);
  wk = null;
  Hk.removedTransforms = wk;
  Hk.measuredOrigin = wk;
  Hk.finalKeyframe = Ek;
  return Hk;
};
export {
  Sg
};
