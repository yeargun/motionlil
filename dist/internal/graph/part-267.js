import { setValues } from "./../motion-dom/dom-host.js";
import { Na } from "./part-252.js";
import { th } from "./part-253.js";
import { wh } from "./part-258.js";
let be = (vk) => {
  if (!wh(vk[15])) Na(":root", {
    __proto__: null,
    "view-transition-name": "none"
  });
  Na("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
    __proto__: null,
    "animation-timing-function": "linear !important"
  });
  var xk, yk, wk, zk = 0;
  for (; zk < vk[6].length; zk = zk + 1) {
    xk = vk[6][zk] || "";
    if (!vk[7].has(xk)) continue;
    Na(`::view-transition-group(${xk})`, {
      __proto__: null,
      overflow: "clip"
    });
    Na(`::view-transition-old(${xk}), ::view-transition-new(${xk})`, {
      __proto__: null,
      width: "100%",
      height: "100%",
      "object-fit": "cover"
    });
  }
  for (yk = setValues(vk[4]), wk = 0; wk < yk.length; wk = wk + 1) Na(`::view-transition-group-children(${`${yk[wk]}`})`, {
    __proto__: null,
    overflow: "clip"
  });
  th();
};
export {
  be
};
