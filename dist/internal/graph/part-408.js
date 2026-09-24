import { uj } from "./part-403.js";
import { Fj } from "./part-407.js";
let Jj = (a, b, c, d) => ({
  measure: (b2) => {
    ((a2, b3, c2) => {
      let d2 = b3 === void 0 ? a2 : b3;
      c2.x.targetOffset = 0;
      c2.y.targetOffset = 0;
      if (d2 !== a2) {
        let b4 = d2;
        while (b4 && b4 !== a2) {
          let a3 = b4, d3 = c2.x;
          d3.targetOffset = d3.targetOffset + a3.offsetLeft;
          let e = c2.y;
          e.targetOffset = e.targetOffset + a3.offsetTop;
          b4 = a3.offsetParent;
        }
      }
      c2.x.targetLength = d2 === a2 ? d2.scrollWidth : d2.clientWidth;
      c2.y.targetLength = d2 === a2 ? d2.scrollHeight : d2.clientHeight;
      c2.x.containerLength = a2.clientWidth;
      c2.y.containerLength = a2.clientHeight;
    })(a, d.target, c);
    uj(a, c, b2);
    if (d.offset || d.target) Fj(a, c, d);
  },
  notify: () => {
    b(c);
  }
});
export {
  Jj
};
