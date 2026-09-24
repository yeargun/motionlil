import { pg } from "./part-254.js";
import { sg } from "./part-533.js";
let qg = function(a) {
  let b = a.target, c = a.borderBoxSize, d = sg.get(b);
  if (d) d.forEach((a2) => {
    a2(b, {
      width: pg("inlineSize", "width", "offsetWidth", b, c),
      height: pg("blockSize", "height", "offsetHeight", b, c)
    });
  });
};
export {
  qg
};
