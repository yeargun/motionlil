import { F } from "./part-430.js";
import { jb } from "./part-72.js";
import { qb } from "./part-74.js";
let rb = (a) => {
  let c = a.options.motionValue;
  if (c && c.updatedAt !== F.now()) jb(a, F.now(), false);
  a.isStopped = true;
  if (a.state != "idle") {
    qb(a);
    if (a.options.onStop) a.options.onStop();
  }
};
export {
  rb
};
