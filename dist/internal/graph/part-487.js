function gk(a) {
  return function(b, c, d) {
    return a(this, b, c, d);
  };
}
export {
  gk
};
