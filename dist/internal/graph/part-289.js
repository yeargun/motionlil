let Xg = (a, b) => {
  let c = Object.assign({}, a, b);
  if (b.duration !== void 0) {
    if (b.visualDuration === void 0) delete c.visualDuration;
    if (b.type === void 0) delete c.type;
  }
  return c;
};
export {
  Xg
};
