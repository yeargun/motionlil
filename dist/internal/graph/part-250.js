import { isDragActive } from "./part-239.js";
import { isPrimaryPointer } from "./part-244.js";
let mg = (a) => isPrimaryPointer(a) && !isDragActive();
export {
  mg
};
