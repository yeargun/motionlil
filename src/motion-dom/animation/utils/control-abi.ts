// JavaScript accessors and Promise construction are host ABI operations. The
// animation algorithms and methods remain in LilScript.
const installed = new WeakSet<object>()
const properties = {
  time: { get() { return this.getPlaybackTime() }, set(value) { this.setPlaybackTime(value) } },
  speed: { get() { return this.getPlaybackSpeed() }, set(value) { this.setPlaybackSpeed(value) } },
  duration: { get() { return this.getDuration() } },
  iterationDuration: { get() { return this.getIterationDuration() } },
  state: { get() { return this.getState() } },
  startTime: { get() { return this.getStartTime() }, set(value) { this.setStartTime(value) } },
  finished: { get() { return this.getFinished() } },
}
for (const descriptor of Object.values(properties)) descriptor.configurable = true

export function installControlProperties(control: object) {
  const prototype = Object.getPrototypeOf(control)
  if (!installed.has(prototype)) {
    Object.defineProperties(prototype, properties)
    installed.add(prototype)
  }
}
export function finishedTask(runner: (resolve: () => void) => void): Promise<void> {
  return new Promise(runner)
}
export function thenFinished(task: Promise<any>, resolve: any, reject: any) {
  return task.then(resolve, reject)
}
export function groupFinished(animations: any[]) {
  return Promise.all(animations.map(animation => animation.finished))
}
export function thenGroup(task: Promise<any>, resolve: any) {
  return task.finally(resolve).then(() => {})
}
export function getControlProperty(control: any, name: string) { return control[name] }
// Preserve JavaScript's destructuring defaults and own-property copy semantics.
export function asyncOptions({autoplay = true, delay = 0, type = "keyframes", repeat = 0,
  repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options}: any) {
  return {autoplay, delay, type, repeat, repeatDelay, repeatType, keyframes, name, motionValue, element, ...options}
}

export function copyOptions(value: any) { return {...value} }
