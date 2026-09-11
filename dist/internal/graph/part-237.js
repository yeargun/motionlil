import { r } from "./part-591.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Dj = () => {
  if (r.value) {
    var vk = null;
    r.value = vk;
    r.addProjectionMetrics = vk;
    throw "Stats are already being measured";
  }
  var xk = {
    layoutProjection: null
  }, wk = {
    nodes: [],
    calculatedTargetDeltas: [],
    calculatedProjections: []
  };
  wk.nodes = [];
  wk.calculatedTargetDeltas = [];
  wk.calculatedProjections = [];
  xk.layoutProjection = wk;
  r.value = xk;
  r.addProjectionMetrics = (Mk) => {
    var Nk = r.value;
    if (Nk) {
      Nk.layoutProjection.nodes.push(Mk.nodes);
      Nk.layoutProjection.calculatedTargetDeltas.push(Mk.calculatedTargetDeltas);
      Nk.layoutProjection.calculatedProjections.push(Mk.calculatedProjections);
    }
  };
};
export {
  Dj
};
