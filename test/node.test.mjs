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
