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

The source-build log records 21 Node/package tests and 39 browser tests, all
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

The full size and runtime comparisons use identical source-built ESM inputs.
The default entry has 52 exports; the full port has 326, including all 312
original names. Low-level layout/rendering adapters remain incomplete.
Export-name coverage does not establish complete behavior parity.

Seven workloads run 30 alternating paired trials with fresh pages, after two
warmups per side. Every element is checked at five paused positions and at
completion; native calls/options, active properties and library RAF must match.
Natural playback checks every animated property of every element across three
fresh pages per side. These seven workloads pass both validation stages.

All three mini workloads meet the criterion that the entire 95% CPU ratio
interval lies within 0.95–1.05. Four broader workloads remain outside that
criterion. Their paired median CPU overhead is 5.0–14.9%. The full port remains
larger than original Motion; the exact byte counts are in `../../site/comparison.json`.

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
