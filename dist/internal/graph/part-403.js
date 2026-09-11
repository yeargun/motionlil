import { F } from "./part-456.js";
import { Nc } from "./part-618.js";
function Gi(vk) {
  vk.entries = /* @__PURE__ */ new Map();
  var wk = 0;
  for (; wk < Nc.length; ) {
    vk.entries.set(Nc[wk] || "", (Kk) => {
      F(Kk);
    });
    wk += 1;
  }
}
export {
  Gi
};
