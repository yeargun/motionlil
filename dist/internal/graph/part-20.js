import { weakSetCreate } from "./../motion-dom/weak-host.js";
function Kf(vk) {
  vk[0] = /* @__PURE__ */ new Set();
  vk[1] = /* @__PURE__ */ new Set();
  vk[2] = false;
  vk[3] = false;
  vk[4] = weakSetCreate();
  let wk = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  wk.delta = 0;
  wk.timestamp = 0;
  wk.isProcessing = false;
  vk[5] = wk;
  vk[6] = null;
}
export {
  Kf
};
