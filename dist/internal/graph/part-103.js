let gg = (vk) => {
  var xk, wk = 0;
  for (; ; ) {
    if (!vk.next(wk).done) xk = wk < 2e4;
    else xk = false;
    if (!xk) {
      break;
    }
    wk += 50;
  }
  if (wk >= 2e4) return 1 / 0;
  return wk;
};
export {
  gg
};
