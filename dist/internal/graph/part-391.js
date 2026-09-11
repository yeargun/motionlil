import { ee } from "./part-279.js";
import { ge } from "./part-281.js";
import { Ie } from "./part-392.js";
let He = (vk) => {
  var yk = vk.parent;
  if (!yk) return null;
  if (ee(yk.latestValues)) {
    var wk, xk = true;
  } else {
    wk = ge(yk.latestValues);
    xk = wk;
  }
  if (xk) return null;
  if (Ie(yk)) return yk;
  return He(yk);
};
export {
  He
};
