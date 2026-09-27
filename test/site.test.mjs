import assert from "node:assert/strict"
import { readdir, readFile, stat } from "node:fs/promises"
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
  for (const example of results.examples) {
    assert.ok(demoSource.includes(`"${example.id}"`), `missing demo: ${example.id}`)
  }
})

test("size and performance comparisons use the same source-built ESM inputs", async () => {
  const comparison = JSON.parse(await read("site/comparison.json"))
  const performance = JSON.parse(await read("site/performance.json"))
  const mangling = JSON.parse(await read("site/mangling.json"))
  assert.equal(mangling.scope.full.length, 312)
  assert.equal(mangling.source.portCommit, performance.sources.port.commit)
  for (const lane of ["original", "lilscript"]) {
    assert.equal(comparison.esm[lane].sha256, performance.inputs[lane].sha256)
    const artifact = mangling.measurements.find(row => row.scope === "full" && row.mode === "public-properties" && row.lane === lane)
    assert.equal(artifact.exports, 312)
    assert.equal(artifact.sha256, comparison.esm[lane].sha256)
  }
  assert.equal(comparison.compiler.commit, performance.sources.compiler.commit)
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

test("the README leads with the current comparison and links the lab", async () => {
  const readme = await read("README.md")
  const evidence = readme.indexOf("current public ESM sizes")
  const install = readme.indexOf("npm install motionlil")
  assert.ok(evidence > 0 && evidence < install)
  const comparison = JSON.parse(await read("site/comparison.json"))
  for (const lane of ["original", "lilscript"]) {
    assert.ok(readme.includes(comparison.esm[lane].brotli11.toLocaleString("en-US")))
  }
  assert.match(readme, /https:\/\/yeargun\.github\.io\/motionlil\//)
})

test("the generated Pages artifact is complete and uses the package runtime", async () => {
  for (const path of [
    "_site/index.html", "_site/app.js", "_site/styles.css", "_site/demo.html",
    "_site/demo.js", "_site/demo.css", "_site/results.json", "_site/motionlil.js",
    "_site/release.js",
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

test("the release block records the compiler, its revision and its compile time", () => {
  const compiler = results.compiler
  assert.ok(compiler, "site/results.json has no compiler block")
  assert.match(compiler.revision, /^[0-9a-f]{7,40}$/)
  assert.match(compiler.binarySha256, /^[0-9a-f]{64}$/)
  assert.match(compiler.date, /^\d{4}-\d{2}-\d{2}$/)
  assert.ok(compiler.compileWallMs.length >= 3, "record at least three compile-time samples")
  for (const ms of [...compiler.compileWallMs, ...compiler.fullEntryWallMs]) {
    assert.ok(Number.isFinite(ms) && ms > 0, `bad wall time ${ms}`)
  }
})

test("the release sizes describe exactly the shipped files and say what wrote each", async () => {
  const release = results.package
  const shipped = (await readdir(join(root, "dist"))).filter((name) => /\.c?js$/.test(name)).map((name) => `dist/${name}`)
  assert.deepEqual(release.artifacts.map((artifact) => artifact.file).sort(), shipped.sort())
  for (const artifact of release.artifacts) {
    assert.equal(artifact.raw, (await stat(join(root, artifact.file))).size, `${artifact.file} changed since it was recorded`)
    assert.ok(artifact.gzip > 0 && artifact.brotli > 0)
    // A one-line re-export compresses to more bytes than it has; any real
    // module must compress.
    if (artifact.raw >= 256) assert.ok(artifact.brotli < artifact.raw, artifact.file)
    if (artifact.writtenBy === "compiler") assert.equal(artifact.label, "compiler-written")
    else assert.match(artifact.label, /, not compiler-written$/, artifact.file)
  }
  const full = release.artifacts.find((artifact) => artifact.file === release.bars.artifact)
  for (const metric of ["raw", "gzip", "brotli"]) {
    const smallest = Math.min(...release.bars.competitors.map((bar) => bar[metric]))
    assert.equal(release.bars.strongest[metric].bytes, smallest, `strongest ${metric} bar`)
  }
  assert.ok(full, "the bar artifact is not a shipped file")
})

test("the README and the page carry the recorded release", async () => {
  const readme = await read("README.md")
  const format = new Intl.NumberFormat("en-US").format
  const full = results.package.artifacts.find((artifact) => artifact.file === results.package.bars.artifact)
  assert.ok(readme.includes(`${format(full.brotli)} B Brotli`), "README headline is stale")
  assert.ok(readme.includes(results.compiler.revision), "README does not name the compiler revision")
  for (const artifact of results.package.artifacts) {
    assert.ok(readme.includes(`| \`${artifact.file}\` | ${format(artifact.raw)} |`), `README row for ${artifact.file} is stale`)
  }
  const page = await read("site/index.html")
  assert.match(page, /id="release-body"/)
  assert.match(await read("site/app.js"), /renderRelease\(data\)/)
})
