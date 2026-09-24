import { mixNumber } from "./part-47.js";
import { getEasingForSegment } from "./part-568.js";
let cj = (a, b, c, d, e, f) => {
  ((a2, b2, c2) => {
    for (let d2 = 0; d2 < a2.length; d2 = d2 + 1 | 0) {
      let e2 = a2[d2];
      if (e2.at > b2 && e2.at < c2) {
        a2.splice(d2, 1);
        d2 = d2 - 1 | 0;
      }
    }
  })(a, e, f);
  for (let g = 0; g < b.length; ++g) a.push({
    value: b[g],
    at: mixNumber(e, f, d[g]),
    easing: getEasingForSegment(c, g)
  });
};
export {
  cj
};
