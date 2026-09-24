import { Pc } from "./part-121.js";
import { da } from "./part-36.js";
import { ea } from "./part-37.js";
import { ha } from "./part-39.js";
import { Rc } from "./part-490.js";
import { Cl } from "./part-6.js";
let Sc = {
  test: ha,
  parse: da,
  createTransformer: ea,
  getAnimatableNone: (a) => {
    let b = Cl(a, Rc);
    return b ? b.map(Pc).join(" ") : a;
  }
};
export {
  Sc
};
