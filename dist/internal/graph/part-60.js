import { velocityPerSecond } from "./part-465.js";
let Ma = (a, b, c) => {
  let d = Math.max(b - 5, 0);
  return velocityPerSecond(c - a(d), b - d);
};
export {
  Ma
};
