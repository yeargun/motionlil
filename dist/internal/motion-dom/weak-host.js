function weakMapCreate() {
  return /* @__PURE__ */ new WeakMap();
}
function weakMapGet(map, key) {
  const value = map.get(key);
  return value === void 0 ? null : value;
}
function weakMapSet(map, key, value) {
  map.set(key, value);
}
function weakMapHas(map, key) {
  return map.has(key);
}
function weakMapDelete(map, key) {
  map.delete(key);
}
function weakSetCreate() {
  return /* @__PURE__ */ new WeakSet();
}
function weakSetAdd(set, value) {
  set.add(value);
}
function weakSetHas(set, value) {
  return set.has(value);
}
function weakSetDelete(set, value) {
  set.delete(value);
}
function setForEach(set, callback) {
  set.forEach(callback);
}
export {
  setForEach,
  weakMapCreate,
  weakMapDelete,
  weakMapGet,
  weakMapHas,
  weakMapSet,
  weakSetAdd,
  weakSetCreate,
  weakSetDelete,
  weakSetHas
};
