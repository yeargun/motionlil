import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { Gg } from "./part-161.js";
import { Hg } from "./part-162.js";
import { u } from "./part-17.js";
import { n } from "./part-25.js";
import { Uc } from "./part-26.js";
import { $m118$NativeAnimation } from "./part-445.js";
import { $m20$JSAnimation } from "./part-447.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m8$NativeAnimationExtended extends $m118$NativeAnimation {
  constructor(wk) {
    Hg(wk);
    Gg(wk);
    super(wk);
    var zk = wk.startTime;
    if ("number" == typeof zk) {
      var xk = wk.autoplay;
      if ("boolean" == typeof xk) {
        var yk = xk;
      } else yk = true;
      if (yk) this.setStartTime(zk);
    }
    this.options = wk;
  }
  updateMotionValue(Ck = null) {
    var Fk = this.options, Hk = Fk.motionValue;
    if (!Hk) return;
    if (null != Ck) {
      asMotionValue(Hk).set(Ck);
      return;
    }
    var Ik = {
      __proto__: null
    };
    for (var Dk in Fk) {
      if ("motionValue" != Dk) {
        var Mk, Nk, Ok, Pk, Ek, wk, xk, yk, Jk, Qk, Rk, Sk, zk, Gk, Ak, Bk, Kk = "onUpdate" != Dk, Lk = Kk;
      } else Lk = false;
      if (Lk) {
        Mk = "onComplete" != Dk;
        Nk = Mk;
      } else Nk = false;
      if (Nk) {
        Ok = "element" != Dk;
        Pk = Ok;
      } else Pk = false;
      if (Pk) Ik[Dk] = Fk[Dk];
    }
    Ik.autoplay = false;
    Ek = new $m20$JSAnimation(Ik);
    wk = this.getStartTime();
    xk = wk;
    yk = n() - xk;
    if (yk > 10) Ak = yk;
    else Ak = 10;
    Jk = /* @__PURE__ */ u(0, 10, Ak - 10);
    Qk = Ek.sample(Ak).value;
    Rk = Fk.name;
    Sk = Fk.element;
    if (Sk && "string" == typeof Rk) Uc(Sk, Rk, Qk);
    zk = Ak - Jk;
    if (zk < 0) Bk = 0;
    else Bk = zk;
    Gk = Ek.sample(Bk).value;
    asMotionValue(Hk).setWithVelocity(Gk, Qk, Jk);
    Ek.stop();
  }
}
export {
  $m8$NativeAnimationExtended
};
