import { Tj } from "./part-413.js";
import { Uj } from "./part-414.js";
import { Wj } from "./part-590.js";
let Vj = (a) => {
  if (!a) return {
    rangeStart: `${"contain"} 0%`,
    rangeEnd: `${"contain"} 100%`
  };
  for (let b = 0; b < 4; ++b) {
    let c = Wj[b];
    if (Tj(a, c[0])) return Uj(c[1]);
  }
};
export {
  Vj
};
