import { V } from "./part-442.js";
import { X } from "./part-443.js";
import { Y } from "./part-444.js";
let Z = function(a) {
  if (V.test(a)) return V.parse(a);
  return Y.test(a) ? Y.parse(a) : X.parse(a);
};
export {
  Z
};
