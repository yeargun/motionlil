import {
  animate,
  animateMini,
  hover,
  inView,
  motionValue,
  press,
  resize,
  scroll,
  stagger,
} from "./motionlil.js"

const root = document.querySelector("#demo-root")
const id = new URLSearchParams(location.search).get("case")
const waitFrame = () => new Promise((resolve) => requestAnimationFrame(resolve))

function setStatus(text) {
  const node = document.querySelector("[data-status]")
  if (node) node.textContent = text
}

function playBasic() {
  const options = { duration: 0.55 }
  const controls = [
    animateMini("#mini", { transform: "translateX(160px)" }, options),
    animate("#js", { x: 160 }, options),
    animate("#waapi", { transform: "translateX(160px)" }, options),
  ]
  Promise.all(controls.map((control) => Promise.resolve(control))).then(() => setStatus("3 finished"))
}

function playCssVars() {
  animate("#css-box", { "--opacity": 1 }, { duration: 0.65 })
}

function playStagger() {
  animate(".stagger-row .box", { opacity: [0, 1], y: [50, 0] }, {
    duration: 0.45,
    delay: stagger(0.1),
  })
}

function playSpring() {
  animate("#spring-box", { x: 140, rotate: 12 }, {
    type: "spring",
    stiffness: 400,
    damping: 28,
  })
}

function playScroll() {
  const options = { duration: 1 }
  const controls = [
    animateMini("#mini", { transform: "translateX(170px)" }, options),
    animate("#js", { x: 170 }, options),
    animate("#waapi", { transform: "translateX(170px)" }, options),
  ]
  let samples = 0
  const scrollOptions = { offset: ["start start", "end end"] }
  scroll((progress) => {
    samples += 1
    setStatus(`${Math.round(progress * 100)}% · ${samples}`)
  }, scrollOptions)
  controls.forEach((control) => scroll(control, scrollOptions))
}

function playHover() {
  hover("#gesture-box", (element) => {
    setStatus("hovered")
    animate(element, { scale: 1.12, rotate: 3 }, { duration: 0.12 })
    return () => {
      setStatus("left")
      animate(element, { scale: 1, rotate: 0 }, { duration: 0.14 })
    }
  })
}

function playPress() {
  press("#gesture-box", (element) => {
    setStatus("pressed")
    animate(element, { scale: 0.88 }, { duration: 0.08 })
    return () => {
      setStatus("released")
      animate(element, { scale: 1 }, { duration: 0.15 })
    }
  })
}

function playInView() {
  inView("#inview-box", (element) => {
    setStatus("in view")
    animate(element, { opacity: 1, scale: [0.88, 1] }, { duration: 0.3 })
    return () => {
      setStatus("out")
      animate(element, { opacity: 0.2 }, { duration: 0.2 })
    }
  })
}

function playResize() {
  resize("#resize-box", (_element, info) => {
    setStatus(`${Math.round(info.width)} × ${Math.round(info.height)}`)
  })
}

function playMotionValue() {
  const x = motionValue(0)
  x.on("change", (value) => setStatus(String(Math.round(value))))
  animate(x, 200, { duration: 0.8 })
  animate("#motion-value-box", { x: 208 }, { duration: 0.8 })
}

function createPerfDots() {
  const stage = document.querySelector("#perf-stage")
  stage.replaceChildren()
  return Array.from({ length: 192 }, (_, index) => {
    const element = document.createElement("span")
    element.className = "perf-dot"
    element.style.left = `${Math.floor(index / 8) * 14 + 7}px`
    element.style.top = `${(index % 8) * 21 + 12}px`
    stage.append(element)
    return element
  })
}

function runPerf() {
  const boxes = createPerfDots()
  const start = performance.now()
  animateMini(boxes, { transform: "translateX(155px)", opacity: 0.82 }, {
    duration: 0.12,
    delay: stagger(0.001),
  })
  setStatus(`${(performance.now() - start).toFixed(2)} ms schedule`)
}

function playWave() {
  animate(".wave-dot", { opacity: [0, 1], scale: [0.4, 1], rotate: [20, 0] }, {
    delay: stagger(0.035, { from: "center" }),
    type: "spring",
    stiffness: 320,
    damping: 18,
  })
}

function playShowcaseSpring() {
  animate("#showcase-spring-box", { rotate: [0, 90], scale: [1, 1.15, 1] }, {
    type: "spring",
    stiffness: 180,
    damping: 12,
    repeat: 1000,
    repeatType: "mirror",
  })
}

