import { observeTimeline } from "./part-259.js";
import { scrollInfo } from "./part-410.js";
import { Zj } from "./part-417.js";
let bk = (a, b) => {
  if (a.length === 2 || b && (b.target || b.offset)) return scrollInfo((c) => {
    a((b.axis === "x" ? c.x : c.y).progress, c);
  }, b);
  return observeTimeline(a, Zj(b));
};
export {
  bk
};
