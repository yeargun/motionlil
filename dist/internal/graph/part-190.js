import { ac } from "./part-152.js";
import { va } from "./part-465.js";
import { i } from "./part-495.js";
import { lk } from "./part-5.js";
var Tg = /* @__PURE__ */ (function() {
  let a = (vk, wk) => {
    if ("zIndex" == wk) return false;
    if ("number" == typeof vk) {
      var xk, zk, Ak, Bk, Ck, yk = true;
    } else {
      xk = Array.isArray(vk);
      yk = xk;
    }
    if (yk) return true;
    if ("string" == typeof vk) {
      if (i.test(vk)) Ak = true;
      else {
        zk = "0" == vk;
        Ak = zk;
      }
      if (Ak) {
        Bk = !vk.startsWith("url(");
        Ck = Bk;
      } else Ck = false;
      if (Ck) return true;
    }
    return false;
  }, b = (vk) => {
    if (0 == vk.length) return false;
    var xk = vk[0];
    if (1 == vk.length) return true;
    var wk = 0;
    for (; wk < vk.length; wk = wk + 1) {
      if (vk[wk] != xk) return true;
    }
    return false;
  };
  return function(vk, Ck, Gk, Hk) {
    if (0 == vk.length) return false;
    var Ik = vk[0];
    if ("number" == typeof Ik) {
      var Jk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Tk, Uk, Vk, Dk, Ek, Fk, wk, xk, yk, zk, Wk, Ak, Bk, Kk = true;
    } else {
      Jk = "string" == typeof Ik;
      Kk = Jk;
    }
    if (Kk) Mk = true;
    else {
      Lk = "boolean" == typeof Ik;
      Mk = Lk;
    }
    if (Mk) Ok = true;
    else {
      Nk = Array.isArray(Ik);
      Ok = Nk;
    }
    if (Ok) Rk = true;
    else {
      if ("object" == typeof Ik) {
        Pk = !!Ik;
        Qk = Pk;
      } else Qk = false;
      Rk = Qk;
    }
    if (!Rk) return false;
    if ("display" == Ck) Sk = true;
    else Sk = "visibility" == Ck;
    if (Sk) return true;
    Tk = vk[vk.length - 1];
    Uk = a(Ik, Ck);
    Vk = a(Tk, Ck);
    if (Uk != Vk) {
      if (null != Ck) Wk = Ck;
      else Wk = lk;
      if (Uk) Dk = Tk;
      else Dk = Ik;
      va(false, `You are trying to animate ${Wk} from "${Ik}" to "${Tk}". "${Dk}" is not an animatable value.`, "value-not-animatable");
    }
    if (!Uk) Fk = true;
    else {
      Ek = !Vk;
      Fk = Ek;
    }
    if (Fk) return false;
    if (b(vk)) return true;
    if ("string" == typeof Gk) {
      wk = "spring" == Gk;
      Bk = wk;
    } else {
      if (null != Gk) {
        xk = ac(Gk);
        Ak = xk;
      } else Ak = false;
      Bk = Ak;
    }
    if (Bk) yk = null != Hk;
    else yk = false;
    if (yk) zk = 0 != Hk;
    else zk = false;
    if (zk) return true;
    return false;
  };
})();
export {
  Tg
};
