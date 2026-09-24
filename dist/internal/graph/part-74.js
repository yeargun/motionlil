let qb = (a) => {
  a.state = "idle";
  let b = a.driver;
  if (b) {
    b.stop();
    a.driver = null;
  }
  a.startTime = null;
  a.holdTime = null;
};
export {
  qb
};
