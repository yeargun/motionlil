# Source-build measurements

Measured 2026-09-24T08:18:02Z–08:28:42Z using the one LilScript compiler at `aa2052f081ca8184666ca280ee9b91d476e46cfc` (binary SHA-256 `13cb49a93fb3e376a5978484835322c84adea692b69ae4720775291377cf18f9`), port source `4f824fe5075181bdcbcaf2fdc57aed6a5d2f779a`, and the upstream Git revision recorded in `job.json`, on the single LilScript development host (Azure Standard_B8als_v2, 8 burstable vCPUs, shared with other compiler sessions), with lilscript `comparison/page-refresh/source-build-worker.py`.

`result.json` records the commands, wall time, CPU time, machine and exit codes. `esm.json` records the production ESM assembly and exact input graph. The lockfiles record dependency resolution. The public page uses `source-build.json` for the final consolidated record.

Run the installation and setup commands from `job.json` in the corresponding pinned upstream checkout; they are excluded from build time. Run the recorded build command with Node v24.11.1. Clear the listed generated output directories between repetitions. Install the port dependencies and set `LILSCRIPT_COMPILER`, `MOTIONLIL_LILSCRIPT_BIN`, `SOLIDLIL_LILSCRIPT_BIN`, `LILSCRIPT_ROOT` and `LILSCRIPT_CODEC` to the recorded compiler and codec as applicable. Some ports import sibling LilScript source trees.

The original repository build and comparison ESM assembly are measured separately. Build output scope can differ between repositories; no build speedup is inferred. Both lanes used the same host.
