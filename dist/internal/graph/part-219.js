import { addWindowListener, callFn2, invoke1, isFunction, removeWindowListener } from "./../motion-dom/dom-host.js";
import { Pd } from "./part-217.js";
import { fh } from "./part-218.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Aj = (vk, yk, zk) => {
  if (null == zk) {
    var wk, Gk, Ak, Hk, Ck, xk, Ek, Dk, Fk, Bk = {
      __proto__: null
    };
  } else Bk = zk;
  for (wk = Pd(vk, Bk), Gk = wk[0], Ak = wk[1], Hk = wk[2], Dk = 0; Dk < Gk.length; Dk = Dk + 1) {
    Ck = Gk[Dk];
    xk = [false, false, null, null, null];
    xk[0] = false;
    xk[1] = false;
    Fk = null;
    xk[2] = Fk;
    xk[3] = Fk;
    xk[4] = Fk;
    xk[4] = /* @__PURE__ */ ((dl, el, fl) => () => {
      fl[0] = false;
      var gl = fl[4];
      if (gl) {
        removeWindowListener("pointerup", gl);
        removeWindowListener("pointercancel", gl);
      }
      if (fl[1]) {
        fl[1] = false;
        var hl = fl[2];
        if (null != hl) {
          var il, jl = isFunction(hl), kl = jl;
        } else kl = false;
        if (kl) {
          invoke1(hl, {
            __proto__: null,
            passive: true
          });
          fl[2] = null;
        }
        il = fl[3];
        if (il) el.removeEventListener("pointerleave", il, dl);
      }
    })(Ak, Ck, xk);
    xk[3] = /* @__PURE__ */ ((dl, el, fl) => (gl) => {
      var il = gl.pointerType;
      if ("string" == typeof il && "touch" == il) return;
      if (fl[0]) {
        fl[1] = true;
        return;
      }
      var jl = fl[2];
      if (null != jl) {
        var hl, kl = isFunction(jl), ll = kl;
      } else ll = false;
      if (ll) {
        invoke1(jl, gl);
        fl[2] = null;
      }
      hl = fl[3];
      if (hl) el.removeEventListener("pointerleave", hl, dl);
    })(Ak, Ck, xk);
    Ek = /* @__PURE__ */ ((dl) => () => {
      dl[0] = true;
      var el = dl[4];
      if (el) {
        addWindowListener("pointerup", el);
        addWindowListener("pointercancel", el);
      }
    })(xk);
    Ck.addEventListener("pointerenter", /* @__PURE__ */ ((dl, el, fl, gl) => (jl) => {
      if (!fh(jl)) return;
      gl[1] = false;
      var vl = callFn2(dl, fl, jl);
      if (!isFunction(vl)) return;
      gl[2] = vl;
      var ul = gl[3];
      if (ul) fl.addEventListener("pointerleave", ul, el);
    })(yk, Ak, Ck, xk), Ak);
    Ck.addEventListener("pointerdown", Ek, Ak);
  }
  return Hk;
};
export {
  Aj
};
