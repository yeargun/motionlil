# motionlil

Motion’s browser animation API, ported to LilScript and published as the dependency-free `motionlil` package.

**16/16 paired browser demos ship smaller after Brotli: 12.4% smaller in total, 13.2% median, and up to 23.1% smaller. The installed runtime footprint is 91.0% smaller (11.1× less disk).**

| Reproducible result | Motion | LilScript / `motionlil` | Ratio | Reduction |
| --- | ---: | ---: | ---: | ---: |
| 16 matching browser demos, Brotli total | 287,404 B | 251,703 B | 0.876× | **12.42%** |
| Median paired demo, Brotli | — | — | 0.868× | **13.18%** |
| Best paired demo (`perf-stagger`), Brotli | 3,844 B | 2,956 B | 0.769× | **23.10%** |
| Installed runtime | 9,141,537 B | 824,992 B | 0.090× | **90.98%** |

The browser figures are matching closed-world builds from the 16-case LilScript Motion lab—not a comparison between unmatched entry points. Every case, its exact ratio, and a live recreation using this package are on the **[motionlil demo lab](https://yeargun.github.io/motionlil/)**.

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

`motionlil` exposes every runtime export from Motion 13’s `motion`/DOM entry point, including `animate`, `scroll`, `inView`, motion values, springs, gestures, layout projection, view transitions, value types, utilities, and the public constructor exports. The primary implementation is the LilScript Motion DOM port; a small tree-shakeable JavaScript adapter supplies JavaScript constructor and playback-control conventions.

React-specific entry points such as `motion/react` are intentionally not included. Use the normal `motion` package if you need Motion’s React components and hooks.

Available entry points:

```js
import { animate } from "motionlil"       // complete DOM API
import { animate } from "motionlil/dom"   // explicit DOM alias
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

`motionlil` has no runtime dependencies and publishes only compiled ESM, CommonJS, global builds, and declarations. With Motion 13.1.0 installed in this repository, `npm run test:size` measures:

| Installed runtime | Unpacked bytes |
| --- | ---: |
| `motionlil` npm tarball | 824,992 |
| `motion` dependency tree | 9,141,537 |

That is a **90.98% smaller installed runtime footprint**, or **11.08× less disk**. The comparison includes `motion`, `framer-motion`, `motion-dom`, `motion-utils`, and `tslib`, which npm installs for the upstream package.

The reusable full `motionlil` ESM artifact is currently 50,509 bytes Brotli versus 39,871 bytes for an equivalently bundled Motion 13 entry. That full-library artifact is larger; the smaller browser results at the top are closed-world application builds that let LilScript optimize each concrete program. The package win is the dependency-free install, a compact single-package distribution, and a compiler-oriented codebase. Run `npm run test:size` to reproduce the package measurements; the paired demo evidence and methodology are linked from the live lab.

## Build pipeline

The LilScript compiler performs whole-program optimization with identifier and property mangling enabled. The emitted modules are bundled as pure JavaScript with esbuild, then Terser runs three compression passes, top-level identifier mangling, and private-property mangling. A second Terser pass and a real Vite consumer build are part of the test suite.

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
