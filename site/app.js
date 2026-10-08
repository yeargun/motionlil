import {renderComparison} from './objective-comparison.js';
const currentComparison=await fetch('./comparison.json').then(response=>{if(!response.ok)throw Error('Comparison could not load');return response.json()});
renderComparison(currentComparison);
import { renderRelease } from "./release.js"

const esmComparison = await fetch("./comparison.json").then(response => response.json())
const data = await fetch("./results.json").then((response) => {
  if (!response.ok) throw new Error(`Unable to load results: ${response.status}`)
  return response.json()
})

const demoGrid = document.querySelector("#demo-grid")
const resultsBody = document.querySelector("#results-body")
const formatter = new Intl.NumberFormat("en-US")

function sourceUrl(id) {
  return `https://github.com/yeargun/lilscript/tree/9fc14a8/lilastro/browser/${id}`
}

function renderDemos(filter = "all") {
  const examples = filter === "all"
    ? data.examples
    : data.examples.filter((example) => example.group === filter)

  demoGrid.innerHTML = examples.map((example, index) => `
    <article class="demo-card" style="--order:${index}">
      <header>
        <div>
          <span class="case-number">${String(data.examples.indexOf(example) + 1).padStart(2, "0")}</span>
          <h3>${example.title}</h3>
        </div>
        <strong class="saving">${example.group}</strong>
      </header>
      <div class="demo-frame-wrap">
        <iframe
          src="./demo.html?case=${encodeURIComponent(example.id)}"
          title="${example.title} live motionlil demo"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <footer>
        <span>Motion DOM</span>
        <div>
          <button class="replay" type="button" aria-label="Replay ${example.title}">replay ↻</button>
          <a href="${sourceUrl(example.id)}" aria-label="View ${example.title} lab source">source ↗</a>
        </div>
      </footer>
    </article>
  `).join("")
}

function renderResults() {}

renderRelease(data)
renderDemos()
renderResults()

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]")
  if (!button) return
  document.querySelectorAll(".filters button").forEach((item) => {
    item.classList.toggle("active", item === button)
  })
  renderDemos(button.dataset.filter)
})

demoGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".replay")
  if (!button) return
  const iframe = button.closest(".demo-card").querySelector("iframe")
  iframe.src = iframe.src
})

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]")
  if (!button) return
  await navigator.clipboard.writeText(button.dataset.copy)
  const previous = button.textContent
  button.textContent = "copied!"
  window.setTimeout(() => { button.textContent = previous }, 1400)
})

const progress = document.querySelector(".progress")
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`
}
window.addEventListener("scroll", updateProgress, { passive: true })
updateProgress()
