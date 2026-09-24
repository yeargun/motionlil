import { zg } from "./part-535.js";
import "./effect-499.js";
import "./effect-573.js";
let recordStats = () => {
  if (zg.value != null) {
    zg.value = null;
    zg.addProjectionMetrics = null;
    throw new Error("Stats are already being measured");
  }
  let b = {
    layoutProjection: null
  };
  b.layoutProjection = {
    nodes: [],
    calculatedTargetDeltas: [],
    calculatedProjections: []
  };
  zg.value = b;
  zg.addProjectionMetrics = (a) => {
    b.layoutProjection.nodes.push(a.nodes);
    b.layoutProjection.calculatedTargetDeltas.push(a.calculatedTargetDeltas);
    b.layoutProjection.calculatedProjections.push(a.calculatedProjections);
  };
};
export {
  recordStats
};