function playSequence() {
  animate([
    ["#orb-a", { opacity: 1, scale: [0.5, 1.2, 1] }, { duration: 0.45 }],
    ["#orb-b", { opacity: 1, y: [-40, 0], scale: 1 }, { duration: 0.4 }],
    ["#orb-c", { opacity: 1, x: [40, 0], rotate: [30, 0] }, { duration: 0.45 }],
    [".orb", { scale: 0.9 }, { duration: 0.25 }],
    [".orb", { scale: 1, opacity: 0.35 }, { duration: 0.35 }],
  ])
}

function playGestureCards() {
  hover(".gesture-card", (element) => {
    animate(element, { y: -10, scale: 1.06 }, { type: "spring", stiffness: 400, damping: 22 })
    return () => animate(element, { y: 0, scale: 1 }, { type: "spring", stiffness: 350, damping: 24 })
  })
  press("#card-b, #card-c", (element) => {
    animate(element, { scale: 0.92, rotate: -2 }, { type: "spring", stiffness: 500, damping: 28 })
    return () => animate(element, { scale: 1, rotate: 0 }, { type: "spring", stiffness: 420, damping: 24 })
  })
}

function playCarousel() {
  const colors = [
    ["#ff512f", "#dd2476"], ["#1d976c", "#93f9b9"], ["#4568dc", "#b06ab3"],
    ["#f7971e", "#ffd200"], ["#11998e", "#38ef7d"], ["#654ea3", "#eaafc8"], ["#fc4a1a", "#f7b733"],
  ]
  const width = 230
  const idleWidth = 54
  const track = document.querySelector("#carousel-track")
  const frame = document.querySelector("#carousel-frame")
  const dots = document.querySelector("#carousel-dots")
  let active = 2
  let locked = false

  track.innerHTML = colors.map((pair, index) => `
    <div class="carousel-slot">
      <div class="carousel-slide" data-index="${index}">
        <div class="carousel-art" style="background:linear-gradient(145deg,${pair[0]},${pair[1]})">${index + 1}</div>
      </div>
    </div>`).join("")
  dots.innerHTML = colors.map((_, index) => `<span class="carousel-dot${index === active ? " active" : ""}"></span>`).join("")
  const slides = [...document.querySelectorAll(".carousel-slide")]
  const dotElements = [...document.querySelectorAll(".carousel-dot")]

  const pose = (index) => colors.map((_, item) => ({
    rotateY: item < index ? 60 : item > index ? -60 : 0,
    rotateZ: item < index ? 90 : item > index ? -90 : 0,
    width: item === index ? width : idleWidth,
  }))
  const apply = (nextPose) => {
    nextPose.forEach((value, index) => {
      slides[index].style.width = `${value.width}px`
      slides[index].style.transform = `rotateY(${value.rotateY}deg) rotateZ(${value.rotateZ}deg)`
    })
    track.style.transform = `translateX(${-idleWidth * active}px)`
  }
  const goTo = (requested) => {
    const next = Math.max(0, Math.min(colors.length - 1, requested))
    if (locked || next === active) return
    const previous = active
    const from = pose(previous)
    active = next
    locked = true
    const to = pose(active)
    dotElements.forEach((dot, index) => dot.classList.toggle("active", index === active))
    animate(track, { x: [-idleWidth * previous, -idleWidth * active] }, { type: "spring", bounce: 0.2, duration: 0.8 })
    slides.forEach((slide, index) => animate(slide, {
      rotateY: [from[index].rotateY, to[index].rotateY],
      rotateZ: [from[index].rotateZ, to[index].rotateZ],
      width: [from[index].width, to[index].width],
    }, { duration: 0.8, ease: [1, -0.03, 0.413, 0.965] }))
    animate(frame, { scale: [1, 1.06, 1] }, { duration: 0.8 }).then(() => { locked = false })
  }
  apply(pose(active))
  document.querySelector("#carousel-prev").onclick = () => goTo(active - 1)
  document.querySelector("#carousel-next").onclick = () => goTo(active + 1)
  slides.forEach((slide, index) => { slide.onclick = () => goTo(index) })
  dotElements.forEach((dot, index) => { dot.onclick = () => goTo(index) })
}

