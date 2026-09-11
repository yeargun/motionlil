import { le } from "./part-296.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Hh = (vk, wk, xk, yk) => {
  if (yk) {
    var zk = yk.originX ?? null, Dk = yk.originY ?? null;
    if (null != zk) {
      if ("number" == typeof zk) {
        var Bk, Ck, Ek, Fk, Gk, Ak = zk;
      } else Ak = 0.5;
      Bk = Ak;
    } else Bk = 0.5;
    if (null != Dk) {
      if ("number" == typeof Dk) Ek = Dk;
      else Ek = 0.5;
      Fk = Ek;
    } else Fk = 0.5;
    Ck = Bk;
    Gk = Fk;
  } else {
    Ck = 0.5;
    Gk = 0.5;
  }
  le(vk.x, wk.x, xk.x, Ck);
  le(vk.y, wk.y, xk.y, Gk);
};
export {
  Hh
};
