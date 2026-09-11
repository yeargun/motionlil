# Matched Motion / Motionlil mangling comparison

Both libraries are assembled from pinned source builds, with the same esbuild
0.28.1 and Terser 5.51.2 versions, ES2022 target, three compression passes,
tree shaking and canonical gzip-9 / Brotli-11 codec. `results.json` records the
source revisions, toolchain, machine, exact export names, hashes and timings.

| Scope | Retained code |
| --- | --- |
| `full` | The same 312 original Motion public export names in both lanes. The port's 15 additional names are excluded. |
| `consumer-api` | The same 50 original names present in the port's default entry. This differs from the shipped 52-export default. |
| `closed-app` | Identical `consumer.mjs` caller linked with each library. Only the scenario runner is exported; unused library API can be removed. |
| `closed-full` | The identical caller plus all 312 library roots, exported under identical short `e0`…`e311` aliases. This includes caller code and is a closed-program diagnostic. |

Every scope has an identifier-mangled control and an identifier-plus-property
mangled build. Each property-mangled pair uses exactly the same reservations.
Public builds retain public API, browser and dynamic property names. Closed
builds retain browser and dynamic names; other properties may be renamed
because the caller is transformed in the same pass. Closed outputs are not
drop-in public ESM libraries.

`externs.json` contains the complete common lists and declaration input hashes.
The public contract comes from the union of the original and port declarations.
Browser declarations include TypeScript 5.9.2 `lib.dom.d.ts`, including WebIDL
dictionary keys such as WAAPI `iterations`. Terser's built-in reservations alone
do not cover all of those keys. Dynamic reservations use identifier-shaped
words from string literals across both input graphs and the shared caller,
including event-name forms. This is deliberately conservative and symmetric.

LilScript's compiler-proven internal property mangling remains enabled in every
port row. The identifier-only row preserves remaining properties after compiler
emission. Neither lane starts from an already Terser-minified vendor artifact:
the original input is the source build's recorded unminified ESM graph, and
the port input is its unminified shared module graph.

## Behavior checks

`validation.json` records 39 browser checks for each 312-export public mode, using the
original with property names unchanged as the reference. The reference stays
independent of property mangling, so two equally broken outputs cannot satisfy
the comparison merely by agreeing with each other.

The closed caller covers nine scenarios, including native repeats, transforms,
x/y, layout, colors, MotionValues, mixer overloads and subscriptions. Across two
scopes, two modes and two lanes, 72 comparisons check values, native keyframes
and timing options, lifecycle operations and library RAF against the original
identifier-only application. These are selected behavior checks. The port's
low-level layout/rendering adapters remain incomplete; matching export names
does not establish complete Motion API parity.

For the checked numeric, color and string cases, the public `mix(from, to)` overload returns the appropriate mixer; the numeric
three-argument form returns an interpolated number. The LilScript source now
preserves both forms and the original JavaScript function arity. Numeric mixer
inputs retain JavaScript arithmetic semantics through erased `JS.assume`
assertions, without adding runtime type machinery.

## Reproduce

Build the port with the compiler revision and configuration in the source-build
receipt. `inputs/original-source.esm.js` is recorded from the pinned upstream
source build; `../source-build/` contains its source revision, commands and logs.
Then run from the repository root:

```sh
npm ci --prefix comparison/mangling/toolchain
LILSCRIPT_CODEC=/path/to/lilscript-codec node scripts/compare-mangling.mjs
node scripts/check-mangling.mjs
```

For an archive without Git metadata, set `MOTIONLIL_SOURCE_COMMIT` to the exact
source revision. The Playwright module can be selected with `PLAYWRIGHT_MODULE`.
Browser validation requires the pinned Playwright Chromium installation.

Source package build times are three clean, alternating samples on one worker.
The matched ESM bundle and minify steps are separate, single-sample assembly
timings. Package output formats and build checks differ, so package wall times
are contextual measurements, not a compiler speedup claim. The headline size
and browser-performance comparisons use the exact `full-public-properties`
files, with matching SHA-256 hashes.

The aligned results still show larger Motionlil output. Mangling differences
do not account for the remaining gap; there is no claim of a size advantage or
complete behavioral compatibility.
