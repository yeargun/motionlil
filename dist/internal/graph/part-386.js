import { callFn0, isFunction } from "./../motion-dom/dom-host.js";
import { C } from "./part-111.js";
import { ca } from "./part-381.js";
import { De } from "./part-383.js";
import { zi } from "./part-388.js";
import { K } from "./part-611.js";
import { Mc } from "./part-612.js";
function xi(vk, wk, Ck) {
  vk.depth = 0;
  vk.id = Jb;
  Jb = Jb + 1 | 0;
  vk.animationId = 0;
  vk.animationCommitId = 0;
  vk.layoutVersion = 0;
  var Ek = null;
  vk.instance = Ek;
  vk.options = wk;
  vk.config = Ck;
  vk.snapshot = Ek;
  vk.layout = Ek;
  vk.targetLayout = Ek;
  vk.layoutCorrected = C();
  vk.targetDelta = Ek;
  vk.target = Ek;
  vk.relativeTarget = Ek;
  vk.relativeTargetOrigin = Ek;
  vk.relativeParent = Ek;
  vk.targetWithTransforms = Ek;
  vk.prevProjectionDelta = Ek;
  var Fk = false;
  vk.isTreeAnimating = Fk;
  vk.isAnimationBlocked = Fk;
  vk.attemptToResolveRelativeTarget = Fk;
  vk.shared = Ek;
  vk.stack = Ek;
  vk.isLayoutDirty = Fk;
  vk.isProjectionDirty = Fk;
  vk.isSharedProjectionDirty = Fk;
  vk.isTransformDirty = Fk;
  vk.isLayoutDirtyFromUser = Fk;
  vk.updateManuallyBlocked = Fk;
  vk.updateBlockedByResize = Fk;
  vk.isUpdating = Fk;
  vk.isSVG = Fk;
  vk.needsReset = Fk;
  vk.shouldResetTransform = Fk;
  vk.hasCheckedOptimisedAppear = Fk;
  vk.isPresent = true;
  vk.isVisible = true;
  vk.preserveOpacity = Fk;
  vk.hasTreeAnimated = Fk;
  vk.hasProjected = Fk;
  vk.updateScheduled = Fk;
  vk.projectionUpdateScheduled = Fk;
  vk.animationProgress = 0;
  vk.resolvedRelativeTargetAt = 0;
  vk.linkedParentVersion = 0;
  vk.treeScale = {
    x: 1,
    y: 1
  };
  vk.resumeFrom = Ek;
  vk.resumingFrom = Ek;
  vk.animationValues = Ek;
  vk.currentAnimation = Ek;
  vk.motionValueRef = Ek;
  vk.latestValues = {
    __proto__: null
  };
  vk.projectionDelta = Ek;
  vk.projectionDeltaWithTransform = Ek;
  vk.nodeList = Ek;
  vk.sharedNodes = /* @__PURE__ */ new Map();
  vk.eventHandlers = /* @__PURE__ */ new Map();
  vk.isMounted = Fk;
  vk.resizeCleanup = Ek;
  vk.prevTransformTemplateValue = Ek;
  vk.scroll = Ek;
  vk.pendingAnimation = Ek;
  vk.updateProjectionCb = Ek;
  vk.mixTargetDelta = (Cl) => {
  };
  vk.parent = Ek;
  vk.path = [];
  vk.children = /* @__PURE__ */ new Set();
  var Hk = De(wk.parent), Gk = Ck.defaultParent;
  if (!Hk) {
    var Ik, zk, Dk, Ak, Jk, Bk, xk = isFunction(Gk), yk = xk;
  } else yk = false;
  if (yk) {
    Ik = De(callFn0(Gk));
    Jk = Ik;
  } else Jk = Hk;
  vk.parent = Jk;
  if (Jk) {
    zk = Jk;
    Dk = zk.root;
    vk.root = Dk;
    vk.path = [...zk.path, zk];
    vk.depth = zk.depth + 1 | 0;
  } else {
    vk.root = vk;
    vk.nodeList = [];
  }
  for (Bk = 0; Bk < vk.path.length; Bk = Bk + 1) vk.path[Bk].shouldResetTransform = true;
  vk.updateProjectionCb = (Dl) => {
    zi(vk);
  };
  Ak = K;
  Ak.nodes = ca("nodes") + 1;
  Mc.set(vk.id, vk);
}
var Jb = 0;
export {
  Jb,
  xi
};
