import { z } from "./part-426.js";
import { y } from "./part-427.js";
import { A } from "./part-428.js";
import { F } from "./part-430.js";
let Ha = (a) => {
  let b = (b2) => {
    a(b2.timestamp);
  };
  return {
    start: (a2) => {
      y.update(b, a2 !== false, false);
    },
    stop: () => {
      z(b);
    },
    now: () => A.isProcessing ? A.timestamp : F.now()
  };
};
export {
  Ha
};
