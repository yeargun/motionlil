let ta = (a) => ({
  test: (b) => typeof b == "string" && b.endsWith(a) && b.split(" ").length == 1,
  parse: parseFloat,
  transform: (b) => `${b}${a}`
});
export {
  ta
};
