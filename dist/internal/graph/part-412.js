import { Xj } from "./part-591.js";
let Rj = (a) => {
  let b = a.trim().split(/\s+/);
  if (b.length !== 2) return;
  let c = Xj[b[0]], d = Xj[b[1]];
  if (c === void 0 || d === void 0) return;
  return [c, d];
};
export {
  Rj
};
