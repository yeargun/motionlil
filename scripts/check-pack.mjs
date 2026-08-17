import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"

const json = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
})
const result = JSON.parse(json)[0]
const required = new Set([
  "dist/index.js",
  "dist/index.cjs",
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
if (manifest.sideEffects !== false) throw new Error("package must remain tree-shakeable")
console.log(
  `npm pack: ${result.entryCount} files, ${result.size} bytes packed, ${result.unpackedSize} bytes unpacked`,
)
