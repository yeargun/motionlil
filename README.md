# motionlil



Motion’s browser animation API, ported to LilScript and published as the dependency-free `motionlil` package.

The [comparison page](https://yeargun.github.io/motionlil/) records the current public ESM sizes, browser performance, source-build times and machine details against Motion 13.1.0. Both libraries are built from pinned source revisions. The 16 live demos illustrate the API; measured performance covers the separately recorded, behavior-checked workloads.

<!-- current-esm:start -->
| Current public ESM | Motion 13.1.0 | motionlil |
| --- | ---: | ---: |
| Raw | 137,560 B | 132,103 B |
| gzip-9 | 45,031 B | 40,870 B |
| Brotli-11 | 40,141 B | 34,517 B |

Three clean source builds on the same Azure Standard_D16als_v7 worker (AMD EPYC 9V45, 16 vCPUs, 31.3 GiB RAM, Ubuntu 24.04.4, Node 24.11.1): **17.15 s original, 8.03 s LilScript**, medians. Dependency installation is excluded; each package's output formats and checks differ, so these are contextual build times. Exact commands and samples are in [site/source-build.json](./site/source-build.json).
<!-- current-esm:end -->

In 30 paired browser trials, the three WAAPI workloads meet the ±5% CPU-equivalence criterion. The x/y and layout workloads use 28.4% and 30.1% less renderer CPU; MotionValue plus DOM writes uses 5.2% more (95% interval: 4.2–5.8% more). The [full performance table](https://yeargun.github.io/motionlil/#performance) separates script, style/layout, setup and frame costs and links every sample. Full `animate()` string transforms fail the timeline check and are excluded from speed scores.

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

Additional Motion DOM constructors and layout internals are exposed through `motionlil/full`. The recorded browser tests cover selected APIs; full `animate()` string transforms still fail the comparison timeline check.

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

## What “smaller” means

The size comparison retains every export in the default public ESM entry and its dependencies, with raw bytes, gzip-9 and Brotli-11 recorded separately. The original is assembled from its pinned Git source build. React-specific entry points are outside this comparison. These measurements describe the repository artifacts; the source and compiler revisions are linked in the page's build record.

`motionlil` has no runtime dependencies. Its default ESM entry is a named-export barrel, allowing a bundler to keep only imported features. The page compares the complete reusable entry; individual consumer bundles can be smaller. `npm run test:size` also measures local consumer bundles and installed package sizes, with its own stated build target.

## Build pipeline

The LilScript compiler performs whole-program optimization with identifier and property mangling enabled. Each consumer feature is compiled on its own, then published as a separate ESM file so bundlers can drop unused features. CommonJS and the browser global remain single-file builds. Terser runs three compression passes, top-level identifier mangling, and private-property mangling. A second Terser pass, a Vite consumer build, and a named-import shake test are part of the test suite.

ESM targets ES2022 and preserves native class fields and shared MotionValue prototype methods. CommonJS and the browser global target ES2020. A consuming bundler can downlevel the ESM build for older browsers.

The recorded build uses LilScript [fe444cdf](https://github.com/yeargun/lilscript/commit/fe444cdf62fdb1c9420b6e568c4abcd8e8bc048b), which fixes default parameters and method arity on exported constructors. Set `MOTIONLIL_LILSCRIPT_BIN` to that release compiler when rebuilding this source snapshot.

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
npm run test:size # reproducible size report
npm run build:site # build the GitHub Pages demo lab
```

The implementation is MIT licensed. See [NOTICE.md](./NOTICE.md) for upstream attribution.

## Reproduce browser performance

Run `npm ci`, `npx playwright install chromium`, then `npm run test:performance`. This serves the exact source-built ESM inputs in `site/performance/` and records 30 alternating paired trials per passing workload. `node scripts/check-natural-performance.mjs site/performance` checks uninterrupted playback separately. Raw results, machine details, compiler and upstream source revisions accompany the page. These commands measure the recorded fixture; replacing inputs requires a fresh measurement.

The production compiler configuration retains maximum IR optimizations and uses JavaScript optimization level 0 with the package’s Terser step. This avoids the invalid keyframe-resolver output produced by the final optimization stage at the recorded compiler revision. Six tested browser workloads match; full `animate()` string transforms remain unsupported. No timing result is claimed for that failing workload.
