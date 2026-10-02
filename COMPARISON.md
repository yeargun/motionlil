# Current comparison with the original

Portable main-entry ESM with matching shared named exports and external imports. The original uses production/default package conditions, keeping data-based entity decoding rather than relying on the DOM.

Each compression row uses a separate LilScript compilation targeting that objective. Original results are the smallest of Terser, esbuild and Oxc for the named codec.

| Objective | LilScript bytes | Original minified bytes | Original minifier | LilScript build (s) | Original bundle + minify (s) |
|---|---:|---:|---|---:|---:|
| raw | 114,644 | 135,340 | Oxc | 8.130 | 0.235 |
| gzip | 41,699 | 45,028 | Terser | 7.380 | 1.854 |
| brotli | 36,483 | 40,188 | Terser | 9.532 | 1.854 |

Original version: `motion@13.1.0`. gzip level 9; Brotli quality 11/window 22. Each time is one sequential fresh-output build on the recorded shared machine. Original timing starts from installed ESM and does not include the original repository’s TypeScript compilation. Dependency installation, tests and final file compression are excluded.

Validation: 1,209 checks across raw, gzip and Brotli main entries. This does not cover every package format or establish complete upstream API equivalence.

[Artifacts, hashes and settings](site/comparison.json) · [Commands, source identities and timings](site/comparison-builds.json) · [Exact checked source inputs](site/comparison-artifacts/sources.tar.gz).
