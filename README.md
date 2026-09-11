# motionlil



Motion’s browser animation API, ported to LilScript and published as the dependency-free `motionlil` package.

The [comparison page](https://yeargun.github.io/motionlil/) records the current public ESM sizes, browser performance, source-build times and machine details against Motion 13.1.0. Both libraries are built from pinned source revisions. The 16 live demos illustrate the API; measured performance covers the separately recorded, behavior-checked workloads.

<!-- current-esm:start -->
| Matched 312-export ESM | Original Motion | Motionlil |
| --- | ---: | ---: |
| Raw | 134,557 B | 174,382 B |
| Gzip-9 | 44,698 B | 59,308 B |
| Brotli-11 | 39,902 B | 51,351 B |

Both sides use the same public extern reservations and property mangling. Three clean source builds on the same Azure Standard_D16als_v7 worker (AMD EPYC 9V45 96-Core Processor, 16 vCPUs, 31.3 GiB RAM, Ubuntu 24.04.4 LTS, Node v24.11.1): **18.151 s original, 7.079 s LilScript**, medians. Dependency installation is excluded; each package's output formats and checks differ. Exact commands and samples are in [site/source-build.json](./site/source-build.json). Matched ESM assembly timings are recorded separately in [site/mangling.json](./site/mangling.json).
<!-- current-esm:end -->

The [full performance table](https://yeargun.github.io/motionlil/#performance) measures the same 312-export ESM graphs used in the headline byte comparison with 30 paired trials. All seven workloads match native backends/options, sampled timelines, final values and library RAF; natural playback also passes. All three mini workloads meet the ±5% equivalence criterion. The four broader workloads use 4.8–8.4% more renderer CPU by paired median; their confidence intervals do not establish equivalence. CPU figures describe the checked animation workloads, not overall compatibility or animation quality.

```sh
npm install motionlil
```

```js
import { animate, motionValue, spring, stagger } from "motionlil"

animate(".card", { opacity: [0, 1], y: [20, 0] }, {
  delay: stagger(0.06),
  duration: 0.35,
})

const progress = motionValue(0)
const unsubscribe = progress.on("change", console.log)
progress.set(0.5)
unsubscribe()

const easing = spring({ stiffness: 300, damping: 24 })
console.log(easing.next(16))
```

## Compatibility

`motionlil` is built for Vite, Astro, and other ESM bundlers. The default entry is a tree-shakeable JS barrel over a single compiled graph shared by its feature entries (`animate`, `animateMini`, `scroll`, gestures, `inView`, `resize`). `import { animateMini } from "motionlil"` loads only the WAAPI mini runtime. Unused projection / view-transition / visual-element internals are not part of the module graph.

The full entry exposes all 312 original export names (327 names including port-specific exports). Low-level layout/rendering adapters remain incomplete. The 39 browser checks cover selected animation APIs and scenarios; export-name coverage does not establish complete behavior parity.

React-specific entry points such as `motion/react` are intentionally not included. Use the normal `motion` package if you need Motion’s React components and hooks.

Available entry points:

```js
import { animate } from "motionlil"       // bundler-facing JS/DOM API
import { animate } from "motionlil/dom"   // same as the default entry
import { animate } from "motionlil/full"  // extended DOM constructors and internals
import { animate } from "motionlil/mini"  // animate + animateSequence
import { recordStats } from "motionlil/debug"
```

CommonJS and a browser global are also built:

```js
const { animate } = require("motionlil")
```

```html
<script src="https://unpkg.com/motionlil/dist/motionlil.global.js"></script>
<script>
  motionlil.animate(".box", { x: 100 })
</script>
```

Vite needs no plugin or configuration:

```js
// vite.config.js is optional
import { animate } from "motionlil"
```

## ESM comparison scope

The headline comparison retains the same 312 original Motion export names in both source-built ESM graphs. Both use esbuild 0.28.1, Terser 5.51.2, ES2022, three compression passes and property mangling under identical public API, browser and dynamic-name extern reservations. The shipped full port exposes 327 names; its 15 extra exports are excluded from this measurement. React-specific entry points are excluded. The port remains larger. Low-level layout/rendering adapters remain incomplete; export-name coverage does not establish complete behavior parity.

[The mangling comparison](./comparison/mangling/README.md) separately records identifier-only and property-mangled builds for the matched 312-export API, matched 50-export consumer API, identical closed application, and closed diagnostic retaining all 312 roots. Closed builds transform the caller and library together. They include caller code and are not public ESM distributions. Complete extern lists, artifacts, name maps, exact hashes and behavior checks are recorded alongside the results.

The default `motionlil` entry is a narrower 52-export consumer API. Its native package ESM graph measures 122,396 B raw, 40,380 B gzip-9 and 35,197 B Brotli-11. Those figures cover a different export surface from the full original, so they are listed separately. The default entry is a named-export barrel with no runtime dependencies; bundlers can retain only imported features. `npm run test:size` also measures consumer bundles with its own stated target.

## Build pipeline

The LilScript compiler performs whole-program optimization with identifier and property mangling enabled. The full LilScript source is compiled once. Shared definitions and their initialization are published as ESM modules, so feature imports retain one set of constructors, caches and frame queues while unused definitions can be removed. CommonJS entries share one cached full runtime. `dist/full.bundle.js` and `dist/index.bundle.js` are self-contained ESM artifacts for size and browser measurements. Terser runs three compression passes, top-level identifier mangling, and private-property mangling. A second Terser pass, a Vite consumer build, and a named-import shake test are part of the test suite.

ESM targets ES2022 and preserves native class fields and shared MotionValue prototype methods. CommonJS and the browser global target ES2020. A consuming bundler can downlevel the ESM build for older browsers.

The recorded build uses LilScript [10f5734a](https://github.com/yeargun/lilscript/commit/10f5734a70a49e550d2c7577549d5595de743e2f). Ordinary type annotations do not generate runtime validation. Checked pure export metadata lets bundlers remove unused pure initialization while retaining argument side effects. Set `MOTIONLIL_LILSCRIPT_BIN` to that release compiler when rebuilding this source snapshot.

To build from source, keep `motionlil` next to a LilScript checkout, or point to its release compiler explicitly:

```sh
npm ci
MOTIONLIL_LILSCRIPT_BIN=/path/to/lilscript npm run build
npm run check
```

Set `MOTIONLIL_BUILD_MODE=development` for a faster local build. Production is the default.

## Verification

```sh
npm test          # Node, ESM/CJS parity, Vite, Terser, export parity
npm run check     # tests, TypeScript declarations, npm tarball audit
npm run test:browser # 39 browser checks against source-built Motion
npm run test:size # reproducible size report
npm run build:site # build the GitHub Pages demo lab
```

The implementation is MIT licensed. See [NOTICE.md](./NOTICE.md) for upstream attribution.

## Reproduce browser performance

Run `npm ci`, `npx playwright install chromium`, then `npm run test:performance`. This serves the exact source-built ESM inputs in `site/performance/` and records 30 alternating paired trials per passing workload. `node scripts/check-natural-performance.mjs site/performance` checks uninterrupted playback separately. Raw results, machine details, compiler and upstream source revisions accompany the page. These commands measure the recorded fixture; replacing inputs requires a fresh measurement.

The production compiler configuration retains maximum IR optimizations and uses JavaScript optimization level 0 with the package’s Terser step. The measured distribution is the output validated by the browser tests.

The rewrite must preserve Motion's behavior: native animation eligibility, interpolation, easing, repeats, controls, interruption, completion callbacks and frame scheduling. The 39 browser checks exercise those contracts against the pinned original ESM, including shared-clock lifecycle checks. Performance validation separately requires matching native calls/options, paused timeline samples and final values, followed by natural playback checks. The benchmark's frame observer and the library's own RAF activity are recorded separately. Coverage and exact evidence are documented in [comparison/runtime-investigation](./comparison/runtime-investigation/README.md).
