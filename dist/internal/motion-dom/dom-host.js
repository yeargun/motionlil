function performanceNow() {
  return performance.now();
}
function scheduleAnimationFrame(callback) {
  if (typeof requestAnimationFrame !== "undefined") {
    return requestAnimationFrame(callback);
  }
  return 0;
}
function scheduleMicrotask(callback) {
  queueMicrotask(callback);
}
function hasOwn(obj, key) {
  return key in obj;
}
function isEventTarget(value) {
  return typeof EventTarget !== "undefined" && value instanceof EventTarget;
}
function isNodeList(value) {
  return typeof NodeList !== "undefined" && value instanceof NodeList;
}
function querySelectorAll(root, selector) {
  return Array.from(root.querySelectorAll(selector));
}
function documentQuerySelectorAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}
function arrayFromNullable(list) {
  if (list == null) return [];
  return Array.from(list).filter((element) => element != null);
}
function supportsLinearEasingCheck() {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}
function supportsPartialKeyframesCheck() {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch (e) {
    return false;
  }
  return true;
}
function supportsWaapiCheck() {
  return typeof Element !== "undefined" && "animate" in Element.prototype;
}
function documentCreateElement(tag) {
  return document.createElement(tag);
}
function documentHead() {
  return document.head;
}
function documentGetAnimations() {
  if (typeof document.getAnimations !== "function") return [];
  return Array.from(document.getAnimations());
}
function documentStartViewTransition(callback) {
  return document.startViewTransition(callback);
}
function asMap(value) {
  return value instanceof Map ? value : null;
}
function asSet(value) {
  return value instanceof Set ? value : null;
}
function asArray(value) {
  return Array.isArray(value) ? value : null;
}
function hasScrollTimeline() {
  return typeof window.ScrollTimeline !== "undefined";
}
function hasViewTimeline() {
  return typeof window.ViewTimeline !== "undefined";
}
function windowInnerWidth() {
  return window.innerWidth;
}
function windowInnerHeight() {
  return window.innerHeight;
}
function addWindowListener(eventName, handler, options) {
  window.addEventListener(eventName, handler, options);
}
function removeWindowListener(eventName, handler, options) {
  window.removeEventListener(eventName, handler, options);
}
function addEventListener(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
}
function removeEventListener(target, eventName, handler, options) {
  target.removeEventListener(eventName, handler, options);
}
function createResizeObserver(callback) {
  if (typeof ResizeObserver === "undefined") return null;
  return new ResizeObserver(callback);
}
function observeResize(observer, element) {
  observer.observe(element);
}
function unobserveResize(observer, element) {
  observer.unobserve(element);
}
function readBorderBoxSize(borderBoxSize, axis) {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][axis];
  }
  return void 0;
}
function readElementSize(target, svgAxis, htmlAxis) {
  if ("ownerSVGElement" in target && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  }
  return target[htmlAxis];
}
function getElementTagName(element) {
  return element.tagName;
}
function constructConfigured(Ctor, arg) {
  return new Ctor(arg);
}
function constructConfigured2(Ctor, arg1, arg2) {
  return new Ctor(arg1, arg2);
}
function parseFloatValue(v) {
  return parseFloat(v);
}
function hasFunction(obj, name) {
  return Boolean(obj && typeof obj[name] === "function");
}
function callMethod0(obj, name) {
  return obj[name]();
}
function callMethod1(obj, name, arg) {
  return obj[name](arg);
}
function callMethod2(obj, name, a, b) {
  return obj[name](a, b);
}
function createPointerEvent(type, init) {
  return new PointerEvent(type, init);
}
function dispatchEvent(target, event) {
  return target.dispatchEvent(event);
}
function isFunction(v) {
  return typeof v === "function";
}
function invoke1(fn, a) {
  fn(a);
}
function invoke2(fn, a, b) {
  fn(a, b);
}
function callFn3(fn, a, b, c) {
  return fn(a, b, c);
}
function callFn0(fn) {
  return fn();
}
function callFn1(fn, a) {
  return fn(a);
}
function callFn2(fn, a, b) {
  return fn(a, b);
}
function callFn5(fn, a, b, c, d, e) {
  return fn(a, b, c, d, e);
}
function taskFromCallback(runner) {
  return new Promise((resolve) => {
    runner(() => resolve(true));
  });
}
function getComputedStyleValue(element) {
  return window.getComputedStyle(element);
}
function getComputedStyleProperty(element, name) {
  return window.getComputedStyle(element).getPropertyValue(name);
}
function getComputedStyleField(element, name) {
  const style = window.getComputedStyle(element);
  return style[name];
}
function windowScrollTo(x, y) {
  window.scrollTo(x, y);
}
function windowPageYOffset() {
  return window.pageYOffset;
}
function windowGet(name) {
  const scope = typeof window === "undefined" ? globalThis : window;
  return scope[name];
}
function windowSelf() {
  return window;
}
function documentElement() {
  return document.documentElement;
}
function matchMediaQuery(query) {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  return window.matchMedia(query);
}
function hasWindow() {
  return typeof window !== "undefined";
}
function addMatchMediaListener(query, callback) {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  const mql = window.matchMedia(query);
  const handler = () => callback();
  mql.addEventListener("change", handler);
  callback();
  return () => mql.removeEventListener("change", handler);
}
function matchMediaMatches(query) {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(query).matches;
}
function documentGet(name) {
  return document[name];
}
function documentScrollingElement() {
  return document.scrollingElement;
}
function setProp(obj, key, value) {
  obj[key] = value;
}
function getProp(obj, key) {
  return obj?.[key];
}
function deleteProp(obj, key) {
  if (obj && typeof obj === "object") delete obj[key];
}
function mapKeys(map) {
  return Array.from(map.keys());
}
function mapValues(map) {
  return Array.from(map.values());
}
function setValues(set) {
  return Array.from(set.values());
}
function isCurrentRealmElement(value) {
  return typeof HTMLElement !== "undefined" && value instanceof HTMLElement || typeof SVGElement !== "undefined" && value instanceof SVGElement;
}
export {
  addEventListener,
  addMatchMediaListener,
  addWindowListener,
  arrayFromNullable,
  asArray,
  asMap,
  asSet,
  callFn0,
  callFn1,
  callFn2,
  callFn3,
  callFn5,
  callMethod0,
  callMethod1,
  callMethod2,
  constructConfigured,
  constructConfigured2,
  createPointerEvent,
  createResizeObserver,
  deleteProp,
  dispatchEvent,
  documentCreateElement,
  documentElement,
  documentGet,
  documentGetAnimations,
  documentHead,
  documentQuerySelectorAll,
  documentScrollingElement,
  documentStartViewTransition,
  getComputedStyleField,
  getComputedStyleProperty,
  getComputedStyleValue,
  getElementTagName,
  getProp,
  hasFunction,
  hasOwn,
  hasScrollTimeline,
  hasViewTimeline,
  hasWindow,
  invoke1,
  invoke2,
  isCurrentRealmElement,
  isEventTarget,
  isFunction,
  isNodeList,
  mapKeys,
  mapValues,
  matchMediaMatches,
  matchMediaQuery,
  observeResize,
  parseFloatValue,
  performanceNow,
  querySelectorAll,
  readBorderBoxSize,
  readElementSize,
  removeEventListener,
  removeWindowListener,
  scheduleAnimationFrame,
  scheduleMicrotask,
  setProp,
  setValues,
  supportsLinearEasingCheck,
  supportsPartialKeyframesCheck,
  supportsWaapiCheck,
  taskFromCallback,
  unobserveResize,
  windowGet,
  windowInnerHeight,
  windowInnerWidth,
  windowPageYOffset,
  windowScrollTo,
  windowSelf
};
