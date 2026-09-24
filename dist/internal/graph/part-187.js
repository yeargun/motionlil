import "./effect-499.js";
import "./effect-573.js";
let setStyle = function(a, b, c) {
  let d = a.style;
  if (b.startsWith("--")) d.setProperty(b, c);
  else d[b] = c;
};
export {
  setStyle
};
