import { Li } from "./part-379.js";
import { Mi } from "./part-380.js";
import { Ni } from "./part-570.js";
import { Pi } from "./part-571.js";
import { createBox } from "./part-87.js";
import "./effect-499.js";
import "./effect-573.js";
let createProjectionNode = function(a) {
  return (b) => {
    let c = {
      depth: 0,
      id: 0,
      animationId: 0,
      animationCommitId: 0,
      layoutVersion: 0,
      instance: null,
      root: null,
      parent: null,
      path: [],
      children: /* @__PURE__ */ new Set(),
      options: null,
      snapshot: null,
      layout: null,
      targetLayout: null,
      layoutCorrected: null,
      targetDelta: null,
      target: null,
      relativeTarget: null,
      relativeTargetOrigin: null,
      relativeParent: null,
      targetWithTransforms: null,
      prevProjectionDelta: null,
      isTreeAnimating: false,
      isAnimationBlocked: false,
      attemptToResolveRelativeTarget: false,
      shared: null,
      stack: null,
      isLayoutDirty: false,
      isProjectionDirty: false,
      isSharedProjectionDirty: false,
      isTransformDirty: false,
      isLayoutDirtyFromUser: false,
      updateManuallyBlocked: false,
      updateBlockedByResize: false,
      isUpdating: false,
      isSVG: false,
      needsReset: false,
      shouldResetTransform: false,
      hasCheckedOptimisedAppear: false,
      isPresent: false,
      isVisible: false,
      preserveOpacity: false,
      hasTreeAnimated: false,
      hasProjected: false,
      updateScheduled: false,
      projectionUpdateScheduled: false,
      animationProgress: 0,
      resolvedRelativeTargetAt: 0,
      linkedParentVersion: 0,
      treeScale: null,
      resumeFrom: null,
      resumingFrom: null,
      animationValues: null,
      currentAnimation: null,
      motionValueRef: null,
      latestValues: {
        __proto__: null
      },
      projectionDelta: null,
      projectionDeltaWithTransform: null,
      nodeList: null,
      sharedNodes: /* @__PURE__ */ new Map(),
      eventHandlers: /* @__PURE__ */ new Map(),
      config: null,
      isMounted: false,
      resizeCleanup: null,
      prevTransformTemplateValue: null,
      scroll: null,
      mixTargetDelta: null,
      pendingAnimation: null,
      updateProjectionCb: null
    };
    ((a2, b2, c2) => {
      a2.id = Oi;
      Oi = Oi + 1 | 0;
      a2.options = b2;
      a2.config = c2;
      a2.layoutCorrected = createBox();
      a2.isPresent = true;
      a2.isVisible = true;
      a2.treeScale = {
        x: 1,
        y: 1
      };
      a2.mixTargetDelta = (a3) => {
      };
      let d = Mi(b2.parent), e = c2.defaultParent;
      if (!d && typeof e == "function") d = Mi(e());
      a2.parent = d;
      if (d) {
        let b3 = d, c3 = b3.root;
        if (c3) a2.root = c3;
        else a2.root = b3;
        a2.path = [...b3.path, b3];
        a2.depth = (b3.depth | 0) + 1 | 0;
      } else {
        a2.root = a2;
        a2.nodeList = [];
      }
      for (let b3 = 0; b3 < a2.path.length; ++b3) a2.path[b3].shouldResetTransform = true;
      Ni.nodes = Li("nodes") + 1;
      Pi.set(a2.id | 0, a2);
    })(c, b, a);
    return c;
  };
};
let Oi = 0;
export {
  Oi,
  createProjectionNode
};
