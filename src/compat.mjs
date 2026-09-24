import * as core from "./.__compiled-index.mjs"

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
    core.addUniqueItem(this.subscriptions, handler)
    return () => core.removeItem(this.subscriptions, handler)
  }

  notify(a, b, c) {
    const subscriptions = this.subscriptions
    for (let i = 0, length = subscriptions.length; i < length; i++) subscriptions[i]?.(a, b, c)
  }

  getSize() {
    return this.subscriptions.length
  }

  clear() {
    this.subscriptions.length = 0
  }
}

// Upstream's public classes. The compiled graph builds their instances on
// these constructors' prototypes, so every entry shares one of each.
export {
  __lilMotionValue as MotionValue,
  __lilGroupAnimation as GroupAnimation,
  __lilGroupAnimationWithThen as GroupAnimationWithThen,
  __lilJSAnimation as JSAnimation,
  __lilNativeAnimation as NativeAnimation,
  __lilNativeAnimationExtended as NativeAnimationExtended,
  __lilNativeAnimationWrapper as NativeAnimationWrapper,
  __lilAsyncMotionValueAnimation as AsyncMotionValueAnimation,
} from "./.__compiled-index.mjs"

export function animateValue(options) {
  return new core.__lilJSAnimation(options)
}

const resolverQueue = new Set()

export class KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
    this.state = "pending"
    this.isAsync = isAsync
    this.needsMeasurement = false
    this.unresolvedKeyframes = [...unresolvedKeyframes]
    this.onComplete = onComplete
    this.name = name
    this.motionValue = motionValue
    this.element = element
  }

  scheduleResolve() {
    this.state = "scheduled"
    if (this.isAsync) {
      resolverQueue.add(this)
      queueMicrotask(() => {
        for (const resolver of [...resolverQueue]) {
          resolver.readKeyframes()
          resolver.complete(false)
        }
      })
    } else {
      this.readKeyframes()
      this.complete()
    }
  }

  readKeyframes() {
    const frames = this.unresolvedKeyframes
    const motionValue = this.motionValue
    if (frames[0] == null) {
      frames[0] = motionValue?.get?.() ?? this.element?.readValue?.(this.name, frames.at(-1)) ?? frames.at(-1)
      if (motionValue?.get?.() === undefined) motionValue?.set?.(frames[0])
    }
    for (let index = 1; index < frames.length; index++) {
      frames[index] ??= frames[index - 1]
    }
  }

  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}

  complete(forced = false) {
    this.state = "complete"
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, forced)
    resolverQueue.delete(this)
  }

  cancel() {
    resolverQueue.delete(this)
    this.state = "pending"
  }

  resume() {
    if (this.state === "pending") this.scheduleResolve()
  }
}

export class DOMKeyframesResolver extends KeyframeResolver {}

export class Feature {
  constructor(node) {
    this.isMounted = false
    this.node = node
  }
  mount() { this.isMounted = true }
  unmount() { this.isMounted = false }
  update() {}
}

export class FlatTree {
  constructor() {
    this.children = []
    this.isDirty = false
  }
  add(child) {
    core.addUniqueItem(this.children, child)
    this.isDirty = true
  }
  remove(child) {
    core.removeItem(this.children, child)
    this.isDirty = true
  }
  forEach(callback) {
    if (this.isDirty) this.children.sort(core.compareByDepth)
    this.isDirty = false
    this.children.forEach(callback)
  }
}

export class NodeStack {
  constructor() {
    this.lead = undefined
    this.prevLead = undefined
    this.members = []
  }
  add(node) {
    core.addUniqueItem(this.members, node)
    node.scheduleRender?.()
  }
  remove(node) {
    core.removeItem(this.members, node)
    if (node === this.prevLead) this.prevLead = undefined
    if (node === this.lead) this.promote(this.members.at(-1))
  }
  relegate(node) {
    const candidate = this.members[this.members.indexOf(node) - 1]
    if (!candidate) return false
    this.promote(candidate)
    return true
  }
  promote(node) {
    if (!node || node === this.lead) return
    this.prevLead = this.lead
    this.lead = node
    node.show?.()
    node.scheduleRender?.()
  }
  exitAnimationComplete() {
    for (const member of this.members) member.options?.onExitComplete?.()
  }
  scheduleRender() { this.members.forEach((member) => member.scheduleRender?.(false)) }
  removeLeadSnapshot() { if (this.lead) this.lead.snapshot = undefined }
}

export class VisualElement {
  constructor(options = {}, parent = null) {
    const visualState = options.visualState
    this.current = null
    this.parent = parent ?? options.parent ?? null
    this.children = new Set()
    this.values = new Map()
    this.events = new Map()
    this.features = new Map()
    this.options = options
    this.props = options.props ?? {}
    this.latestValues = visualState?.latestValues ?? {}
    this.renderState = visualState?.renderState ?? {}
    this.isMounted = false
    this.isVisible = true
  }
  mount(instance) { this.current = instance; this.isMounted = true; this.parent?.children?.add(this) }
  unmount() { this.parent?.children?.delete(this); this.current = null; this.isMounted = false }
  update(props, presenceContext) { this.props = props; this.presenceContext = presenceContext }
  getProps() { return this.props }
  getValue(key, fallback) {
    if (!this.values.has(key) && fallback !== undefined) this.values.set(key, core.motionValue(fallback))
    return this.values.get(key)
  }
  addValue(key, value) { this.values.set(key, value) }
  removeValue(key) { this.values.delete(key) }
  hasValue(key) { return this.values.has(key) }
  forEachValue(callback) { this.values.forEach(callback) }
  on(event, callback) {
    if (!this.events.has(event)) this.events.set(event, new SubscriptionManager())
    return this.events.get(event).add(callback)
  }
  notify(event, ...args) { this.events.get(event)?.notify(...args) }
  scheduleRender() { this.render() }
  render() {}
  build() {}
  measureViewportBox() { return core.createBox() }
  setStaticValue(key, value) { this.latestValues[key] = value }
  getStaticValue(key) { return this.latestValues[key] }
  setVisibility(visible) { this.isVisible = visible }
  show() { this.setVisibility(true) }
  hide() { this.setVisibility(false) }
}

export class DOMVisualElement extends VisualElement {}
export class HTMLVisualElement extends DOMVisualElement {}
export class ObjectVisualElement extends VisualElement {
  render() { if (this.current) Object.assign(this.current, this.latestValues) }
}
export class SVGVisualElement extends DOMVisualElement {}

export class DocumentProjectionNode extends VisualElement {}
export class HTMLProjectionNode extends VisualElement {}

export class ViewTransitionBuilder {
  constructor(update, options) {
    return core.animateView(update, options)
  }
}

export class LayoutAnimationBuilder {
  constructor(scope, updateDom, defaultOptions) {
    this.scope = scope
    this.updateDom = updateDom
    this.defaultOptions = defaultOptions
  }
  start() {
    this.updateDom?.()
    return new core.__lilGroupAnimation([])
  }
}

export { animate, animateMini } from "./.__compiled-index.mjs"
