import { tj } from "./part-402.js";
let uj = (a, b, c) => {
  tj(b.x, a.scrollLeft, a.scrollWidth - a.clientWidth, b.time, c);
  tj(b.y, a.scrollTop, a.scrollHeight - a.clientHeight, b.time, c);
  b.time = c;
};
export {
  uj
};
