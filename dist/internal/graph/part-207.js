import { ef } from "./part-516.js";
let df = (a) => {
  for (let b = 0; b < a.length; ++b) {
    let c = a[b];
    if (typeof c == "string" && ef.test(c)) return true;
  }
  return false;
};
export {
  df
};
