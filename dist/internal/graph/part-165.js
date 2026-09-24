let Wd = (a) => {
  let b = a % 360;
  return b < 0 ? b + 360 : b;
};
export {
  Wd
};
