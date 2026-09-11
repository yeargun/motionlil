import assert from 'node:assert/strict'
import test from 'node:test'
import {mkdtemp, writeFile, rm} from 'node:fs/promises'
import {join} from 'node:path'
import {tmpdir} from 'node:os'
import {pathToFileURL} from 'node:url'
import {build} from 'esbuild'
import {splitSharedGraph} from '../scripts/shared-graph.mjs'

async function compare(source, inspect) {
  const directory = await mkdtemp(join(tmpdir(), 'motionlil-shared-'))
  try {
    const file = join(directory,'input.mjs')
    await writeFile(file, source)
    const graph = await splitSharedGraph(file,join(directory,'graph'))
    const expected = inspect(await import(pathToFileURL(file)))
    const actual = inspect(await import(pathToFileURL(graph.entry)))
    assert.deepEqual(actual, expected)
    const bundled = join(directory,'bundled.mjs')
    await build({entryPoints:[graph.entry],bundle:true,format:'esm',outfile:bundled,logLevel:'silent'})
    assert.deepEqual(inspect(await import(pathToFileURL(bundled))), expected)
  } finally { await rm(directory,{recursive:true,force:true}) }
}

test('shared graph preserves initialization reads, later writes and live closures', async () => {
  await compare(`var before = read(); var value = 7; function read(){return value};
    var middle = read(); value = 9; var object = {value: 1}; var early = object.value;
    object.value = 3; function inspect(){return [before,middle,read(),early,object.value]};
    export {inspect};`, api => api.inspect())
})

test('shared graph preserves initialization helpers, IIFEs and shared constructor identity', async () => {
  await compare(`var state = {}; function fill(){state.value = base}; var base = 7; fill();
    var factory; (function(){factory=()=>state})(); class Control {read(){return factory().value}}
    function make(){return new Control()}; export {Control,make,factory};`,
    api => [api.make() instanceof api.Control, api.factory()===api.factory(), api.make().read()])
})

test('shared graph retains unclassified effects and prunes unrelated definitions', async () => {
  const directory=await mkdtemp(join(tmpdir(),'motionlil-shared-'))
  try {
    const file=join(directory,'input.mjs')
    await writeFile(file, `globalThis.__motionGraphProbe = (globalThis.__motionGraphProbe || 0) + 1;
      function narrow(){return 7}; var large = Array.from({length:1000},()=>"unused payload");
      function wide(){return large}; export {narrow,wide};`)
    const graph=await splitSharedGraph(file,join(directory,'graph'))
    const built=await build({stdin:{resolveDir:directory,contents:`export {narrow} from ${JSON.stringify(graph.entry)}`},bundle:true,
      format:'esm',write:false,minify:true,logLevel:'silent'})
    const text=built.outputFiles[0].text
    assert.ok(!text.includes('unused payload'))
    const output=join(directory,'narrow.mjs');await writeFile(output,text)
    delete globalThis.__motionGraphProbe
    const api=await import(pathToFileURL(output));assert.equal(api.narrow(),7)
    assert.equal(globalThis.__motionGraphProbe,1)
    delete globalThis.__motionGraphProbe
  } finally {await rm(directory,{recursive:true,force:true})}
})

test('shared graph retains module var bindings declared inside control flow', async () => {
  await compare(`if (true) {var value = 7} else {var value = 3};
    function read(){return value}; export {read,value};`, api => [api.read(),api.value])
})
