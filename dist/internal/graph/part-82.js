let Fb = (a, b, c, d) => {
  let e = a.subscriptions.length;
  for (let f = 0; f < e; ++f) if (f < a.subscriptions.length) a.subscriptions[f](b, c, d);
};
export {
  Fb
};
