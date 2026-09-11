import { performanceNow } from "./../motion-dom/dom-host.js";
import { Jf } from "./part-19.js";
import { L } from "./part-21.js";
import { M } from "./part-22.js";
import { Vi } from "./part-436.js";
import { da } from "./part-453.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Tc = (vk, wk) => {
  let xk = [false, false, null, null, null];
  xk[0] = false;
  xk[1] = true;
  let zk = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  zk.delta = 0;
  zk.timestamp = 0;
  zk.isProcessing = false;
  xk[2] = zk;
  let Ak = null;
  xk[3] = Ak;
  xk[4] = Ak;
  let Bk = L(() => {
    xk[0] = true;
  }), Dk = L(() => {
    xk[0] = true;
  }), Fk = L(() => {
    xk[0] = true;
  }), Hk = L(() => {
    xk[0] = true;
  }), Jk = L(() => {
    xk[0] = true;
  }), Kk = L(() => {
    xk[0] = true;
  }), Lk = L(() => {
    xk[0] = true;
  }), Mk = L(() => {
    xk[0] = true;
  }), yk = {
    setup: null,
    read: null,
    resolveKeyframes: null,
    preUpdate: null,
    update: null,
    preRender: null,
    render: null,
    postRender: null
  };
  yk.setup = Bk;
  yk.read = Dk;
  yk.resolveKeyframes = Fk;
  yk.preUpdate = Hk;
  yk.update = Jk;
  yk.preRender = Kk;
  yk.render = Lk;
  yk.postRender = Mk;
  xk[3] = () => {
    var yl = da.useManualTiming, Cl = xk[2].timestamp;
    if (!yl) {
      var zl, ul, vl, Al, Bl, Dl = performanceNow(), El = Dl;
    } else El = Cl;
    xk[0] = false;
    if (!yl) {
      if (xk[1]) xk[2].delta = 16.666666666666668;
      else {
        zl = El - xk[2].timestamp;
        if (zl > 40) Bl = 40;
        else Bl = zl;
        if (Bl < 1) Al = 1;
        else Al = Bl;
        xk[2].delta = Al;
      }
    }
    xk[2].timestamp = El;
    xk[2].isProcessing = true;
    yk.setup.process(xk[2]);
    yk.read.process(xk[2]);
    yk.resolveKeyframes.process(xk[2]);
    yk.preUpdate.process(xk[2]);
    yk.update.process(xk[2]);
    yk.preRender.process(xk[2]);
    yk.render.process(xk[2]);
    yk.postRender.process(xk[2]);
    xk[2].isProcessing = false;
    if (xk[0]) ul = wk;
    else ul = false;
    if (ul) {
      xk[1] = false;
      vl = xk[3];
      if (vl) vk(vl);
    }
  };
  xk[4] = () => {
    xk[0] = true;
    xk[1] = true;
    if (!xk[2].isProcessing) {
      var ul = xk[3];
      if (ul) vk(ul);
    }
  };
  let Ck = {
    setup: null,
    read: null,
    resolveKeyframes: null,
    preUpdate: null,
    update: null,
    preRender: null,
    render: null,
    postRender: null
  };
  Jf(Ck);
  Ck.setup = (ul, vl = false, wl = false) => M(xk, yk.setup, ul, vl, wl);
  Ck.read = (ul, vl = false, wl = false) => M(xk, yk.read, ul, vl, wl);
  Ck.resolveKeyframes = (ul, vl = false, wl = false) => M(xk, yk.resolveKeyframes, ul, vl, wl);
  Ck.preUpdate = (ul, vl = false, wl = false) => M(xk, yk.preUpdate, ul, vl, wl);
  Ck.update = (ul, vl = false, wl = false) => M(xk, yk.update, ul, vl, wl);
  Ck.preRender = (ul, vl = false, wl = false) => M(xk, yk.preRender, ul, vl, wl);
  Ck.render = (ul, vl = false, wl = false) => M(xk, yk.render, ul, vl, wl);
  Ck.postRender = (ul, vl = false, wl = false) => M(xk, yk.postRender, ul, vl, wl);
  let Gk = (tl) => Vi(yk, tl), Ik = xk[2], Ek = {
    schedule: null,
    cancel: null,
    state: null,
    steps: null
  };
  Ek.schedule = Ck;
  Ek.cancel = Gk;
  Ek.state = Ik;
  Ek.steps = yk;
  return Ek;
};
export {
  Tc
};
