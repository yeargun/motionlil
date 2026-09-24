import { isEasingArray } from "./part-469.js";
import { wrap } from "./part-550.js";
import "./effect-499.js";
import "./effect-573.js";
let getEasingForSegment = (a, b) => isEasingArray(a) ? a[wrap(0, a.length, b)] : a;
export {
  getEasingForSegment
};
