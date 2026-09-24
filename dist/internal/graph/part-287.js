import "./effect-499.js";
import "./effect-573.js";
let getViewAnimations = function() {
  return document.getAnimations().filter((a) => {
    let b = a.effect;
    return b && b.target === document.documentElement && b.pseudoElement && b.pseudoElement.startsWith("::view-transition");
  });
};
export {
  getViewAnimations
};
