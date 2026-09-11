let $b = (vk, wk, yk) => {
  var xk = vk.events.get(wk);
  if (xk) xk.notify(yk, void 0, void 0);
};
export {
  $b
};
