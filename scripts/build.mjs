import { spawn, spawnSync } from "node:child_process"
import { createHash } from "node:crypto"
import { existsSync } from "node:fs"
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import { minify } from "terser"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = join(root, "src")
const dist = join(root, "dist")
const compilerCandidates = [
  process.env.MOTIONLIL_LILSCRIPT_BIN,
  process.env.LILSCRIPT_COMPILER,
  resolve(root, "../lilscript/target/release/lilscript"),
  "lilscript",
].filter(Boolean)

const compiler = compilerCandidates.find((candidate) => {
  if (candidate.includes("/") && !existsSync(candidate)) return false
  return spawnSync(candidate, ["--version"], { stdio: "ignore" }).status === 0
})
const buildMode = process.env.MOTIONLIL_BUILD_MODE ?? "production"
const keepCompilerOutput = process.env.MOTIONLIL_KEEP_COMPILER_OUTPUT === "1"
if (!new Set(["development", "production"]).has(buildMode)) {
  throw new Error(`Invalid MOTIONLIL_BUILD_MODE: ${buildMode}`)
}
if (!compiler) {
  throw new Error(
    "LilScript compiler not found. Set MOTIONLIL_LILSCRIPT_BIN to a release compiler.",
  )
}

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

const featureEntries = [
  ["animate", "entries/animate.lil"],
  ["animate-mini", "entries/animate-mini.lil"],
  ["scroll", "entries/scroll.lil"],
  ["gestures", "entries/gestures.lil"],
  ["viewport", "entries/viewport.lil"],
  ["resize", "entries/resize.lil"],
]
const standaloneEntries = [
  ["full", "full.lil"],
  ["mini", "mini.lil"],
  ["debug", "debug.lil"],
]
// Entries whose public ESM module is exactly the compiler's module: their
// `.lil` entry exports the public names and nothing else, so `dist/<name>.js`
// is the file the compiler wrote, byte for byte. Every other file is
// post-processed: the compiled core behind a hand-written JavaScript facade
// (src/compat*.mjs, src/control-compat.mjs), bundled by esbuild and minified by
// Terser, and every CommonJS or global build is esbuild's reprint minified by
// Terser. `.tmp/build-report.json` records which is which.
const compilerWrittenEntries = new Set(["scroll", "gestures", "viewport", "resize", "debug"])
const postProcessedBy = "esbuild + Terser"

const animatePublic = [
  "createScopedAnimate",
  "stagger",
  "delay",
  "delayInSeconds",
  "spring",
  "inertia",
  "keyframes",
  "motionValue",
  "mapValue",
  "transformValue",
  "springValue",
  "followValue",
  "mix",
  "interpolate",
  "transform",
  "clamp",
  "wrap",
  "progress",
  "distance",
  "distance2D",
  "frame",
  "cancelFrame",
  "easeIn",
  "easeOut",
  "easeInOut",
  "cubicBezier",
  "backIn",
  "backOut",
  "backInOut",
  "circIn",
  "circOut",
  "circInOut",
  "anticipate",
  "steps",
  "numberType",
  "getAsType",
  "isMotionValue",
]
const compatPublic = [
  "animate",
  "MotionValue",
  "SubscriptionManager",
  "GroupAnimation",
  "GroupAnimationWithThen",
  "number",
  "getValueAsType",
  "defaultEasing",
]

const compileWallMs = {}

function compile(name, input) {
  const compiled = join(dirname(join(source, input)), `.__compiled-${name}.mjs`)
  const started = performance.now()
  return new Promise((resolvePromise, reject) => {
    const child = spawn(
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
      { cwd: root },
    )
    let output = ""
    child.stdout.on("data", (chunk) => { output += chunk })
    // The compiler writes its `lilscript-timing` line to stderr under
    // LILSCRIPT_TIMING=1, and the build pool reads that line as proof a
    // compile really happened -- a build that exits 0 without one is
    // reported as failed, so its dist is never copied back. Buffering
    // stderr for the error path is right; swallowing it on success is not.
    child.stderr.on("data", (chunk) => { output += chunk; process.stderr.write(chunk) })
    child.on("error", reject)
    child.on("close", (status) => {
      compileWallMs[name] = Math.round(performance.now() - started)
      if (status !== 0) reject(new Error(output || `${name} failed`))
      else resolvePromise(compiled)
    })
  })
}

const compiledFiles = []
const facadeFiles = []

