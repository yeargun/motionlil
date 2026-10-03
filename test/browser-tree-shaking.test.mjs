import assert from "node:assert/strict"
import { fileURLToPath } from "node:url"
import test from "node:test"
import { build } from "esbuild"


test("tree-shaken root imports retain native animation and value initialization", {timeout: 20000}, async () => {
  const {chromium} = await import("playwright")
  const browser = await chromium.launch({headless: true})
  try {
    for (const specifier of ["motionlil", "motion"]) {
      const built = await build({
        stdin: {contents: `import {animateMini, animate, motionValue} from ${JSON.stringify(specifier)}; window.motionUnderTest = {animateMini, animate, motionValue}`, resolveDir: fileURLToPath(new URL("..", import.meta.url))},
        bundle: true, format: "iife", platform: "browser", target: "es2020", treeShaking: true, minify: true, write: false, logLevel: "silent",
      })
      const page = await browser.newPage()
      await page.setContent('<div id="box" style="opacity:0">animation</div>')
      await page.addScriptTag({content: built.outputFiles[0].text})
      const result = await page.evaluate(async () => {
        const finish = (controls, label) => Promise.race([Promise.resolve(controls), new Promise((_, reject) => setTimeout(() => reject(new Error(label + " did not finish")), 2000))])
        const {animateMini, animate, motionValue} = window.motionUnderTest
        const box = document.getElementById("box")
        const controls = animateMini(box, {opacity: [0, 1]}, {duration: 0.05})
        await finish(controls, "animateMini")
        const opacity = Number(getComputedStyle(box).opacity)
        const value = motionValue(0)
        const events = []
        const unsubscribe = value.on("change", x => events.push(x))
        const animation = animate(value, 10, {duration: 0.05})
        await finish(animation, "MotionValue")
        unsubscribe()
        const finalValue = value.get()
        value.destroy()
        const eventLike = {value: 1, addEventListener() {}, removeEventListener() {}}
        await finish(animate(eventLike, {value: [1, 7]}, {duration: 0.05}), "plain object")
        return {opacity, finalValue, objectValue: eventLike.value, changed: events.length > 0, stop: typeof controls.stop, cancel: typeof controls.cancel}
      })
      assert.deepEqual(result, {opacity: 1, finalValue: 10, objectValue: 7, changed: true, stop: "function", cancel: "function"}, specifier)
      await page.close()
    }
  } finally { await browser.close() }
})
