import { progress } from "./part-470.js";
let Ci = (a, b, c) => (d) => d < a ? 0 : d > b ? 1 : c(progress(a, b, d));
export {
  Ci
};
