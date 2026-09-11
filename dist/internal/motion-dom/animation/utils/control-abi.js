const installed = /* @__PURE__ */ new WeakSet();
const properties = {
  time: { get() {
    return this.getPlaybackTime();
  }, set(value) {
    this.setPlaybackTime(value);
  } },
  speed: { get() {
    return this.getPlaybackSpeed();
  }, set(value) {
    this.setPlaybackSpeed(value);
  } },
  duration: { get() {
    return this.getDuration();
  } },
  iterationDuration: { get() {
    return this.getIterationDuration();
  } },
  state: { get() {
    return this.getState();
  } },
  startTime: { get() {
    return this.getStartTime();
  }, set(value) {
    this.setStartTime(value);
  } },
  finished: { get() {
    return this.getFinished();
  } }
};
for (const descriptor of Object.values(properties)) descriptor.configurable = true;
function installControlProperties(control) {
  const prototype = Object.getPrototypeOf(control);
  if (!installed.has(prototype)) {
    Object.defineProperties(prototype, properties);
    installed.add(prototype);
  }
}
function finishedTask(runner) {
  return new Promise(runner);
}
function thenFinished(task, resolve, reject) {
  return task.then(resolve, reject);
}
function groupFinished(animations) {
  return Promise.all(animations.map((animation) => animation.finished));
}
function thenGroup(task, resolve) {
  return task.finally(resolve).then(() => {
  });
}
function getControlProperty(control, name) {
  return control[name];
}
function asyncOptions({
  autoplay = true,
  delay = 0,
  type = "keyframes",
  repeat = 0,
  repeatDelay = 0,
  repeatType = "loop",
  keyframes,
  name,
  motionValue,
  element,
  ...options
}) {
  return { autoplay, delay, type, repeat, repeatDelay, repeatType, keyframes, name, motionValue, element, ...options };
}
function copyOptions(value) {
  return { ...value };
}
export {
  asyncOptions,
  copyOptions,
  finishedTask,
  getControlProperty,
  groupFinished,
  installControlProperties,
  thenFinished,
  thenGroup
};
