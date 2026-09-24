import { pixelsToPercent } from "./part-346.js";
import { wa } from "./part-457.js";
import "./effect-499.js";
import "./effect-573.js";
let Lh = {
  correct: (a, b) => {
    let c = b.target;
    if (!c) return a;
    if (typeof a == "string") {
      if (!wa.test(a)) return a;
      a = parseFloat(a);
    }
    let e = a;
    return `${pixelsToPercent(e, c.x)}% ${pixelsToPercent(e, c.y)}%`;
  }
};
export {
  Lh
};
