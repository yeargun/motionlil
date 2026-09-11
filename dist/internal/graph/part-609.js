import { oa } from "./part-38.js";
import { il } from "./part-536.js";
var Gf = (Rz) => {
  if (Rz < 0.5) return 0;
  if (Rz > 0.95) return 1;
  return il(/* @__PURE__ */ oa(0.5, 0.95, Rz));
};
export {
  Gf
};
