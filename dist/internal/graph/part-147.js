import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { lg } from "./part-116.js";
import { mg } from "./part-119.js";
import { k } from "./part-120.js";
import { tg } from "./part-133.js";
import { ug } from "./part-134.js";
import { i } from "./part-495.js";
import { ad } from "./part-56.js";
import { Tf } from "./part-58.js";
let Ag = (vk, wk, xk) => {
  var yk = vk.latestValues[wk], Lk = vk.current;
  if (null == yk) {
    var zk, Ak, Mk, Nk, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Ok = null != Lk, Pk = Ok;
  } else Pk = false;
  if (Pk) {
    zk = ug(vk, vk.props, wk);
    if (null == zk) {
      Ak = tg(vk, Lk, wk);
      Jk = Ak;
    } else Jk = zk;
    Kk = Jk;
  } else Kk = yk;
  if (null != Kk) {
    if ("string" == typeof Kk) {
      if (ad(Kk)) Nk = true;
      else {
        Mk = Tf(Kk);
        Nk = Mk;
      }
      if (Nk) {
        Bk = parseFloat(Kk);
        Gk = Bk;
      } else {
        if (!mg(Kk)) {
          if (null != xk) {
            if (i.test(xk)) {
              Ck = lg(wk, `${xk}`);
              Dk = Ck;
            } else Dk = Kk;
            Ek = Dk;
          } else Ek = Kk;
          Fk = Ek;
        } else Fk = Kk;
        Gk = Fk;
      }
      Hk = Gk;
    } else Hk = Kk;
    if (k(Hk)) vk.baseTarget[wk] = asMotionValue(Hk).get();
    else vk.baseTarget[wk] = Hk;
    Ik = Hk;
  } else Ik = Kk;
  if (k(Ik)) return asMotionValue(Ik).get();
  return Ik;
};
export {
  Ag
};
