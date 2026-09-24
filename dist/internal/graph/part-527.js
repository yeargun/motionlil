import { motionValue } from "./part-14.js";
import { d } from "./part-17.js";
import { Of } from "./part-229.js";
import { Pf } from "./part-230.js";
import { Sf } from "./part-233.js";
import { Tf } from "./part-234.js";
import { addAttrValue } from "./part-235.js";
import { addStyleValue } from "./part-238.js";
import { y } from "./part-427.js";
import { ag } from "./part-526.js";
import { Dl } from "./part-7.js";
import "./effect-499.js";
import "./effect-573.js";
let bg = Sf(Tf(function(a, b, c, e) {
  if (c.startsWith("path")) return ((a2, b2, c2, d2) => {
    y.render((b3) => a2.setAttribute("pathLength", "1"), false, false);
    if (c2 == "pathOffset") return Of(b2, c2, d2, (d3) => {
      a2.setAttribute("stroke-dashoffset", `${-b2.latest[c2]}`);
    }, null, true);
    if (Pf(b2, "stroke-dasharray") == null) Of(b2, "stroke-dasharray", motionValue("1 1"), (c3) => {
      let d3 = b2.latest.pathLength ?? 1;
      a2.setAttribute("stroke-dasharray", `${d3} ${b2.latest.pathSpacing ?? 1 - d3}`);
    }, null, true);
    return Of(b2, c2, d2, null, Pf(b2, "stroke-dasharray"), true);
  })(a, b, c, e);
  if (c.startsWith("attr")) return addAttrValue(a, b, Dl(c, ag, (a2, b2) => b2.toLowerCase()), e);
  return d(a.style, c) ? addStyleValue(a, b, c, e) : addAttrValue(a, b, c, e);
}));
export {
  bg
};
