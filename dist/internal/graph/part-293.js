import { tk } from "./part-13.js";
import { uk } from "./part-14.js";
import { oc } from "./part-282.js";
import { ie } from "./part-286.js";
import { sa } from "./part-287.js";
import { qc } from "./part-291.js";
import { Fh } from "./part-292.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Gh = (vk, Ak, Bk, Ck = false) => {
  var Rk = Bk.length;
  if (0 == Rk) return;
  Ak.x = 1;
  Ak.y = 1;
  var Dk, Ek, Hk, Ik, Jk, Kk, Lk, Mk, Sk, Nk, Tk, Uk, Ok, Pk, Fk, Gk, wk, xk, yk, zk, Qk = 0;
  for (; Qk < Rk; Qk = Qk + 1) {
    Dk = Bk[Qk];
    Ek = Dk.projectionDelta;
    if (Fh(Dk.options)) continue;
    if (Ck) {
      Hk = null != Dk.options;
      Ik = Hk;
    } else Ik = false;
    if (Ik) {
      Jk = null != Dk.scroll;
      Kk = Jk;
    } else Kk = false;
    if (Kk) {
      Lk = !Dk.isRoot;
      Mk = Lk;
    } else Mk = false;
    if (Mk) {
      Sk = Dk.scroll;
      if (Dk.options.layoutScroll) {
        Nk = Sk.offset;
        if (Nk) {
          Tk = Nk.x;
          Uk = Nk.y;
          if ("number" == typeof Tk) {
            Ok = vk.x;
            sa(Ok, 0 - Tk);
          }
          if ("number" == typeof Uk) {
            Pk = vk.y;
            sa(Pk, 0 - Uk);
          }
        }
      }
    }
    if (Ek) {
      Ak.x = Ak.x * Ek.x.scale;
      Ak.y = Ak.y * Ek.y.scale;
      ie(vk, Ek);
    }
    if (Ck) {
      Fk = oc(Dk.latestValues);
      Gk = Fk;
    } else Gk = false;
    if (Gk) qc(vk, Dk.latestValues, Dk.layoutBox);
  }
  if (Ak.x < tk) {
    wk = Ak.x > uk;
    xk = wk;
  } else xk = false;
  if (xk) Ak.x = 1;
  if (Ak.y < tk) {
    yk = Ak.y > uk;
    zk = yk;
  } else zk = false;
  if (zk) Ak.y = 1;
};
export {
  Gh
};
