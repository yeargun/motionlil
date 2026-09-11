let ib = (vk) => {
  var wk = vk - Math.floor(vk / 360) * 360;
  if (wk < 0) {
    var xk = wk + 360, yk = xk;
  } else yk = wk;
  return yk;
};
export {
  ib
};
