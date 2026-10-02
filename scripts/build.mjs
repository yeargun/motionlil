import { spawn, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { constants, existsSync } from 'node:fs'
import { access, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { delimiter, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const config = join(root, 'src/lilscript.toml')
const dist = join(root, 'dist')
const scratch = join(root, '.tmp')
const stage = join(scratch, `dist-${process.pid}`)
const previous = join(scratch, `dist-previous-${process.pid}`)
const mode = process.env.MOTIONLIL_BUILD_MODE ?? 'production'
if (!['development', 'production'].includes(mode)) throw Error(`Invalid MOTIONLIL_BUILD_MODE: ${mode}`)
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

// Resolve a path without invoking a shell. The recorded digest belongs to the
// executable actually used, including when it was found through PATH.
async function findCompiler() {
  const pinned = process.env.MOTIONLIL_LILSCRIPT_BIN ?? process.env.LILSCRIPT_COMPILER
  for (const candidate of pinned ? [pinned] : [resolve(root, '../lilscript/target/release/lilscript'), 'lilscript']) {
    const paths = candidate.includes(sep) ? [resolve(candidate)] : (process.env.PATH ?? '').split(delimiter).map(dir => resolve(dir, candidate))
    for (const path of paths) {
      try { await access(path, constants.X_OK) } catch { continue }
      if (spawnSync(path, ['--version'], {stdio: 'ignore'}).status === 0) return path
    }
  }
  throw Error('LilScript compiler not found. Set MOTIONLIL_LILSCRIPT_BIN to a release compiler.')
}
const compiler = await findCompiler()
const args = ['--config', config, '--target', 'js-module', '--mode', mode, '--out-dir', stage]
const policy = spawnSync(compiler, [...args, '--print-policy'], {cwd: root, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024})
if (policy.status !== 0) throw Error(policy.stderr || 'Could not resolve compiler policy')
const resolvedPolicy = JSON.parse(policy.stdout)
await mkdir(scratch, {recursive: true})
await rm(stage, {recursive: true, force: true})
const started = performance.now()
let installed = false
try {
  await new Promise((accept, reject) => {
    const child = spawn(compiler, args, {cwd: root, stdio: 'inherit'})
    child.on('error', reject)
    child.on('close', status => status === 0 ? accept() : reject(Error(`LilScript exited ${status}`)))
  })
  const compilePhaseWallMs = Math.round(performance.now() - started)
  const manifestBytes = await readFile(join(stage, 'lilscript.manifest.json'))
  const manifest = JSON.parse(manifestBytes)
  if (manifest.version !== 5) throw Error('This build requires LilScript multi-output manifest v5')
  const artifacts = {}
  const sideEffects = new Set()
  for (const output of manifest.outputs) {
    for (const file of output.files) {
      const path = resolve(stage, file.file)
      const local = relative(stage, path)
      if (!local || local.startsWith(`..${sep}`) || local === '..' || isAbsolute(local)) throw Error(`Invalid manifest file: ${file.file}`)
      if (artifacts[file.file]) throw Error(`Duplicate manifest file: ${file.file}`)
      const bytes = await readFile(path)
      if (sha256(bytes) !== file.sha256 || bytes.length !== file.bytes) throw Error(`Delivered bytes differ from compiler manifest: ${file.file}`)
      artifacts[file.file] = {sha256: file.sha256, raw: bytes.length, codec: output.codec,
        codecBytes: file.codec_bytes, output: output.output, policyFingerprint: output.policy_fingerprint}
    }
    for (const file of output.side_effects) {
      if (!artifacts[file]) throw Error(`Unknown side-effect file: ${file}`)
      sideEffects.add(`./dist/${file}`)
    }
  }
  const report = {
    schema: 2, date: new Date().toISOString(), mode, compiler,
    compilerSha256: sha256(await readFile(compiler)), configSha256: sha256(await readFile(config)),
    dependencyLockSha256: sha256(await readFile(join(root, 'package-lock.json'))),
    sourceSha256: manifest.source_sha256, manifestSha256: sha256(manifestBytes), resolvedPolicy,
    compilePhaseWallMs, compileWallMs: {graph: compilePhaseWallMs}, artifacts,
    writtenBy: Object.fromEntries(Object.keys(artifacts).sort().map(file => [`dist/${file}`, 'compiler'])),
  }
  const packagePath = join(root, 'package.json')
  const pkg = JSON.parse(await readFile(packagePath, 'utf8'))
  pkg.sideEffects = [...sideEffects].sort()
  // Keep the previous output intact until compilation and every digest check
  // succeed. Renaming never rewrites compiler output or changes relative links.
  if (existsSync(dist)) await rename(dist, previous)
  try { await rename(stage, dist); installed = true }
  catch (error) { if (existsSync(previous)) await rename(previous, dist); throw error }
  await writeFile(packagePath, `${JSON.stringify(pkg, null, 2)}\n`)
  await writeFile(join(scratch, 'build-report.json'), `${JSON.stringify(report, null, 2)}\n`)
  await rm(previous, {recursive: true, force: true})
  console.log(`Built ten ${mode} entries and five output groups with LilScript in ${compilePhaseWallMs} ms`)
} finally {
  if (!installed) await rm(stage, {recursive: true, force: true})
}
