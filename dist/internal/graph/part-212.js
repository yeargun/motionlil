import { callMethod2 } from "./../motion-dom/dom-host.js";
import { T } from "./part-203.js";
import { aa } from "./part-204.js";
import { fc } from "./part-209.js";
import { ch } from "./part-211.js";
import { $m91$MotionValue } from "./part-444.js";
import { lk } from "./part-5.js";
import { z } from "./part-522.js";
import { Ua } from "./part-578.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gc = (vk, wk, xk, yk) => {
  var zk = null;
  if (z.has(xk)) {
    if (!aa(wk, "transform")) {
      if (!fc(vk)) {
        var Ek, Fk, Mk, Gk, Hk, Nk, Ik, Jk, Ak, Bk, Kk, Lk, Ck = !aa(wk, "transformBox"), Dk = Ck;
      } else Dk = false;
      if (Dk) {
        Ek = new $m91$MotionValue("fill-box", null);
        gc(vk, wk, "transformBox", Ek);
      }
      Fk = null;
      Mk = new $m91$MotionValue("none", Fk);
      T(wk, "transform", Mk, () => {
        let pl = vk.style;
        pl.transform = ch(wk);
      }, Fk, true);
    }
    Gk = aa(wk, "transform");
    Bk = zk;
    Lk = Gk;
  } else {
    if (Ua.has(xk)) {
      if (!aa(wk, "transformOrigin")) {
        Hk = null;
        Nk = new $m91$MotionValue(lk, Hk);
        T(wk, "transformOrigin", Nk, () => {
          var wl = wk.latest.originX ?? null, yl = wk.latest.originY ?? null, Al = wk.latest.originZ ?? null;
          if (!("number" == typeof wl)) {
            var rl, sl, tl, ul, vl, xl, zl, Bl, pl = !("string" == typeof wl), ql = pl;
          } else ql = false;
          if (ql) xl = "50%";
          else xl = wl;
          if (!("number" == typeof yl)) {
            rl = !("string" == typeof yl);
            sl = rl;
          } else sl = false;
          if (sl) zl = "50%";
          else zl = yl;
          if (!("number" == typeof Al)) {
            tl = !("string" == typeof Al);
            ul = tl;
          } else ul = false;
          if (ul) Bl = 0;
          else Bl = Al;
          vl = vk.style;
          vl.transformOrigin = `${xl} ${zl} ${Bl}`;
        }, Hk, true);
      }
      Ik = aa(wk, "transformOrigin");
      Ak = zk;
      Kk = Ik;
    } else {
      if (xk.startsWith("--")) Jk = () => {
        let ql = wk.latest[xk] ?? null;
        callMethod2(vk.style, "setProperty", xk, `${ql}`);
      };
      else Jk = () => {
        let ql = vk.style;
        ql[xk] = wk.latest[xk] ?? null;
      };
      Ak = Jk;
      Kk = zk;
    }
    Bk = Ak;
    Lk = Kk;
  }
  return T(wk, xk, yk, Bk, Lk, true);
};
export {
  gc
};
