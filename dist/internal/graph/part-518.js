import { memo } from "./part-188.js";
let gf = memo(() => typeof Element != "undefined" && "animate" in Element.prototype);
export {
  gf
};
