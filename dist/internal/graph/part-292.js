let Fh = (vk) => {
  if (null == vk) return false;
  var yk = vk.visualElement;
  if (!yk) return false;
  var wk = yk.props;
  if (!wk) return false;
  var zk = wk.style;
  if (!zk) return false;
  var xk = zk.display;
  if ("string" == typeof xk) return "contents" == xk;
  return false;
};
export {
  Fh
};
