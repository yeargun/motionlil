import { oa } from "./part-38.js";
import { hl } from "./part-535.js";
var Ff = (Rz) => {
  if (Rz < 0) return 0;
  if (Rz > 0.5) return 1;
  return hl(/* @__PURE__ */ oa(0, 0.5, Rz));
};
export {
  Ff
};
