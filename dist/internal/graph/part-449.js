import { $m118$NativeAnimation } from "./part-445.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m147$NativeAnimationWrapper extends $m118$NativeAnimation {
  constructor(wk) {
    super(null);
    this.animation = wk;
    wk.onfinish = () => {
      this.finishedTime = this.getPlaybackTime();
      this.notifyFinished();
    };
  }
}
export {
  $m147$NativeAnimationWrapper
};
