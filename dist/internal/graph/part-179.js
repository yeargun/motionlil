let pe = (a, b, c, d, e, f, g) => {
  a.state = "pending";
  a.needsMeasurement = false;
  a.unresolvedKeyframes = b.slice();
  a.onComplete = c;
  a.name = d;
  a.motionValue = e;
  a.element = f;
  a.isAsync = g;
  a.finalKeyframe = void 0;
  a.suspendedScrollY = null;
};
export {
  pe
};
