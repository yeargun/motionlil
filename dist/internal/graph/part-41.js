import { u } from "./part-17.js";
import { oa } from "./part-38.js";
import { Of } from "./part-40.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Ob = (xk, Ek, Hk) => {
  var Kk = null;
  if (Hk) {
    var Ik, yk, Ok, Pk, zk, Fk, Qk, Ak, Bk, Rk, Ck, Mk, Gk, Uk, Jk, Sk, Dk, Tk = Hk.clampValues, Lk = Hk.ease, Vk = Tk, Nk = Lk;
  } else {
    Vk = true;
    Nk = Kk;
  }
  Ik = xk.length;
  if (1 == Ik) return yk = Ek[0], (bm) => yk;
  if (2 == Ik) {
    Ok = Ek[0] == Ek[1];
    Pk = Ok;
  } else Pk = false;
  if (Pk) return zk = Ek[1], (bm) => zk;
  var vk = [], wk = [];
  for (Sk = 0; Sk < xk.length; Sk = Sk + 1) {
    vk.push(xk[Sk]);
    wk.push(Ek[Sk]);
  }
  if (vk[0] > vk[Ik - 1]) {
    Fk = [];
    Qk = [];
    Ak = Ik - 1;
    Dk = Ak;
    while (Dk >= 0) {
      Fk.push(vk[Dk]);
      Qk.push(wk[Dk]);
      Bk = Dk - 1;
      Dk = Bk;
    }
    vk = Fk;
    wk = Qk;
  }
  Rk = vk[0] == vk[1];
  Ck = Of(wk, Nk);
  Mk = Ck.length;
  Gk = (jm) => {
    if (Rk) {
      var cm, dm, fm = jm < vk[0], gm = fm;
    } else gm = false;
    if (gm) return wk[0];
    if (Mk > 1) {
      cm = 0;
      while (cm < vk.length - 2) {
        if (jm < vk[cm + 1]) break;
        cm += 1;
      }
      dm = cm;
    } else dm = 0;
    return Ck[dm](/* @__PURE__ */ oa(vk[dm], vk[dm + 1], jm));
  };
  if (Vk) return Uk = vk[0], Jk = vk[Ik - 1], (dm) => Gk(/* @__PURE__ */ u(Uk, Jk, dm));
  return Gk;
};
export {
  Ob
};
