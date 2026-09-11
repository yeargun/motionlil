import { setForEach, weakSetAdd, weakSetDelete, weakSetHas } from "./../motion-dom/weak-host.js";
import { Kf } from "./part-20.js";
let L = (vk) => {
  let wk = [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), false, false, null, null, null];
  Kf(wk);
  let yk = (Jk) => {
    if (weakSetHas(wk[4], Jk)) {
      var Kk = wk[6];
      if (Kk) Kk.schedule(Jk, false, false);
      vk();
    }
    Jk(wk[5]);
  }, zk = (Kk) => {
    wk[5] = Kk;
    if (wk[2]) {
      wk[3] = true;
      return;
    }
    wk[2] = true;
    var Lk = wk[0];
    wk[0] = wk[1];
    wk[1] = Lk;
    setForEach(wk[0], yk);
    wk[0].clear();
    wk[2] = false;
    if (wk[3]) {
      wk[3] = false;
      var Jk = wk[6];
      if (Jk) Jk.process(Kk);
    }
  }, Ak = (Ik) => {
    wk[1].delete(Ik);
    weakSetDelete(wk[4], Ik);
  }, Bk = (Ik, Jk = false, Kk = false) => {
    if (Kk) {
      var Nk, Ok, Pk, Lk = wk[2], Mk = Lk;
    } else Mk = false;
    Nk = wk[1];
    if (Mk) {
      Ok = wk[0];
      Pk = Ok;
    } else Pk = Nk;
    if (Jk) weakSetAdd(wk[4], Ik);
    Pk.add(Ik);
    return Ik;
  }, xk = {
    schedule: null,
    cancel: null,
    process: null
  };
  xk.schedule = Bk;
  xk.cancel = Ak;
  xk.process = zk;
  wk[6] = xk;
  return xk;
};
export {
  L
};
