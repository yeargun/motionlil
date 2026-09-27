// Renders the release block of results.json: the package's sizes against the
// competitor bars and the previous release, and the compiler that built it.
const formatter = new Intl.NumberFormat("en-US")

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character])
}

const bytes = (value) => (value == null ? "—" : `${formatter.format(value)} B`)
const seconds = (ms) => `${(ms / 1000).toFixed(1)} s`
const median = (values) => [...values].sort((left, right) => left - right)[Math.floor(values.length / 2)]
const reduction = (ours, bar) => `${((1 - ours / bar) * 100).toFixed(1)}%`

function delta(current, previous) {
  if (previous == null) return "new"
  const change = current - previous
  if (change === 0) return "±0"
  return `${change < 0 ? "−" : "+"}${formatter.format(Math.abs(change))}`
}

function fact(label, value, note, className = "") {
  return `<article class="${className}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></article>`
}

function row(artifact, previous) {
  const before = previous?.sizes?.[artifact.file]
  const compilerWritten = artifact.writtenBy === "compiler"
  return `
    <tr>
      <th scope="row"><code>${escapeHtml(artifact.file)}</code></th>
      <td>${formatter.format(artifact.raw)}</td>
      <td>${formatter.format(artifact.gzip)}</td>
      <td><strong>${formatter.format(artifact.brotli)}</strong></td>
      <td>${before ? formatter.format(before.brotli) : "—"}</td>
      <td>${escapeHtml(delta(artifact.brotli, before?.brotli))}</td>
      <td class="${compilerWritten ? "written compiler" : "written post"}">${escapeHtml(artifact.label)}</td>
    </tr>`
}

function table(artifacts, previous) {
  return `
    <table>
      <thead><tr><th>File</th><th>Raw</th><th>gzip 9</th><th>Brotli 11</th><th>Previous Brotli</th><th>Change</th><th>Written by</th></tr></thead>
      <tbody>${artifacts.map((artifact) => row(artifact, previous)).join("")}</tbody>
    </table>`
}

// The shared module graph and the compiler's own module, which the entry
// files above re-export and which ships split and reprinted.
function graphNote(release) {
  const graph = release.graph
  const core = release.compilerOutput
  if (!graph && !core) return ""
  const parts = []
  if (graph) parts.push(`<code>${escapeHtml(graph.directory)}</code>: ${formatter.format(graph.files)} modules, ${bytes(graph.raw)} raw — ${escapeHtml(graph.writtenBy)}.`)
  if (core) parts.push(`The compiler's output for <code>full.lil</code>: ${bytes(core.raw)} raw, ${bytes(core.gzip)} gzip 9, <strong>${bytes(core.brotli)}</strong> Brotli 11 (not shipped as one file).`)
  return `<p class="release-caption">${parts.join(" ")}</p>`
}

