import "./effect-499.js";
import "./effect-573.js";
let getViewAnimationLayerInfo = function(a) {
  let b = a.match(/::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/);
  if (b) return {
    layer: b[2],
    type: b[1]
  };
  return null;
};
export {
  getViewAnimationLayerInfo
};
