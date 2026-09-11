import { hasOwn } from "./../motion-dom/dom-host.js";
import { ec } from "./part-208.js";
import { gc } from "./part-212.js";
import { dh } from "./part-213.js";
import { eh } from "./part-214.js";
var gl;
gl = (Oz, Pz, Qz, Rz) => {
  if (Qz.startsWith("path")) return dh(Oz, Pz, Qz, Rz);
  if (Qz.startsWith("attr")) return ec(Oz, Pz, eh(Qz), Rz);
  if (hasOwn(Oz.style, Qz)) return gc(Oz, Pz, Qz, Rz);
  return ec(Oz, Pz, Qz, Rz);
};
export {
  gl
};
