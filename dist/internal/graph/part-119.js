import { F } from "./part-430.js";
import { velocityPerSecond } from "./part-465.js";
import { Xb } from "./part-485.js";
let pc = (a) => {
  let b = F.now();
  if (a.canTrackVelocity !== true || a.prevFrameValue == null || b - a.updatedAt > Xb) return 0;
  return velocityPerSecond(parseFloat(a.current) - parseFloat(a.prevFrameValue), Math.min(a.updatedAt - a.prevUpdatedAt, Xb));
};
export {
  pc
};
