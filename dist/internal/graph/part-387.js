let yi = (vk, wk, yk) => {
  var zk = null, xk = vk.eventHandlers.get(wk);
  if (xk) xk.notify(yk, zk, zk);
};
export {
  yi
};
