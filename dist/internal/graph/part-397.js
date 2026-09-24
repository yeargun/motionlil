import { nk } from "./part-0.js";
import { Xl } from "./part-10.js";
import { ld } from "./part-138.js";
import { qd } from "./part-140.js";
import { isSVGElement } from "./part-253.js";
import { isSVGSVGElement } from "./part-262.js";
import { Hh } from "./part-339.js";
import { ki } from "./part-356.js";
import { $c } from "./part-498.js";
import { Ph } from "./part-561.js";
import { Yh } from "./part-562.js";
let kj = (a) => {
  let b = ((a2) => {
    if (!nk(a2)) {
      let b3 = {
        current: null,
        latestValues: null,
        props: null,
        options: null,
        animationState: null,
        shouldReduceMotion: null
      };
      ld(b3, "object", Yh, {
        presenceContext: null,
        props: {},
        visualState: {
          renderState: {
            output: {}
          },
          latestValues: {}
        }
      });
      return b3;
    }
    let b2 = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {}
        },
        latestValues: {}
      }
    };
    if (isSVGElement(a2) && !isSVGSVGElement(a2)) {
      let a3 = {
        current: null,
        latestValues: null,
        props: null,
        options: null,
        animationState: null,
        shouldReduceMotion: null
      };
      ki(a3, b2);
      return a3;
    }
    let c = {
      current: null,
      latestValues: null,
      props: null,
      options: null,
      animationState: null,
      shouldReduceMotion: null
    };
    Hh(c, "html", Ph, b2);
    return c;
  })(a);
  qd(b, a);
  Xl($c, a, b);
};
export {
  kj
};
