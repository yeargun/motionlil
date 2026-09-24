import { z } from "./part-426.js";
import { y } from "./part-427.js";
import { F } from "./part-430.js";
import { secondsToMilliseconds } from "./part-432.js";
import "./effect-499.js";
import "./effect-573.js";
let delayInSeconds = function(a, b) {
  return ((a2, b2) => {
    let c = F.now(), d = (e) => {
      let f = e.timestamp - c;
      if (f >= b2) {
        z(d);
        a2(f - b2);
      }
    };
    y.setup(d, true, false);
    return () => z(d);
  })(a, secondsToMilliseconds(b));
};
export {
  delayInSeconds
};
