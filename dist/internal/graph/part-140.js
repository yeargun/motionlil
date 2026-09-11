import { n } from "./part-25.js";
import { f } from "./part-455.js";
let sd = (vk) => {
  var wk = n();
  if (vk.renderScheduledAt < wk) {
    vk.renderScheduledAt = wk;
    f.render(vk.renderCallback, false, true);
  }
};
export {
  sd
};
