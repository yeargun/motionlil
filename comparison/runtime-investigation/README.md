# Motion behavior and performance verification

The behavioral reference is Motion 13.1.0, source commit
`adaf7a4e5368d704ea350669f6ac674fb26ff270`. The rewrite must preserve its
observable animation behavior. Timing is only compared after the recorded
behavior checks pass; lower CPU is not an animation-quality score.

The current implementation uses Motion's native-animation eligibility rules.
Native transform and opacity use WAAPI; x/y and layout properties use the
JavaScript animation path with native opacity where eligible. Native creation
failures fall back to JavaScript. Native accessors query only the requested
browser property; computed effect timing is read for duration. Keyframe interpolation preserves strings,
colors, easing functions and segments. Spring-generated native easing, repeats,
interruptions and replacement animations are also compared with the original.

The frame loop uses reusable Sets and a WeakSet for persistent callbacks, with
stable render callbacks for deduplication and cancellation. Controls preserve
pause, seek, replay, reverse, stop, completion promises and callback order.
Typed numeric generator state, timing options, repeat enums, callback references
and checked pure numeric helpers remain in the LilScript implementation. The
JavaScript boundary supplies host access and public property accessors.

## Identified drift

The former hybrid path forced JavaScript animation where Motion selected native
opacity, changing browser style work. Its lower style/layout measurements could
not demonstrate an equivalent rewrite running faster. A numeric-only fallback
also replaced string keyframes with zero. Native easing sampled an integer
division, and frame/control paths differed in rendering, pause/replay and stop
semantics. The current source corrects these differences instead of retaining
them as performance shortcuts.

A compiler defect independently removed an inherited animation update hook:
field analysis treated a base-class null default and a derived-class callback
assignment as separate slots. The compiler at
[`e5f7f254`](https://github.com/yeargun/lilscript/commit/e5f7f254470ae4af178f3625b8b3dfd8fe501ad7)
joins inherited field summaries, preserving the callback and integer ranges.
This matters when stopping a native animation and starting its replacement.
The [compiler regression](https://github.com/yeargun/lilscript/pull/2) also
checks multi-level inheritance and integer overflow with inlining on and off.

## Recorded checks

The source-build log records 11 Node tests and 37 browser tests, all passing,
plus declaration checks. Browser tests use the exact original source-built ESM:

- `test/browser-backends.test.mjs` compares native eligibility, keyframes and
  options, JavaScript strings/colors, named/function/segment easing, springs,
  repeats, mini controls, native rejection and cross-realm subjects.
- `test/browser-lifecycle.test.mjs` uses a shared clock to compare controls,
  callback order, completion, library RAF activity and rendering. It also checks
  native interruption and the replacement animation's initial keyframe.
- `test/browser-runtime.test.mjs` compares frame queue behavior and numeric
  animations with delay, reversed repeats and mirrored repeats.
- `test/browser-controls.test.mjs` checks browser styles and controls.

All 1,626 compiler library tests pass locally and in GitHub CI. The broader
compiler workflow still fails on pre-existing formatting and the unchanged
interpreter-based differential-generator test (14 output lines, expected 11).
See `validation.json` for the workflow, exact compiler and artifact hashes.

## Performance protocol

The size and runtime comparisons use the same source-built full ESM inputs.
The default entry has 52 exports; the full port has 326 and retains all 312
original names. Some extended constructor/layout adapters remain incomplete, so
export-name coverage is recorded separately from the behavior checks. Each of
seven workloads runs 30 alternating paired trials with fresh pages, after two
warmups per side. Every element is checked at five paused positions and at
completion; native calls/options and active properties must match. An untimed
natural-playback check examines every animated property of every element across
three fresh pages per side.

Renderer CPU includes setup, script, style and layout in the recorded interval.
The benchmark observer's RAF cadence is separate from the library's own RAF
counts. Intrusive behavior instrumentation and natural-playback style reads are
outside CPU timings. These tests cover the named scenarios; they do not establish
parity for every Motion export or measure all compositor/GPU work.

Exact build commands, machine information and three clean build samples are in
`../source-build/`. Public performance samples and input hashes are in
`../../site/performance/`. The site stylesheets retain their recorded hashes.

## Size and timing attribution

The recorded cost audit is in `cost-audit.json`. A broad cast import pulled
visual-element/frame-loop initialization into mini bundles; a direct typed
WithPromise cast removes that unrelated dependency. The mini consumer size gate
is 20 KB raw while retaining native easing, repeats and lifecycle controls.

Controlled builds of the same published source with the two compiler revisions
differ by 500 raw bytes in the default bundle. The larger growth came from port
and dependency-graph changes. The unchanged original ESM also ran 35–39% slower
in the previous session than in the earlier run, so absolute times across those
sessions cannot isolate a code regression. Current tables compare both sides
within the same recorded session.
