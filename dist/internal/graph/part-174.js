import { R } from "./part-169.js";
import { ib } from "./part-170.js";
import { Bd } from "./part-171.js";
import { Lg } from "./part-172.js";
import { qa } from "./part-173.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let cc = (vk, Ak) => {
  if (null == vk) return qa(Ak);
  var Bk = vk;
  if ("none" == Bk) return qa(Ak);
  var wk = Bd(Bk, "matrix3d("), Jk = null, Kk = wk != Jk;
  if (wk == Jk) {
    var yk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, xk = Bd(Bk, "matrix("), zk = xk;
  } else zk = wk;
  if (null == zk) return qa(Ak);
  yk = Lg(zk);
  if (Kk) {
    if ("x" == Ak) Ck = true;
    else Ck = "translateX" == Ak;
    if (Ck) return yk[12];
    if ("y" == Ak) Dk = true;
    else Dk = "translateY" == Ak;
    if (Dk) return yk[13];
    if ("z" == Ak) Ek = true;
    else Ek = "translateZ" == Ak;
    if (Ek) return yk[14];
    if ("scaleX" == Ak) return Math.sqrt(yk[0] * yk[0] + yk[1] * yk[1]);
    if ("scaleY" == Ak) return Math.sqrt(yk[4] * yk[4] + yk[5] * yk[5]);
    if ("scale" == Ak) return (Math.sqrt(yk[0] * yk[0] + yk[1] * yk[1]) + Math.sqrt(yk[4] * yk[4] + yk[5] * yk[5])) / 2;
    if ("rotateX" == Ak) return ib(R(Math.atan2(yk[6], yk[5])));
    if ("rotateY" == Ak) return ib(R(Math.atan2(0 - yk[2], yk[0])));
    if ("rotateZ" == Ak) Fk = true;
    else Fk = "rotate" == Ak;
    if (Fk) return ib(R(Math.atan2(yk[1], yk[0])));
    if ("skewX" == Ak) return R(Math.atan(yk[4]));
    if ("skewY" == Ak) return R(Math.atan(yk[1]));
    if ("skew" == Ak) return (Math.abs(yk[1]) + Math.abs(yk[4])) / 2;
    return qa(Ak);
  }
  if ("x" == Ak) Gk = true;
  else Gk = "translateX" == Ak;
  if (Gk) return yk[4];
  if ("y" == Ak) Hk = true;
  else Hk = "translateY" == Ak;
  if (Hk) return yk[5];
  if ("scaleX" == Ak) return yk[0];
  if ("scaleY" == Ak) return yk[3];
  if ("scale" == Ak) return (Math.abs(yk[0]) + Math.abs(yk[3])) / 2;
  if ("rotate" == Ak) Ik = true;
  else Ik = "rotateZ" == Ak;
  if (Ik) return ib(R(Math.atan2(yk[1], yk[0])));
  if ("skewX" == Ak) return R(Math.atan(yk[1]));
  if ("skewY" == Ak) return R(Math.atan(yk[2]));
  if ("skew" == Ak) return (Math.abs(yk[1]) + Math.abs(yk[2])) / 2;
  return qa(Ak);
};
export {
  cc
};
