import assert from 'node:assert/strict'
import test from 'node:test'
import {createHash} from 'node:crypto'
import {readFile, readdir} from 'node:fs/promises'
import {createRequire} from 'node:module'

const manifest = JSON.parse(await readFile(new URL('../dist/lilscript.manifest.json', import.meta.url)))
const report = JSON.parse(await readFile(new URL('../comparison/package-build-report.json', import.meta.url)))
const digest = value => createHash('sha256').update(value).digest('hex')

test('all installed code is exactly the compiler delivery, with explicit format effects', async () => {
  assert.equal(manifest.version, 5)
  assert.equal(manifest.source_sha256, report.sourceSha256)
  const expected = new Set(['lilscript.manifest.json'])
  for (const output of manifest.outputs) for (const file of output.files) {
    const bytes = await readFile(new URL(`../dist/${file.file}`, import.meta.url))
    assert.equal(digest(bytes), file.sha256, file.file)
    assert.equal(bytes.length, file.bytes, file.file)
    assert.equal(report.writtenBy[`dist/${file.file}`], 'compiler')
    assert.ok(!expected.has(file.file), file.file)
    expected.add(file.file)
  }
  const installed = await readdir(new URL('../dist/', import.meta.url), {recursive:true,withFileTypes:true})
  const files = installed.filter(file => file.isFile()).map(file => `${file.parentPath ?? file.path}/${file.name}`)
  assert.equal(files.length, expected.size)
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)))
  assert.deepEqual(pkg.sideEffects, [...new Set(manifest.outputs.filter(output => output.format !== 'esm').flatMap(output => output.side_effects.map(file => `./dist/${file}`)))].sort())
})

test('all ten ESM and CJS entry points preserve the public export sets', async () => {
  const expected = JSON.parse(await readFile(new URL('./fixtures/public-exports.json', import.meta.url)))
  const require = createRequire(import.meta.url)
  for (const [name, names] of Object.entries(expected)) {
    const esm = await import(`../dist/${name}.js`)
    const cjs = require(`../dist/${name}.cjs`)
    assert.deepEqual(Object.keys(esm).sort(), names, `${name} ESM`)
    assert.deepEqual(Object.keys(cjs).sort(), names, `${name} CJS`)
  }
})
