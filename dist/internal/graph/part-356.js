import { $h } from "./part-336.js";
import { ni } from "./part-353.js";
import { ba } from "./part-354.js";
function oi(vk, wk) {
  ni();
  vk.visualElement = wk;
  vk.typeStates = /* @__PURE__ */ new Map();
  vk.isInitialRender = true;
  vk.wasReset = false;
  vk.animateFn = null;
  var xk = vk.typeStates, Ek = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Ek, true);
  xk.set("animate", Ek);
  var yk = vk.typeStates, Fk = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Fk, false);
  yk.set("whileInView", Fk);
  var zk = vk.typeStates, Gk = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Gk, false);
  zk.set("whileHover", Gk);
  var Ak = vk.typeStates, Hk = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Hk, false);
  Ak.set("whileTap", Hk);
  var Bk = vk.typeStates, Ik = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Ik, false);
  Bk.set("whileDrag", Ik);
  var Ck = vk.typeStates, Jk = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Jk, false);
  Ck.set("whileFocus", Jk);
  var Dk = vk.typeStates, Kk = {
    isActive: false,
    protectedKeys: null,
    needsAnimating: null,
    prevResolvedValues: null,
    prevProp: null
  };
  ba(Kk, false);
  Dk.set("exit", Kk);
  vk.animateFn = (_k) => {
    var bl, cl, dl, $k = [], al = 0;
    for (; al < _k.length; al = al + 1) {
      bl = _k[al];
      cl = vk.visualElement;
      dl = bl.animation;
      $k.push($h(cl, dl, bl.options));
    }
    if (0 == $k.length) return Promise.resolve(true);
    return Promise.all($k).then((ul) => true);
  };
}
export {
  oi
};
