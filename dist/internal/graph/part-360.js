import { animateVisualElement } from "./part-338.js";
import { ti } from "./part-358.js";
import "./effect-499.js";
import "./effect-573.js";
let createAnimationState = function(a) {
  let b = {
    visualElement: null,
    typeStates: /* @__PURE__ */ new Map(),
    isInitialRender: false,
    wasReset: false,
    animateFn: null
  };
  ((a2, b2) => {
    a2.visualElement = b2;
    a2.isInitialRender = true;
    ((a3) => {
      {
        let b3 = ["animate", "whileInView", "whileHover", "whileTap", "whileDrag", "whileFocus", "exit"], c = 0;
        for (; c < b3.length; ++c) {
          let d = b3[c] ?? "";
          {
            let b4, c2;
            a3.typeStates.set((b4 = d == "animate", c2 = {
              isActive: false,
              protectedKeys: null,
              needsAnimating: null,
              prevResolvedValues: null,
              prevProp: null
            }, ti(c2, b4), d), c2);
          }
        }
      }
    })(a2);
    a2.animateFn = (b3) => {
      let c = [];
      for (let d = 0; d < b3.length; ++d) {
        let e = b3[d];
        c.push(animateVisualElement(a2.visualElement, e.animation, e.options));
      }
      if (c.length == 0) return Promise.resolve(true);
      return Promise.all(c).then((a3) => true);
    };
  })(b, a);
  return b;
};
export {
  createAnimationState
};
