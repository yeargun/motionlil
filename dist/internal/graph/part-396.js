import { motionValue } from "./part-14.js";
import { gj } from "./part-394.js";
let ij = (a, b, c, d) => {
  let e = [];
  gj(a.map((a2) => {
    if (Array.isArray(a2) && typeof a2[0] == "function") {
      let b2 = motionValue(0);
      b2.on("change", a2[0]);
      let c2 = a2.length;
      return c2 == 1 ? [b2, [0, 1]] : c2 == 2 ? [b2, [0, 1], a2[1]] : [b2, a2[1], a2[2]];
    }
    return a2;
  }), b, c, (a2, b2, c2) => {
    e = e.concat(d(a2, b2, c2, null));
  });
  return e;
};
export {
  ij
};
