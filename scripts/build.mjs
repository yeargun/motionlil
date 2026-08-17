import { spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import { minify } from "terser"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = join(root, "src")
const dist = join(root, "dist")
const temporary = join(root, ".tmp", "build")
const compilerCandidates = [
  process.env.LILMOTION_LILSCRIPT_BIN,
  resolve(root, "../lilscript/target/release/lilscript"),
  "lilscript",
].filter(Boolean)

function canRun(candidate) {
  if (candidate.includes("/") && !existsSync(candidate)) return false
  return spawnSync(candidate, ["--version"], { stdio: "ignore" }).status === 0
}

const compiler = compilerCandidates.find(canRun)
const buildMode = process.env.LILMOTION_BUILD_MODE ?? "production"
if (!new Set(["development", "production"]).has(buildMode)) {
  throw new Error(`Invalid LILMOTION_BUILD_MODE: ${buildMode}`)
}
if (!compiler) {
  throw new Error(
    "LilScript compiler not found. Set LILMOTION_LILSCRIPT_BIN to a release compiler.",
  )
}

await rm(temporary, { recursive: true, force: true })
await rm(dist, { recursive: true, force: true })
await mkdir(temporary, { recursive: true })
await mkdir(dist, { recursive: true })

const entries = [
  ["index", "index.lil"],
  ["mini", "mini.lil"],
  ["debug", "debug.lil"],
]

function compile(name, input) {
  // The compiler preserves foreign ESM paths relative to its output. Placing
  // this temporary artifact beside the source lets esbuild resolve and inline
  // the four typed host-boundary modules.
  const compiled = join(source, `.__compiled-${name}.mjs`)
  const result = spawnSync(
    compiler,
    [
      join(source, input),
      "--target",
      "js-module",
      "--config",
      join(source, "lilscript.toml"),
      "--mode",
      buildMode,
      "--output",
      compiled,
    ],
    { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
  )
  if (result.status !== 0) {
    throw new Error(`${result.stdout}${result.stderr}`)
  }
  return compiled
}

const compiledFiles = []
const facadeFiles = []

async function createFacade(name, compiled) {
  if (name === "debug") return compiled
  const facade = join(source, `.__entry-${name}.mjs`)
  const compiledName = `./${compiled.split("/").at(-1)}`
  const sourceCode = name === "index"
    ? [
        `export * from ${JSON.stringify(compiledName)}`,
        'export * from "./compat.mjs"',
        'export { animate } from "./compat.mjs"',
      ].join("\n")
    : [
        `import * as core from ${JSON.stringify(compiledName)}`,
        'import { normalizeControls } from "./control-compat.mjs"',
        "export const animate = (...args) => normalizeControls(core.animate(...args))",
        "export const animateSequence = (...args) => normalizeControls(core.animateSequence(...args))",
      ].join("\n")
  await writeFile(facade, `${sourceCode}\n`)
  facadeFiles.push(facade)
  return facade
}

async function terserMinify(file, module) {
  if (buildMode !== "production") return
  const sourceCode = await readFile(file, "utf8")
  const result = await minify(sourceCode, {
    module,
    compress: { passes: 3 },
    mangle: {
      toplevel: true,
      properties: { regex: /^_/, keep_quoted: true },
    },
    format: { comments: false },
  })
  if (!result.code) throw new Error(`Terser produced no code for ${file}`)
  await writeFile(file, `${result.code}\n`)
}

try {
  for (const [name, input] of entries) {
    const compiled = compile(name, input)
    compiledFiles.push(compiled)
    const entry = await createFacade(name, compiled)
    const common = {
      entryPoints: [entry],
      bundle: true,
      platform: "browser",
      target: "es2020",
      treeShaking: true,
      legalComments: "none",
      logLevel: "warning",
    }
    await build({ ...common, format: "esm", outfile: join(dist, `${name}.js`) })
    await terserMinify(join(dist, `${name}.js`), true)
    await build({
      ...common,
      format: "cjs",
      platform: "neutral",
      outfile: join(dist, `${name}.cjs`),
    })
    await terserMinify(join(dist, `${name}.cjs`), false)
  }

  await build({
    entryPoints: [compiledFiles[0]],
    bundle: true,
    platform: "browser",
    format: "iife",
    globalName: "lilmotion",
    target: "es2020",
    treeShaking: true,
    legalComments: "none",
    outfile: join(dist, "lilmotion.global.js"),
  })
  await terserMinify(join(dist, "lilmotion.global.js"), false)
} finally {
  await Promise.all([...compiledFiles, ...facadeFiles].map((file) => rm(file, { force: true })))
  await rm(temporary, { recursive: true, force: true })
}

console.log(`Built ${entries.length} ${buildMode} entry points with ${compiler}`)
