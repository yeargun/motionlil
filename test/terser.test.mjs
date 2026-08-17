import assert from "node:assert/strict"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"
import test from "node:test"
import { minify } from "terser"

test("the distributed ESM survives a second Terser compression/mangle pass", async () => {
  const input = await readFile(new URL("../dist/index.js", import.meta.url), "utf8")
  const result = await minify(input, {
    module: true,
    compress: { passes: 3 },
    mangle: true,
    format: { comments: false },
  })
  assert.ok(result.code)
  const output = new URL("../test-output/terser-index.mjs", import.meta.url)
  await mkdir(new URL("../test-output/", import.meta.url), { recursive: true })
  await writeFile(output, result.code)
  try {
    const api = await import(`${pathToFileURL(output.pathname)}?v=${Date.now()}`)
    assert.equal(api.mix(2, 10, 0.5), 6)
    assert.equal(api.wrap(0, 5, 6), 1)
    assert.equal(typeof api.animate, "function")
  } finally {
    await rm(output, { force: true })
  }
})
