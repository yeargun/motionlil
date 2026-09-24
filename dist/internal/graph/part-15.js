import { setStyle } from "./part-187.js";
import { Le } from "./part-199.js";
import { Me } from "./part-200.js";
import { Oe, Re } from "./part-202.js";
import { Te } from "./part-203.js";
import { F } from "./part-430.js";
import { clamp } from "./part-431.js";
import { fk } from "./part-476.js";
import { Za } from "./part-68.js";
import { vb } from "./part-73.js";
import { rb } from "./part-75.js";
import { tb } from "./part-76.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let $e;
let _e;
let Ze = (a, b) => {
  Re(a, ((a2) => {
    Te(a2);
    Za(a2);
    return a2;
  })(b), Xe);
  let d = b.startTime;
  if (d !== void 0 && b.autoplay !== false) Me(a, d);
};
let Xe = Object.create(Oe);
let Ye = Rl(($e = (a, b) => {
  let c = {};
  Ze(c, a);
  return c;
}, _e = {
  updateMotionValue: {
    value: fk((a, b) => {
      ((a2, b2) => {
        let c = a2.options, d = c.motionValue;
        if (!d) return;
        if (b2 !== void 0) {
          d.set(b2);
          return;
        }
        let e = vb(Object.assign({}, c, {
          motionValue: void 0,
          onUpdate: void 0,
          onComplete: void 0,
          autoplay: false
        })), f = Le(a2), g = Math.max(10, F.now() - f), h = clamp(0, 10, g - 10), i = tb(e, g).value, j = c.element, k = c.name;
        if (j && k) setStyle(j, k, i);
        d.setWithVelocity(tb(e, Math.max(g - h, 0)).value, i, h);
        rb(e);
      })(a, b);
    })
  }
}, $e), Xe, _e);
export {
  $e,
  Xe,
  Ye,
  Ze,
  _e
};
