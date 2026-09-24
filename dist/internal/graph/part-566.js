function ik(a) {
  return function() {
    return a(arguments);
  };
}
export {
  ik
};
