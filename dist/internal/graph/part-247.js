let jg = (a) => (b) => {
  if (b.key !== "Enter") return;
  a(b);
};
export {
  jg
};
