import { td } from "./part-142.js";
let yg = (vk, xk) => {
  var yk = td(vk);
  if (yk) {
    var wk = yk.variantChildren;
    if (wk) return wk.add(xk), () => {
      wk.delete(xk);
    };
  }
  return null;
};
export {
  yg
};
