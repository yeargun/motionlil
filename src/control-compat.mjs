const noop = () => {}

function defineControlProperty(control, name, get, set) {
  if (name in control) return
  try {
    Object.defineProperty(control, name, { configurable: true, enumerable: true, get, set })
  } catch {
    // Host animation objects can be non-extensible. Their native surface is
    // already usable, so a failed compatibility alias is safe to skip.
  }
}

export function normalizeControls(control) {
  if (!control || (typeof control !== "object" && typeof control !== "function")) {
    return control
  }
  const has = (name) => typeof control[name] === "function"

  if (!has("cancel")) {
    control.cancel = has("stop") ? () => control.stop() : noop
  }
  if (!has("complete")) {
    control.complete = has("finish")
      ? () => control.finish()
      : has("stop")
        ? () => control.stop()
        : noop
  }

  const duration = () => has("getDuration") ? control.getDuration() : 0
  defineControlProperty(control, "time", () => has("getPlaybackTime") ? control.getPlaybackTime() : 0, (value) => control.setPlaybackTime?.(value))
  defineControlProperty(control, "speed", () => has("getPlaybackSpeed") ? control.getPlaybackSpeed() : 1, (value) => control.setPlaybackSpeed?.(value))
  defineControlProperty(control, "duration", duration)
  defineControlProperty(control, "iterationDuration", duration)
  defineControlProperty(control, "state", () => "running")
  defineControlProperty(control, "finished", () => Promise.resolve())
  if (!has("then")) {
    control.then = (resolve, reject) => Promise.resolve(control.finished).then(resolve, reject)
  }

  return control
}
