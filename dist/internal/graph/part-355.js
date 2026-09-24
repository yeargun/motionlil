import { isMotionValue } from "./part-126.js";
import { scrapeMotionValuesFromProps } from "./part-349.js";
import { Ab } from "./part-477.js";
import "./effect-499.js";
import "./effect-573.js";
let ii = {
  scrapeMotionValuesFromProps: function(a, b, c) {
    let d = scrapeMotionValuesFromProps(a, b, c);
    for (let c2 in a) if (isMotionValue(a[c2]) || isMotionValue(b[c2])) d[Ab.indexOf(c2) != -1 ? "attr" + c2.charAt(0).toUpperCase() + c2.slice(1) : c2] = a[c2];
    return d;
  }
}.scrapeMotionValuesFromProps;
export {
  ii
};
