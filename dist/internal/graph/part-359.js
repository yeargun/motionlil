import { pd } from "./part-122.js";
import { pi } from "./part-358.js";
import { Qa } from "./part-520.js";
import { Df } from "./part-603.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let qi = (vk) => {
  if (!vk) return null;
  if (!vk.isControllingVariants) {
    var wk = {
      initial: null,
      animate: null,
      exit: null,
      whileHover: null,
      whileDrag: null,
      whileFocus: null,
      whileTap: null,
      whileInView: null
    }, Gk = null;
    wk.initial = Gk;
    wk.animate = Gk;
    wk.exit = Gk;
    wk.whileHover = Gk;
    wk.whileDrag = Gk;
    wk.whileFocus = Gk;
    wk.whileTap = Gk;
    wk.whileInView = Gk;
    if (vk.parent) {
      var Ak = qi(vk.parent);
      if (Ak) {
        var xk, Kk, Bk, Ik, Ck, Dk, zk, Jk, Ek, Fk, Hk, yk = Ak;
      } else yk = wk;
      zk = yk;
    } else zk = wk;
    if (null != (vk.props.initial ?? null)) zk.initial = vk.props.initial ?? null;
    return zk;
  }
  xk = {
    initial: null,
    animate: null,
    exit: null,
    whileHover: null,
    whileDrag: null,
    whileFocus: null,
    whileTap: null,
    whileInView: null
  };
  Hk = null;
  xk.initial = Hk;
  xk.animate = Hk;
  xk.exit = Hk;
  xk.whileHover = Hk;
  xk.whileDrag = Hk;
  xk.whileFocus = Hk;
  xk.whileTap = Hk;
  xk.whileInView = Hk;
  for (Jk = 0; Jk < Df; Jk = Jk + 1) {
    Kk = Qa[Jk] || "";
    Bk = vk.props[Kk];
    if (Bk !== void 0) {
      Ik = Bk;
      Ck = pd(Ik);
      if (!Ck) {
        if ("boolean" == typeof Ik) {
          Dk = false == Ik;
          Ek = Dk;
        } else Ek = Ck;
        Fk = Ek;
      } else Fk = Ck;
      if (Fk) pi(xk, Kk, Ik);
    }
  }
  return xk;
};
export {
  qi
};
