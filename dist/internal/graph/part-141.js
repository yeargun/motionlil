import { callMethod2, isFunction } from "./../motion-dom/dom-host.js";
import { pg } from "./part-125.js";
import { sg } from "./part-132.js";
import { sd } from "./part-140.js";
import { Bg } from "./part-148.js";
import { Dc } from "./part-552.js";
let xg = (vk, wk, yk) => {
  if (wk.transformTemplate) {
    var Bk, zk, Ek, Gk, Fk, Ak, xk, Dk, Ck = true;
  } else {
    Bk = !!vk.props.transformTemplate;
    Ck = Bk;
  }
  if (Ck) sd(vk);
  vk.prevProps = vk.props;
  vk.props = wk;
  vk.prevPresenceContext = vk.presenceContext;
  vk.presenceContext = yk;
  for (Dk = 0; Dk < Dc.length; Dk = Dk + 1) {
    zk = Dc[Dk] || "";
    Ek = vk.propEventSubscriptions.get(zk);
    if (Ek) {
      Ek();
      vk.propEventSubscriptions.delete(zk);
    }
    Gk = wk[`on${zk}`];
    if (Gk) {
      Fk = vk.propEventSubscriptions;
      Fk.set(zk, Bg(vk, zk, /* @__PURE__ */ ((tl) => (ul, vl, wl) => {
        if (isFunction(tl)) callMethod2(tl, "call", null, ul);
      })(Gk)));
    }
  }
  Ak = vk.prevMotionValues;
  vk.prevMotionValues = pg(vk, sg(vk, wk, vk.prevProps, vk), Ak);
  xk = vk.handleChildMotionValueHook;
  if (xk) xk();
};
export {
  xg
};
