# motionlil

Motion 13.1.0 DOM animation APIs implemented in LilScript. The package provides ten ESM and CommonJS entries, a standalone full bundle and a browser global.

[Live comparison and examples](https://yeargun.github.io/motionlil/) · [Checked repository package](https://yeargun.github.io/motionlil/downloads/package.tgz) · [Package build evidence](https://yeargun.github.io/motionlil/package-build.json)

```sh
npm install motionlil
```

```js
import {animate, motionValue} from "motionlil"
animate(".card", {opacity: [0, 1]}, {duration: 0.3})
const progress = motionValue(0)
```

The repository download contains the checked build of this checkout. npm publication is independent; an npm install can resolve a different published snapshot.

## Comparison with the original

[Current raw, gzip and Brotli results and build times](COMPARISON.md) compare three independently targeted LilScript compilations with the smallest recorded original result for each codec from Terser, esbuild and Oxc. Exact bytes, configuration hashes, source inputs and commands are downloadable from the comparison page. Package formats and browser application bundles have different boundaries from the standalone comparison entries.

## Compatibility and scope

React components and hooks are outside this package. Low-level layout/rendering adapters remain incomplete; matching export names does not establish complete behavior parity. The full-entry comparison includes all shared Motion DOM exports. Small consumer imports have separate tree-shaking tests. ESM initialization prepares package-owned state and unused modules may be omitted; CommonJS and browser-global initialization retain the compiler manifest’s conservative effects.

## Rebuild and verify

Set `LILSCRIPT_COMPILER` to the current LilScript executable. Builds use one compiler job at a time.

```sh
npm ci
npm run build
npm test
npm run check:site
```

Run `npm run test:browser` after `npx playwright install chromium` to check animation behavior and bundled root imports.

See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md) for licensing and upstream attribution.
