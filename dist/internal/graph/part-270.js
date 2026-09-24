import { dc } from "./part-108.js";
import { ec } from "./part-109.js";
import { gc } from "./part-111.js";
import { hc } from "./part-112.js";
import { jc } from "./part-113.js";
import { oc } from "./part-118.js";
import { pc } from "./part-119.js";
import { isMotionValue } from "./part-126.js";
import { Dg } from "./part-267.js";
import { Eg } from "./part-268.js";
import { y } from "./part-427.js";
import { Fg } from "./part-537.js";
import { vb } from "./part-73.js";
import { rb } from "./part-75.js";
import { ub } from "./part-77.js";
import "./effect-499.js";
import "./effect-573.js";
let attachFollow = function(a, b, c = null) {
  let d = oc(a), e = null, f = d, g = null, h = typeof d == "string" ? d.replace(Fg, "") : null, i = () => {
    let b2 = e;
    if (b2) {
      rb(b2);
      e = null;
    }
    a.animation = null;
  }, k = (b2) => {
    (() => {
      let b3 = Eg(oc(a)), d3 = Eg(f);
      if (b3 == d3) {
        i();
        return;
      }
      let h2 = e, j = h2 ? ub(h2) : pc(a);
      i();
      e = vb(Object.assign({
        keyframes: [b3, d3],
        velocity: j,
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01
      }, c, {
        onUpdate: g
      }));
    })();
    let d2 = e;
    a.animation = d2;
    dc(a, "animationStart");
    if (d2) d2.then(() => {
      a.animation = null;
      dc(a, "animationComplete");
    }, null);
  };
  gc(a, (a2, b2) => {
    f = a2;
    g = (a3) => b2(Dg(a3, h));
    y.postRender(k, false, false);
  }, i);
  if (isMotionValue(b)) {
    let d2 = c != null && c.skipInitialAnimation == true, e2 = b.on("change", (b2) => {
      if (d2) {
        d2 = false;
        jc(a, Dg(b2, h), false);
      } else hc(a, Dg(b2, h));
    }), f2 = ec(a, "destroy", (a2, b2, c2) => e2());
    return () => {
      e2();
      f2();
    };
  }
  return i;
};
export {
  attachFollow
};
