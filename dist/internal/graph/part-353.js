import { Bc } from "./part-519.js";
import { Lc } from "./part-601.js";
import { Cf } from "./part-602.js";
let ni = () => {
  if (Lc.length > 0) return;
  var wk, vk = Cf - 1 | 0, xk = vk;
  for (; xk >= 0; ) {
    Lc.push(Bc[xk] || "");
    wk = xk - 1;
    xk = wk;
  }
};
export {
  ni
};
