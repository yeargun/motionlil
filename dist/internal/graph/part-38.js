import { _ } from "./part-445.js";
let fa = (a, b) => {
  if (typeof a == "number") return b.trim().endsWith("/") ? a : 0;
  return _.test(a) ? _.getAnimatableNone(a) : a;
};
export {
  fa
};
