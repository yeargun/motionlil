import { Ff } from "./part-218.js";
import { gj } from "./part-394.js";
import { nj } from "./part-400.js";
import "./effect-499.js";
import "./effect-573.js";
let animateSequence = function(a, b = null) {
  let c = [];
  gj(a, b, null, (a2, b2, d2) => {
    c = c.concat(nj(a2, b2, d2, null));
  });
  let d = c, e = {
    animations: []
  };
  Ff(e, d);
  return e;
};
export {
  animateSequence
};
