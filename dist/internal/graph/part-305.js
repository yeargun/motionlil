import { Kh } from "./part-303.js";
import { rc } from "./part-304.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let pe = (vk, wk, xk, yk, Dk, Fk, Gk) => {
  var zk = rc(wk[yk] ?? null);
  if (null != zk) {
    var Ak, Ek, Bk, Ck, Hk = zk;
  } else Hk = 1;
  Ak = rc(wk[Dk] ?? null);
  if (null != Ak) Ek = Ak;
  else Ek = 0.5;
  Bk = rc(wk.scale ?? null);
  if (null != Bk) Ck = Bk;
  else Ck = 1;
  Kh(vk, wk[xk] ?? null, Hk, Ek, Ck, Fk, Gk);
};
export {
  pe
};
