import { D, E } from "./part-24.js";
import { a } from "./part-425.js";
import { A } from "./part-428.js";
import "./effect-499.js";
import "./effect-573.js";
let F = {
  now: () => {
    if (D == null) E(A.isProcessing || a.useManualTiming === true ? A.timestamp : performance.now());
    return D;
  },
  set: E
};
export {
  F
};
