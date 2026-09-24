import { Li } from "./part-379.js";
import { zg } from "./part-535.js";
import { Ni } from "./part-570.js";
import "./effect-499.js";
import "./effect-573.js";
let propagateDirtyNodes = function(a) {
  if (zg.value != null) Ni.nodes = Li("nodes") + 1;
  let b = a.parent;
  if (!b) return;
  if (!((a2) => {
    if (a2.layout == null) return false;
    if (a2.relativeTarget != null || a2.targetDelta != null || a2.options.layoutRoot) return true;
    return false;
  })(a)) a.isProjectionDirty = b.isProjectionDirty;
  if (a.isProjectionDirty || b.isProjectionDirty || b.isSharedProjectionDirty) a.isSharedProjectionDirty = true;
  if (b.isTransformDirty) a.isTransformDirty = true;
};
export {
  propagateDirtyNodes
};
