import { animate, motionValue, spring, stagger } from "motionlil"
import { animate as animateMini } from "motionlil/mini"
import { recordStats } from "motionlil/debug"

const value = motionValue(0)
value.set(1)
animate(".box", { opacity: [0, 1] }, { delay: stagger(0.05) })
animateMini(".box", { transform: ["scale(0)", "scale(1)"] })
spring({ keyframes: [0, 1] }).next(16)
recordStats()
