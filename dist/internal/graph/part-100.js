import { mapKeys } from "./../motion-dom/dom-host.js";
import { eg } from "./part-101.js";
import { g } from "./part-39.js";
import { va } from "./part-465.js";
import { h } from "./part-492.js";
import { i } from "./part-495.js";
import { xa } from "./part-497.js";
import { ed } from "./part-72.js";
import { La } from "./part-87.js";
import { eb } from "./part-94.js";
import { id } from "./part-98.js";
import { cg } from "./part-99.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let fb = (vk) => {
  if ("number" == typeof vk) return (Sk, Tk) => {
    var Qk = 0, Rk = 0;
    if ("number" == typeof Sk) Qk = Sk;
    if ("number" == typeof Tk) Rk = Tk;
    return (bl) => /* @__PURE__ */ g(Qk, Rk, bl);
  };
  else {
    if ("string" == typeof vk) {
      if (ed(vk)) return eb;
      if (h.test(vk)) return (Qk, Rk) => id(Qk, Rk);
      return fg;
    } else {
      if (Array.isArray(vk)) return jd;
      else {
        if ("object" == typeof vk) {
          if (h.test(vk)) return (Qk, Rk) => id(Qk, Rk);
          return dg;
        }
      }
    }
  }
  return eb;
};
let jd = (vk, xk) => {
  var yk = [];
  if (Array.isArray(vk)) {
    var zk, Ck, Dk, Ek, Fk, Gk, wk, Hk, Bk = vk.length | 0, Ak = 0;
    while (Ak < Bk) {
      yk.push(vk[Ak]);
      Ak += 1;
    }
  }
  for (zk = yk.length, Ck = [], wk = 0; wk < zk; ) {
    Dk = yk[wk];
    if (Array.isArray(xk)) {
      Ek = wk < (xk.length | 0);
      Fk = Ek;
    } else Fk = false;
    if (Fk) {
      Gk = xk[wk];
      Hk = Gk;
    } else Hk = 0;
    Ck.push(fb(Dk)(Dk, Hk));
    wk += 1;
  }
  return (il) => {
    var jl = 0;
    while (jl < zk) {
      yk[jl] = Ck[jl](il);
      jl += 1;
    }
    return yk;
  };
};
let dg = (vk, wk) => {
  var Ck = /* @__PURE__ */ new Map(), Ik = /* @__PURE__ */ new Map();
  if ("object" == typeof vk) for (var xk in vk) Ck.set(xk, vk[xk]);
  if ("object" == typeof wk) for (var yk in wk) Ck.set(yk, wk[yk]);
  var Dk, zk, Ek, Ak, Kk, Lk, Fk, Gk, Bk, Jk = mapKeys(Ck), Hk = 0;
  for (; Hk < Jk.length; Hk = Hk + 1) {
    Dk = Jk[Hk];
    if ("string" == typeof Dk) {
      zk = null;
      if ("object" == typeof vk) {
        Ek = vk[Dk];
        Gk = Ek;
      } else Gk = zk;
      if ("object" == typeof wk) {
        Ak = wk[Dk];
        Bk = Ak;
      } else Bk = zk;
      if (null != Gk) {
        Kk = null != Bk;
        Lk = Kk;
      } else Lk = false;
      if (Lk) {
        Fk = Gk;
        Ik.set(Dk, fb(Fk)(Fk, Bk));
      }
    }
  }
  return (ul) => {
    var vl, yl, xl = mapKeys(Ik), wl = 0;
    for (; wl < xl.length; wl = wl + 1) {
      vl = xl[wl];
      if ("string" == typeof vl) {
        yl = Ik.get(vl);
        if (yl) Ck.set(vl, yl(ul));
      }
    }
    return Ck;
  };
};
let fg = (wk, yk) => {
  var zk = i.createTransformer, vk = (Nl) => Nl;
  if (zk) vk = zk(`${yk}`);
  var Mk = La(wk), Lk = La(yk);
  if (Mk.indexes.varIndexes.length == Lk.indexes.varIndexes.length) {
    var Ck, Dk, Ek, Nk, Fk, Gk, Hk, Ik, Jk, xk, Kk, Ok, Ak = Mk.indexes.color.length == Lk.indexes.color.length, Bk = Ak;
  } else Bk = false;
  if (Bk) {
    Ck = Mk.indexes.number.length >= Lk.indexes.number.length;
    Dk = Ck;
  } else Dk = false;
  if (Dk) {
    if ("string" == typeof wk) {
      Ek = xa.has(wk);
      Kk = Ek;
    } else Kk = false;
    if ("string" == typeof yk) {
      Nk = xa.has(yk);
      Ok = Nk;
    } else Ok = false;
    if (Kk) {
      Fk = 0 == Lk.values.length;
      Gk = Fk;
    } else Gk = false;
    if (Gk) Jk = true;
    else {
      if (Ok) {
        Hk = 0 == Mk.values.length;
        Ik = Hk;
      } else Ik = false;
      Jk = Ik;
    }
    if (Jk) return (Pl) => cg(`${wk}`, `${yk}`)(Pl);
    xk = jd(eg(Mk, Lk), Lk.values);
    return (Pl) => {
      let Ql = vk;
      return Ql(xk(Pl));
    };
  } else {
    va(true, `Complex values '${wk}' and '${yk}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
    return eb(wk, yk);
  }
  throw Error();
};
export {
  dg,
  fb,
  fg,
  jd
};
