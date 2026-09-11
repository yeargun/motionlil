import { ca } from "./part-381.js";
import { ob } from "./part-384.js";
import { Ge } from "./part-390.js";
import { Ci } from "./part-394.js";
import { Di } from "./part-398.js";
import { Ei } from "./part-399.js";
import { r } from "./part-591.js";
import { K } from "./part-611.js";
let zi = (vk) => {
  vk.projectionUpdateScheduled = false;
  if (r.value) {
    K.nodes = 0;
    K.calculatedTargetDeltas = 0;
    K.calculatedProjections = 0;
  }
  ob(vk.nodeList, (bl) => {
    Di(bl);
  });
  ob(vk.nodeList, (bl) => {
    Ge(bl, false);
  });
  ob(vk.nodeList, (bl) => {
    Ci(bl);
  });
  ob(vk.nodeList, (bl) => {
    Ei(bl);
  });
  var xk = r.addProjectionMetrics;
  if (xk) {
    var yk = ca("nodes"), zk = ca("calculatedTargetDeltas"), Ak = ca("calculatedProjections"), wk = {
      nodes: 0,
      calculatedTargetDeltas: 0,
      calculatedProjections: 0
    };
    wk.nodes = yk;
    wk.calculatedTargetDeltas = zk;
    wk.calculatedProjections = Ak;
    xk(wk);
  }
};
export {
  zi
};
