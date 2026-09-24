import { nc } from "./part-117.js";
import { rc } from "./part-120.js";
let jc = (a, b, c) => {
  nc(a, b);
  a.prev = b;
  a.prevUpdatedAt = null;
  a.prevFrameValue = null;
  if (c) rc(a);
  let d = a.stopPassiveEffect;
  if (d) d();
};
export {
  jc
};
