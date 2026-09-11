import { createResizeObserver, observeResize, unobserveResize } from "./../motion-dom/dom-host.js";
import { weakMapGet as weakMapGetHandlers } from "./../motion-dom/weak-host.js";
import { E } from "./part-205.js";
import { kh } from "./part-231.js";
import { lh } from "./part-232.js";
import { Bk } from "./part-531.js";
import { Va } from "./part-587.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let mh = (vk, xk) => {
  if (null == Wa) Wa = createResizeObserver(kh);
  var Ak, Bk2, Ck, yk = null, wk = E(vk, yk, yk), zk = 0;
  for (; zk < wk.length; ) {
    Ak = wk[zk];
    Bk2 = lh(Ak);
    if (Bk2.indexOf(xk) == -1) Bk2.push(xk);
    Ck = Wa;
    if (null != Ck) observeResize(Ck, Ak);
    zk += 1;
  }
  return () => {
    var cl, $k, dl, al, bl = 0;
    while (bl < wk.length) {
      cl = wk[bl];
      $k = weakMapGetHandlers(Va, cl);
      if ($k) {
        dl = $k.indexOf(xk);
        if (dl > -1) $k.splice(dl, 1);
        if (0 == $k.length) {
          al = Wa;
          if (null != al) unobserveResize(al, cl);
        }
      }
      bl += 1;
    }
  };
};
var Wa = Bk;
export {
  Wa,
  mh
};
