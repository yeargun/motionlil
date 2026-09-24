import { motionValue } from "./part-14.js";
import { Hd } from "./part-152.js";
let Kd = (a, b, c, d) => {
  if (c === void 0) c = null;
  let e = a.props.values;
  if (e && e[b]) return e[b];
  let f = a.values.get(b) ?? null;
  if (f == null && d) {
    f = motionValue(c, {
      owner: a
    });
    Hd(a, b, f);
  }
  return f;
};
export {
  Kd
};
