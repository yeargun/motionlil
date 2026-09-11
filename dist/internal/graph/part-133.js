let tg = (vk, wk, xk) => {
  var yk = vk.readValueFromInstanceHook;
  if (yk) return yk(wk, xk);
  return null;
};
export {
  tg
};
