let ib = (a, b) => {
  let d = Math.round(b - a.startTime) * a.playbackSpeed;
  a.currentTime = a.holdTime ?? d;
};
export {
  ib
};
