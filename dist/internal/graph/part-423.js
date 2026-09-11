import { addWindowListener, documentElement, documentScrollingElement, removeWindowListener } from "./../motion-dom/dom-host.js";
import { weakMapDelete, weakMapGet, weakMapGet as weakMapGetHandlerSet, weakMapGet as weakMapGetListener, weakMapGet as weakMapGetProcess, weakMapHas, weakMapSet } from "./../motion-dom/weak-host.js";
import { oh } from "./part-235.js";
import { Te } from "./part-417.js";
import { Ue } from "./part-418.js";
import { Li } from "./part-419.js";
import { Mi } from "./part-420.js";
import { Ni } from "./part-421.js";
import { Ve } from "./part-422.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import { G } from "./part-457.js";
import { ma } from "./part-628.js";
import { Rc } from "./part-629.js";
import { Lb } from "./part-630.js";
import { Mb } from "./part-631.js";
import { _a } from "./part-632.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let We = (vk, wk) => {
  var yk = documentScrollingElement(), Zk = {
    __proto__: null
  };
  if (null != wk) {
    var Ok, Dk, Ek, Fk, xk, _k, $k, Pk, al, Gk, Hk, Qk, Ik, bl, cl, Rk, Jk, Kk, Lk, zk, Ak, Mk, Nk, Sk, Tk, Xk, Uk, Yk, Vk, Wk, Bk = "object" == typeof wk, Ck = Bk;
  } else Ck = false;
  if (Ck) {
    Ok = wk;
    for (Dk in Ok) Zk[Dk] = wk[Dk];
    Ek = wk.container;
    if (null != Ek) zk = Ek;
    else zk = yk;
    Fk = wk.trackContentSize;
    if ("boolean" == typeof Fk) Mk = Fk;
    else Mk = false;
    Ak = zk;
    Nk = Mk;
  } else {
    Ak = yk;
    Nk = false;
  }
  if (null == Ak) return () => {
  };
  xk = Ni(Ak).inner;
  Xk = {
    time: 0,
    x: null,
    y: null
  };
  Xk.time = 0;
  Vk = {
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    velocity: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    interpolatorOffsets: null,
    interpolateFn: null
  };
  Te(Vk);
  Xk.x = Vk;
  Wk = {
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    velocity: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    interpolatorOffsets: null,
    interpolateFn: null
  };
  Te(Wk);
  Xk.y = Wk;
  Uk = () => {
    vk(Xk);
  };
  var Yl = (Nm) => {
    var Um = null;
    if (Zk != Um) {
      var Vm, Om, Pm, Qm, Rm, Wm, Sm, Tm, Xm = "object" == typeof Zk, Ym = Xm;
    } else Ym = false;
    if (Ym) {
      Vm = Zk.target;
      Wm = Vm;
    } else Wm = Um;
    Mi(Ak, Wm, Xk);
    Ue(Ak, "x", Xk, Nm);
    Ue(Ak, "y", Xk, Nm);
    Xk.time = Nm;
    if (null != Zk) {
      Om = "object" == typeof Zk;
      Pm = Om;
    } else Pm = false;
    if (Pm) {
      if (null != Zk.offset) Rm = true;
      else {
        Qm = null != Zk.target;
        Rm = Qm;
      }
      if (Rm) Sm = true;
      else Sm = false;
      Tm = Sm;
    } else Tm = false;
    if (Tm) Li(Ak, Xk, Zk);
  };
  Yk = {
    measure: null,
    notify: null
  };
  Yk.measure = Yl;
  Yk.notify = Uk;
  for (Tk = 0; ; ) {
    if (Tk >= xk.length) {
      Sk = false;
      break;
    }
    if (xk[Tk] == Yk) {
      Sk = true;
      break;
    }
    Tk += 1;
  }
  if (!Sk) xk.push(Yk);
  if (!weakMapHas(ma, Ak)) {
    _k = () => {
      var Lm = 0;
      for (; Lm < xk.length; Lm = Lm + 1) xk[Lm].notify();
    };
    $k = () => {
      var Mm = 0;
      for (; Mm < xk.length; Mm = Mm + 1) xk[Mm].measure(G.timestamp);
      f.preUpdate((bn) => {
        _k();
      }, false, false);
    };
    Pk = () => {
      f.read((Sm) => {
        $k();
      }, false, false);
    };
    weakMapSet(ma, Ak, Pk);
    al = Ve(Ak);
    addWindowListener("resize", Pk);
    if (Ak != documentElement()) weakMapSet(Rc, Ak, oh(Ak, Pk));
    al.addEventListener("scroll", Pk, null);
    Pk();
  }
  if (Nk) {
    Gk = !weakMapHas(_a, Ak);
    Hk = Gk;
  } else Hk = false;
  if (Hk) {
    Qk = weakMapGetListener(ma, Ak);
    if (Qk) {
      Ik = {
        __proto__: null
      };
      bl = Ak.scrollWidth;
      cl = Ak.scrollHeight;
      Ik.width = bl;
      Ik.height = cl;
      weakMapSet(Mb, Ak, Ik);
      Rk = Qk;
      Jk = (Om) => {
        var Pm = weakMapGet(Mb, Ak);
        if (null == Pm) return;
        var Qm = Ak.scrollWidth, Rm = Ak.scrollHeight;
        if (Pm.width != Qm) {
          var Mm, Nm = true;
        } else {
          Mm = Pm.height != Rm;
          Nm = Mm;
        }
        if (Nm) {
          Rk();
          Pm.width = Qm;
          Pm.height = Rm;
        }
      };
      f.read(Jk, true, false);
      weakMapSet(_a, Ak, Jk);
    }
  }
  Kk = weakMapGetListener(ma, Ak);
  if (Kk) {
    Lk = Kk;
    f.read((Lm) => {
      Lk();
    }, false, true);
  }
  return () => {
    var Um = weakMapGetHandlerSet(Lb, Ak);
    if (!Um) return;
    var Pm, Mm, Qm, Tm, Nm, Sm = Um.inner, Om = Sm.length - 1, Rm = Om;
    while (Rm >= 0) {
      if (Sm[Rm] == Yk) Sm.splice(Rm, 1);
      Pm = Rm - 1;
      Rm = Pm;
    }
    if (Sm.length > 0) return;
    Mm = weakMapGetListener(ma, Ak);
    weakMapDelete(ma, Ak);
    if (Mm) {
      Qm = null;
      Ve(Ak).removeEventListener("scroll", Mm, Qm);
      Tm = weakMapGetListener(Rc, Ak);
      if (Tm) Tm();
      removeWindowListener("resize", Mm);
    }
    Nm = weakMapGetProcess(_a, Ak);
    if (Nm) {
      F(Nm);
      weakMapDelete(_a, Ak);
    }
    weakMapDelete(Mb, Ak);
  };
};
export {
  We
};
