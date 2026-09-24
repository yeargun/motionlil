import { millisecondsToSeconds } from "./part-433.js";
let Ie = (a) => {
  let b = +a.animation.currentTime || 0;
  return millisecondsToSeconds(b);
};
export {
  Ie
};
