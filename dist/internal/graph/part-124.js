import { getDefaultValueType } from "./part-123.js";
import { oa } from "./part-453.js";
import { Sc } from "./part-491.js";
import { Tc } from "./part-492.js";
import "./effect-499.js";
import "./effect-573.js";
let getAnimatableNone = function(a, b) {
  let c = getDefaultValueType(a), d = oa;
  if (c && (c === Sc || c === Tc)) d = c;
  return d.getAnimatableNone(b);
};
export {
  getAnimatableNone
};
