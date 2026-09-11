import { callMethod1 } from "./../motion-dom/dom-host.js";
function Wi(vk, xk, yk) {
  let wk = callMethod1(vk, "next", yk);
  xk.value = wk.value;
  xk.done = !!wk.done;
  return xk;
}
export {
  Wi
};
