import { bc } from "./part-107.js";
import { dc } from "./part-108.js";
import { kc } from "./part-114.js";
import { F } from "./part-430.js";
let nc = (a, b) => {
  if (a.updatedAt != F.now()) {
    a.prevFrameValue = a.current;
    a.prevUpdatedAt = a.updatedAt;
  }
  a.prev = a.current;
  bc(a, b);
  if (a.current !== a.prev) {
    dc(a, "change", a.current);
    let b2 = a.dependents;
    if (b2) {
      {
        let a2 = b2, c = 0;
        for (; c < a2.length; ++c) {
          let b3 = a2[c];
          kc(b3);
        }
      }
    }
  }
};
export {
  nc
};
