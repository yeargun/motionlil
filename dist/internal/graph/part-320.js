import { Bb } from "./part-477.js";
import { sh } from "./part-551.js";
import { th } from "./part-552.js";
import { uh } from "./part-553.js";
import "./effect-499.js";
import "./effect-573.js";
let getDefaultTransition = function(a, b) {
  let c = b.keyframes;
  if (c.length > 2) return th;
  if (Bb.has(a)) {
    if (a.startsWith("scale")) return {
      type: "spring",
      stiffness: 550,
      damping: c[1] === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    };
    return sh;
  }
  return uh;
};
export {
  getDefaultTransition
};
