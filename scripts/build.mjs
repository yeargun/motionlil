import { splitSharedGraph } from "./shared-graph.mjs"
import { spawn, spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import { minify } from "terser"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = join(root, "src")
const dist = join(root, "dist")
const compilerCandidates = [
  process.env.MOTIONLIL_LILSCRIPT_BIN,
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

function compile(name, input) {
  const compiled = join(dirname(join(source, input)), `.__compiled-${name}.mjs`)
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
      if (status !== 0) reject(new Error(output || `${name} failed`))
      else resolvePromise(compiled)
    })
  })
}

const compiledFiles = []
const facadeFiles = []
const graphDirectory = join(source, ".__shared-graph")
let compiledPublic = []

async function writeFacade(name, compiled) {
  const facade = join(source, `.__entry-${name}.mjs`)
  const compiledName = `./${relative(source, compiled)}`
  let sourceCode
  if (name === "animate") {
    const compat = join(source, ".__compat-animate.mjs")
    const template = await readFile(join(source, "compat.mjs"), "utf8")
    await writeFile(compat, template.replaceAll("./.__compiled-index.mjs", compiledName))
    facadeFiles.push(compat)
    sourceCode = [
      `export { ${animatePublic.join(", ")} } from ${JSON.stringify(compiledName)}`,
      `export { ${compatPublic.join(", ")} } from "./.__compat-animate.mjs"`,
    ].join("\n")
  } else if (name === "animate-mini") {
    sourceCode = `export { animateMini } from ${JSON.stringify(compiledName)}`
  } else if (name === "full") {
    const compat = join(source, ".__compat-full.mjs")
    const template = await readFile(join(source, "compat.mjs"), "utf8")
    await writeFile(compat, template.replaceAll("./.__compiled-index.mjs", compiledName))
    facadeFiles.push(compat)
    sourceCode = [
      `export { ${compiledPublic.join(", ")} } from ${JSON.stringify(compiledName)}`,
      `export * from "./.__compat-full.mjs"`,
      'export { animate, animateMini } from "./.__compat-full.mjs"',
    ].join("\n")
  } else if (name === "mini") {
    sourceCode = `export { animateMini as animate, animateSequenceMini as animateSequence } from ${JSON.stringify(compiledName)}`
  } else if (name === "debug") {
    sourceCode = `export { recordStats } from ${JSON.stringify(compiledName)}`
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

const nameCache = {}
async function terserMinify(file, module) {
  if (buildMode !== "production") return
  const sourceCode = await readFile(file, "utf8")
  const result = await minify(sourceCode, {
    module,
    nameCache,
    compress: { passes: 3 },
    mangle: {
      toplevel: true,
      properties: { regex: /^_/, keep_quoted: true },
    },
    format: { comments: false },
  })
  if (result.code == null) throw new Error(`Terser produced no code for ${file}`)
  await writeFile(file, `${result.code}\n`)
}

async function emitBundled(entry, outfile, format, platform = "browser") {
  await build({
    entryPoints: [entry],
    bundle: true,
    platform,
    format,
    // Preserve the compiler's native class fields in modern ESM. Downleveling
    // them adds a host helper call for every field of every MotionValue.
    target: format === "esm" ? "es2022" : "es2020",
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

try {
  // One typed module owns shared state (frame queues, MotionValues and caches).
  // ESM splitting happens after LilScript compilation, so feature imports reuse
  // those bindings instead of embedding separately compiled copies.
  const file = await compile("full", "full.lil")
  compiledFiles.push(file)
  const parsed = await build({entryPoints: [file], bundle: false, write: false, metafile: true, format: "esm", logLevel: "silent"})
  compiledPublic = Object.values(parsed.metafile.outputs)[0].exports.filter(name => !name.startsWith("__lil") && name !== "animate" && name !== "animateMini")
  const graph = await splitSharedGraph(file, graphDirectory)
  console.log(`Linked ${graph.statements} statements into ${graph.components} shared modules (${graph.effects} unconditional statements)`)
  const entries = {}
  for (const [name] of [...featureEntries, ...standaloneEntries]) {
    entries[name] = await writeFacade(name, graph.entry)
  }
  const indexFacade = join(source, ".__entry-index.mjs")
  await writeFile(indexFacade, barrelSource.replaceAll(/"\.\/([^"/]+)\.js"/g, '"./.__entry-$1.mjs"'))
  facadeFiles.push(indexFacade)
  entries.index = indexFacade
  // Publish the shared modules intact. Bundling all entry points into a few
  // chunks would combine unrelated initializers and prevent narrow tree shaking.
  const linked = await build({entryPoints:Object.values(entries), bundle:true, write:false,
    metafile:true, format:"esm", logLevel:"silent", outdir:dist})
  const inputs = Object.keys(linked.metafile.inputs).filter(path => path.startsWith("src/"))
  const outputFor = path => path.replace(/^src\//, "internal/")
    .replace(".__shared-graph", "graph").replace(/\.__((?:entry|compat)-)/g, "$1").replace(/\.(?:mjs|ts)$/, ".js")
  const modules = await build({entryPoints:Object.fromEntries(inputs.map(path => [outputFor(path).slice(0,-3),path])),
    bundle:false, write:false, format:"esm", target:"es2022", outdir:dist, logLevel:"warning"})
  for (const output of modules.outputFiles) {
    const input = inputs.find(path => resolve(dist,outputFor(path)) === output.path)
    const code = output.text.replace(/(from\s*|import\s*)(["'])([^"']+)\2/g, (match, prefix, quote, specifier) => {
      if (!specifier.startsWith(".")) return match
      const target = relative(root,resolve(dirname(resolve(root,input)),specifier))
      const next = "./" + relative(dirname(output.path),resolve(dist,outputFor(target))).replaceAll("\\","/")
      return prefix + quote + next + quote
    })
    await mkdir(dirname(output.path),{recursive:true})
    await writeFile(output.path,code)
  }
  for (const [name,entry] of Object.entries(entries)) {
    await writeFile(join(dist,name+".js"), `export * from "./${outputFor(relative(root,entry))}";\n`)
  }
  await emitBundled(entries.full, join(dist, "full.bundle.js"), "esm")
  await emitBundled(indexFacade, join(dist, "index.bundle.js"), "esm")
  await emitBundled(indexFacade, join(dist, "motionlil.global.js"), "iife")
  await emitBundled(entries.full, join(dist, "full.cjs"), "cjs", "neutral")
  for (const name of Object.keys(entries).filter(name => name !== "full")) {
    const module = await import(`file://${join(dist, name + ".js")}`)
    const mapping = Object.keys(module).map(key => [key, name === "mini"
      ? ({animate: "animateMini", animateSequence: "animateSequenceMini"}[key] ?? key) : key])
    await writeFile(join(dist, name + ".cjs"), '"use strict";const core=require("./full.cjs");' +
      mapping.map(([key, value]) => `Object.defineProperty(exports,${JSON.stringify(key)},{enumerable:true,get:()=>core[${JSON.stringify(value)}]});`).join("") + "\n")
  }
} finally {
  if (!keepCompilerOutput) await rm(graphDirectory, {recursive:true,force:true})
  const cleanup = keepCompilerOutput ? facadeFiles : [...compiledFiles, ...facadeFiles]
  await Promise.all(cleanup.map((file) => rm(file, { force: true })))
}

console.log(
  `Built ${featureEntries.length} ESM features and ${standaloneEntries.length} standalone ${buildMode} entries with ${compiler}`,
)
