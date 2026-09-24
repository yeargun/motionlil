let ab = (a) => {
  a._finished = new Promise((b) => {
    a._resolve = b;
  });
};
export {
  ab
};
