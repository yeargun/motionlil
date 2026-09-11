import { callMethod2 } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let xe = (vk, yk, Ak, Ck) => {
  var Nk = vk.style, Ok = yk.style;
  if ("object" == typeof Ok) {
    for (var Pk in Ok) {
      var wk = Ok[Pk];
      if (!("number" == typeof wk)) {
        var Sk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, Bk, zk, xk, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Qk = !("string" == typeof wk), Rk = Qk;
      } else Rk = false;
      if (Rk) {
        Sk = !("boolean" == typeof wk);
        Tk = Sk;
      } else Tk = false;
      if (Tk) {
        Uk = !Array.isArray(wk);
        Vk = Uk;
      } else Vk = false;
      if (Vk) {
        if ("object" == typeof wk) {
          Wk = !!wk;
          Xk = Wk;
        } else Xk = false;
        Yk = !Xk;
        Zk = Yk;
      } else Zk = false;
      if (!Zk) {
        if ("string" == typeof wk) Nk[Pk] = wk;
        else Nk[Pk] = `${wk}`;
      }
    }
  }
  if (null != Ck) callMethod2(Ck, "applyProjectionStyles", Nk, Ak);
  Bk = yk.vars;
  if ("object" == typeof Bk) {
    for (zk in Bk) {
      xk = Bk[zk];
      if (!("number" == typeof xk)) {
        Dk = !("string" == typeof xk);
        Ek = Dk;
      } else Ek = false;
      if (Ek) {
        Fk = !("boolean" == typeof xk);
        Gk = Fk;
      } else Gk = false;
      if (Gk) {
        Hk = !Array.isArray(xk);
        Ik = Hk;
      } else Ik = false;
      if (Ik) {
        if ("object" == typeof xk) {
          Jk = !!xk;
          Kk = Jk;
        } else Kk = false;
        Lk = !Kk;
        Mk = Lk;
      } else Mk = false;
      if (!Mk) {
        if ("string" == typeof xk) callMethod2(Nk, "setProperty", zk, xk);
        else callMethod2(Nk, "setProperty", zk, `${xk}`);
      }
    }
  }
};
export {
  xe
};
