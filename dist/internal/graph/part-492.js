import { analyseComplexValue } from "./part-34.js";
import { da } from "./part-36.js";
import { ea } from "./part-37.js";
import { ha } from "./part-39.js";
let Tc = {
  test: ha,
  parse: da,
  createTransformer: ea,
  getAnimatableNone: (a) => {
    let b = analyseComplexValue(a).values;
    return ea(a)(b.map((a2) => {
      if (typeof a2 == "number") return 0;
      if ("object" == typeof a2) {
        let b2 = {
          __proto__: null
        };
        Object.assign(b2, a2).alpha = 1;
        return b2;
      }
      return a2;
    }));
  }
};
export {
  Tc
};
