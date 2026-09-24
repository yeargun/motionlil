let aj = (a, b, c, d) => {
  if (typeof b == "number") return b;
  if (b.startsWith("-") || b.startsWith("+")) return Math.max(a + parseFloat(b), 0);
  if (b == "<") return c;
  if (b.startsWith("<")) return Math.max(c + parseFloat(b.slice(1)), 0);
  return d.get(b) ?? a;
};
export {
  aj
};
