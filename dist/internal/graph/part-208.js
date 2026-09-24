import { df } from "./part-207.js";
import { Al } from "./part-5.js";
import { cf } from "./part-515.js";
import { ff } from "./part-517.js";
import { gf } from "./part-518.js";
import "./effect-499.js";
import "./effect-573.js";
let supportsBrowserAnimation = function(a) {
  let c = a.motionValue, d = c ? c.owner : void 0;
  if (!Al(d ? d.current : void 0)) return false;
  let f = d.props, g = a.name;
  return gf() && typeof g == "string" && (cf.has(g) || ff.includes(g) && df(a.keyframes)) && (g != "transform" || !f.transformTemplate) && !f.onUpdate && !a.repeatDelay && a.repeatType !== "mirror" && a.damping !== 0 && a.type !== "inertia";
};
export {
  supportsBrowserAnimation
};
