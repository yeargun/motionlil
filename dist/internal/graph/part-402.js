import { velocityPerSecond } from "./part-465.js";
import { progress } from "./part-470.js";
let tj = (a, b, c, d, e) => {
  let f = a.current;
  a.current = Math.abs(b);
  a.scrollLength = c;
  a.offset.length = 0;
  a.offset.push(0);
  a.offset.push(c);
  a.progress = progress(0, c, a.current);
  let g = e - d;
  a.velocity = g > 50 ? 0 : velocityPerSecond(a.current - f, g);
};
export {
  tj
};
