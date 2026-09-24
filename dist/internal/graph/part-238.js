import { motionValue } from "./part-14.js";
import { Of } from "./part-229.js";
import { Pf } from "./part-230.js";
import { Sf } from "./part-233.js";
import { Tf } from "./part-234.js";
import { isHTMLElement } from "./part-236.js";
import { Wf } from "./part-237.js";
import { Bb } from "./part-477.js";
import { Yf } from "./part-525.js";
import "./effect-499.js";
import "./effect-573.js";
let addStyleValue = function(a, b, c, d) {
  let e = a.style, f = null, g = null;
  if (Bb.has(c)) {
    if (Pf(b, "transform") == null) {
      if (!isHTMLElement(a) && Pf(b, "transformBox") == null) addStyleValue(a, b, "transformBox", motionValue("fill-box"));
      Of(b, "transform", motionValue("none"), (a2) => {
        e.transform = Wf(b);
      }, null, true);
    }
    g = Pf(b, "transform");
  } else if (Yf.includes(c)) {
    if (Pf(b, "transformOrigin") == null) Of(b, "transformOrigin", motionValue(""), (a2) => {
      e.transformOrigin = `${b.latest.originX ?? "50%"} ${b.latest.originY ?? "50%"} ${b.latest.originZ ?? 0}`;
    }, null, true);
    g = Pf(b, "transformOrigin");
  } else if (c.startsWith("--")) f = (a2) => e.setProperty(c, b.latest[c]);
  else f = (a2) => {
    e[c] = b.latest[c];
  };
  return Of(b, c, d, f, g, true);
};
let Zf = Sf(Tf(addStyleValue));
export {
  Zf,
  addStyleValue
};
