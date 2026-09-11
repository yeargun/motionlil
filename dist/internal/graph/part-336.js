import { identity as asVisualElement, identity as asWithPromise } from "./../motion-dom/cast-host.js";
import { isFunction } from "./../motion-dom/dom-host.js";
import { $b } from "./part-149.js";
import { tc } from "./part-324.js";
import { mb } from "./part-334.js";
import { uc } from "./part-335.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let $h = (vk, Ck, Dk) => {
  if (null == Dk) {
    var Lk, Nk, wk, xk, Gk, Ek, Hk, yk, zk, Ak, Ik, Jk, Kk, Bk, Mk, Fk = {
      __proto__: null
    };
  } else Fk = Dk;
  Mk = asVisualElement(vk);
  $b(Mk, "AnimationStart", Ck);
  Promise.resolve(true);
  if (Array.isArray(Ck)) {
    for (Lk = [], Nk = Ck.length | 0, Ik = 0; Ik < Nk; Ik = Ik + 1) Lk.push(uc(vk, Ck[Ik], Fk));
    wk = Promise.all(Lk).then((Dl) => true);
    Ak = wk;
  } else {
    if ("string" == typeof Ck) {
      xk = uc(vk, Ck, Fk);
      zk = xk;
    } else {
      if (isFunction(Ck)) {
        Gk = tc(vk, Ck, Fk.custom);
        if (null != Gk) Jk = Gk;
        else Jk = Ck;
        Kk = Jk;
      } else Kk = Ck;
      for (Ek = mb(vk, Kk, Fk), Hk = [], Bk = 0; Bk < Ek.length; Bk = Bk + 1) Hk.push(asWithPromise(Ek[Bk]).getFinished());
      yk = Promise.all(Hk).then((Dl) => true);
      zk = yk;
    }
    Ak = zk;
  }
  return Ak.then((Fl) => {
    $b(Mk, "AnimationComplete", Ck);
    return true;
  });
};
export {
  $h
};
