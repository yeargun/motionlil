import { getControlProperty, groupFinished, installControlProperties } from "./../motion-dom/animation/utils/control-abi.js";
import { callFn0, callMethod0, callMethod1, isFunction } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m144$GroupAnimation {
  animations = [];
  constructor(wk) {
    this.animations = [];
    var xk = 0;
    for (; xk < wk.length; xk = xk + 1) {
      if (wk[xk]) this.animations.push(wk[xk]);
    }
    this.stop = () => {
      this.runAll("stop");
    };
    installControlProperties(this);
  }
  attachTimeline(wk) {
    var yk = [], xk = 0;
    for (; xk < this.animations.length; xk = xk + 1) yk.push(callMethod1(this.animations[xk], "attachTimeline", wk));
    return () => {
      var Ok, Nk = 0;
      for (; Nk < yk.length; Nk = Nk + 1) {
        Ok = yk[Nk];
        if (isFunction(Ok)) callFn0(Ok);
        callMethod0(this.animations[Nk], "stop");
      }
    };
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
  getAll(wk) {
    return getControlProperty(this.animations[0], wk);
  }
  getDuration() {
    return this.getMax("duration");
  }
  getFinished() {
    return groupFinished(this.animations);
  }
  getIterationDuration() {
    return this.getMax("iterationDuration");
  }
  getMax(wk) {
    var zk, Bk, Ck, xk, yk = 0, Ak = 0;
    for (; Ak < this.animations.length; ) {
      zk = this.animations[Ak][wk];
      if (zk !== void 0) {
        Bk = zk > yk;
        Ck = Bk;
      } else Ck = false;
      if (Ck) xk = zk;
      else xk = yk;
      yk = xk;
      Ak += 1;
    }
    return yk;
  }
  getPlaybackSpeed() {
    return this.getAll("speed");
  }
  getPlaybackTime() {
    return this.getAll("time");
  }
  getStartTime() {
    return this.getAll("startTime");
  }
  getState() {
    return this.getAll("state");
  }
  pause() {
    this.runAll("pause");
  }
  play() {
    this.runAll("play");
  }
  runAll(wk) {
    var xk = 0;
    for (; xk < this.animations.length; xk = xk + 1) callMethod0(this.animations[xk], wk);
  }
  setAll(wk, xk) {
    var yk = 0;
    for (; yk < this.animations.length; yk = yk + 1) this.animations[yk][wk] = xk;
  }
  setPlaybackSpeed(wk) {
    this.setAll("speed", wk);
  }
  setPlaybackTime(wk) {
    this.setAll("time", wk);
  }
  stop() {
    this.runAll("stop");
  }
}
export {
  $m144$GroupAnimation
};
