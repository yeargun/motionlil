import { Sf } from "./part-53.js";
import { ab } from "./part-54.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m53$SubscriptionManager {
  subscriptions = [];
  constructor() {
    this.subscriptions = [];
  }
  add(wk) {
    Sf(this.subscriptions, wk);
    return () => {
      ab(this.subscriptions, wk);
    };
  }
  clear() {
    this.subscriptions.length = 0;
  }
  getSize() {
    return this.subscriptions.length;
  }
  notify(wk, xk, yk) {
    var Ak = this.subscriptions.length;
    if (0 == Ak) return;
    if (1 == Ak) this.subscriptions[0](wk, xk, yk);
    else {
      var zk = 0;
      for (; zk < Ak; zk = zk + 1) {
        if (zk < this.subscriptions.length) this.subscriptions[zk](wk, xk, yk);
      }
    }
  }
}
export {
  $m53$SubscriptionManager
};
