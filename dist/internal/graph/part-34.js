import { _ } from "./part-445.js";
import { ia } from "./part-447.js";
import { ja } from "./part-448.js";
import { ka } from "./part-449.js";
import { la } from "./part-450.js";
import { ma } from "./part-451.js";
import { na } from "./part-452.js";
import "./effect-499.js";
import "./effect-573.js";
let analyseComplexValue = function(a) {
  let b = [], g = {
    color: [],
    number: [],
    var: []
  }, d = [], e = 0, h = `${a}`.replace(na, (a2) => {
    if (_.test(a2)) {
      g.color.push(e);
      d.push(ja);
      b.push(_.parse(a2));
    } else if (a2.startsWith(la)) {
      g.var.push(e);
      d.push(ka);
      b.push(a2);
    } else {
      g.number.push(e);
      d.push(ia);
      b.push(parseFloat(a2));
    }
    e = e + 1 | 0;
    return ma;
  }).split(ma);
  return {
    values: b,
    split: h,
    indexes: g,
    types: d
  };
};
export {
  analyseComplexValue
};
