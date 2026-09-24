function fk(a) {
  return function(b) {
    return a(this, b);
  };
}
export {
  fk
};
