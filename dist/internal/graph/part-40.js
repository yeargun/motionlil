import { Fa } from "./part-18.js";
import { g } from "./part-39.js";
let Of = (wk, xk) => {
  var Ek, Fk, Ak, Bk, Ck, zk = [], Dk = wk.length - 1, yk = 0;
  for (; yk < Dk; yk = yk + 1) {
    Ek = wk[yk];
    Fk = wk[yk + 1];
    Ak = /* @__PURE__ */ ((al, bl) => (cl) => /* @__PURE__ */ g(al, bl, cl))(Ek, Fk);
    if (xk) {
      var vk = Fa;
      if (yk < xk.length) vk = xk[yk];
      Bk = /* @__PURE__ */ ((al) => (cl) => al(vk(cl)))(Ak);
      Ck = Bk;
    } else Ck = Ak;
    zk.push(Ck);
  }
  return zk;
};
export {
  Of
};
