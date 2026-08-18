import assert from "node:assert/strict"
import { createRequire } from "node:module"
import test from "node:test"

import * as motion from "motionlil"
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

test("every Motion DOM export is present", () => {
  const missing = Object.keys(upstream).filter((name) => !(name in motion))
  assert.deepEqual(missing, [])
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
