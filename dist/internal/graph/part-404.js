import { isHTMLElement } from "./part-236.js";
let vj = (a, b) => {
  let e = {
    x: 0,
    y: 0
  }, d = a;
  while (d && d !== b) {
    let a2 = d;
    if (isHTMLElement(a2)) {
      e.x = e.x + a2.offsetLeft;
      e.y = e.y + a2.offsetTop;
      d = a2.offsetParent;
    } else if (a2.tagName == "svg") {
      let b2 = a2.getBoundingClientRect(), c = a2.parentElement;
      d = c;
      let f = c.getBoundingClientRect(), g = b2.left, h = f.left, i = b2.top, j = f.top;
      e.x = e.x + (g - h);
      e.y = e.y + (i - j);
    } else if ("getBBox" in a2) {
      let b2 = a2.getBBox(), c = b2.x, f = b2.y;
      e.x = e.x + c;
      e.y = e.y + f;
      let g = a2.parentNode;
      while (g && g.tagName !== "svg") g = g.parentNode;
      d = g;
    } else break;
  }
  return e;
};
export {
  vj
};
