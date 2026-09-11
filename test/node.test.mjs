import assert from "node:assert/strict"
import { createRequire } from "node:module"
import test from "node:test"

import * as motion from "motionlil"
import * as full from "motionlil/full"
import * as debug from "motionlil/debug"
import * as mini from "motionlil/mini"
import * as upstream from "motion"

test("ESM entry points load without a browser global", () => {
  assert.equal(typeof motion.animate, "function")
  assert.equal(typeof motion.spring, "function")
  assert.equal(typeof motion.scroll, "function")
  assert.equal(typeof motion.inView, "function")
  assert.equal(typeof motion.motionValue, "function")
  assert.deepEqual(Object.keys(mini).sort(), ["animate", "animateSequence"])
  assert.deepEqual(Object.keys(debug), ["recordStats"])
})

test("pure utilities and MotionValue behavior work", () => {
  assert.equal(motion.clamp(0, 10, 14), 10)
  assert.equal(motion.mix(10, 30, 0.25), 15)
  assert.equal(motion.wrap(0, 10, 12), 2)
  assert.equal(motion.distance2D({ x: 0, y: 0 }, { x: 3, y: 4 }), 5)
  const interpolate = motion.interpolate([0, 1, 2], [0, 10, 20])
  assert.equal(interpolate(0.5), 5)
  assert.equal(interpolate(1.5), 15)

  const value = motion.motionValue(2)
  const changes = []
  const unsubscribe = value.on("change", (next) => changes.push(next))
  value.set(7)
  unsubscribe()
  value.set(9)
  assert.equal(value.get(), 9)
  assert.deepEqual(changes, [7])
})

test("CommonJS entry points expose the same public names", () => {
  const require = createRequire(import.meta.url)
  const cjs = require("motionlil")
  assert.deepEqual(Object.keys(cjs).sort(), Object.keys(motion).sort())
  assert.equal(cjs.mix(0, 8, 0.5), 4)
})

test("every Motion DOM export is present on the full entry", () => {
  const missing = Object.keys(upstream).filter((name) => !(name in full))
  assert.deepEqual(missing, [])
  assert.equal(full.number, full.numberType)
  assert.equal(full.getValueAsType, full.getAsType)
  assert.equal(typeof full.defaultEasing, "function")
})

test("default entry keeps the JS consumer API", () => {
  for (const name of ["animate", "animateMini", "scroll", "inView", "hover", "press", "stagger", "spring", "motionValue"]) {
    assert.equal(typeof motion[name], "function", name)
  }
  assert.equal(motion.number, motion.numberType)
  assert.equal(motion.getValueAsType, motion.getAsType)
  assert.equal(typeof motion.defaultEasing, "function")
})

test("public constructor compatibility covers common direct usage", () => {
  const value = new motion.MotionValue(3)
  value.set(4)
  assert.equal(value.get(), 4)
  assert.equal(value instanceof motion.MotionValue, true)

  const subscriptions = new motion.SubscriptionManager()
  let latest = 0
  const unsubscribe = subscriptions.add((next) => { latest = next })
  subscriptions.notify(9)
  unsubscribe()
  subscriptions.notify(10)
  assert.equal(latest, 9)

  const group = new motion.GroupAnimation([])
  assert.equal(group.duration, 0)
  assert.equal(typeof group.stop, "function")
})

test("MotionValue uses its public prototype and preserves method defaults", () => {
  for (const runtime of [motion, full]) {
    const value = runtime.motionValue(3)
    const other = new runtime.MotionValue(7)
    assert.equal(Object.getPrototypeOf(value), runtime.MotionValue.prototype)
    assert.equal(value.get, other.get)
    assert.equal(value.set, other.set)
    assert.equal(runtime.MotionValue.length, upstream.MotionValue.length)
    assert.equal(value.jump.length, upstream.MotionValue.prototype.jump.length)
    value.jump(8)
    assert.equal(value.get(), 8)
    assert.equal(value.getPrevious(), 8)
    value.destroy(); other.destroy()
  }
})

test("group compatibility preserves existing native accessors and completion promises", async () => {
  for (const runtime of [motion, full]) {
    let time = .2
    const readTime = () => time
    const finished = Promise.resolve('done')
    const control = { duration: .6, speed: 1, finished, stop() {} }
    Object.defineProperty(control, 'time', { get: readTime, set(value) { time = value } })
    const group = new runtime.GroupAnimation([control])
    assert.equal(Object.getOwnPropertyDescriptor(control, 'time').get, readTime)
    assert.equal(control.finished, finished)
    group.time = .4
    assert.equal(group.time, .4)
    assert.deepEqual(await group.finished, ['done'])
  }
})

