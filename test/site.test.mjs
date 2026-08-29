import assert from "node:assert/strict"
import { readFile, stat } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import * as runtime from "../dist/index.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const read = (path) => readFile(join(root, path), "utf8")
const results = JSON.parse(await read("site/results.json"))
const demoSource = await read("site/demo.js")

test("the Pages lab contains every recovered LilScript Motion case", () => {
  assert.equal(results.examples.length, 16)
  assert.equal(results.summary.cases, 16)
  assert.equal(results.summary.wins, 16)
  for (const example of results.examples) {
    assert.ok(demoSource.includes(`"${example.id}"`), `missing demo: ${example.id}`)
    assert.ok(example.lilscript < example.motion, `${example.id} must remain a paired Brotli win`)
  }
})

test("the published compression summary is derived from the case data", () => {
  const motion = results.examples.reduce((total, example) => total + example.motion, 0)
  const lilscript = results.examples.reduce((total, example) => total + example.lilscript, 0)
  const reductions = results.examples.map((example) => example.reduction).sort((a, b) => a - b)
  const median = (reductions[7] + reductions[8]) / 2
  assert.equal(motion, results.summary.motionBytes)
  assert.equal(lilscript, results.summary.lilscriptBytes)
  assert.ok(Math.abs((1 - lilscript / motion) * 100 - results.summary.weightedReduction) < 1e-10)
  assert.ok(Math.abs(median - results.summary.medianReduction) < 1e-10)
})

test("every API used by the live recreations exists in motionlil", () => {
  for (const name of [
    "animate", "animateMini", "hover", "inView", "motionValue",
    "press", "resize", "scroll", "stagger",
  ]) {
    assert.equal(typeof runtime[name], "function", `${name} is not callable`)
  }
})

test("affected demos stay observable and use matching timing semantics", () => {
  assert.match(demoSource, /opacity: "var\(--opacity-end\)"/)
  assert.match(demoSource, /const options = \{ duration: 1, ease: "linear" \}/)
  assert.match(demoSource, /document\.querySelector\("#perf-run"\)\.onclick = runPerf; runPerf\(\)/)
  assert.match(demoSource, /rotate: \[-16, 16\], scale: \[0\.9, 1\.1\]/)
})

test("the README leads with compression evidence and links the lab", async () => {
  const readme = await read("README.md")
  const evidence = readme.indexOf("16/16 paired browser demos")
  const install = readme.indexOf("npm install motionlil")
  assert.ok(evidence > 0 && evidence < install)
  assert.match(readme, /12\.4% smaller in total/)
  assert.match(readme, /https:\/\/yeargun\.github\.io\/motionlil\//)
})

test("the generated Pages artifact is complete and uses the package runtime", async () => {
  for (const path of [
    "_site/index.html", "_site/app.js", "_site/styles.css", "_site/demo.html",
    "_site/demo.js", "_site/demo.css", "_site/results.json", "_site/motionlil.js",
  ]) {
    assert.ok((await stat(join(root, path))).size > 0, `${path} is empty`)
  }
  const siteRuntime = await read("_site/motionlil.js")
  assert.doesNotMatch(siteRuntime, /from\s*["']\.\/animate\.js["']/)
  assert.match(siteRuntime, /animateMini|animate/)
})

test("legacy naming does not leak into source or Pages content", async () => {
  const legacyName = new RegExp(["lil", "motion"].join(""), "i")
  for (const path of [
    "README.md", "package.json", "site/index.html", "site/app.js", "site/demo.js",
    "site/results.json", ".github/workflows/pages.yml",
  ]) {
    assert.doesNotMatch(await read(path), legacyName, path)
  }
})
