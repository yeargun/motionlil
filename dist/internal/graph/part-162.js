import "./effect-499.js";
import "./effect-573.js";
let fillWildcards = function(a) {
  for (let b = 1; b < a.length; ++b) if (a[b] == null) a[b] = a[b - 1];
};
export {
  fillWildcards
};
