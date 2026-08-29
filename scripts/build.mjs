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
    child.stderr.on("data", (chunk) => { output += chunk })
    child.on("error", reject)
    child.on("close", (status) => {
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

try {
  const allEntries = [...featureEntries, ...standaloneEntries]
  const compiled = await Promise.all(
    allEntries.map(async ([name, input]) => {
      const file = await compile(name, input)
      compiledFiles.push(file)
      return [name, file]
    }),
  )

  for (const [name, file] of compiled) {
    const entry = await writeFacade(name, file)
    await emitBundled(entry, join(dist, `${name}.js`), "esm")
    await emitBundled(entry, join(dist, `${name}.cjs`), "cjs", "neutral")
  }

  await writeFile(join(dist, "index.js"), barrelSource)
  await emitBundled(join(dist, "index.js"), join(dist, "index.cjs"), "cjs", "neutral")
  await emitBundled(join(dist, "index.js"), join(dist, "index.bundle.js"), "esm")
  await emitBundled(join(dist, "index.js"), join(dist, "motionlil.global.js"), "iife")
} finally {
  await Promise.all([...compiledFiles, ...facadeFiles].map((file) => rm(file, { force: true })))
}

console.log(
  `Built ${featureEntries.length} ESM features and ${standaloneEntries.length} standalone ${buildMode} entries with ${compiler}`,
)
