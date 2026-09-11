import { w } from "./part-473.js";
import { Qk } from "./part-513.js";
var Xk = {
  test: Qk,
  parse: w.parse,
  transform: (Oz) => {
    if ("number" == typeof Oz) return Math.round(Oz);
    return 0;
  }
};
export {
  Xk
};
