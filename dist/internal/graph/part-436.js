function Vi(vk, wk) {
  vk.setup.cancel(wk);
  vk.read.cancel(wk);
  vk.resolveKeyframes.cancel(wk);
  vk.preUpdate.cancel(wk);
  vk.update.cancel(wk);
  vk.preRender.cancel(wk);
  vk.render.cancel(wk);
  vk.postRender.cancel(wk);
}
export {
  Vi
};
