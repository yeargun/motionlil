let Pg = (a) => {
  if (a == "layout") return "group";
  if (a == "enter" || a == "new") return "new";
  return "old";
};
export {
  Pg
};
