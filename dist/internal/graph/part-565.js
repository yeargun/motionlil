import { getDefaultValueType } from "./part-123.js";
import { camelToDash } from "./part-226.js";
import { Gh } from "./part-340.js";
import { Oh } from "./part-350.js";
import { buildSVGAttrs } from "./part-353.js";
import { renderSVG } from "./part-354.js";
import { ii } from "./part-355.js";
import { Bb } from "./part-477.js";
import { gi } from "./part-563.js";
import { hi } from "./part-564.js";
let ji = {
  build: (a) => {
    buildSVGAttrs(a.renderState, a.latestValues, !!a.isSVGTag, a.props.transformTemplate, a.props.style);
  },
  render: renderSVG,
  scrape: ii,
  read: (a, b, c) => {
    if (Bb.has(c)) {
      let a2 = getDefaultValueType(c);
      return a2 ? a2.default || 0 : 0;
    }
    if (gi.includes(c)) {
      let a2 = Oh(b)[c];
      if (typeof a2 == "string") {
        if (a2 != "") return a2.trim();
      }
    }
    return b.getAttribute(hi.has(c) ? c : camelToDash(c));
  },
  baseTarget: (a, b) => a[b],
  removeValue: Gh
};
export {
  ji
};
