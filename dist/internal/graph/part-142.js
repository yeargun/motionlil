import { ec } from "./part-109.js";
import { wd } from "./part-145.js";
import { y } from "./part-427.js";
import { Bb } from "./part-477.js";
let sd = (a, b, c) => {
  let e = a.valueSubscriptions, f = e.get(b) ?? null;
  if (f) f();
  let g = Bb.has(b), i = ec(c, "change", (c2, d, e2) => {
    a.latestValues[b] = c2;
    if (a.props.onUpdate) y.preRender(a.notifyUpdate, false, false);
    let f2 = a.projection;
    if (g && f2) f2.isTransformDirty = true;
    wd(a);
  }), j;
  if (typeof window != "undefined") {
    let d = window.MotionCheckAppearSync;
    if (d) j = d(a, b, c);
  }
  e.set(b, () => {
    i();
    if (j) j();
  });
};
export {
  sd
};
