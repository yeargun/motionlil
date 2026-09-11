import { callMethod2 } from "./../motion-dom/dom-host.js";
import { jb } from "./part-201.js";
import { xe } from "./part-341.js";
import { d } from "./part-348.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ji = (vk, wk, yk, Ck) => {
  xe(vk, wk, yk, Ck);
  var Dk = wk.attrs;
  if (!("object" == typeof Dk)) return;
  for (var zk in Dk) {
    var xk = Dk[zk];
    if (!("number" == typeof xk)) {
      var Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ak, Bk, Ek = !("string" == typeof xk), Fk = Ek;
    } else Fk = false;
    if (Fk) {
      Gk = !("boolean" == typeof xk);
      Hk = Gk;
    } else Hk = false;
    if (Hk) {
      Ik = !Array.isArray(xk);
      Jk = Ik;
    } else Jk = false;
    if (Jk) {
      if ("object" == typeof xk) {
        Kk = !!xk;
        Lk = Kk;
      } else Lk = false;
      Mk = !Lk;
      Nk = Mk;
    } else Nk = false;
    if (Nk) continue;
    if (!d.has(zk)) {
      Ak = jb(zk);
      Bk = Ak;
    } else Bk = zk;
    if ("string" == typeof xk) callMethod2(vk, "setAttribute", Bk, xk);
    else callMethod2(vk, "setAttribute", Bk, `${xk}`);
  }
};
export {
  ji
};