const demos = {
  "animate-play": {
    markup: `<div class="lanes"><div class="lane"><span id="mini">mini</span>WAAPI mini</div><div class="lane"><span id="js">js</span>JS transforms</div><div class="lane"><span id="waapi">waapi</span>WAAPI transform</div><b class="status" data-status>playing</b></div>`,
    run: playBasic,
  },
  "animate-css-vars": {
    markup: `<div class="center"><div class="css-box" id="css-box"></div><b class="status">--opacity</b></div>`,
    run: playCssVars,
  },
  "animate-stagger": {
    markup: `<div class="center"><div class="stagger-row">${[0, 1, 2, 3].map((value) => `<div class="box">${value}</div>`).join("")}</div></div>`,
    run: playStagger,
  },
  "animate-spring": {
    markup: `<div class="center"><div class="spring-box" id="spring-box">spring</div></div>`,
    run: playSpring,
  },
  "animate-scroll": {
    markup: `<div class="scroll-lane"><div class="scroll-box" id="mini">mini</div><div class="scroll-box" id="js">js</div><div class="scroll-box" id="waapi">waapi</div></div><p class="scroll-hint">Scroll inside this demo to scrub all three animations.</p><b class="status" data-status>0%</b>`,
    run: playScroll,
  },
  "gesture-hover": {
    markup: `<div class="center"><div class="gesture-box" id="gesture-box">hover me</div><b class="status" data-status>idle</b></div>`,
    run: playHover,
  },
  "gesture-press": {
    markup: `<div class="center"><div class="gesture-box" id="gesture-box" tabindex="0">press me</div><b class="status" data-status>idle</b></div>`,
    run: playPress,
  },
  "in-view": {
    markup: `<div class="inview-spacer">scroll down ↓</div><div class="inview-box" id="inview-box">inView</div><div class="inview-spacer">and back up ↑</div><b class="status inview-status" data-status>out</b>`,
    run: playInView,
  },
  "resize-box": {
    markup: `<div class="resize-stage"><div class="resize-box" id="resize-box"></div><p>drag the lower-right corner</p><b class="status" data-status>measuring</b></div>`,
    run: playResize,
  },
  "motion-value": {
    markup: `<div class="motion-value-stage"><strong class="motion-value-readout" data-status>0</strong><div class="motion-value-track"></div><div class="motion-value-box" id="motion-value-box"></div></div>`,
    run: playMotionValue,
  },
  "perf-stagger": {
    markup: `<div class="perf-stage-wrap"><div class="perf-stage" id="perf-stage"></div><div class="perf-controls"><button class="demo-button" id="perf-run" type="button">run 192 nodes</button><span data-status>ready</span></div></div>`,
    run: () => { document.querySelector("#perf-run").onclick = runPerf; runPerf() },
  },
  "showcase-wave": {
    markup: `<div class="center"><div class="wave-grid">${Array.from({ length: 25 }, () => `<div class="wave-dot"></div>`).join("")}</div></div>`,
    run: playWave,
  },
  "showcase-spring": {
    markup: `<div class="center"><div class="showcase-spring-box" id="showcase-spring-box">spring</div></div>`,
    run: playShowcaseSpring,
  },
  "showcase-sequence": {
    markup: `<div class="center"><div class="sequence-row"><div class="orb orb-a" id="orb-a"></div><div class="orb orb-b" id="orb-b"></div><div class="orb orb-c" id="orb-c"></div></div></div>`,
    run: playSequence,
  },
  "showcase-gestures": {
    markup: `<div class="center"><div class="gesture-cards"><div class="gesture-card" id="card-a">hover me</div><div class="gesture-card" id="card-b">press me</div><div class="gesture-card" id="card-c">both</div></div></div>`,
    run: playGestureCards,
  },
  "showcase-carousel": {
    markup: `<div class="carousel"><div class="carousel-stage"><div class="carousel-track" id="carousel-track"></div><div class="carousel-frame" id="carousel-frame"></div></div><div class="carousel-controls"><button id="carousel-prev" aria-label="Previous">‹</button><div class="carousel-dots" id="carousel-dots"></div><button id="carousel-next" aria-label="Next">›</button></div></div>`,
    run: playCarousel,
  },
}

const demo = demos[id]
if (!demo) {
  root.innerHTML = `<div class="error">Unknown demo: ${id ?? "none"}</div>`
} else {
  document.body.dataset.case = id
  document.title = `${id} · motionlil`
  root.innerHTML = demo.markup
  await waitFrame()
  try {
    demo.run()
  } catch (error) {
    root.innerHTML = `<div class="error">${error instanceof Error ? error.message : String(error)}</div>`
    throw error
  }
}
