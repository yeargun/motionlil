import { je } from "./part-288.js";
import { ke } from "./part-289.js";
import { ta } from "./part-290.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let qc = (vk, wk, xk) => {
  if (xk) {
    var yk, Ck, zk, Ak, Ek, Gk, Ik, Dk, Fk, Hk, Bk = xk;
  } else Bk = vk;
  yk = ta(wk.originX ?? null);
  if (null != yk) Ck = yk;
  else Ck = 0.5;
  zk = ta(wk.originY ?? null);
  if (null != zk) Ak = zk;
  else Ak = 0.5;
  Ek = vk.x;
  Gk = ke(wk.x ?? null, Bk.x);
  Ik = ta(wk.scaleX ?? null);
  je(Ek, Gk, Ik, ta(wk.scale ?? null), Ck);
  Dk = vk.y;
  Fk = ke(wk.y ?? null, Bk.y);
  Hk = ta(wk.scaleY ?? null);
  je(Dk, Fk, Hk, ta(wk.scale ?? null), Ak);
};
export {
  qc
};
