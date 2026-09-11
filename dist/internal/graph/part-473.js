import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var w = {
  test: (Oz) => "number" == typeof Oz,
  parse: (Oz) => {
    if ("number" == typeof Oz) return Oz;
    if ("string" == typeof Oz) return parseFloat(Oz);
    return 0;
  },
  transform: (Oz) => Oz
};
export {
  w
};
