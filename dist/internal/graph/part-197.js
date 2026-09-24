import { millisecondsToSeconds } from "./part-433.js";
let Je = (a) => {
  let b = a.animation.effect, c = b && b.getComputedTiming ? b.getComputedTiming() : void 0;
  return millisecondsToSeconds(+(c ? c.duration || 0 : 0));
};
export {
  Je
};
