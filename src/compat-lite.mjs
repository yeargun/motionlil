import * as core from "./.__compiled-index.mjs"
import { normalizeControls } from "./control-compat.mjs"

export const number = core.numberType
export const getValueAsType = core.getAsType

export function defaultEasing(values, easing = core.easeInOut) {
  return values.map(() => easing || core.easeInOut).slice(0, -1)
}

export class SubscriptionManager {
  constructor() {
    this.subscriptions = []
  }

  add(handler) {
    if (!this.subscriptions.includes(handler)) this.subscriptions.push(handler)
    return () => {
      const index = this.subscriptions.indexOf(handler)
      if (index !== -1) this.subscriptions.splice(index, 1)
    }
  }

  notify(a, b, c) {
    for (const subscription of [...this.subscriptions]) subscription(a, b, c)
  }

  getSize() {
    return this.subscriptions.length
  }

  clear() {
    this.subscriptions.length = 0
  }
}

export class MotionValue {
  constructor(initial, options = {}) {
    return core.motionValue(initial, options)
  }

  static [Symbol.hasInstance](value) {
    return core.isMotionValue(value)
  }
}

export class GroupAnimation {
  constructor(animations = []) {
    this.animations = animations.filter(Boolean).map(normalizeControls)
    this.stop = () => this.runAll("stop")
  }

  get finished() {
    return Promise.all(this.animations.map((animation) => animation.finished))
  }

  getAll(name) {
    return this.animations[0]?.[name]
  }

  setAll(name, value) {
    for (const animation of this.animations) animation[name] = value
  }

  get time() { return this.getAll("time") ?? 0 }
  set time(value) { this.setAll("time", value) }
  get speed() { return this.getAll("speed") ?? 1 }
  set speed(value) { this.setAll("speed", value) }
  get state() { return this.getAll("state") ?? "idle" }
  get startTime() { return this.getAll("startTime") ?? null }
  get duration() { return this.getMax("duration") }
  get iterationDuration() { return this.getMax("iterationDuration") }

  getMax(name) {
    return this.animations.reduce((maximum, animation) => {
      const value = animation[name]
      return typeof value === "number" && value > maximum ? value : maximum
    }, 0)
  }

  attachTimeline(timeline) {
    const subscriptions = this.animations.map((animation) => animation.attachTimeline?.(timeline))
    return () => subscriptions.forEach((cancel, index) => {
      cancel?.()
      this.animations[index].stop?.()
    })
  }

  runAll(method) {
    for (const animation of this.animations) animation[method]?.()
  }

  play() { this.runAll("play") }
  pause() { this.runAll("pause") }
  cancel() { this.runAll("cancel") }
  complete() { this.runAll("complete") }
}

export class GroupAnimationWithThen extends GroupAnimation {
  then(resolve, reject) {
    return this.finished.then(resolve, reject)
  }
}

export function animate(...args) {
  return normalizeControls(core.animate(...args))
}
