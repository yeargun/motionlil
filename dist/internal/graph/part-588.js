import { hasOwn, readBorderBoxSize, readElementSize } from "./../motion-dom/dom-host.js";
import { jc } from "./part-229.js";
var uf = (Uz, Vz) => {
  var Pz = readBorderBoxSize(Vz, "inlineSize");
  if (null != Pz) return Pz;
  else {
    if (jc(Uz)) {
      var Qz = hasOwn(Uz, "getBBox"), Rz = Qz;
    } else Rz = false;
    if (Rz) return readElementSize(Uz, "width", "offsetWidth");
    else return readElementSize(Uz, "width", "offsetWidth");
  }
  throw Error();
};
export {
  uf
};
