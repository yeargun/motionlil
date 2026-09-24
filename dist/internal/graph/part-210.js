import { we } from "./part-185.js";
let kf = (a) => {
  let c = a._animation;
  if (c) {
    c.stop();
    if (a.stopTimeline) (0, a.stopTimeline)();
  }
  let d = a.keyframeResolver;
  if (d) we(d);
};
export {
  kf
};
