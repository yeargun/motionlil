import { callMethod2 } from "./../motion-dom/dom-host.js";
import { l } from "./part-0.js";
import { T } from "./part-203.js";
import { aa } from "./part-204.js";
import { jk } from "./part-3.js";
import { Xi } from "./part-438.js";
import { $m91$MotionValue } from "./part-444.js";
import { f } from "./part-455.js";
let dh = (vk, wk, xk, yk) => {
  f.render((Uk) => {
    callMethod2(vk, "setAttribute", "pathLength", "1");
  }, false, false);
  if ("pathOffset" == xk) return T(wk, xk, yk, () => Xi(vk, wk, xk), null, true);
  if (!aa(wk, jk)) {
    var zk = null, Ak = new $m91$MotionValue("1 1", zk);
    T(wk, jk, Ak, () => {
      var Xk = wk.latest.pathLength ?? null;
      if (!("number" == typeof Xk)) {
        var $k, Vk, cl, dl, al, Yk, Wk, bl, Zk = !("string" == typeof Xk), _k = Zk;
      } else _k = false;
      if (_k) Yk = 1;
      else Yk = Xk;
      $k = wk.latest.pathSpacing ?? null;
      if ("number" == typeof Yk) Wk = Yk;
      else {
        Vk = l(Yk);
        Wk = Vk;
      }
      if (!("number" == typeof $k)) {
        cl = !("string" == typeof $k);
        dl = cl;
      } else dl = false;
      if (dl) {
        al = 1 - Wk;
        bl = al;
      } else bl = $k;
      callMethod2(vk, "setAttribute", jk, `${Yk} ${bl}`);
    }, zk, true);
  }
  return T(wk, xk, yk, null, aa(wk, jk), true);
};
export {
  dh
};
