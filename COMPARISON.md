# Current comparison with the original

Full Motion DOM ESM entry with matching shared exports; React integration is excluded. Low-level adapters remain incomplete. The package separately supplies modular ESM, CJS, feature entries and a browser global.

Each compression row uses a separate LilScript compilation targeting that objective. Original results are the smallest of Terser, esbuild and Oxc for the named codec.

| Objective | LilScript bytes | Original minified bytes | Original minifier | LilScript build (s) | Original bundle + minify (s) |
|---|---:|---:|---|---:|---:|
| raw | 114,011 | 135,340 | Oxc | 8.180 | 0.359 |
| gzip | 41,768 | 45,028 | Terser | 7.579 | 2.422 |
| brotli | 36,405 | 40,188 | Terser | 9.533 | 2.422 |

Original version: `motion@13.1.0`. gzip level 9; Brotli quality 11/window 22. Each time is one sequential fresh-output build on the recorded shared machine. Original timing starts from installed ESM and does not include the original repository’s TypeScript compilation. Dependency installation, tests and final file compression are excluded.

Validation: 1,209 checks across raw, gzip and Brotli main entries. This does not cover every package format or establish complete upstream API equivalence.

[Artifacts, hashes and settings](site/comparison.json) · [Commands, source identities and timings](site/comparison-builds.json) · [Exact checked source inputs](site/comparison-artifacts/sources.tar.gz).
