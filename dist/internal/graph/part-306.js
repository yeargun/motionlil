import { pe } from "./part-305.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Nj = (vk, wk, xk, Ak) => {
  var Bk = null;
  if (xk) {
    var Ck, yk, Dk, zk, Ek = xk.x, Gk = xk.y, Fk = Ek, Hk = Gk;
  } else {
    Fk = Bk;
    Hk = Bk;
  }
  if (Ak) {
    Ck = Ak.x;
    yk = Ak.y;
    Dk = Ck;
    zk = yk;
  } else {
    Dk = Bk;
    zk = Bk;
  }
  pe(vk.x, wk, "x", "scaleX", "originX", Fk, Dk);
  pe(vk.y, wk, "y", "scaleY", "originY", Hk, zk);
};
export {
  Nj
};
