import { ie } from "./part-177.js";
let ve = (a, b) => {
  a.state = "complete";
  a.onComplete(a.unresolvedKeyframes, a.finalKeyframe, b);
  ie(a);
};
export {
  ve
};
