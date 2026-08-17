const noop = () => {}

function defineControlProperty(control, name, descriptor) {
  if (name in control) return
  try {
    Object.defineProperty(control, name, {
      configurable: true,
      enumerable: true,
      ...descriptor,
    })
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

  defineControlProperty(control, "time", {
    get: () => typeof control.getPlaybackTime === "function" ? control.getPlaybackTime() : 0,
    set: (value) => control.setPlaybackTime?.(value),
  })
  defineControlProperty(control, "speed", {
    get: () => typeof control.getPlaybackSpeed === "function" ? control.getPlaybackSpeed() : 1,
    set: (value) => control.setPlaybackSpeed?.(value),
  })
  defineControlProperty(control, "duration", {
    get: () => typeof control.getDuration === "function" ? control.getDuration() : 0,
  })
  defineControlProperty(control, "iterationDuration", {
    get: () => typeof control.getDuration === "function" ? control.getDuration() : 0,
  })
  defineControlProperty(control, "state", {
    get: () => "running",
  })

  if (!("finished" in control)) {
    defineControlProperty(control, "finished", { get: () => Promise.resolve() })
  }
  if (typeof control.then !== "function") {
    control.then = (resolve, reject) => Promise.resolve(control.finished).then(resolve, reject)
  }

  return control
}
