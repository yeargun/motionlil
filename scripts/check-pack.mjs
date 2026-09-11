import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { dirname, posix } from "node:path"

const json = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
})
const result = JSON.parse(json)[0]
const required = new Set([
  "dist/index.js",
  "dist/index.cjs",
  "dist/index.bundle.js",
  "dist/animate.js",
  "dist/animate-mini.js",
  "dist/scroll.js",
  "dist/gestures.js",
  "dist/viewport.js",
  "dist/resize.js",
  "dist/full.js",
  "dist/full.bundle.js",
  "dist/full.cjs",
  "dist/mini.js",
  "dist/mini.cjs",
  "dist/debug.js",
  "dist/debug.cjs",
  "dist/motionlil.global.js",
  "types/index.d.ts",
  "types/mini.d.ts",
  "types/debug.d.ts",
])
const files = new Set(result.files.map(({ path }) => path))
for (const path of required) {
  if (!files.has(path)) throw new Error(`npm tarball is missing ${path}`)
}
const manifest = JSON.parse(readFileSync("package.json", "utf8"))
if (manifest.name !== "motionlil") throw new Error("unexpected package name")
if (JSON.stringify(manifest.sideEffects) !== JSON.stringify(["./dist/internal/graph/effect-*.js"])) {
  throw new Error("only explicit initialization modules may have side effects")
}
for (const file of files) {
  if (!file.startsWith("dist/") || !file.endsWith(".js")) continue
  const source = readFileSync(file,"utf8")
  for (const match of source.matchAll(/(?:from\s*|import\s*)["'](\.[^"']+)["']/g)) {
    const dependency = posix.normalize(posix.join(dirname(file),match[1]))
    if (!files.has(dependency)) throw new Error(`npm tarball is missing ${dependency}, imported by ${file}`)
  }
}
console.log(
  `npm pack: ${result.entryCount} files, ${result.size} bytes packed, ${result.unpackedSize} bytes unpacked`,
)
