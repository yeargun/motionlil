import { defaultTransformValue } from "./part-167.js";
import { readTransformValue } from "./part-169.js";
import { isCSSVariableName } from "./part-25.js";
import { Gh } from "./part-340.js";
import { buildHTMLStyles } from "./part-344.js";
import { renderHTML } from "./part-345.js";
import { scrapeMotionValuesFromProps } from "./part-349.js";
import { Oh } from "./part-350.js";
import { Bb } from "./part-477.js";
let Ph = {
  build: (a) => {
    buildHTMLStyles(a.renderState, a.latestValues, a.props.transformTemplate);
  },
  render: renderHTML,
  scrape: scrapeMotionValuesFromProps,
  read: (a, b, c) => {
    if (Bb.has(c)) {
      let d2 = a.projection;
      return d2 && d2.isProjecting ? defaultTransformValue(c) : readTransformValue(b, c);
    }
    let d = Oh(b), e = (isCSSVariableName(c) ? d.getPropertyValue(c) : d[c]) || 0;
    return typeof e == "string" ? e.trim() : e;
  },
  baseTarget: (a, b) => {
    let c = a.style;
    return c ? c[b] : void 0;
  },
  removeValue: Gh
};
export {
  Ph
};
