import { callMethod1, callMethod2 } from "./../motion-dom/dom-host.js";
import { jb } from "./part-201.js";
import { T } from "./part-203.js";
import { ah } from "./part-207.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ec = (vk, wk, xk, yk) => {
  var Ek = ah(vk, xk);
  if (!Ek) {
    if (xk.startsWith("data")) {
      var zk, Bk, Fk, Gk, Ck, Dk, Hk, Ak = true;
    } else {
      zk = xk.startsWith("aria");
      Ak = zk;
    }
    if (Ak) {
      Bk = jb(xk);
      Ck = Bk;
    } else Ck = xk;
    Dk = Ck;
  } else Dk = xk;
  if (Ek) {
    Fk = () => {
      vk[Dk] = wk.latest[xk] ?? null;
    };
    Hk = Fk;
  } else {
    Gk = () => {
      var dl = wk.latest[xk] ?? null;
      if (!("number" == typeof dl)) {
        var Wk, Xk, Yk, Zk, _k, $k, al, bl, Uk = !("string" == typeof dl), Vk = Uk;
      } else Vk = false;
      if (Vk) {
        Wk = !("boolean" == typeof dl);
        Xk = Wk;
      } else Xk = false;
      if (Xk) {
        Yk = !Array.isArray(dl);
        Zk = Yk;
      } else Zk = false;
      if (Zk) {
        if ("object" == typeof dl) {
          _k = !!dl;
          $k = _k;
        } else $k = false;
        al = !$k;
        bl = al;
      } else bl = false;
      if (bl) callMethod1(vk, "removeAttribute", Dk);
      else callMethod2(vk, "setAttribute", Dk, `${dl}`);
    };
    Hk = Gk;
  }
  return T(wk, xk, yk, Hk, null, true);
};
export {
  ec
};