test("ESM entry points share the same frame queue, values and control constructors", async () => {
  assert.equal(motion.frame, full.frame)
  assert.equal(motion.motionValue, full.motionValue)
  assert.equal(motion.MotionValue, full.MotionValue)
  assert.equal(motion.GroupAnimation, full.GroupAnimation)
  assert.equal(debug.recordStats, full.recordStats)
  const require = createRequire(import.meta.url)
  const common = require('motionlil'), wide = require('motionlil/full')
  assert.equal(common.frame, wide.frame)
  assert.equal(common.MotionValue, wide.MotionValue)
})

test("value type tables use Motion's object keys, identities and defaults", () => {
  for (const name of ['transformValueTypes', 'numberValueTypes', 'defaultValueTypes']) {
    assert.equal(Object.getPrototypeOf(full[name]), Object.prototype, name)
    assert.deepEqual(Object.keys(full[name]), Object.keys(upstream[name]), name)
  }
  assert.equal(full.defaultValueTypes.opacity, full.alpha)
  assert.equal(full.numberValueTypes.scale, full.scale)
  assert.equal(full.transformValueTypes.x, full.px)
  assert.equal(full.scale.default, upstream.scale.default)
  for (const key of ['width', 'x', 'opacity', 'color', 'filter', 'missing']) {
    assert.equal(full.getDefaultValueType(key), full.defaultValueTypes[key])
  }
})

test("subscriptions preserve mutation order, omitted arguments and the cleared array", () => {
  const traces = []
  for (const runtime of [upstream, full]) {
    const manager = new runtime.SubscriptionManager(), trace = []
    const remove = manager.add((...args) => { trace.push(args); remove() })
    manager.add(() => trace.push('second'))
    manager.notify()
    const list = manager.subscriptions
    manager.clear()
    traces.push({trace, same: manager.subscriptions === list, remaining: list.length, arity: manager.notify.length})
  }
  assert.deepEqual(traces[1], traces[0])
})

test("MotionValue start resolves with undefined", async () => {
  for (const runtime of [motion, full]) {
    const value = runtime.motionValue(0)
    const completion = value.start(resolve => { resolve(); return {stop() {}} })
    assert.equal(await completion, undefined)
    value.destroy()
  }
})

test('keyframe helpers preserve null, undefined, holes and nonnumeric values like Motion', () => {
  const fn=()=>7
  const cases=[[], [null], [undefined], [1,null,undefined,2], [1,fn], [1,false], [,2], [null,3]]
  for (const input of cases) {
    const expected=input.slice(), actual=input.slice()
    upstream.fillWildcards(expected);full.fillWildcards(actual)
    assert.deepEqual(actual,expected)
    for (const options of [{}, {repeat:1,repeatType:'reverse'}, {repeat:2.9,repeatType:'reverse'}]) {
      for (const end of [undefined,null,9]) {
        assert.equal(full.getFinalKeyframe(input,options,end),upstream.getFinalKeyframe(input,options,end))
      }
    }
  }
})

test('transition lookup uses property access, nullish fallback and inherited properties', () => {
  for (const make of [
    ()=>({opacity:null,default:{duration:1}}),
    ()=>Object.create({opacity:{duration:2}}),
    ()=>({opacity:undefined,default:{duration:3}}),
    ()=>({opacity:false,default:{duration:4}}),
  ]) {
    const value=make()
    assert.equal(full.getValueTransition(value,'opacity'),upstream.getValueTransition(value,'opacity'))
  }
})

test("mix preserves Motion's numeric and mixer-returning overloads", async () => {
  const original = await import("../site/esm-comparison/original.js")
  for (const [from, to] of [[0, 10], ["translateX(0px)", "translateX(40px)"], ["#000", "#fff"]]) {
    const expected = original.mix(from, to)
    const actual = motion.mix(from, to)
    assert.equal(typeof actual, "function")
    for (const p of [0, .25, .5, 1]) assert.deepEqual(actual(p), expected(p))
  }
  assert.equal(motion.mix(10, 30, .25), original.mix(10, 30, .25))
  // The numeric mixer trusts its inputs just as Motion does; it must not
  // replace a non-number endpoint with a port-specific zero fallback.
  assert.equal(motion.mix(0, "10")(.5), original.mix(0, "10")(.5))
})
