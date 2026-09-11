import { hasOwn, readBorderBoxSize, readElementSize } from "./../motion-dom/dom-host.js";
import { jc } from "./part-229.js";
var vf = (Uz, Vz) => {
  var Pz = readBorderBoxSize(Vz, "blockSize");
  if (null != Pz) return Pz;
  else {
    if (jc(Uz)) {
      var Qz = hasOwn(Uz, "getBBox"), Rz = Qz;
    } else Rz = false;
    if (Rz) return readElementSize(Uz, "height", "offsetHeight");
    else return readElementSize(Uz, "height", "offsetHeight");
  }
  throw Error();
};
export {
  vf
};
