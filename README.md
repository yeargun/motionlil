# motionlil



Motion’s browser animation API, ported to LilScript and published as the dependency-free `motionlil` package.

The [comparison page](https://yeargun.github.io/motionlil/) records the current public ESM sizes, browser performance, source-build times and machine details against Motion 13.1.0. Both libraries are built from pinned source revisions. The 16 live demos illustrate the API; measured performance covers the separately recorded, behavior-checked workloads.

<!-- current-esm:start -->
| Full public ESM | Motion 13.1.0 | motionlil/full |
| --- | ---: | ---: |
| Raw | 137,560 B | 194,166 B |
| gzip-9 | 45,031 B | 61,134 B |
| Brotli-11 | 40,141 B | 52,586 B |

Three clean source builds on the same Azure Standard_D16als_v7 worker (AMD EPYC 9V45, 16 vCPUs, 31.3 GiB RAM, Ubuntu 24.04.4, Node 24.11.1): **17.85 s original, 8.98 s LilScript**, medians. Dependency installation is excluded; each package's output formats and checks differ, so these are contextual build times. Exact commands and samples are in [site/source-build.json](./site/source-build.json).
<!-- current-esm:end -->

The [full performance table](https://yeargun.github.io/motionlil/#performance) measures the source-built `motionlil/full` entry against the original ESM with 30 paired trials. All seven workloads match native backends/options, sampled timelines, final values and library RAF; natural playback also passes. Paired medians show 4.6–14.0% more renderer CPU for the port, and no workload establishes equivalence within ±5%. CPU figures describe the checked animation workloads, not overall compatibility or animation quality.

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

`motionlil` is built for Vite, Astro, and other ESM bundlers. The default entry is a tree-shakeable JS barrel over separately compiled features (`animate`, `animateMini`, `scroll`, gestures, `inView`, `resize`). `import { animateMini } from "motionlil"` loads only the WAAPI mini runtime. Unused projection / view-transition / visual-element internals are not part of the module graph.

The full entry exposes all 312 original export names (326 names including port-specific exports). Some extended constructor and layout adapters remain incomplete. The 37 browser checks cover selected animation APIs and scenarios; export-name coverage does not establish complete behavior parity.

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

The headline size comparison retains every export of `motionlil/full` and the original Motion public ESM entry, assembled from pinned Git source builds. React-specific entry points are excluded. The full port is larger in the recorded raw, gzip and Brotli measurements. Some constructor/layout adapters remain incomplete; this is a byte comparison with explicitly bounded behavior checks.

The default `motionlil` entry is a narrower 52-export consumer API. Its complete ESM graph measures 149,423 B raw, 46,782 B gzip-9 and 37,990 B Brotli-11. Those figures cover a different export surface from the full original, so they are listed separately. The default entry is a named-export barrel with no runtime dependencies; bundlers can retain only imported features. `npm run test:size` also measures consumer bundles with its own stated target.

## Build pipeline

The LilScript compiler performs whole-program optimization with identifier and property mangling enabled. Each consumer feature is compiled on its own, then published as a separate ESM file so bundlers can drop unused features. CommonJS and the browser global remain single-file builds. Terser runs three compression passes, top-level identifier mangling, and private-property mangling. A second Terser pass, a Vite consumer build, and a named-import shake test are part of the test suite.

ESM targets ES2022 and preserves native class fields and shared MotionValue prototype methods. CommonJS and the browser global target ES2020. A consuming bundler can downlevel the ESM build for older browsers.

The recorded build uses LilScript [e5f7f254](https://github.com/yeargun/lilscript/commit/e5f7f254470ae4af178f3625b8b3dfd8fe501ad7). This compiler preserves public constructor defaults, method arity and inherited field values, including callbacks assigned by derived animation classes. Set `MOTIONLIL_LILSCRIPT_BIN` to that release compiler when rebuilding this source snapshot.

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
npm run test:browser # 37 browser checks against source-built Motion
npm run test:size # reproducible size report
npm run build:site # build the GitHub Pages demo lab
```

The implementation is MIT licensed. See [NOTICE.md](./NOTICE.md) for upstream attribution.

## Reproduce browser performance

Run `npm ci`, `npx playwright install chromium`, then `npm run test:performance`. This serves the exact source-built ESM inputs in `site/performance/` and records 30 alternating paired trials per passing workload. `node scripts/check-natural-performance.mjs site/performance` checks uninterrupted playback separately. Raw results, machine details, compiler and upstream source revisions accompany the page. These commands measure the recorded fixture; replacing inputs requires a fresh measurement.

The production compiler configuration retains maximum IR optimizations and uses JavaScript optimization level 0 with the package’s Terser step. The measured distribution is the output validated by the browser tests.

The rewrite must preserve Motion's behavior: native animation eligibility, interpolation, easing, repeats, controls, interruption, completion callbacks and frame scheduling. The 37 browser checks exercise those contracts against the pinned original ESM, including shared-clock lifecycle checks. Performance validation separately requires matching native calls/options, paused timeline samples and final values, followed by natural playback checks. The benchmark's frame observer and the library's own RAF activity are recorded separately. Coverage and exact evidence are documented in [comparison/runtime-investigation](./comparison/runtime-investigation/README.md).
