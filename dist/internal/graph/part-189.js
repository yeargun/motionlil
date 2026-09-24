import { memo } from "./part-188.js";
import { ze } from "./part-508.js";
let Ae = (a, b) => {
  let c = memo(a);
  return () => ze[b] ?? c();
};
export {
  Ae
};
