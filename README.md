# motionlil

Motion’s browser animation API, ported to LilScript and published as the dependency-free `motionlil` package.

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
| `motionlil` npm tarball | 823,655 |
| `motion` dependency tree | 9,141,537 |

That is about a **91% smaller installed runtime footprint**. The comparison includes `motion`, `framer-motion`, `motion-dom`, `motion-utils`, and `tslib`, which npm installs for the upstream package.

This is not a claim that every browser bundle is smaller. The complete `motionlil` ESM artifact is currently 50,509 bytes Brotli versus 39,871 bytes for an equivalently bundled Motion 13 entry. The win is the dependency-free install, a compact single-package distribution, and a compiler-oriented codebase. Run `npm run test:size` to reproduce both install and browser-artifact measurements.

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
```

The implementation is MIT licensed. See [NOTICE.md](./NOTICE.md) for upstream attribution.
