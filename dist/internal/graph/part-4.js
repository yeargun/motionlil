let fl = function(a) {
  return new Promise((b) => {
    a(() => b(true));
  });
};
export {
  fl
};
