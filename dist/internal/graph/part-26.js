import { callMethod2 } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Uc = (vk, wk, xk) => {
  var zk = `${xk}`;
  if ("string" == typeof xk) {
    var Ak, Bk, Ck, yk = xk;
  } else {
    if ("number" == typeof xk) {
      Ak = `${xk}`;
      Ck = Ak;
    } else Ck = zk;
    yk = Ck;
  }
  Bk = vk.style;
  if (!Bk) return;
  if (wk.startsWith("--")) callMethod2(Bk, "setProperty", wk, yk);
  else Bk[wk] = yk;
};
export {
  Uc
};
