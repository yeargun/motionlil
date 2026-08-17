import { execFileSync } from "node:child_process"
import { readdir, readFile, stat } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, constants, gzipSync } from "node:zlib"
import { build } from "esbuild"
import { minify } from "terser"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

function bytes(source) {
  const input = Buffer.isBuffer(source) ? source : Buffer.from(source)
  return {
    raw: input.length,
    gzip: gzipSync(input, { level: 9 }).length,
    brotli: brotliCompressSync(input, {
      params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
    }).length,
  }
}

async function bundledPackage(specifier) {
  const built = await build({
    stdin: { contents: `export * from ${JSON.stringify(specifier)}`, resolveDir: root },
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2020",
    legalComments: "none",
    minify: true,
    write: false,
  })
  const compressed = await minify(built.outputFiles[0].text, {
    module: true,
    compress: { passes: 3 },
    mangle: { toplevel: true, properties: { regex: /^_/, keep_quoted: true } },
    format: { comments: false },
  })
  return bytes(compressed.code)
}

async function directoryBytes(directory) {
  let total = 0
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    total += entry.isDirectory() ? await directoryBytes(path) : (await stat(path)).size
  }
  return total
}

const packageResult = JSON.parse(execFileSync("npm", ["pack", "--dry-run", "--json", "."], {
  cwd: root,
  encoding: "utf8",
}))[0]

const upstreamPackages = ["motion", "framer-motion", "motion-dom", "motion-utils", "tslib"]
let upstreamInstalled = 0
for (const name of upstreamPackages) {
  upstreamInstalled += await directoryBytes(join(root, "node_modules", name))
}

const report = {
  artifacts: {
    motionlil: bytes(await readFile(join(root, "dist", "index.js"))),
    motion: await bundledPackage("motion"),
    "motionlil/mini": bytes(await readFile(join(root, "dist", "mini.js"))),
    "motion/mini": await bundledPackage("motion/mini"),
  },
  install: {
    motionlilUnpacked: packageResult.unpackedSize,
    motionDependencyTree: upstreamInstalled,
    reduction: 1 - packageResult.unpackedSize / upstreamInstalled,
  },
}

console.log(JSON.stringify(report, null, 2))
