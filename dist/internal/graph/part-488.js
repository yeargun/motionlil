function hk(a) {
  return function() {
    return a(this, arguments);
  };
}
export {
  hk
};
