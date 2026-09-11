import { finishedTask, installControlProperties, thenFinished } from "./../motion-dom/animation/utils/control-abi.js";
class $m114$WithPromise {
  finishedTask = null;
  resolveFn = null;
  finishedHook = null;
  constructor() {
    let wk = null;
    this.finishedTask = wk;
    this.resolveFn = wk;
    this.finishedHook = wk;
    this.updateFinished();
    installControlProperties(this);
  }
  baseFinished() {
    var wk = this.finishedTask;
    if (wk) return wk;
    return Promise.resolve(null);
  }
  getFinished() {
    var wk = this.finishedHook;
    if (wk) return wk();
    return this.baseFinished();
  }
  notifyFinished() {
    var wk = this.resolveFn;
    if (wk) wk();
  }
  then(wk, xk = null) {
    return thenFinished(this.getFinished(), wk, xk);
  }
  updateFinished() {
    this.finishedTask = finishedTask((Bk) => {
      this.resolveFn = Bk;
    });
  }
}
export {
  $m114$WithPromise
};
