import { thenGroup } from "./../motion-dom/animation/utils/control-abi.js";
import { $m144$GroupAnimation } from "./part-442.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m145$GroupAnimationWithThen extends $m144$GroupAnimation {
  constructor(wk) {
    super(wk);
  }
  then(wk, xk = null) {
    return thenGroup(this.getFinished(), wk);
  }
}
export {
  $m145$GroupAnimationWithThen
};
