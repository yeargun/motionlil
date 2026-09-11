import { identity as asMotionValue, identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { callMethod2 } from "./../motion-dom/dom-host.js";
import { Zb } from "./part-139.js";
import { Ma } from "./part-146.js";
import { Ng } from "./part-176.js";
import { Jd } from "./part-182.js";
import { Kd } from "./part-184.js";
import { f } from "./part-455.js";
import { j } from "./part-568.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Fd = (vk) => {
  var Jk, wk, xk, yk, Kk, al, Zk, Lk, Vk, Mk, Rk, fl, bl, dl, gl, cl, el, Nk, Dk, Ek, zk, Fk, Gk, Ok, Sk, Wk, Xk, _k, Yk, Tk, Pk, Bk, hl, Qk = vk.timestamp, Hk = [], Ck = [], $k = /* @__PURE__ */ new Map(), Ik = [], Uk = j.length, Ak = 0;
  for (; Ak < Uk; ) {
    Jk = j[Ak];
    if (Jk.needsMeasurement) Hk.push(Jk);
    Ak += 1;
  }
  if (Eb) {
    wk = Qk >= 0;
    xk = wk;
  } else xk = false;
  if (xk) {
    yk = Hk.length;
    Sk = 0;
    while (Sk < yk) {
      Kk = Hk[Sk].element;
      if (null != Kk) {
        al = Ck.length;
        Xk = false;
        _k = 0;
        while (_k < al) {
          if (Ck[_k] == Kk) Wk = true;
          else Wk = Xk;
          Xk = Wk;
          _k += 1;
        }
        if (!Xk) Ck.push(Kk);
      }
      Sk += 1;
    }
    Zk = Ck.length;
    Tk = 0;
    while (Tk < Zk) {
      Lk = Ck[Tk];
      Vk = Ng(Lk);
      if (0 != Vk.length) {
        $k.set(Lk, Vk);
        Zb(asVisualElement(Lk));
      }
      Tk += 1;
    }
    Ok = 0;
    while (Ok < yk) Ok += 1;
    Yk = 0;
    while (Yk < Zk) {
      Mk = Ck[Yk];
      Zb(asVisualElement(Mk));
      Rk = $k.get(Mk);
      if (Rk) {
        hl = asVisualElement(Mk);
        fl = Rk.length;
        Pk = 0;
        while (Pk < fl) {
          bl = Rk[Pk];
          dl = `${bl[0]}`;
          gl = bl[1];
          cl = null;
          el = Ma(hl, dl, cl, false);
          if (el != cl) asMotionValue(el).set(gl);
          Pk += 1;
        }
      }
      Yk += 1;
    }
    Gk = 0;
    while (Gk < yk) Gk += 1;
    Fk = 0;
    while (Fk < yk) {
      Nk = Hk[Fk].suspendedScrollY;
      if (null != Nk) callMethod2(null, "scrollTo", 0, Nk);
      Fk += 1;
    }
  }
  for (Eb = false, Db = false, Dk = j.length, zk = 0; zk < Dk; ) {
    Ik.push(j[zk]);
    zk += 1;
  }
  for (Ek = Ik.length, Bk = 0; Bk < Ek; ) {
    Kd(Ik[Bk], Fb);
    Bk += 1;
  }
  j.splice(0, j.length);
};
let Gd = (vk) => {
  var xk, yk, zk, Ak = vk.timestamp, Bk = j.length, wk = 0;
  for (; wk < Bk; ) {
    xk = j[wk];
    Jd(xk);
    if (xk.needsMeasurement) {
      yk = Ak >= 0;
      zk = yk;
    } else zk = false;
    if (zk) Eb = true;
    wk += 1;
  }
};
let Og = () => {
  Fb = true;
  let vk = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  vk.delta = 0;
  vk.timestamp = 0;
  vk.isProcessing = false;
  Gd(vk);
  let wk = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  wk.delta = 0;
  wk.timestamp = 0;
  wk.isProcessing = false;
  Fd(wk);
  Fb = false;
};
let Id = (vk) => {
  vk.state = "scheduled";
  if (vk.isAsync) {
    var wk, zk = j.length, xk = false, yk = 0;
    while (yk < zk) {
      if (j[yk] == vk) wk = true;
      else wk = xk;
      xk = wk;
      yk += 1;
    }
    if (!xk) j.push(vk);
    if (!Db) {
      Db = true;
      f.read(Gd, false, false);
      f.resolveKeyframes(Fd, false, false);
    }
  } else {
    Jd(vk);
    Kd(vk, false);
  }
};
var Db = false;
var Eb = false;
var Fb = false;
export {
  Db,
  Eb,
  Fb,
  Fd,
  Gd,
  Id,
  Og
};
