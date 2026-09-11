function Hd(vk, wk, yk, zk, Ak, Bk, Ck) {
  vk.unresolvedKeyframes = [];
  var xk, Ek = wk.length, Dk = 0;
  for (; Dk < Ek; ) {
    vk.unresolvedKeyframes.push(wk[Dk]);
    Dk += 1;
  }
  vk.onComplete = yk;
  vk.name = zk;
  vk.motionValue = Ak;
  vk.element = Bk;
  vk.isAsync = Ck;
  vk.state = "pending";
  vk.needsMeasurement = false;
  xk = null;
  vk.finalKeyframe = xk;
  vk.suspendedScrollY = xk;
  vk.readKeyframesHook = xk;
  vk.measureInitialStateHook = xk;
  vk.measureEndStateHook = xk;
}
export {
  Hd
};
