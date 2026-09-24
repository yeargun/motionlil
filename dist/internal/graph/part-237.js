import { Ab } from "./part-477.js";
import { Xf } from "./part-524.js";
let Wf = (a) => {
  let b = "", c = true;
  {
    let d2 = Ab, e = 0;
    for (; e < d2.length; ++e) {
      let f = d2[e] ?? "";
      {
        let d3 = a.latest[f];
        if (d3 != null) {
          let a2 = f.startsWith("scale") ? 1 : 0;
          if (!(typeof d3 == "number" ? d3 == a2 : parseFloat(d3) == a2)) {
            c = false;
            b = b + `${Xf[f] ?? f}(${d3}) `;
          }
        }
      }
    }
  }
  let d = a.latest.pathRotation;
  if (d) {
    c = false;
    b = b + (typeof d == "number" ? `rotate(${d}deg) ` : `rotate(${d}) `);
  }
  return c ? "none" : b.trim();
};
export {
  Wf
};
