import { yj } from "./part-578.js";
let xj = (a, b, c) => {
  let d = 0;
  if (a in yj) a = yj[a];
  if (typeof a == "string") {
    let b2 = a, c2 = parseFloat(b2);
    if (b2.endsWith("px")) d = c2;
    else if (b2.endsWith("%")) a = c2 / 100;
    else if (b2.endsWith("vw")) {
      let a2 = document.documentElement.clientWidth;
      d = c2 / 100 * a2;
    } else if (b2.endsWith("vh")) {
      let a2 = document.documentElement.clientHeight;
      d = c2 / 100 * a2;
    } else a = c2;
  }
  if (typeof a == "number") d = b * a;
  return c + d;
};
export {
  xj
};
