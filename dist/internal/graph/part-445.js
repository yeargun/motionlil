import { Z } from "./part-32.js";
import { $ } from "./part-33.js";
import { V } from "./part-442.js";
import { X } from "./part-443.js";
import { Y } from "./part-444.js";
import "./effect-499.js";
import "./effect-573.js";
let _ = {
  test: (a) => V.test(a) || X.test(a) || Y.test(a),
  parse: Z,
  transform: $,
  getAnimatableNone: (a) => {
    let b = Z(a);
    b.alpha = 0;
    return $(b);
  }
};
export {
  _
};
