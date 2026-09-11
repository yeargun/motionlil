import { Ji } from "./part-409.js";
import { Ii } from "./part-410.js";
import { Ki } from "./part-411.js";
import { pb } from "./part-412.js";
import { Qe } from "./part-413.js";
import { $m145$GroupAnimationWithThen } from "./part-446.js";
import { bb } from "./part-54.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Re = (vk, wk, xk) => (Nk, Ok, Pk) => {
  var Qk = null, Uk = {
    __proto__: null
  };
  if (wk != Qk) Uk.reduceMotion = wk;
  if (null != xk) Uk.skipAnimations = xk;
  if (Ki(Nk)) {
    var Dk = {
      __proto__: null
    };
    pb(Dk, Uk);
    pb(Dk, Ok);
    var Hk = Qe(Dk);
    if (Hk) {
      var Ik, Ek, Jk, Kk, Fk, Lk, Bk, Mk, Rk, Sk, Tk = Hk;
    } else Tk = Qk;
    Ik = Ii(Nk, Dk, vk);
    Mk = Ik;
    Sk = Tk;
  } else {
    Ek = {
      __proto__: null
    };
    pb(Ek, Uk);
    pb(Ek, Pk);
    Jk = Qe(Ek);
    if (Jk) Rk = Jk;
    else Rk = Qk;
    Kk = Ji(Nk, Ok, Ek, vk);
    Mk = Kk;
    Sk = Rk;
  }
  Fk = new $m145$GroupAnimationWithThen(Mk);
  if (Sk) {
    Lk = Sk;
    Fk.getFinished().then((Hl) => {
      Lk();
      return true;
    });
  }
  if (vk) {
    Bk = vk;
    Bk.animations.push(Fk);
    Fk.getFinished().then((Il) => {
      bb(Bk.animations, Fk);
      return true;
    });
  }
  return Fk;
};
export {
  Re
};
