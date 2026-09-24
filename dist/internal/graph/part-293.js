import { _g } from "./part-292.js";
import { removeItem } from "./part-79.js";
let dh = function() {
  ih = null;
  let a = hh[0];
  if (a) eh(a);
};
let eh = (a) => {
  removeItem(hh, a);
  ih = a;
  _g(a).then((b) => {
    a.notifyReady(b);
    return b.finished;
  }).catch((b) => a.notifyReject(b)).finally(dh);
};
let fh = function(a) {
  for (let a2 = hh.length - 1; a2 >= 0; --a2) {
    let b2 = hh[a2];
    if (b2.options.interrupt == "immediate") {
      let c = hh.slice(0, a2 + 1 | 0).map((a3) => a3.update), d = hh.slice(a2 + 1 | 0);
      b2.update = () => {
        c.forEach((a3) => {
          a3();
        });
      };
      hh = [b2, ...d];
      break;
    }
  }
  let b = hh[0];
  if (!ih || b && b.options.interrupt == "immediate") dh();
};
let hh = [];
let ih = null;
export {
  dh,
  eh,
  fh,
  hh,
  ih
};
