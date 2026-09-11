import { callMethod2, invoke1, isFunction } from "./../motion-dom/dom-host.js";
import { k } from "./part-120.js";
import { kc } from "./part-244.js";
import { Ud } from "./part-245.js";
import { $m20$JSAnimation } from "./part-447.js";
import { f } from "./part-455.js";
import { lk } from "./part-5.js";
import { wf } from "./part-592.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Vd = (vk, wk, yk) => {
  var Dk = vk.get(), zk = [null, null, null, null, null, null], Ck = null;
  zk[0] = Ck;
  zk[1] = Dk;
  zk[2] = Ck;
  zk[3] = Ck;
  zk[4] = Ck;
  zk[5] = Ck;
  if ("string" == typeof Dk) zk[3] = Dk.replace(wf, lk);
  zk[4] = () => {
    var nl = zk[0];
    if (nl) {
      nl.stop();
      zk[0] = null;
    }
    vk.animation = null;
  };
  zk[5] = () => {
    var wl = Ud(vk.get()), xl = Ud(zk[1]);
    if (wl == xl) {
      var ml = zk[4];
      if (ml) ml();
      return;
    }
    var nl = vk.getVelocity(), yl = zk[0];
    if (yl) {
      var zl, Al, Bl, Cl, pl, sl, Dl, El, Fl, Gl, tl, ul, ol = yl.getGeneratorVelocity(), ql = ol;
    } else ql = nl;
    zl = zk[4];
    if (zl) zl();
    if (yk) {
      Al = yk.type;
      if (null != Al) Dl = Al;
      else Dl = "spring";
      Bl = yk.restDelta;
      if (null != Bl) Fl = Bl;
      else Fl = 1e-3;
      Cl = yk.restSpeed;
      if (null != Cl) tl = Cl;
      else tl = 0.01;
      El = Dl;
      Gl = Fl;
      ul = tl;
    } else {
      El = "spring";
      Gl = 1e-3;
      ul = 0.01;
    }
    pl = {
      __proto__: null,
      keyframes: [wl, xl],
      velocity: ql,
      type: El,
      restDelta: Gl,
      restSpeed: ul,
      onUpdate: zk[2]
    };
    sl = new $m20$JSAnimation(pl);
    zk[0] = sl;
  };
  var Hk = (nl) => {
    var ol = zk[5];
    if (ol) ol();
    var pl = vk.events.get("animationStart");
    if (pl) pl.notify(void 0, void 0, void 0);
    var ql = zk[0];
    if (ql) ql.then(() => {
      var Ol = null;
      vk.animation = Ol;
      var Pl = vk.events.get("animationComplete");
      if (Pl) Pl.notify(void 0, void 0, void 0);
    }, null);
  };
  vk.attach((nl, ol) => {
    zk[1] = nl;
    zk[2] = (xl) => {
      ol(kc(xl, zk[3]));
    };
    f.postRender(Hk, false, false);
  }, () => {
    var ml = zk[4];
    if (ml) ml();
  });
  if (k(wk)) {
    if (yk) {
      var Ak = yk.skipInitialAnimation;
      if (null != Ak) {
        var Bk, Ek, xk, Ik, Gk, Fk = Ak;
      } else Fk = false;
      Gk = Fk;
    } else Gk = false;
    Bk = [false];
    Bk[0] = Gk;
    Ek = callMethod2(wk, "on", "change", (ol, ql, rl) => {
      if (null != ol) {
        var pl = ol;
      } else pl = 0;
      if (Bk[0]) {
        Bk[0] = false;
        vk.jump(kc(pl, zk[3]), false);
      } else vk.set(kc(pl, zk[3]));
    });
    xk = () => {
      if (isFunction(Ek)) invoke1(Ek, null);
    };
    Ik = vk.on("destroy", (ml, nl, ol) => {
      xk();
    });
    return () => {
      xk();
      Ik();
    };
  }
  return () => {
    var ml = zk[4];
    if (ml) ml();
  };
};
export {
  Vd
};
