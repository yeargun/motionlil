import { addWindowListener, callFn2, callMethod1, documentGet, isFunction, removeWindowListener } from "./../motion-dom/dom-host.js";
import { weakSetAdd, weakSetDelete, weakSetHas } from "./../motion-dom/weak-host.js";
import { hk } from "./part-1.js";
import { fc } from "./part-209.js";
import { Pd } from "./part-217.js";
import { Qd } from "./part-220.js";
import { hh } from "./part-222.js";
import { ih } from "./part-225.js";
import { ic } from "./part-226.js";
import { ja } from "./part-585.js";
import { Jc } from "./part-586.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Cj = (wk, zk, Ak) => {
  var vk = Ak;
  if (null == vk) vk = {
    __proto__: null
  };
  var yk, Bk, Ek, Fk, Gk, Hk, Ik, Jk, xk = Pd(wk, vk), Kk = xk[0], Ck = xk[1], Nk = xk[2], Lk = !!vk.useGlobalTarget, Mk = hk, Ok = documentGet("documentElement"), Dk = 0;
  for (; Dk < Kk.length; Dk = Dk + 1) {
    yk = Kk[Dk];
    Bk = [null, null, null];
    Jk = null;
    Bk[0] = Jk;
    Bk[1] = Jk;
    Bk[2] = Jk;
    if (Lk) Hk = Mk;
    else Hk = yk;
    Hk.addEventListener("pointerdown", /* @__PURE__ */ ((wl, xl, yl, zl, Al, Bl) => (Hl) => {
      var nm = Hl.currentTarget;
      if (xl) nm = Al;
      if (!ic(Hl)) return;
      if (weakSetHas(Jc, Hl)) return;
      weakSetAdd(ja, nm);
      if (vk.stopPropagation) weakSetAdd(Jc, Hl);
      var lm = callFn2(wl, nm, Hl);
      if (isFunction(lm)) Bl[0] = lm;
      Bl[1] = () => {
        var Hm = {
          __proto__: null,
          target: null
        };
        if (nm == yl) {
          var um, pm, qm, rm, sm, wm, Am, xm, Bm, Cm, ym, Dm, Em, vm = true;
        } else {
          um = nm == zl;
          vm = um;
        }
        if (vm) pm = true;
        else pm = xl;
        if (pm) sm = true;
        else {
          qm = nm;
          rm = Qd(qm, Hm.target);
          sm = rm;
        }
        wm = Bl[1];
        Am = Bl[2];
        if (wm) removeWindowListener("pointerup", wm);
        if (Am) removeWindowListener("pointercancel", Am);
        if (weakSetHas(ja, nm)) weakSetDelete(ja, nm);
        if (!ic(Hm)) {
          xm = Bl[0];
          if (null != xm) {
            Bm = isFunction(xm);
            Cm = Bm;
          } else Cm = false;
          if (Cm) callFn2(xm, Hm, {
            __proto__: null,
            success: sm
          });
          Bl[0] = null;
          return;
        }
        ym = Bl[0];
        if (null != ym) {
          Dm = isFunction(ym);
          Em = Dm;
        } else Em = false;
        if (Em) callFn2(ym, Hm, {
          __proto__: null,
          success: sm
        });
        Bl[0] = null;
      };
      Bl[2] = () => {
        var wm = {
          __proto__: null
        }, um = Bl[1], xm = Bl[2];
        if (um) removeWindowListener("pointerup", um);
        if (xm) removeWindowListener("pointercancel", xm);
        if (weakSetHas(ja, nm)) weakSetDelete(ja, nm);
        var vm = Bl[0];
        if (null != vm) {
          var sm, tm, qm = isFunction(vm), rm = qm;
        } else rm = false;
        if (rm) {
          sm = ic(wm);
          tm = sm;
        } else tm = false;
        if (tm) callFn2(vm, wm, {
          __proto__: null,
          success: false
        });
        Bl[0] = null;
      };
      var km = Bl[1], mm = Bl[2];
      if (km) addWindowListener("pointerup", km);
      if (mm) addWindowListener("pointercancel", mm);
    })(zk, Lk, Mk, Ok, yk, Bk), Ck);
    if (fc(yk)) {
      yk.addEventListener("focus", (xl) => {
        ih(xl, Ck);
      }, Ck);
      if (isFunction(yk.hasAttribute)) {
        Ek = !!callMethod1(yk, "hasAttribute", "tabindex");
        Ik = Ek;
      } else Ik = false;
      if (!hh(yk)) {
        Fk = !Ik;
        Gk = Fk;
      } else Gk = false;
      if (Gk) yk.tabIndex = 0;
    }
  }
  return Nk;
};
export {
  Cj
};
