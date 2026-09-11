import { callMethod1 } from "./../motion-dom/dom-host.js";
let wi = (vk) => {
  var xk, wk = 0;
  for (; wk < vk.members.length; wk = wk + 1) {
    xk = vk.members[wk];
    if (xk.instance) callMethod1(xk, "scheduleRender", false);
  }
};
export {
  wi
};
