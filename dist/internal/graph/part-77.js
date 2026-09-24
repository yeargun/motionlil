import { Ma } from "./part-60.js";
let ub = (a) => {
  let c = a.currentTime;
  if (c <= 0) return a.options.velocity || 0;
  let d = a.generator;
  if (d.velocity) return d.velocity(c);
  return Ma((a2) => d.next(a2).value, c, d.next(c).value);
};
export {
  ub
};
