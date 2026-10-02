// Records a release build in site/results.json and the README: the compiler
// that built dist/, the compile's wall time, and every delivered file's size
// against the previous release and the competitor bars.
//
//   LILSCRIPT_COMPILER=... LILSCRIPT_CODEC=... \
//     node scripts/record-release.mjs --revision aa2052f0 --previous 07455d5 [--samples 3] [--no-build]
//
// Each sample is a full `node scripts/build.mjs`; the recorded compile time is
// the wall time of its one compile (full.lil, which the build then splits into
// the shared module graph). Sizes come from the LilScript codec (Brotli 11,
// gzip 9). The compiler's own module is kept for the last sample and measured
// too: it is the only file the compiler writes, and it ships split and
// reprinted, so it is recorded next to the delivered files rather than among them.
import { execFileSync } from "node:child_process"
import { createHash } from "node:crypto"
import { existsSync } from "node:fs"
import { mkdtemp, readdir, readFile, rm, stat, writeFile } from "node:fs/promises"
import { loadavg, tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const option = (name) => {
  const index = args.indexOf(name)
  return index < 0 ? undefined : args[index + 1]
}
const revision = option("--revision") ?? process.env.LILSCRIPT_REVISION
const previousRef = option("--previous")
const samples = Number(option("--samples") ?? 3)
const build = !args.includes("--no-build")
if (!revision) throw new Error("Pass --revision <lilscript commit> (the revision the compiler binary was built from)")
const codec = process.env.LILSCRIPT_CODEC ?? resolve(root, "../lilscript/target/release/lilscript-codec")

// The competitor bars for the complete package (dist/full.bundle.js, the
// self-contained build of motionlil/full, against `export * from "motion"`,
// whose 312 names it all exports). The port's own recipe is
// scripts/measure-size.mjs's `export *` build; the others are the LilScript
// competitor run of 2026-09-20.
const bars = {
  artifact: "dist/full.bundle.js",
  upstream: "motion 13.1.0, export * (312 names; dist/full.bundle.js exports all of them plus numberType, getAsType and animateSequenceMini)",
  competitors: [
    {
      name: "esbuild + Terser",
      tool: "esbuild 0.25.9 minify + Terser 5.43.1: 3 passes, top-level and _-property mangling",
      source: "this repository: scripts/measure-size.mjs, export * from motion",
      raw: 135753, gzip: 44702, brotli: 39871,
    },
    {
      name: "Terser",
      tool: "Terser 5.51.2 -m --module over an esbuild bundle",
      source: "yeargun/lilscript benchmarks/migration-results/2026-09-20-competitors/motionlil",
      raw: 139742, gzip: 46145, brotli: 41032,
    },
    {
      name: "Oxc",
      tool: "Oxc minifier, Rolldown 1.2.5",
      source: "yeargun/lilscript benchmarks/migration-results/2026-09-20-competitors/motionlil",
      raw: 137455, gzip: 46191, brotli: 41246,
    },
    {
      name: "esbuild",
      tool: "esbuild 0.28.1 minify",
      source: "yeargun/lilscript benchmarks/migration-results/2026-09-20-competitors/motionlil",
      raw: 140304, gzip: 48015, brotli: 42840,
    },
  ],
}

function label(writtenBy) {
  if (writtenBy === "compiler") return "compiler-written"
  if (writtenBy.startsWith("build script (CommonJS")) return "CommonJS re-export of full.cjs written by the build script, not compiler-written"
  if (writtenBy.startsWith("build script")) return "re-export of the shared module graph written by the build script, not compiler-written"
  return `post-processed by ${writtenBy}, not compiler-written`
}

function measure(paths, cwd = root) {
  const report = JSON.parse(execFileSync(codec, ["--json", ...paths], { cwd, encoding: "utf8" }))
  return new Map(report.artifacts.map((artifact) => [artifact.path, {
    raw: artifact.raw, gzip: artifact.gzip9, brotli: artifact.brotli11,
  }]))
}

async function distDigest(files) {
  const hash = createHash("sha256")
  for (const file of files) hash.update(file).update(await readFile(join(root, file)))
  return hash.digest("hex")
}

const compileWallMs = []
const graphWallMs = []
const hostLoad1m = []
let buildReport
let digest
for (let sample = 0; sample < (build ? samples : 0); sample++) {
  hostLoad1m.push(Number(loadavg()[0].toFixed(1)))
  execFileSync(process.execPath, [join(root, "scripts", "build.mjs")], { cwd: root, stdio: "inherit", env: process.env })
  buildReport = JSON.parse(await readFile(join(root, ".tmp", "build-report.json"), "utf8"))
  compileWallMs.push(buildReport.compilePhaseWallMs)
  graphWallMs.push(buildReport.compileWallMs.graph)
  const sampleDigest = await distDigest(Object.keys(buildReport.writtenBy).sort())
  if (digest && digest !== sampleDigest) throw new Error(`build ${sample + 1} wrote a different dist/ than build 1`)
  digest = sampleDigest
  console.log(`sample ${sample + 1}/${samples}: compile phase ${buildReport.compilePhaseWallMs} ms`)
}
if (!buildReport) buildReport = JSON.parse(await readFile(join(root, ".tmp", "build-report.json"), "utf8"))

const results = JSON.parse(await readFile(join(root, "site", "results.json"), "utf8"))
const date = new Date().toISOString().slice(0, 10)
if (build) {
  results.compiler = {
    revision,
    binarySha256: buildReport.compilerSha256,
    compileWallMs,
    graphWallMs,
    date,
    measures: "wall time of one checked ten-entry graph and five compiler-written output groups",
    host: "Azure B8als_v2 (8 burstable vCPUs), shared with other jobs",
    hostLoad1m,
  }
}

// The delivered entry files: dist/*.js and dist/*.cjs. The shared module graph
// under dist/internal/ is summarised as one line.
const files = Object.keys(buildReport.writtenBy)
  .filter((file) => !file.startsWith("dist/internal/"))
  .sort((left, right) => Number(left.endsWith(".cjs")) - Number(right.endsWith(".cjs")) || left.localeCompare(right))
const internal = Object.keys(buildReport.writtenBy).filter((file) => file.startsWith("dist/internal/"))
const current = measure(files)
let graphBytes = 0
for (const file of internal) graphBytes += (await stat(join(root, file))).size
let previous = results.package?.previous
if (previousRef) {
  const directory = await mkdtemp(join(tmpdir(), "motionlil-previous-"))
  try {
    for (const file of files) {
      const body = execFileSync("git", ["show", `${previousRef}:${file}`], { cwd: root })
      await writeFile(join(directory, file.replace("/", "__")), body)
    }
    const sizes = measure(files.map((file) => file.replace("/", "__")), directory)
    for (const file of files) if (!sizes.get(file.replace("/", "__"))) throw new Error(`${previousRef} has no ${file}`)
    const commit = execFileSync("git", ["rev-parse", "--short=7", previousRef], { cwd: root, encoding: "utf8" }).trim()
    const committed = execFileSync("git", ["show", "-s", "--format=%cs", previousRef], { cwd: root, encoding: "utf8" }).trim()
    previous = {
      commit,
      date: committed,
      sizes: Object.fromEntries(files.map((file) => [file, sizes.get(file.replace("/", "__"))])),
    }
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
}

// Installed footprint: the npm tarball unpacked against Motion's dependency
// tree, as `npm run test:size` measures it.
async function directoryBytes(directory) {
  let total = 0
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    total += entry.isDirectory() ? await directoryBytes(path) : (await stat(path)).size
  }
  return total
}
const packed = JSON.parse(execFileSync("npm", ["pack", "--dry-run", "--json", "."], { cwd: root, encoding: "utf8" }))[0]
let motionDependencyTree = 0
for (const name of ["motion", "framer-motion", "motion-dom", "motion-utils", "tslib"]) {
  motionDependencyTree += await directoryBytes(join(root, "node_modules", name))
}
results.install = {
  motionlilUnpacked: packed.unpackedSize,
  motionDependencyTree,
  reduction: 1 - packed.unpackedSize / motionDependencyTree,
}

const strongest = (metric) => bars.competitors.reduce((best, bar) => (bar[metric] < best[metric] ? bar : best))
results.package = {
  date,
  codec: "lilscript-codec: Brotli quality 11 (window 22), gzip level 9",
  objective: "Brotli (cost_model = \"brotli\")",
  artifacts: files.map((file) => ({
    file,
    ...current.get(file),
    writtenBy: buildReport.writtenBy[file],
    label: label(buildReport.writtenBy[file]),
  })),
  bars: {
    ...bars,
    strongest: {
      raw: { name: strongest("raw").name, tool: strongest("raw").tool, bytes: strongest("raw").raw },
      gzip: { name: strongest("gzip").name, tool: strongest("gzip").tool, bytes: strongest("gzip").gzip },
      brotli: { name: strongest("brotli").name, tool: strongest("brotli").tool, bytes: strongest("brotli").brotli },
    },
  },
  compilerManifestSha256: buildReport.manifestSha256,
  sourceSha256: buildReport.sourceSha256,
  configSha256: buildReport.configSha256,
  graph: {
    directory: "dist/internal/",
    files: internal.length,
    raw: graphBytes,
    writtenBy: "compiler-written ESM and CJS modules; exact manifest bytes",
  },
  previous,
}
await writeFile(join(root, "site", "results.json"), `${JSON.stringify(results, null, 2)}\n`)

// The README's package table is generated from the same data.
const format = (value) => new Intl.NumberFormat("en-US").format(value)
const full = results.package.artifacts.find((artifact) => artifact.file === bars.artifact)
const percent = (ours, bar) => `${((1 - ours / bar) * 100).toFixed(1)}%`
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)]
const compiler = results.compiler
const lines = [
  "<!-- package-sizes:start (generated by scripts/record-release.mjs) -->",
  `Built by the LilScript compiler at [\`${compiler.revision}\`](https://github.com/yeargun/lilscript/commit/${compiler.revision}) (binary SHA-256 \`${compiler.binarySha256.slice(0, 12)}…\`) on ${compiler.date}. Compile time: **${(median(compiler.compileWallMs) / 1000).toFixed(1)} s** median wall time over ${compiler.compileWallMs.length} builds (${compiler.compileWallMs.map((ms) => `${(ms / 1000).toFixed(1)} s`).join(", ")}) of the shared ten-entry graph and five compiler-written output groups on an ${compiler.host}; the one-minute load average was ${compiler.hostLoad1m.join(", ")} at the start of each build, so CPU credit and contention make the samples vary.`,
  "",
  `The complete package, \`${bars.artifact}\` (all of Motion's 312 exports), against \`export * from "motion"\` minified by each competitor. The strongest bar is ${[...new Set(["raw", "gzip", "brotli"].map((metric) => results.package.bars.strongest[metric].name))].join("; ")} (the smallest file in ${["raw", "gzip", "brotli"].filter((metric) => results.package.bars.strongest[metric].name === results.package.bars.strongest.brotli.name).join(", ")}; it is this repository's \`npm run test:size\` recipe):`,
  "",
  `| \`${bars.artifact}\` | Raw | gzip 9 | Brotli 11 |`,
  "| --- | ---: | ---: | ---: |",
  `| **motionlil** (this release) | **${format(full.raw)}** | **${format(full.gzip)}** | **${format(full.brotli)}** |`,
  ...bars.competitors.map((bar) => `| Motion, ${bar.name}: ${bar.tool} | ${format(bar.raw)} | ${format(bar.gzip)} | ${format(bar.brotli)} |`),
  ...(previous ? [`| motionlil, previous release (\`${previous.commit}\`, ${previous.date}) | ${format(previous.sizes[bars.artifact].raw)} | ${format(previous.sizes[bars.artifact].gzip)} | ${format(previous.sizes[bars.artifact].brotli)} |`] : []),
  `| Reduction against the strongest bar | ${percent(full.raw, results.package.bars.strongest.raw.bytes)} | ${percent(full.gzip, results.package.bars.strongest.gzip.bytes)} | ${percent(full.brotli, results.package.bars.strongest.brotli.bytes)} |`,
  "",
  "Every delivered entry and shared module is written by LilScript. The build verifies the compiler manifest and installs the exact bytes, including ESM, CJS and browser outputs:",
  "",
  "| File | Raw | gzip 9 | Brotli 11 | Previous Brotli | Written by |",
  "| --- | ---: | ---: | ---: | ---: | --- |",
  ...results.package.artifacts.map((artifact) => `| \`${artifact.file}\` | ${format(artifact.raw)} | ${format(artifact.gzip)} | ${format(artifact.brotli)} | ${previous?.sizes[artifact.file] ? format(previous.sizes[artifact.file].brotli) : "—"} | ${artifact.label} |`),
  `| \`dist/internal/\` (${format(results.package.graph.files)} modules) | ${format(results.package.graph.raw)} | — | — | — | ${results.package.graph.writtenBy} |`,
  "<!-- package-sizes:end -->",
]
lines.splice(lines.length - 1, 0,
  "",
  "| Installed runtime | Unpacked bytes |",
  "| --- | ---: |",
  `| \`motionlil\` npm tarball | ${format(results.install.motionlilUnpacked)} |`,
  `| \`motion\` dependency tree (\`motion\`, \`framer-motion\`, \`motion-dom\`, \`motion-utils\`, \`tslib\`) | ${format(results.install.motionDependencyTree)} |`,
  "",
  `That is a **${(results.install.reduction * 100).toFixed(2)}% smaller installed runtime footprint**, or **${(results.install.motionDependencyTree / results.install.motionlilUnpacked).toFixed(2)}× less disk**.`,
)
const strongestBrotli = results.package.bars.strongest.brotli
const strongestRaw = results.package.bars.strongest.raw
const headline = [
  "<!-- package-headline:start (generated by scripts/record-release.mjs) -->",
  `**This release: the complete package (\`motionlil/full\`, all 312 Motion exports) is ${format(full.brotli)} B Brotli, ${percent(full.brotli, strongestBrotli.bytes)} smaller than Motion's ${format(strongestBrotli.bytes)} B (${strongestBrotli.name}), and ${format(full.raw)} B raw, ${percent(full.raw, strongestRaw.bytes)} smaller than the smallest raw bar (${format(strongestRaw.bytes)} B, ${strongestRaw.name}). Built by the LilScript compiler at \`${compiler.revision}\`; the compile takes ${(median(compiler.compileWallMs) / 1000).toFixed(1)} s (median of ${compiler.compileWallMs.length} builds, ${(Math.min(...compiler.compileWallMs) / 1000).toFixed(1)}–${(Math.max(...compiler.compileWallMs) / 1000).toFixed(1)} s on a shared burstable host). The installed runtime is ${(results.install.reduction * 100).toFixed(1)}% smaller than Motion's dependency tree.** \`${bars.artifact}\` is ${full.label}; [every file, its size and what wrote it](#what-smaller-means).`,
  "<!-- package-headline:end -->",
]
const readmePath = join(root, "README.md")
let readme = await readFile(readmePath, "utf8")
for (const [name, text] of [["package-sizes", lines], ["package-headline", headline]]) {
  const block = new RegExp(`<!-- ${name}:start[\\s\\S]*?<!-- ${name}:end -->`)
  if (!block.test(readme)) throw new Error(`README.md has no ${name} block`)
  readme = readme.replace(block, text.join("\n"))
}
await writeFile(readmePath, readme)

console.log(`Recorded ${files.length} artifacts; ${bars.artifact} ${full.brotli} B Brotli, compile ${compileWallMs.join(", ")} ms`)
