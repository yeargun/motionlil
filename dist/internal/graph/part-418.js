import { oa } from "./part-38.js";
import { bb } from "./part-62.js";
let Ue = (vk, xk, Ek, Hk) => {
  var Ik = Ek.x;
  if ("y" == xk) {
    var Mk, Nk, yk, zk, Ak, Fk, wk, Ck, Dk, Gk, Jk = Ek.y, Kk = Jk, Lk = "Height", Bk = "Top";
  } else {
    Kk = Ik;
    Lk = "Width";
    Bk = "Left";
  }
  Mk = Kk.current;
  Nk = Ek.time;
  yk = vk[`scroll${Bk}`];
  if ("number" == typeof yk) {
    zk = Math.abs(yk);
    Ck = zk;
  } else Ck = 0;
  Kk.current = Ck;
  Ak = vk[`scroll${Lk}`];
  Fk = vk[`client${Lk}`];
  if ("number" == typeof Ak) Dk = Ak;
  else Dk = 0;
  if ("number" == typeof Fk) Gk = Fk;
  else Gk = 0;
  Kk.scrollLength = Dk - Gk;
  Kk.offset = [0, Kk.scrollLength];
  Kk.progress = /* @__PURE__ */ oa(0, Kk.scrollLength, Kk.current);
  wk = Hk - Nk;
  if (wk > 50) Kk.velocity = 0;
  else Kk.velocity = bb(Kk.current - Mk, wk);
};
export {
  Ue
};
