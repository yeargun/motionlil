import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let tj = (vk) => {
  if (null == vk) return false;
  if (!("string" == typeof vk)) return false;
  return (vk.split("/*")[0] || "").includes("var(--");
};
export {
  tj
};
