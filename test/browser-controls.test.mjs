import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { chromium } from 'playwright'

test('group controls seek, change speed and complete real browser animations', async () => {
  const source = readFileSync(resolve('dist/index.bundle.js'))
  const server = createServer((req, res) => {
    res.setHeader('Content-Type', req.url === '/runtime.js' ? 'text/javascript' : 'text/html')
    res.end(req.url === '/runtime.js' ? source : '<!doctype html><body></body>')
  })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const browser = await chromium.launch({ headless: true })
  try {
    for (const mini of [true, false]) {
      const page = await browser.newPage()
      await page.goto(`http://127.0.0.1:${server.address().port}/`)
      const result = await page.evaluate(async mini => {
        const runtime = await import('/runtime.js')
        const elements = Array.from({ length: 3 }, () => {
          const el = document.createElement('div')
          el.style.cssText = 'width:16px;height:16px;margin-right:2px;opacity:.25'
          document.body.append(el)
          return el
        })
        const controls = runtime[mini ? 'animateMini' : 'animate'](elements, {
          width: [16, 28], marginRight: [2, 6], opacity: [.25, 1],
        }, { duration: .6, ease: 'linear' })
        controls.pause()
        controls.time = .3
        await new Promise(requestAnimationFrame)
        await new Promise(requestAnimationFrame)
        const middle = elements.map(el => {
          const s = getComputedStyle(el)
          return [+s.opacity, parseFloat(s.width), parseFloat(s.marginRight)]
        })
        const time = controls.time
        controls.speed = 2
        const speed = controls.speed
        let finished = false
        controls.finished.then(() => { finished = true })
        await Promise.resolve()
        const prematurelyFinished = finished
        controls.complete()
        await Promise.race([controls.finished, new Promise((_, reject) => setTimeout(() => reject(new Error('completion timeout')), 1000))])
        return { middle, time, speed, prematurelyFinished, finished }
      }, mini)
      for (const row of result.middle) {
        assert.ok(Math.abs(row[0] - .625) < .02)
        assert.ok(Math.abs(row[1] - 22) < .6)
        assert.ok(Math.abs(row[2] - 4) < .6)
      }
      assert.ok(Math.abs(result.time - .3) < .001)
      assert.equal(result.speed, 2)
      assert.equal(result.prematurelyFinished, false)
      assert.equal(result.finished, true)
      await page.close()
    }
  } finally {
    await browser.close()
    await new Promise(resolve => server.close(resolve))
  }
})
