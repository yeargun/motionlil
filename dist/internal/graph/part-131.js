import { Zb } from "./part-139.js";
import { $b } from "./part-149.js";
function Xb(vk) {
  vk.type = "visual";
  let wk = null;
  vk.current = wk;
  vk.parent = wk;
  vk.children = /* @__PURE__ */ new Set();
  vk.enteringChildren = wk;
  vk.depth = 0;
  vk.renderState = {
    __proto__: null,
    style: {
      __proto__: null
    },
    vars: {
      __proto__: null
    },
    transform: {
      __proto__: null
    },
    transformOrigin: {
      __proto__: null
    },
    attrs: {
      __proto__: null
    },
    output: {
      __proto__: null
    }
  };
  vk.latestValues = {
    __proto__: null
  };
  vk.isVariantNode = false;
  vk.isControllingVariants = false;
  vk.variantChildren = wk;
  vk.shouldReduceMotion = wk;
  vk.shouldSkipAnimations = false;
  vk.manuallyAnimateOnMount = false;
  vk.blockInitialAnimation = false;
  vk.projection = wk;
  vk.values = /* @__PURE__ */ new Map();
  vk.animationState = wk;
  vk.KeyframeResolverType = wk;
  vk.options = {
    __proto__: null
  };
  vk.props = {
    __proto__: null
  };
  vk.prevProps = wk;
  vk.presenceContext = wk;
  vk.prevPresenceContext = wk;
  vk.features = /* @__PURE__ */ new Map();
  vk.valueSubscriptions = /* @__PURE__ */ new Map();
  vk.reducedMotionConfig = wk;
  vk.skipAnimationsConfig = wk;
  vk.removeFromVariantTree = wk;
  vk.prevMotionValues = {
    __proto__: null
  };
  vk.baseTarget = {
    __proto__: null
  };
  vk.initialValues = {
    __proto__: null
  };
  vk.hasBeenMounted = false;
  vk.events = /* @__PURE__ */ new Map();
  vk.propEventSubscriptions = /* @__PURE__ */ new Map();
  vk.renderScheduledAt = 0;
  vk.renderCallback = (Yk) => {
    Zb(vk);
  };
  vk.notifyUpdateCallback = (Yk) => {
    $b(vk, "Update", vk.latestValues);
  };
  vk.isMounted = false;
  vk.removeFromParent = wk;
  vk.isVisible = true;
  vk.valueKeys = [];
  vk.buildHook = wk;
  vk.renderInstanceHook = wk;
  vk.measureViewportBoxHook = wk;
  vk.readValueFromInstanceHook = wk;
  vk.sortInstanceNodePositionHook = wk;
  vk.getBaseTargetFromPropsHook = wk;
  vk.removeValueFromRenderStateHook = wk;
  vk.scrapeMotionValuesFromPropsHook = wk;
  vk.onBindTransformHook = wk;
  vk.handleChildMotionValueHook = wk;
  vk.preMountHook = wk;
}
export {
  Xb
};
