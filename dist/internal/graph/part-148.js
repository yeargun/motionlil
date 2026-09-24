import { updateMotionValuesFromProps } from "./part-131.js";
import { pd } from "./part-139.js";
import { wd } from "./part-145.js";
import { Cd } from "./part-149.js";
import { Pd } from "./part-158.js";
import { id } from "./part-503.js";
let Bd = (a, b, c) => {
  if (b.transformTemplate || a.props.transformTemplate) wd(a);
  a.prevProps = a.props;
  a.props = b;
  a.prevPresenceContext = a.presenceContext;
  a.presenceContext = c;
  let e = a.propEventSubscriptions;
  {
    let c2 = id, d = 0;
    for (; d < c2.length; ++d) {
      let f = c2[d] ?? "";
      {
        let c3 = e[f];
        if (c3) {
          c3();
          delete e[f];
        }
        let d2 = b["on" + f];
        if (d2) e[f] = Pd(a, f, d2);
      }
    }
  }
  a.prevMotionValues = updateMotionValuesFromProps(a, pd(a, b, a.prevProps || {}, a), a.prevMotionValues);
  if (a.type !== "object") Cd(a);
};
export {
  Bd
};
