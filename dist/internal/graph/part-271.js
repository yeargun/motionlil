import { ec } from "./part-109.js";
import { hc } from "./part-112.js";
import { motionValue } from "./part-14.js";
import { z } from "./part-426.js";
import { y } from "./part-427.js";
import { Yb } from "./part-486.js";
import "./effect-499.js";
import "./effect-573.js";
let transformValue = function(a) {
  let b = [];
  Yb.current = b;
  let c = a();
  Yb.current = null;
  let d = motionValue(c), e = (b2) => hc(d, a()), f = b.map((a2) => ec(a2, "change", (a3, b2, c2) => {
    y.preRender(e, false, true);
  }));
  ec(d, "destroy", (a2, b2, c2) => {
    f.forEach((a3) => a3());
    z(e);
  });
  return d;
};
export {
  transformValue
};
