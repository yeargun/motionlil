import { ce } from "./part-172.js";
import { de } from "./part-173.js";
import { ee } from "./part-174.js";
let fe = (a, b, c) => {
  if (a == "width") return ce(b.x, c, "paddingLeft", "paddingRight");
  if (a == "height") return ce(b.y, c, "paddingTop", "paddingBottom");
  if (a == "top") return parseFloat(c.top);
  if (a == "left") return parseFloat(c.left);
  if (a == "bottom") return parseFloat(c.top) + de(b.y);
  if (a == "right") return parseFloat(c.left) + de(b.x);
  if (a == "x" || a == "translateX") return ee(c, "x");
  return ee(c, "y");
};
export {
  fe
};
