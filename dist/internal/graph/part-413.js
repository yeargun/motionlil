import { Rj } from "./part-412.js";
let Tj = (a, b) => {
  let c = ((a2) => {
    if (a2.length !== 2) return;
    let b2 = [];
    for (let c2 = 0; c2 < 2; ++c2) {
      let d = a2[c2];
      if (Array.isArray(d)) b2.push(d);
      else if (typeof d == "string") {
        let a3 = Rj(d);
        if (!a3) return;
        b2.push(a3);
      } else return;
    }
    return b2;
  })(a);
  if (!c) return false;
  for (let a2 = 0; a2 < 2; ++a2) {
    let d = c[a2], e = b[a2];
    if (d[0] !== e[0] || d[1] !== e[1]) return false;
  }
  return true;
};
export {
  Tj
};
