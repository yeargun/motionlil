import { lk } from "./part-5.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let _c = (vk, yk, Bk = 10) => {
  var zk, wk, Ck, xk, Ek, Gk, Fk = Math.max(Math.round(yk / Bk), 2) | 0, Ak = lk, Dk = 0;
  for (; Dk < Fk; ) {
    zk = `${Ak}${Math.round(vk(Dk / (Fk - 1)) * 1e4) / 1e4}, `;
    Ak = zk;
    Dk += 1;
  }
  wk = Ak.length - 2;
  if (wk < 0) xk = 0;
  else xk = wk;
  for (Ek = lk, Gk = 0; Gk < xk; ) {
    Ck = `${Ek}${Ak.charAt(Gk)}`;
    Ek = Ck;
    Gk += 1;
  }
  return `linear(${Ek})`;
};
export {
  _c
};
