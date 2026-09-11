# Motion behavior and performance verification

The reference is Motion 13.1.0, source commit
`adaf7a4e5368d704ea350669f6ac674fb26ff270`. The rewrite must preserve its
observable animation behavior. Lower CPU is not an animation-quality score.

Ordinary LilScript type annotations are erased; they do not add runtime
validation. Explicit source type checks and conversions retain their semantics.
Typed options, callback references and numeric state avoid redundant dynamic
checks. Pure function metadata permits removal of unused pure initialization
while preserving effectful arguments.

The package compiles one shared graph. ESM entry points share constructors,
frame queues and caches. CommonJS entries share one cached runtime. Native
controls use shared prototype methods, retaining the original bound stop
semantics. Completion promises, subscription notification order, caller-owned
keyframe arrays, null/undefined handling and option getter evaluation are
compared with original Motion.

## Recorded checks

The source-build log records 22 Node/package tests and 39 browser tests, all
passing, plus declaration and package checks. Browser tests use the exact
source-built original ESM:

- `test/browser-backends.test.mjs`: native eligibility, options, JavaScript
  strings/colors, easing, springs, repeats, native rejection and cross-realm subjects.
- `test/browser-lifecycle.test.mjs`: controls and callback order under a shared
  clock, completion, library RAF, interruption and replacement keyframes.
- `test/browser-runtime.test.mjs`: frame queue and numeric animation behavior.
- `test/browser-controls.test.mjs`: browser styles and controls.

Compiler regressions cover native helper ownership, export parsing, erased
annotations, pure export metadata and binding uses inside template expressions.
All 1,635 compiler library tests pass locally. The broader compiler workflow is
recorded separately in `validation.json` and the compiler pull request.

## Current comparison

The headline size and runtime comparisons use the exact same 312-export source-built ESM inputs, with identical toolchain versions and public extern reservations. The separate mangling comparison records public and closed-program scopes.
The default entry has 52 exports; the full port has 327, including all 312
original names. Low-level layout/rendering adapters remain incomplete.
Export-name coverage does not establish complete behavior parity.

Seven workloads run 30 alternating paired trials with fresh pages, after two
warmups per side. Every element is checked at five paused positions and at
completion; native calls/options, active properties and library RAF must match.
Natural playback checks every animated property of every element across three
fresh pages per side. These seven workloads pass both validation stages.

Current paired CPU ratios (LilScript / Motion) are WAAPI transform + opacity · 64 elements: 1.015×, WAAPI transform + opacity · 256 elements: 1.006×, WAAPI width + margin layout · 128 elements: 1.006×, animate transform + opacity · 128 elements: 1.076×, animate x/y · 128 elements: 1.084×, Width + margin layout · 128 elements: 1.056×, MotionValue + DOM writes · 128 values: 1.048×. The exact intervals and script/style costs are in `../../site/performance.json`. The matched public port remains larger; exact byte counts are in `../../site/comparison.json`.

Renderer CPU includes setup, script, style and layout in the recorded interval.
The observer's frame cadence is separate from library RAF counts. Intrusive
behavior instrumentation and natural-playback style reads are outside timing.
Headless renderer CPU does not measure all compositor/GPU work.

Build commands, machine details and three clean samples are in
`../source-build/`. Public samples and input hashes are in `../../site/performance/`.
`structural-fix.json` records current implementation findings. Older cost-audit
files retain historical evidence and are not the current comparison results.
The measured configuration uses maximum IR optimization, JavaScript level 0 and
Terser. Higher optimization diagnostics do not replace this measured artifact.

The two public mangling modes each pass 39 browser checks against the original with property names unchanged. All 72 closed-program comparisons match their checked values, native timing and RAF activity. See `../mangling/` for the complete reservations, scenarios and artifacts.
