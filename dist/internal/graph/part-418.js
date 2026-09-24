import { observeTimeline } from "./part-259.js";
import { Qj } from "./part-411.js";
import { Vj } from "./part-415.js";
import { Zj } from "./part-417.js";
let _j = (a, b) => {
  let c = Zj(b), d = b.target, e = d ? Vj(b.offset) : void 0, f = d ? Qj(d) && !!e : Qj(), g = {
    timeline: f ? c : void 0
  };
  if (e && f) {
    g.rangeStart = e.rangeStart;
    g.rangeEnd = e.rangeEnd;
  }
  g.observe = (a2) => {
    a2.pause();
    return observeTimeline((b2) => {
      let c2 = a2.iterationDuration;
      a2.time = c2 * b2;
    }, c);
  };
  return a.attachTimeline(g);
};
export {
  _j
};
