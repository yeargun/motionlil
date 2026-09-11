import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let hb = (vk, Ek, Hk, Ik = 1) => {
  var Jk = vk.filter((bl) => !(null === bl)), Kk = Ek.repeat, wk = Ek.repeatType;
  if (wk === void 0) {
    var xk, yk, zk, Ak, Bk, Fk, Ck, Gk, Dk = "loop";
  } else Dk = wk;
  if (Ik < 0) Bk = true;
  else {
    if (Kk) {
      xk = !("loop" === Dk);
      yk = xk;
    } else yk = false;
    if (yk) {
      zk = 1 === Kk % 2;
      Ak = zk;
    } else Ak = false;
    Bk = Ak;
  }
  Fk = Jk.length - 1;
  if (Bk) Gk = 0;
  else Gk = Fk;
  if (0 == Gk) Ck = true;
  else Ck = Hk === void 0;
  if (Ck) return Jk[Gk];
  return Hk;
};
export {
  hb
};
