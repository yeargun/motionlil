import { callMethod2, windowGet } from "./../motion-dom/dom-host.js";
let Oh = (vk, wk) => {
  if ("object" == typeof wk) callMethod2(windowGet("Object"), "assign", vk, wk);
};
export {
  Oh
};
