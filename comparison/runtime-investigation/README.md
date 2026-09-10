# Motion runtime investigation

The behavioral reference is Motion 13.1.0, Git commit
`adaf7a4e5368d704ea350669f6ac674fb26ff270`. Runtime fixes are implemented in
LilScript; the JavaScript boundary supplies property accessors that the language
does not yet express directly.

- The numeric animation callback was wired through both `JSAnimationOptions.onUpdate`
  and its dynamic option bag. A single frame dispatched it twice. The callback is
  now resolved once into a typed function reference and dispatched once.
- `MotionValue` now uses `export constructor` and shared prototype methods,
  removing its per-instance method wrappers. The compiler's public-class default
  parameter bug is fixed in the compiler revision recorded with the build.
- Animation delay, repeat count, repeat delay, repeat mode and final numeric
  keyframe are resolved at setup into a typed class and enum. Numeric final-value
  selection, clamp, progress and mixing have checked `pure` contracts. These
  annotations verify effects; they do not themselves guarantee a speedup.
- The frame loop reuses generator/delay state instead of allocating an additional
  sample object each tick. Mirrored repeats sample only their active generator.
- Control accessors share their functions and descriptors, with a batched install
  for fresh controls. Existing host properties retain their original descriptors.
- ESM preserves native class fields. Downleveling those fields added helper calls
  during setup; CommonJS and global bundles retain the ES2020 target.
- Valid animations avoid formatting an unused diagnostic. Transition properties
  already copied into the owned options object are not read and copied again.

An alternative matching upstream's Set-based frame queues was also measured.
It did not improve the 128-value workload, so the shipped implementation retains
the array queues. Callback deduplication, live immediate scheduling, persistent
callbacks and cancellation are still checked against upstream.

`test/browser-runtime.test.mjs` drives both implementations with the same clock
and frame queue, comparing callback counts, values and completion for ordinary,
delayed, reversed and mirrored animations. `test/browser-controls.test.mjs`
checks actual browser styles and controls. Node tests cover constructor identity,
shared methods, defaults and preservation of existing control accessors.

Published timing results compare the final source-built ESM with the original
source-built ESM. They use 30 alternating paired trials, fresh pages and two
warmups per lane. Natural playback is separately checked across every animated
property of every fixture element. These checks cover the named workloads; the
existing full `animate()` string-transform mismatch remains explicitly unscored.

The recorded compiler build passed 441 code-generation tests; the same fix in
the user's working compiler passed 435. The compiler branch's broader CI is
blocked by inherited formatting violations and the unrelated interpreter-based
`generator_is_deterministic_and_checked` test (14 output lines versus an expected
11). The generator is unchanged from the measured base. A formatting-only
follow-up at `a5efdbb` formats the added predicate; measurements remain pinned to
`fe444cdf`. See `validation.json` for the CI link and stylesheet hashes.