export function renderRelease(data) {
  const release = data.package
  const compiler = data.compiler
  const root = document.querySelector("#release-body")
  if (!root || !release || !compiler) return
  const full = release.artifacts.find((artifact) => artifact.file === release.bars.artifact)
  const strongest = release.bars.strongest
  const samples = compiler.compileWallMs

  const facts = [
    fact(`${release.bars.artifact.replace(/^dist\//, "")} · Brotli 11`, bytes(full.brotli), `${reduction(full.brotli, strongest.brotli.bytes)} smaller than Motion's ${bytes(strongest.brotli.bytes)} (${strongest.brotli.name})`, "lead"),
    fact("raw", bytes(full.raw), `${reduction(full.raw, strongest.raw.bytes)} smaller than ${bytes(strongest.raw.bytes)} (${strongest.raw.name})`),
    fact("gzip 9", bytes(full.gzip), `${reduction(full.gzip, strongest.gzip.bytes)} smaller than ${bytes(strongest.gzip.bytes)} (${strongest.gzip.name})`),
    fact("compile time", seconds(median(samples)), `median of ${samples.length} builds: ${samples.map(seconds).join(", ")}`),
  ]

  const competitors = release.bars.competitors
  const bars = [
    { name: "motionlil, this release", brotli: full.brotli, className: "bar-lil" },
    ...competitors.map((bar) => ({ name: `Motion · ${bar.name}`, title: bar.tool, brotli: bar.brotli, className: "bar-motion" })),
    ...(release.previous ? [{ name: `motionlil, previous release (${release.previous.commit})`, brotli: release.previous.sizes[release.bars.artifact].brotli, className: "bar-previous" }] : []),
  ]
  const widest = Math.max(...bars.map((bar) => bar.brotli))

  const esm = release.artifacts.filter((artifact) => !artifact.file.endsWith(".cjs"))
  const cjs = release.artifacts.filter((artifact) => artifact.file.endsWith(".cjs"))
  const sha = compiler.binarySha256

  root.innerHTML = `
    <div class="release-facts">${facts.join("")}</div>
    <div class="release-bars" aria-label="${escapeHtml(release.bars.artifact)} against Motion, Brotli 11">
      ${bars.map((bar) => `
        <div class="${bar.className}" style="width:${((bar.brotli / widest) * 100).toFixed(2)}%" title="${escapeHtml(bar.title ?? bar.name)}">
          <span>${escapeHtml(bar.name)}</span><strong>${bytes(bar.brotli)}</strong>
        </div>`).join("")}
    </div>
    <p class="release-caption">${escapeHtml(release.bars.upstream)}. ${escapeHtml(competitors.map((bar) => `${bar.name}: ${bar.tool}`).join("; "))}. ${escapeHtml(release.bars.artifact)} is ${escapeHtml(full.label)}.</p>
    <div class="table-wrap">${table(esm, release.previous)}</div>
    ${graphNote(release)}
    <details class="release-cjs">
      <summary>CommonJS builds (${cjs.length})</summary>
      <div class="table-wrap">${table(cjs, release.previous)}</div>
    </details>
    <dl class="release-compiler">
      <div><dt>compiler</dt><dd><a href="https://github.com/yeargun/lilscript/commit/${escapeHtml(compiler.revision)}">${escapeHtml(compiler.revision)} ↗</a></dd></div>
      <div><dt>binary SHA-256</dt><dd title="${escapeHtml(sha)}">${escapeHtml(sha.slice(0, 16))}…</dd></div>
      <div><dt>compile wall time</dt><dd>${escapeHtml(samples.map(seconds).join(" · "))}</dd></div>
      <div><dt>what is timed</dt><dd>${escapeHtml(compiler.measures)} (full.lil: ${escapeHtml(compiler.fullEntryWallMs.map(seconds).join(" · "))})</dd></div>
      <div><dt>host</dt><dd>${escapeHtml(compiler.host)}${compiler.hostLoad1m ? ` · 1-minute load at each start: ${escapeHtml(compiler.hostLoad1m.join(" · "))}; CPU credit and contention make the samples vary` : ""}</dd></div>
      <div><dt>recorded</dt><dd>${escapeHtml(compiler.date)} · ${escapeHtml(release.codec)}</dd></div>
      ${release.previous ? `<div><dt>previous release</dt><dd><a href="https://github.com/yeargun/motionlil/commit/${escapeHtml(release.previous.commit)}">${escapeHtml(release.previous.commit)} ↗</a> · ${escapeHtml(release.previous.date)}</dd></div>` : ""}
    </dl>`

  for (const element of document.querySelectorAll("[data-release]")) {
    const key = element.dataset.release
    if (key === "revision") element.textContent = compiler.revision
    else if (key === "full-brotli") element.textContent = bytes(full.brotli)
    else if (key === "bar-brotli") element.textContent = bytes(strongest.brotli.bytes)
    else if (key === "bar-tool") element.textContent = strongest.brotli.name
    else if (key === "compile") element.textContent = seconds(median(samples))
    else if (key === "install-reduction" && data.install) element.textContent = `${(data.install.reduction * 100).toFixed(1)}%`
    else if (key === "install" && data.install) element.textContent = bytes(data.install.motionlilUnpacked)
    else if (key === "install-motion" && data.install) element.textContent = bytes(data.install.motionDependencyTree)
  }
}
