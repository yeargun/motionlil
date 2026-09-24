import { camelToDash } from "./part-226.js";
import { renderHTML } from "./part-345.js";
import { hi } from "./part-564.js";
import "./effect-499.js";
import "./effect-573.js";
let renderSVG = function(a, b, c, d) {
  renderHTML(a, b, void 0, d);
  let e = b.attrs;
  for (let b2 in e) a.setAttribute(hi.has(b2) ? b2 : camelToDash(b2), e[b2]);
};
export {
  renderSVG
};