async function writeFacade(name, compiled) {
  if (name === "debug") return compiled
  const facade = join(source, `.__entry-${name}.mjs`)
  const compiledName = `./${relative(source, compiled)}`
  let sourceCode
  if (name === "animate") {
    const compat = join(source, ".__compat-animate.mjs")
    const template = await readFile(join(source, "compat-lite.mjs"), "utf8")
    await writeFile(compat, template.replaceAll("./.__compiled-index.mjs", compiledName))
    facadeFiles.push(compat)
    sourceCode = [
      `export { ${animatePublic.join(", ")} } from ${JSON.stringify(compiledName)}`,
      `export { ${compatPublic.join(", ")} } from "./.__compat-animate.mjs"`,
    ].join("\n")
  } else if (name === "animate-mini") {
    sourceCode = [
      `import { animateMini as coreAnimateMini } from ${JSON.stringify(compiledName)}`,
      'import { normalizeControls } from "./control-compat.mjs"',
      "export const animateMini = (...args) => normalizeControls(coreAnimateMini(...args))",
    ].join("\n")
  } else if (name === "full") {
    const compat = join(source, ".__compat-full.mjs")
    const template = await readFile(join(source, "compat.mjs"), "utf8")
    await writeFile(compat, template.replaceAll("./.__compiled-index.mjs", compiledName))
    facadeFiles.push(compat)
    sourceCode = [
      `export * from ${JSON.stringify(compiledName)}`,
      `export * from "./.__compat-full.mjs"`,
      'export { animate } from "./.__compat-full.mjs"',
    ].join("\n")
  } else if (name === "mini") {
    sourceCode = [
      `import * as core from ${JSON.stringify(compiledName)}`,
      'import { normalizeControls } from "./control-compat.mjs"',
      "export const animate = (...args) => normalizeControls(core.animate(...args))",
      "export const animateSequence = (...args) => normalizeControls(core.animateSequence(...args))",
    ].join("\n")
  } else if (name === "scroll") {
    sourceCode = `export { scroll, scrollInfo } from ${JSON.stringify(compiledName)}`
  } else if (name === "gestures") {
    sourceCode = `export { hover, press } from ${JSON.stringify(compiledName)}`
  } else if (name === "viewport") {
    sourceCode = `export { inView } from ${JSON.stringify(compiledName)}`
  } else if (name === "resize") {
    sourceCode = `export { resize } from ${JSON.stringify(compiledName)}`
  } else {
    throw new Error(`Unknown entry ${name}`)
  }
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

async function emitBundled(entry, outfile, format, platform = "browser") {
  await build({
    entryPoints: [entry],
    bundle: true,
    platform,
    format,
    target: "es2020",
    treeShaking: true,
    legalComments: "none",
    logLevel: "warning",
    outfile,
    ...(format === "iife" ? { globalName: "motionlil" } : {}),
  })
  await terserMinify(outfile, format === "esm")
}

const barrelSource = [
  `export { ${[...animatePublic, ...compatPublic].join(", ")} } from "./animate.js"`,
  'export { animateMini } from "./animate-mini.js"',
  'export { scroll, scrollInfo } from "./scroll.js"',
  'export { hover, press } from "./gestures.js"',
  'export { inView } from "./viewport.js"',
  'export { resize } from "./resize.js"',
  "",
].join("\n")

const writtenBy = {}
let compilePhaseWallMs = 0

try {
  const allEntries = [...featureEntries, ...standaloneEntries]
  const compileStarted = performance.now()
  const compiled = await Promise.all(
    allEntries.map(async ([name, input]) => {
      const file = await compile(name, input)
      compiledFiles.push(file)
      return [name, file]
    }),
  )
  compilePhaseWallMs = Math.round(performance.now() - compileStarted)

  for (const [name, file] of compiled) {
    const direct = compilerWrittenEntries.has(name)
    const entry = direct ? file : await writeFacade(name, file)
    if (direct) {
      await copyFile(file, join(dist, `${name}.js`))
      writtenBy[`dist/${name}.js`] = "compiler"
    } else {
      await emitBundled(entry, join(dist, `${name}.js`), "esm")
      writtenBy[`dist/${name}.js`] = postProcessedBy
    }
    await emitBundled(entry, join(dist, `${name}.cjs`), "cjs", "neutral")
    writtenBy[`dist/${name}.cjs`] = postProcessedBy
  }

  await writeFile(join(dist, "index.js"), barrelSource)
  writtenBy["dist/index.js"] = "build script (re-export barrel)"
  await emitBundled(join(dist, "index.js"), join(dist, "index.cjs"), "cjs", "neutral")
  await emitBundled(join(dist, "index.js"), join(dist, "index.bundle.js"), "esm")
  await emitBundled(join(dist, "index.js"), join(dist, "motionlil.global.js"), "iife")
  for (const file of ["index.cjs", "index.bundle.js", "motionlil.global.js"]) {
    writtenBy[`dist/${file}`] = postProcessedBy
  }
} finally {
  const cleanup = keepCompilerOutput ? facadeFiles : [...compiledFiles, ...facadeFiles]
  await Promise.all(cleanup.map((file) => rm(file, { force: true })))
}

const compilerBinary = spawnSync("sh", ["-c", `command -v ${JSON.stringify(compiler)}`], {
  encoding: "utf8",
}).stdout.trim() || compiler
const report = {
  date: new Date().toISOString(),
  mode: buildMode,
  compiler: compilerBinary,
  compilerSha256: createHash("sha256").update(await readFile(compilerBinary)).digest("hex"),
  compilePhaseWallMs,
  compileWallMs,
  writtenBy,
}
await mkdir(join(root, ".tmp"), { recursive: true })
await writeFile(join(root, ".tmp", "build-report.json"), `${JSON.stringify(report, null, 2)}\n`)

console.log(
  `Built ${featureEntries.length} ESM features and ${standaloneEntries.length} standalone ${buildMode} entries with ${compiler}`,
)
console.log(
  `Compiled ${Object.keys(compileWallMs).length} entries in ${compilePhaseWallMs} ms wall (in parallel; full.lil ${compileWallMs.full} ms)`,
)
