import { ud } from "./part-143.js";
import { Kd } from "./part-155.js";
import { be } from "./part-171.js";
import { re } from "./part-180.js";
import { te } from "./part-182.js";
import { ue } from "./part-183.js";
import { ve } from "./part-184.js";
import { n } from "./part-20.js";
import { y } from "./part-427.js";
import { le } from "./part-507.js";
import "./effect-499.js";
import "./effect-573.js";
let je = function(a) {
  if (ne) {
    let a2 = le.filter((a3) => a3.needsMeasurement), b = [];
    a2.forEach((a3) => {
      let c2 = a3.element;
      if (!b.includes(c2)) b.push(c2);
    });
    let c = /* @__PURE__ */ new Map();
    b.forEach((a3) => {
      let b2 = be(a3);
      if (b2.length > 0) {
        c.set(a3, b2);
        ud(a3);
      }
    });
    a2.forEach((a3) => {
      te(a3);
    });
    b.forEach((a3) => {
      ud(a3);
      let b2 = c.get(a3) ?? null;
      if (b2) b2.forEach((b3) => {
        let e, d = a3, c2 = Kd((e = b3[0], d), e, null, false);
        if (c2 != null) c2.set(b3[1]);
      });
    });
    a2.forEach((a3) => {
      ue(a3);
    });
    a2.forEach((a3) => {
      let b2 = a3.suspendedScrollY;
      if (b2 != null) n(0, b2);
    });
  }
  ne = false;
  me = false;
  le.slice().forEach((a2) => {
    ve(a2, oe);
  });
  le.splice(0, le.length);
};
let ke = function(a) {
  le.forEach((a2) => {
    re(a2);
    if (a2.needsMeasurement) ne = true;
  });
};
let flushKeyframeResolvers = function() {
  oe = true;
  let b = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  ke(b);
  je(b);
  oe = false;
};
let qe = (a) => {
  a.state = "scheduled";
  if (a.isAsync) {
    if (!le.includes(a)) le.push(a);
    if (!me) {
      me = true;
      y.read(ke, false, false);
      y.resolveKeyframes(je, false, false);
    }
  } else {
    re(a);
    ve(a, false);
  }
};
let me = false;
let ne = false;
let oe = false;
export {
  flushKeyframeResolvers,
  je,
  ke,
  me,
  ne,
  oe,
  qe
};
