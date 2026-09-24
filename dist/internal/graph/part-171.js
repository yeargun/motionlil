import { Kd } from "./part-155.js";
import { Ab } from "./part-477.js";
let be = (a) => {
  let b = [];
  Ab.forEach((c) => {
    if (c != "x" && c != "y" && c != "z") {
      let d = Kd(a, c, null, false);
      if (d != null) {
        b.push([c, d.get()]);
        d.set(c.startsWith("scale") ? 1 : 0);
      }
    }
  });
  return b;
};
export {
  be
};
