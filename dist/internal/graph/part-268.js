import { callFn0, callMethod1, documentGet, documentStartViewTransition, isFunction, taskFromCallback } from "./../motion-dom/dom-host.js";
import { ik } from "./part-2.js";
import { Wd } from "./part-254.js";
import { xh } from "./part-260.js";
import { Zd } from "./part-262.js";
import { zh } from "./part-264.js";
import { ae } from "./part-265.js";
import { yh } from "./part-266.js";
import { be } from "./part-267.js";
import { $m144$GroupAnimation } from "./part-442.js";
import { Bk } from "./part-531.js";
import { ab } from "./part-54.js";
import { ok } from "./part-8.js";
import { pk } from "./part-9.js";
var Ah = /* @__PURE__ */ (function() {
  let g = (vk, yk, Ak) => {
    var Dk, Bk2, zk, wk, xk, Ck = 0;
    for (; Ck < vk.length; Ck = Ck + 1) {
      Dk = vk[Ck].style;
      if (Dk) callMethod1(Dk, "removeProperty", ik);
    }
    if (yk) {
      for (wk = 0; wk < yk.length; wk = wk + 1) {
        Bk2 = yk[wk].style;
        if (Bk2) callMethod1(Bk2, "removeProperty", ok);
      }
    }
    if (Ak) {
      for (xk = 0; xk < Ak.length; xk = xk + 1) {
        zk = Ak[xk].style;
        if (zk) callMethod1(zk, "removeProperty", pk);
      }
    }
  }, h = (vk) => {
    var Gk = vk.update, Ek = vk.options;
    if (!Ek) {
      var Dk, wk, xk, yk, zk, Ak, Bk2, Ck, Fk = {
        __proto__: null
      };
    } else Fk = Ek;
    if (!documentGet("startViewTransition")) return taskFromCallback((ml) => {
      if (isFunction(Gk)) callFn0(Gk);
      ml();
    }).then((ll) => {
      let ml = [], nl = new $m144$GroupAnimation(ml);
      return nl;
    });
    Dk = [/* @__PURE__ */ new Map(), [], [], [], /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map(), [], /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), [], null, null, null, null, null, null, null, null, null];
    xh(Dk, vk, Fk, Gk);
    xk = Dk[21].targets;
    if (xk) Dk[15] = xk;
    yk = Dk[21].resolveDefs;
    if (yk) Dk[16] = yk;
    zk = Dk[21].cropOverride;
    if (zk) Dk[17] = zk;
    Ak = Dk[21].pairs;
    if (Ak) Dk[18] = Ak;
    Bk2 = Dk[21].classNames;
    if (Bk2) Dk[19] = Bk2;
    Ck = Dk[21].flatGroups;
    if (Ck) Dk[20] = Ck;
    wk = {
      __proto__: null,
      animation: null
    };
    return taskFromCallback((nl) => {
      try {
        Zd(Dk, "old");
        ae(Dk, "old");
        be(Dk);
        var Xl = documentStartViewTransition(() => {
          if (isFunction(Dk[22])) callFn0(Dk[22]);
          Zd(Dk, "new");
          ae(Dk, "new");
          Dk[7].clear();
          var bm, dm, em, fm, cm = 0;
          for (; cm < Dk[6].length; cm = cm + 1) {
            bm = Dk[6][cm] || "";
            if ("root" == bm) continue;
            dm = Dk[8].get(bm);
            em = yh(Dk, bm);
            if (dm !== void 0) fm = dm;
            else fm = em;
            if (fm) Dk[7].add(bm);
          }
          be(Dk);
        }), Yl = Xl.finished;
        if (Yl) callMethod1(Yl, "finally", () => {
          g(Dk[1], Dk[2], Dk[3]);
          Wd();
        });
        var Zl = Xl.ready;
        if (!Zl) {
          var ol = [], ql = new $m144$GroupAnimation(ol);
          wk.animation = ql;
          nl();
          return;
        }
        var _l = callMethod1(Zl, "then", () => {
          let bm = zh(Dk), em = new $m144$GroupAnimation(bm);
          wk.animation = em;
          nl();
        });
        callMethod1(_l, "catch", () => {
          let cm = [], dm = new $m144$GroupAnimation(cm);
          wk.animation = dm;
          nl();
        });
      } catch {
        g(Dk[1], Dk[2], Dk[3]);
        Wd();
        var pl = [], rl = new $m144$GroupAnimation(pl);
        wk.animation = rl;
        nl();
      }
    }).then((nl) => {
      var ol = wk.animation;
      if (ol) return ol;
      var ml = [], pl = new $m144$GroupAnimation(ml);
      return pl;
    });
  }, i = () => {
    Hb = null;
    if (s.length > 0) {
      var vk = s[0];
      ab(s, vk);
      Hb = vk;
      h(vk).then((Nk) => {
        callMethod1(vk, "notifyReady", Nk);
        return Nk.finished;
      }).catch((Nk) => {
        callMethod1(vk, "notifyReject", Nk);
        return null;
      }).finally(() => {
        i();
      });
    }
  };
  return function() {
    var Dk, Ik, Lk, Mk, Jk, Ek, xk, yk, Fk, Gk, Hk, Kk, Ak, Bk2, Ck, wk = s.length - 1, zk = wk;
    for (; zk >= 0; ) {
      Dk = s[zk];
      Ik = Dk.options;
      if ("immediate" == Ik.interrupt) {
        for (Lk = [], Kk = 0; Kk <= zk; Kk = Kk + 1 | 0) {
          Mk = s[Kk].update;
          if (isFunction(Mk)) Lk.push(/* @__PURE__ */ ((Bl) => () => {
            callFn0(Bl);
          })(Mk));
        }
        Jk = s.slice(zk + 1 | 0);
        Dk.update = /* @__PURE__ */ ((Bl) => () => {
          var Cl = 0;
          for (; Cl < Bl.length; Cl = Cl + 1) Bl[Cl]();
        })(Lk);
        for (Ek = [Dk], Ak = 0; Ak < Jk.length; Ak = Ak + 1) Ek.push(Jk[Ak]);
        s = Ek;
        break;
      }
      xk = zk - 1;
      zk = xk;
    }
    yk = null == Hb;
    if (!yk) {
      Fk = s.length > 0;
      Gk = Fk;
    } else Gk = false;
    if (Gk) {
      Hk = s[0].options;
      if ("immediate" == Hk.interrupt) Bk2 = true;
      else Bk2 = yk;
      Ck = Bk2;
    } else Ck = yk;
    if (Ck) i();
  };
})();
var s = [];
var Hb = Bk;
export {
  Ah,
  Hb,
  s
};
