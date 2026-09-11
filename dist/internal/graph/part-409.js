import { callFn2, callMethod2, isEventTarget, isFunction, windowGet } from "./../motion-dom/dom-host.js";
import { weakMapGet, weakMapSet } from "./../motion-dom/weak-host.js";
import { k } from "./part-120.js";
import { Yb } from "./part-136.js";
import { jc } from "./part-229.js";
import { ph } from "./part-238.js";
import { mb } from "./part-334.js";
import { ci } from "./part-342.js";
import { di } from "./part-343.js";
import { li } from "./part-351.js";
import { Be } from "./part-373.js";
import { kk } from "./part-4.js";
import { Pa } from "./part-404.js";
import { wc } from "./part-405.js";
import { W } from "./part-466.js";
import { I } from "./part-518.js";
import { mk } from "./part-6.js";
var Hi;
var Ji;
(function() {
  let a = () => {
    let wk = {
      __proto__: null
    };
    wk.presenceContext = null;
    wk.props = {
      __proto__: null
    };
    let xk = {
      __proto__: null
    }, vk = {
      __proto__: null
    };
    vk.transform = {
      __proto__: null
    };
    vk.transformOrigin = {
      __proto__: null
    };
    vk.style = {
      __proto__: null
    };
    vk.vars = {
      __proto__: null
    };
    vk.attrs = {
      __proto__: null
    };
    xk.renderState = vk;
    xk.latestValues = {
      __proto__: null
    };
    wk.visualState = xk;
    return wk;
  }, b = (vk) => {
    var wk = a();
    if (jc(vk)) {
      var zk, Ak, xk = !ph(vk), yk = xk;
    } else yk = false;
    if (yk) {
      zk = {
        type: "",
        current: null,
        parent: null,
        children: /* @__PURE__ */ new Set(),
        enteringChildren: null,
        depth: 0,
        renderState: null,
        latestValues: null,
        isVariantNode: false,
        isControllingVariants: false,
        variantChildren: null,
        shouldReduceMotion: null,
        shouldSkipAnimations: false,
        manuallyAnimateOnMount: false,
        blockInitialAnimation: false,
        projection: null,
        values: /* @__PURE__ */ new Map(),
        animationState: null,
        KeyframeResolverType: null,
        options: null,
        props: null,
        prevProps: null,
        presenceContext: null,
        prevPresenceContext: null,
        features: /* @__PURE__ */ new Map(),
        valueSubscriptions: /* @__PURE__ */ new Map(),
        reducedMotionConfig: null,
        skipAnimationsConfig: null,
        removeFromVariantTree: null,
        prevMotionValues: null,
        baseTarget: null,
        initialValues: null,
        hasBeenMounted: false,
        events: /* @__PURE__ */ new Map(),
        propEventSubscriptions: /* @__PURE__ */ new Map(),
        renderScheduledAt: 0,
        renderCallback: null,
        notifyUpdateCallback: null,
        isMounted: false,
        removeFromParent: null,
        isVisible: false,
        valueKeys: [],
        buildHook: null,
        renderInstanceHook: null,
        measureViewportBoxHook: null,
        readValueFromInstanceHook: null,
        sortInstanceNodePositionHook: null,
        getBaseTargetFromPropsHook: null,
        removeValueFromRenderStateHook: null,
        scrapeMotionValuesFromPropsHook: null,
        onBindTransformHook: null,
        handleChildMotionValueHook: null,
        preMountHook: null,
        childSubscription: null,
        isSVGTagFlag: false
      };
      li(zk, wk, null);
      Yb(zk, vk);
      weakMapSet(I, vk, zk);
    } else {
      Ak = {
        type: "",
        current: null,
        parent: null,
        children: /* @__PURE__ */ new Set(),
        enteringChildren: null,
        depth: 0,
        renderState: null,
        latestValues: null,
        isVariantNode: false,
        isControllingVariants: false,
        variantChildren: null,
        shouldReduceMotion: null,
        shouldSkipAnimations: false,
        manuallyAnimateOnMount: false,
        blockInitialAnimation: false,
        projection: null,
        values: /* @__PURE__ */ new Map(),
        animationState: null,
        KeyframeResolverType: null,
        options: null,
        props: null,
        prevProps: null,
        presenceContext: null,
        prevPresenceContext: null,
        features: /* @__PURE__ */ new Map(),
        valueSubscriptions: /* @__PURE__ */ new Map(),
        reducedMotionConfig: null,
        skipAnimationsConfig: null,
        removeFromVariantTree: null,
        prevMotionValues: null,
        baseTarget: null,
        initialValues: null,
        hasBeenMounted: false,
        events: /* @__PURE__ */ new Map(),
        propEventSubscriptions: /* @__PURE__ */ new Map(),
        renderScheduledAt: 0,
        renderCallback: null,
        notifyUpdateCallback: null,
        isMounted: false,
        removeFromParent: null,
        isVisible: false,
        valueKeys: [],
        buildHook: null,
        renderInstanceHook: null,
        measureViewportBoxHook: null,
        readValueFromInstanceHook: null,
        sortInstanceNodePositionHook: null,
        getBaseTargetFromPropsHook: null,
        removeValueFromRenderStateHook: null,
        scrapeMotionValuesFromPropsHook: null,
        onBindTransformHook: null,
        handleChildMotionValueHook: null,
        preMountHook: null,
        childSubscription: null
      };
      ci(Ak, wk, null);
      Yb(Ak, vk);
      weakMapSet(I, vk, Ak);
    }
  }, c = (vk) => {
    let wk = {
      __proto__: null
    }, zk = null;
    wk.presenceContext = zk;
    wk.props = {
      __proto__: null
    };
    let xk = {
      __proto__: null
    }, Ak = {
      __proto__: null
    };
    Ak.output = {
      __proto__: null
    };
    xk.renderState = Ak;
    xk.latestValues = {
      __proto__: null
    };
    wk.visualState = xk;
    let yk = {
      type: "",
      current: null,
      parent: null,
      children: /* @__PURE__ */ new Set(),
      enteringChildren: null,
      depth: 0,
      renderState: null,
      latestValues: null,
      isVariantNode: false,
      isControllingVariants: false,
      variantChildren: null,
      shouldReduceMotion: null,
      shouldSkipAnimations: false,
      manuallyAnimateOnMount: false,
      blockInitialAnimation: false,
      projection: null,
      values: /* @__PURE__ */ new Map(),
      animationState: null,
      KeyframeResolverType: null,
      options: null,
      props: null,
      prevProps: null,
      presenceContext: null,
      prevPresenceContext: null,
      features: /* @__PURE__ */ new Map(),
      valueSubscriptions: /* @__PURE__ */ new Map(),
      reducedMotionConfig: null,
      skipAnimationsConfig: null,
      removeFromVariantTree: null,
      prevMotionValues: null,
      baseTarget: null,
      initialValues: null,
      hasBeenMounted: false,
      events: /* @__PURE__ */ new Map(),
      propEventSubscriptions: /* @__PURE__ */ new Map(),
      renderScheduledAt: 0,
      renderCallback: null,
      notifyUpdateCallback: null,
      isMounted: false,
      removeFromParent: null,
      isVisible: false,
      valueKeys: [],
      buildHook: null,
      renderInstanceHook: null,
      measureViewportBoxHook: null,
      readValueFromInstanceHook: null,
      sortInstanceNodePositionHook: null,
      getBaseTargetFromPropsHook: null,
      removeValueFromRenderStateHook: null,
      scrapeMotionValuesFromPropsHook: null,
      onBindTransformHook: null,
      handleChildMotionValueHook: null,
      preMountHook: null
    };
    di(yk, wk, zk);
    Yb(yk, vk);
    weakMapSet(I, vk, yk);
  }, d = (vk, wk) => {
    if (null != wk) {
      var xk = "object" == typeof wk, yk = xk;
    } else yk = false;
    if (yk) callMethod2(windowGet("Object"), "assign", vk, wk);
  }, e = (vk, yk) => {
    if (k(vk)) return true;
    if ("number" == typeof vk) return true;
    if ("string" == typeof vk) {
      var wk = !Pa(yk), xk = wk;
    } else xk = false;
    if (xk) return true;
    return false;
  }, g = (vk, wk) => {
    if (null != wk) {
      var xk = "object" == typeof wk, yk = xk;
    } else yk = false;
    if (yk) callMethod2(windowGet("Object"), "assign", vk, wk);
  }, h = (vk, yk) => {
    if (k(vk)) return true;
    if ("number" == typeof vk) return true;
    if ("string" == typeof vk) {
      var wk = !Pa(yk), xk = wk;
    } else xk = false;
    if (xk) return true;
    return false;
  };
  Hi = function(vk, zk, Dk, Hk) {
    var Yk = [];
    if (e(vk, zk)) {
      if (null != zk) {
        if (Pa(zk)) {
          var Zk = zk.default;
          if (Zk) {
            var Ik, Kk, Lk, Mk, Nk, _k, Ok, Pk, Qk, Rk, Sk, Tk, dl, al, wk, Uk, Vk, xk, bl, cl, el, fl, Wk, Ak, Bk, Ck, Ek, Fk, Gk, $k, Xk, yk, Jk = true;
          } else {
            Ik = "number" == typeof Zk;
            Jk = Ik;
          }
          if (Jk) Lk = true;
          else {
            Kk = "string" == typeof Zk;
            Lk = Kk;
          }
          if (Lk) Nk = true;
          else {
            Mk = "boolean" == typeof Zk;
            Nk = Mk;
          }
          if (Nk) Ak = Zk;
          else Ak = zk;
          Bk = Ak;
        } else Bk = zk;
        Ck = Bk;
      } else Ck = zk;
      if (null != Dk) {
        if ("object" == typeof Dk) {
          _k = Dk.default;
          if (_k) Pk = true;
          else {
            Ok = "number" == typeof _k;
            Pk = Ok;
          }
          if (Pk) Rk = true;
          else {
            Qk = "string" == typeof _k;
            Rk = Qk;
          }
          if (Rk) Tk = true;
          else {
            Sk = "boolean" == typeof _k;
            Tk = Sk;
          }
          if (Tk) Ek = _k;
          else Ek = Dk;
          Fk = Ek;
        } else Fk = Dk;
        Gk = Fk;
      } else Gk = Dk;
      Yk.push(Be(vk, Ck, Gk));
      return Yk;
    }
    if (null == vk) return Yk;
    dl = wc(vk, zk, Hk);
    al = dl.length;
    W(al > 0, kk, mk);
    for ($k = 0; $k < al; $k = $k + 1) {
      wk = dl[$k];
      Uk = weakMapGet(I, wk);
      if (null == Uk) {
        if (isEventTarget(wk)) b(wk);
        else c(wk);
        Vk = weakMapGet(I, wk);
        Xk = Vk;
      } else Xk = Uk;
      if (null == Xk) continue;
      xk = {
        __proto__: null
      };
      d(xk, Dk);
      bl = xk.delay;
      if (isFunction(bl)) xk.delay = callFn2(bl, $k, al);
      cl = {
        __proto__: null
      };
      d(cl, zk);
      cl.transition = xk;
      el = {
        __proto__: null
      };
      fl = xk.delay;
      if ("number" == typeof fl) el.delay = fl;
      for (Wk = mb(Xk, cl, el), yk = 0; yk < Wk.length; yk = yk + 1) Yk.push(Wk[yk]);
    }
    return Yk;
  };
  Ji = function(vk, zk, Dk, Hk) {
    var Yk = [];
    if (h(vk, zk)) {
      if (null != zk) {
        if (Pa(zk)) {
          var Zk = zk.default;
          if (Zk) {
            var Ik, Kk, Lk, Mk, Nk, _k, Ok, Pk, Qk, Rk, Sk, Tk, dl, al, wk, Uk, Vk, xk, bl, cl, el, fl, Wk, Ak, Bk, Ck, Ek, Fk, Gk, $k, Xk, yk, Jk = true;
          } else {
            Ik = "number" == typeof Zk;
            Jk = Ik;
          }
          if (Jk) Lk = true;
          else {
            Kk = "string" == typeof Zk;
            Lk = Kk;
          }
          if (Lk) Nk = true;
          else {
            Mk = "boolean" == typeof Zk;
            Nk = Mk;
          }
          if (Nk) Ak = Zk;
          else Ak = zk;
          Bk = Ak;
        } else Bk = zk;
        Ck = Bk;
      } else Ck = zk;
      if (null != Dk) {
        if ("object" == typeof Dk) {
          _k = Dk.default;
          if (_k) Pk = true;
          else {
            Ok = "number" == typeof _k;
            Pk = Ok;
          }
          if (Pk) Rk = true;
          else {
            Qk = "string" == typeof _k;
            Rk = Qk;
          }
          if (Rk) Tk = true;
          else {
            Sk = "boolean" == typeof _k;
            Tk = Sk;
          }
          if (Tk) Ek = _k;
          else Ek = Dk;
          Fk = Ek;
        } else Fk = Dk;
        Gk = Fk;
      } else Gk = Dk;
      Yk.push(Be(vk, Ck, Gk));
      return Yk;
    }
    if (null == vk) return Yk;
    dl = wc(vk, zk, Hk);
    al = dl.length;
    W(al > 0, kk, mk);
    for ($k = 0; $k < al; $k = $k + 1) {
      wk = dl[$k];
      Uk = weakMapGet(I, wk);
      if (null == Uk) {
        if (isEventTarget(wk)) b(wk);
        else c(wk);
        Vk = weakMapGet(I, wk);
        Xk = Vk;
      } else Xk = Uk;
      if (null == Xk) continue;
      xk = {
        __proto__: null
      };
      g(xk, Dk);
      bl = xk.delay;
      if (isFunction(bl)) xk.delay = callFn2(bl, $k, al);
      cl = {
        __proto__: null
      };
      g(cl, zk);
      cl.transition = xk;
      el = {
        __proto__: null
      };
      fl = xk.delay;
      if ("number" == typeof fl) el.delay = fl;
      for (Wk = mb(Xk, cl, el), yk = 0; yk < Wk.length; yk = yk + 1) Yk.push(Wk[yk]);
    }
    return Yk;
  };
})();
export {
  Hi,
  Ji
};
