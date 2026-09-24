import { R } from "./part-29.js";
import { V } from "./part-442.js";
import "./effect-499.js";
import "./effect-573.js";
let X = {
  test: R("#"),
  parse: function(a) {
    let c = (b) => a.length > 5 ? a.slice((2 * b | 0) + 1 | 0, (2 * b | 0) + 3 | 0) : a.slice(b + 1 | 0, b + 2 | 0).repeat(2), d = c(3);
    return {
      red: parseInt(c(0), 16),
      green: parseInt(c(1), 16),
      blue: parseInt(c(2), 16),
      alpha: d != "" ? parseInt(d, 16) / 255 : 1
    };
  },
  transform: V.transform
};
export {
  X
};
