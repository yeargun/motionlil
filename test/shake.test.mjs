import assert from "node:assert/strict"
import { fileURLToPath } from "node:url"
import test from "node:test"
import { build } from "esbuild"
import { minify } from "terser"

async function bundle(specifier, names) {
  const built = await build({
    stdin: {
      contents: `export { ${names.join(", ")} } from ${JSON.stringify(specifier)}`,
      resolveDir: fileURLToPath(new URL("..", import.meta.url)),
    },
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2020",
    treeShaking: true,
    legalComments: "none",
    minify: true,
    write: false,
  })
  const result = await minify(built.outputFiles[0].text, {
    module: true,
    compress: { passes: 3 },
    mangle: { toplevel: true },
    format: { comments: false },
  })
  return result.code.length
}

test("named imports do not pull the whole consumer graph", async () => {
  const animateMini = await bundle("motionlil", ["animateMini"])
  const animate = await bundle("motionlil", ["animate"])
  const lab = await bundle("motionlil", [
    "animate", "animateMini", "hover", "inView", "motionValue", "press", "scroll", "stagger",
  ])
  assert.ok(animateMini < 20_000, `animateMini stayed too large: ${animateMini}`)
  assert.ok(animateMini * 2 < animate, `animateMini ${animateMini} should be much smaller than animate ${animate}`)
  assert.ok(animate < lab, `animate ${animate} should be smaller than the wide import set ${lab}`)
})
