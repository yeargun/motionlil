import "./effect-499.js";
import "./effect-573.js";
let renderHTML = function(a, b, c, d) {
  let e = a.style, f = b.style;
  for (let a2 in f) e[a2] = f[a2];
  if (d != null) d.applyProjectionStyles(e, c);
  let g = b.vars;
  for (let a2 in g) e.setProperty(a2, g[a2]);
};
export {
  renderHTML
};
