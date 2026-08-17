import { animate, motionValue, stagger } from "motionlil"

const value = motionValue(0)
value.set(1)
animate("#box", { opacity: [0, value.get()] }, { delay: stagger(0.01) })
document.documentElement.dataset.result = "lilmotion-ok"
