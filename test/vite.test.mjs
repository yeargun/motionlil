import assert from "node:assert/strict"
import { mkdir, readFile, rm } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"
import { build } from "vite"

const root = dirname(fileURLToPath(import.meta.url))
const fixture = resolve(root, "fixtures/vite")
const output = resolve(root, "../test-output/vite")

test("Vite bundles the public package entry", async () => {
  await rm(output, { recursive: true, force: true })
  await mkdir(output, { recursive: true })
  try {
    await build({
      root: fixture,
      logLevel: "silent",
      build: {
        outDir: output,
        emptyOutDir: true,
        minify: "terser",
      },
    })
    const html = await readFile(resolve(output, "index.html"), "utf8")
    const match = html.match(/src="\.\/assets\/(.+?\.js)"/)
      ?? html.match(/src="\/assets\/(.+?\.js)"/)
    assert.ok(match, html)
    const bundle = await readFile(resolve(output, "assets", match[1]), "utf8")
    assert.match(bundle, /motionlil-ok/)
    assert.doesNotMatch(bundle, /from["']motionlil["']/)
  } finally {
    await rm(output, { recursive: true, force: true })
  }
})
