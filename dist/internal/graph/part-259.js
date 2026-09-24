import { z } from "./part-426.js";
import { y } from "./part-427.js";
import "./effect-499.js";
import "./effect-573.js";
let observeTimeline = function(a, b) {
  let c, d = (d2) => {
    let e = b.currentTime, g = (e == null ? 0 : e.value) / 100;
    if (c !== g) a(g);
    c = g;
  };
  y.preUpdate(d, true, false);
  return () => {
    z(d);
  };
};
export {
  observeTimeline
};
