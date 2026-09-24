import { O } from "./part-28.js";
import { _ } from "./part-445.js";
import { ia } from "./part-447.js";
import { ja } from "./part-448.js";
let ca = (a) => {
  let b = a.split, c = a.types, d = b.length;
  return (a2) => {
    let e = "";
    for (let f = 0; f < d; ++f) {
      e = e + (b[f] ?? "");
      let d2 = a2[f];
      if (d2 != null) {
        let a3 = c[f] ?? "";
        if (a3 == ia) e = e + `${O(d2)}`;
        else if (a3 == ja) e = e + `${_.transform(d2)}`;
        else e = e + `${d2}`;
      }
    }
    return e;
  };
};
export {
  ca
};
