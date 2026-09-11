const noop = () => {}

// Accessors are host ABI glue. Their receiver is supplied by JavaScript, so
// every animation can share them instead of allocating closures at setup.
const controlProperties = {
  time: {
    get() { return typeof this.getPlaybackTime === "function" ? this.getPlaybackTime() : 0 },
    set(value) { this.setPlaybackTime?.(value) },
  },
  speed: {
    get() { return typeof this.getPlaybackSpeed === "function" ? this.getPlaybackSpeed() : 1 },
    set(value) { this.setPlaybackSpeed?.(value) },
  },
  duration: {
    get() { return typeof this.getDuration === "function" ? this.getDuration() : 0 },
  },
  iterationDuration: {
    get() { return this.getIterationDuration?.() ?? this.getDuration?.() ?? 0 },
  },
  state: { get() { return this.getState?.() ?? "idle" } },
  startTime: { get() { return this.getStartTime?.() ?? null } },
  finished: {
    get() { return typeof this.getFinished === "function" ? this.getFinished() : Promise.resolve() },
  },
}
for (const descriptor of Object.values(controlProperties)) {
  descriptor.configurable = true
  descriptor.enumerable = true
}
const controlPropertyNames = Object.keys(controlProperties)

function then(resolve, reject) {
  return Promise.resolve(this.finished).then(resolve, reject)
}

function defineControlProperty(control, name, descriptor) {
  if (name in control) return
  try {
    Object.defineProperty(control, name, descriptor)
  } catch {
    // Host animation objects can be non-extensible. Their native surface is
    // already usable, so a failed compatibility alias is safe to skip.
  }
}

export function normalizeControls(control) {
  if (!control || (typeof control !== "object" && typeof control !== "function")) {
    return control
  }

  if (typeof control.cancel !== "function") {
    control.cancel = typeof control.stop === "function" ? () => control.stop() : noop
  }
  if (typeof control.complete !== "function") {
    control.complete = typeof control.finish === "function"
      ? () => control.finish()
      : typeof control.stop === "function"
        ? () => control.stop()
        : noop
  }

  // Fresh compiled groups need this complete surface. Install the shared
  // descriptors in one host call, retaining existing properties on mixed or
  // native controls through the incremental path.
  if (controlPropertyNames.every(name => !(name in control))) {
    try {
      Object.defineProperties(control, controlProperties)
    } catch {
      for (const name of controlPropertyNames) {
        defineControlProperty(control, name, controlProperties[name])
      }
    }
  } else {
    for (const name of controlPropertyNames) {
      defineControlProperty(control, name, controlProperties[name])
    }
  }
  if (typeof control.then !== "function") {
    control.then = then
  }

  return control
}
