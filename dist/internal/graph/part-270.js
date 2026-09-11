import { taskFromCallback } from "./../motion-dom/dom-host.js";
import { Bh } from "./part-269.js";
function Ch(vk, wk, yk) {
  vk.currentSubject = "root";
  vk.targets = /* @__PURE__ */ new Map();
  vk.targetDefs = ["root"];
  vk.resolveDefs = /* @__PURE__ */ new Set();
  vk.cropOverride = /* @__PURE__ */ new Map();
  vk.pairs = /* @__PURE__ */ new Map();
  vk.classNames = /* @__PURE__ */ new Map();
  vk.flatGroups = /* @__PURE__ */ new Set();
  vk.update = wk;
  vk.options = yk;
  if (null == vk.options) vk.options = {
    __proto__: null
  };
  if (!("string" == typeof vk.options.interrupt)) vk.options.interrupt = "wait";
  var xk = null;
  vk.notifyReady = xk;
  vk.notifyReject = xk;
  vk.readyPromise = taskFromCallback((Yk) => {
    vk.notifyReady = (bl) => {
      Yk();
    };
    vk.notifyReject = (bl) => {
      Yk();
    };
  }).then((Xk) => null);
  Bh(vk);
}
export {
  Ch
};
