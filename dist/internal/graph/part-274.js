import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Eh = (vk, wk) => {
  if (!wk) return vk;
  var yk = wk({
    x: vk.left,
    y: vk.top
  }), xk = wk({
    x: vk.right,
    y: vk.bottom
  });
  return {
    top: yk.y,
    right: xk.x,
    bottom: xk.y,
    left: yk.x
  };
};
export {
  Eh
};
