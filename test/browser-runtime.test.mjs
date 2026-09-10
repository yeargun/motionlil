import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { build } from 'esbuild'
import { chromium } from 'playwright'

let server, browser, origin
before(async () => {
  const upstream = await build({
    stdin: { contents: 'export { animate, motionValue, MotionValue, frame, cancelFrame } from "motion"', resolveDir: process.cwd() },
    bundle: true, format: 'esm', write: false, define: { 'process.env.NODE_ENV': '"production"' },
  })
  const sources = {
    '/original.js': upstream.outputFiles[0].text,
    '/lilscript.js': readFileSync('dist/index.bundle.js', 'utf8'),
    '/full.js': readFileSync('dist/full.js', 'utf8'),
  }
  server = createServer((req, res) => {
    res.setHeader('Content-Type', req.url in sources ? 'text/javascript' : 'text/html')
    res.end(sources[req.url] ?? '<!doctype html><body></body>')
  })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  origin = `http://127.0.0.1:${server.address().port}`
  browser = await chromium.launch({ headless: true })
})
after(async () => {
  await browser?.close()
  if (server) await new Promise(resolve => server.close(resolve))
})

async function playback(lane, options = {}) {
  const page = await browser.newPage()
  try {
    await page.goto(origin)
    return await page.evaluate(async ({ lane, options }) => {
      // Drive both real implementations with the same clock and frame queue.
      let now = 1000, nextId = 0
      const pending = new Map()
      Object.defineProperty(performance, 'now', { value: () => now })
      window.requestAnimationFrame = callback => { pending.set(++nextId, callback); return nextId }
      window.cancelAnimationFrame = id => pending.delete(id)
      const runtime = await import(`/${lane}.js`)
      const value = runtime.motionValue(0), updates = [], changes = []
      let completions = 0
      const unsubscribe = value.on('change', x => changes.push(x))
      const controls = runtime.animate(value, [0, 24], {
        duration: .6, ease: 'linear', ...options,
        onUpdate: x => updates.push(x), onComplete: () => completions++,
      })
      for (let elapsed = 0; elapsed <= 1800; elapsed += 100) {
        now = 1000 + elapsed
        const callbacks = [...pending.values()]
        pending.clear()
        for (const callback of callbacks) callback(now)
        await Promise.resolve()
        await Promise.resolve()
      }
      const final = value.get()
      controls.stop(); unsubscribe(); value.destroy()
      return { updates, changes, completions, final }
    }, { lane, options })
  } finally { await page.close() }
}

test('frame queues match upstream deduplication, immediate scheduling and cancellation', async () => {
  const traces = []
  for (const lane of ['original', 'lilscript', 'full']) {
    const page = await browser.newPage()
    try {
      await page.goto(origin)
      traces.push(await page.evaluate(async lane => {
        let now = 1000, nextId = 0
        const pending = new Map(), trace = []
        Object.defineProperty(performance, 'now', { value: () => now })
        window.requestAnimationFrame = fn => { pending.set(++nextId, fn); return nextId }
        window.cancelAnimationFrame = id => pending.delete(id)
        const m = await import(`/${lane}.js`)
        const later = () => trace.push('cancelled')
        const immediate = () => trace.push('immediate')
        const first = () => {
          trace.push('first')
          m.frame.update(immediate, false, true)
          m.frame.update(first, false, true)
          m.frame.update(later)
          m.cancelFrame(later)
        }
        let ticks = 0
        const persistent = () => {
          trace.push(`keep-${++ticks}`)
          if (ticks === 2) m.cancelFrame(persistent)
        }
        m.frame.update(first)
        m.frame.update(first)
        m.frame.update(persistent, true)
        m.frame.render(() => trace.push('render'))
        for (let i = 0; i < 4; i++) {
          now += 20
          const callbacks = [...pending.values()]; pending.clear()
          for (const callback of callbacks) callback(now)
          await Promise.resolve(); await Promise.resolve()
        }
        return trace
      }, lane))
    } finally { await page.close() }
  }
  assert.deepEqual(traces[0], ['first', 'keep-1', 'immediate', 'render', 'keep-2'])
  assert.deepEqual(traces[1], traces[0])
  assert.deepEqual(traces[2], traces[0])
})

for (const [name, options] of [
  ['linear', {}],
  ['delay', { delay: .2 }],
  ['reverse repeat', { repeat: 1, repeatType: 'reverse', repeatDelay: .1 }],
  ['mirror repeat', { repeat: 1, repeatType: 'mirror', repeatDelay: .1 }],
]) {
  test(`${name}: callbacks, values and completion match upstream under the same clock`, async () => {
    const original = await playback('original', options)
    for (const lane of ['lilscript', 'full']) {
      const actual = await playback(lane, options)
      assert.equal(actual.updates.length, original.updates.length, `${lane}: onUpdate count`)
      assert.equal(actual.changes.length, original.changes.length, `${lane}: change count`)
      for (const key of ['updates', 'changes']) {
        actual[key].forEach((value, i) => assert.ok(Math.abs(value - original[key][i]) < 1e-8,
          `${lane}: ${key}[${i}] = ${value}, upstream ${original[key][i]}`))
      }
      assert.equal(actual.completions, original.completions, `${lane}: completion count`)
      assert.equal(actual.final, original.final, `${lane}: final value`)
    }
  })
}
