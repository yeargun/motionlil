import { callFn2, callMethod0, callMethod1, documentElement, hasOwn, isFunction } from "./../motion-dom/dom-host.js";
import { l } from "./part-0.js";
import { xd } from "./part-157.js";
import { S } from "./part-195.js";
import { uh } from "./part-256.js";
import { vh } from "./part-257.js";
import { Xd } from "./part-259.js";
import { mc } from "./part-263.js";
import { e } from "./part-27.js";
import { $m118$NativeAnimation } from "./part-445.js";
import { $m147$NativeAnimationWrapper } from "./part-449.js";
import { lk } from "./part-5.js";
import { A } from "./part-572.js";
import { Kc } from "./part-594.js";
import { cd } from "./part-65.js";
var _d;
var zh;
(function() {
  let a = (vk) => {
    if ("layout" == vk) return "group";
    if ("enter" == vk) {
      var wk = true;
    } else wk = "new" == vk;
    if (wk) return "new";
    return "old";
  }, b = (vk) => {
    var xk = vk.split(" "), wk = 0;
    for (; wk < xk.length; wk = wk + 1) {
      if (0 != l(xk[wk] || "")) return false;
    }
    return true;
  }, c = (vk, xk) => {
    var zk = [];
    if ("group" == xk) {
      var Ek, yk, Dk, Ak, Bk, wk, Ck = ["layout"];
    } else {
      if ("new" == xk) Bk = ["new", "enter"];
      else {
        if ("old" == xk) Ak = ["old", "exit"];
        else Ak = zk;
        Bk = Ak;
      }
      Ck = Bk;
    }
    if (null == vk) return null;
    for (Ek = vk, wk = 0; wk < Ck.length; wk = wk + 1) {
      yk = Ek[Ck[wk] || ""];
      if (yk) {
        Dk = yk.options;
        if (Dk) return Dk;
      }
    }
    return null;
  }, d = (vk, xk) => {
    var yk = {
      __proto__: null
    };
    if ("object" == typeof vk) for (var zk in vk) yk[zk] = vk[zk];
    if ("object" == typeof xk) {
      for (var wk in xk) yk[wk] = xk[wk];
      if (hasOwn(xk, "duration")) {
        if (!hasOwn(xk, "visualDuration")) delete yk.visualDuration;
        if (!hasOwn(xk, "type")) delete yk.type;
      }
    }
    return yk;
  }, f = (vk, xk) => {
    if (null == vk) return null;
    var wk = vk;
    if ("string" == typeof wk) return xd(wk, xk);
    return null;
  };
  _d = function(vk, xk, Bk, Ck, Dk, Ek) {
    var Fk = S(vk[14], Ck), yk = c(xk, Bk);
    if (null == yk) {
      var wk, zk, Ak = {
        __proto__: null
      };
    } else Ak = yk;
    wk = d(Fk, S(Ak, Ck));
    zk = wk.delay;
    if (isFunction(zk)) wk.delay = callFn2(zk, Dk, Ek);
    return wk;
  };
  zh = function(vk) {
    var Rm, on, Um, wk, xk, un, vn, yk, zk, xn, yn, Km, On, Ak, Bk, Ck, Dk, Xl, Pn, An, Qn, Il, um, Ek, Fk, Gk, Tn, Un, Hk, Ik, Jk, Vn, Wn, Kk, Lk, $l, Mk, Xn, Yn, gn, Nk, Bn, Cn, Dn, En, Fn, Gn, Hn, In, Jn, vm, Ok, Pk, Qk, Rk, Kn, wm, Vm, Jl, Yl, Sk, Tk, Uk, am, bm, xm, ym, Zl, Lm, Vk, Wk, cm, dm, em, fm, zm, gm, hm, im, jm, km, lm, mm, nm, om, Am, Xk, Mm, Yk, Bm, hn, Nm, Cm, Om, pn, Dm, Zk, jn, _k, $k, al, bl, pm, cl, dl, Pm, el, tn, Sm, _l, fl, qm, Em, Kl, Wm, Xm, Ym, Ll, Zm, _m, $m, an, bn, cn, dn, en, wn, gl, Ml, zn, hl, Nl, fn, Rn, Fm, Gm, il, jl, kl, ll, ml, nl, kn, ol, pl, ql, rl, Ln, Mn, Tm, sl, tl, ul, vl, Hm, rm, sm, wl, Im, Jm, qn, Qm, ln, xl, yl, tm, mn, rn, Ol, Pl, Ql, Rl, Sl, Tl, Ul, Vl, Wl, zl, Al, Bl, Cl, Dl, El, Fl, Gl, Hl, nn = [], Nn = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Set(), Sn = 0;
    for (; Sn < vk[6].length; Sn = Sn + 1) {
      Rm = vk[6][Sn] || "";
      on = vk[5].get(Rm) ?? null;
      if (null == on) continue;
      Um = vk[9].get(Rm);
      if (Um) {
        wk = !!Um.newPos;
        xk = wk;
      } else xk = false;
      if (xk) {
        un = !Um.oldPos;
        vn = un;
      } else vn = false;
      if (Um) {
        yk = !!Um.oldPos;
        zk = yk;
      } else zk = false;
      if (zk) {
        xn = !Um.newPos;
        yn = xn;
      } else yn = false;
      for (fn = 0; fn < Kc.length; fn = fn + 1) {
        Km = Kc[fn] || "";
        On = on[Km];
        if (!On) continue;
        if ("enter" == Km) {
          Ak = !vn;
          Bk = Ak;
        } else Bk = false;
        if (Bk) continue;
        if ("exit" == Km) {
          Ck = !yn;
          Dk = Ck;
        } else Dk = false;
        if (Dk) continue;
        Xl = a(Km);
        Pn = mc(vk, Rm, Xl);
        if ((Pn[0] | 0) == -1) continue;
        An = On.keyframes;
        Qn = On.options;
        if (!Qn) Rn = {
          __proto__: null
        };
        else Rn = Qn;
        if (!("object" == typeof An)) continue;
        for (Il in An) {
          um = An[Il];
          if (null == um) continue;
          if ("x" == Il) Fk = true;
          else {
            Ek = "y" == Il;
            Fk = Ek;
          }
          if (Fk) {
            cd(false, `animateView() does not support "${Il}" shorthand`, null);
            continue;
          }
          if ("new" == Km) Gk = vn;
          else Gk = false;
          if (Gk) {
            Tn = on.enter;
            if (Tn) {
              Un = Tn.keyframes;
              if (Un) {
                Hk = null != Un[Il];
                Ik = Hk;
              } else Ik = false;
              if (Ik) continue;
            }
          }
          if ("old" == Km) Jk = yn;
          else Jk = false;
          if (Jk) {
            Vn = on.exit;
            if (Vn) {
              Wn = Vn.keyframes;
              if (Wn) {
                Kk = null != Wn[Il];
                Lk = Kk;
              } else Lk = false;
              if (Lk) continue;
            }
          }
          $l = d(S(vk[14], Il), S(Rn, Il));
          if (!Array.isArray(um)) {
            Mk = null;
            if ("enter" == Km) {
              Xn = on.exit;
              if (Xn) {
                Yn = Xn.keyframes;
                if (Yn) {
                  gn = Yn[Il];
                  if (null != gn) {
                    if (Array.isArray(gn)) {
                      Nk = gn[gn.length - 1];
                      kn = Nk;
                    } else kn = gn;
                    ol = kn;
                  } else ol = Mk;
                  pl = ol;
                } else pl = Mk;
                ql = pl;
              } else ql = Mk;
              rl = ql;
            } else rl = Mk;
            if (null == rl) {
              Bn = "opacity" == Il;
              if (!Bn) {
                if ("new" == Xl) Ln = vn;
                else Ln = yn;
                Mn = Ln;
              } else Mn = Bn;
              if (Mn) {
                if ("new" == Xl) {
                  Cn = "opacity" == Il;
                  Dn = Cn;
                } else Dn = false;
                if (Dn) ll = 0;
                else {
                  if ("new" == Xl) {
                    En = "scale" == Il;
                    Fn = En;
                  } else Fn = false;
                  if (Fn) kl = 0.85;
                  else {
                    if ("old" == Xl) {
                      Gn = "opacity" == Il;
                      Hn = Gn;
                    } else Hn = false;
                    if (Hn) jl = 1;
                    else {
                      if ("old" == Xl) {
                        In = "scale" == Il;
                        Jn = In;
                      } else Jn = false;
                      if (Jn) il = 1;
                      else il = rl;
                      jl = il;
                    }
                    kl = jl;
                  }
                  ll = kl;
                }
                ml = ll;
              } else ml = rl;
              nl = ml;
            } else nl = rl;
            if (null != nl) {
              vm = [nl, um];
              Fm = vm;
            } else Fm = um;
            Gm = Fm;
          } else Gm = um;
          Ok = $l.delay;
          if (isFunction(Ok)) $l.delay = callFn2(Ok, Pn[0] | 0, Pn[1] | 0);
          Pk = $l.duration;
          if ("number" == typeof Pk) $l.duration = e(Pk);
          Qk = $l.delay;
          if ("number" == typeof Qk) $l.delay = e(Qk);
          Rk = {
            __proto__: null
          };
          for (Kn in $l) Rk[Kn] = $l[Kn];
          Rk.element = documentElement();
          Rk.name = Il;
          Rk.pseudoElement = `::view-transition-${Xl}(${Rm})`;
          Rk.keyframes = Gm;
          wm = new $m118$NativeAnimation(Rk);
          nn.push(wm);
          Nn.add(`${Rm}:${Xl}`);
          if ("opacity" == Il) sn.add(`${Rm}:${Xl}`);
        }
      }
    }
    for (Vm = vh(), Tm = 0; Tm < Vm.length; Tm = Tm + 1) {
      Jl = Vm[Tm];
      if ("finished" == Jl.playState) continue;
      Yl = Jl.effect;
      if (!Yl) continue;
      Sk = Yl.pseudoElement;
      if (!("string" == typeof Sk)) continue;
      Tk = uh(`${Sk}`);
      if (Tk) {
        Uk = Tk;
        if (Nn.has(`${Uk.layer}:${Uk.type}`)) {
          if (sn.has(`${Uk.layer}:new`)) {
            am = sn.has(`${Uk.layer}:old`);
            bm = am;
          } else bm = false;
          if (bm) {
            xm = isFunction(Yl.getKeyframes);
            ym = xm;
          } else ym = false;
          if (ym) {
            Zl = callMethod0(Yl, "getKeyframes");
            if (Array.isArray(Zl)) {
              tl = false;
              Hm = 0;
              while (Hm < Zl.length) {
                Lm = Zl[Hm];
                if (Lm.mixBlendMode) sl = true;
                else sl = tl;
                tl = sl;
                Hm = Hm + 1 | 0;
              }
              ul = tl;
            } else ul = false;
            vl = ul;
          } else vl = false;
          if (bm) Vk = vl;
          else Vk = false;
          if (Vk) {
            Wk = new $m147$NativeAnimationWrapper(Jl);
            nn.push(Wk);
          } else callMethod0(Jl, "cancel");
          continue;
        }
        cm = null;
        if ("old" == Uk.type) sm = "new";
        else {
          if ("new" == Uk.type) rm = "old";
          else rm = cm;
          sm = rm;
        }
        if (null != sm) {
          dm = `${Uk.layer}:${sm}`;
          if (Nn.has(dm)) {
            em = !sn.has(dm);
            fm = em;
          } else fm = false;
          if (fm) {
            callMethod0(Jl, "cancel");
            continue;
          }
        }
        zm = vk[9].get(Uk.layer);
        if ("old" == Uk.type) hm = true;
        else {
          gm = "new" == Uk.type;
          hm = gm;
        }
        if (hm) {
          im = !!zm;
          jm = im;
        } else jm = false;
        if (jm) {
          km = !!zm.oldPos;
          lm = km;
        } else lm = false;
        if (lm) {
          mm = !!zm.newPos;
          nm = mm;
        } else nm = false;
        if (Uk.type.startsWith("group")) {
          om = $d(vk, Uk.layer);
          Am = om.duration;
          if ("number" == typeof Am) Im = Am;
          else Im = 0;
          Xk = om.delay;
          Mm = om.duration;
          Yk = {
            __proto__: null,
            delay: Xk,
            duration: Mm,
            easing: f(om.ease, Im)
          };
          wl = Yk;
        } else {
          Bm = Uk.type;
          if (nm) Jm = "group";
          else Jm = Bm;
          hn = mc(vk, Uk.layer, Jm);
          if ("group" == Jm) qn = "layout";
          else qn = lk;
          Nm = hn[0] | 0;
          if (Nm == -1) Qm = 0;
          else Qm = Nm;
          Cm = _d(vk, vk[5].get(Uk.layer) ?? null, Jm, qn, Qm, hn[1] | 0);
          Om = Cm.visualDuration;
          pn = Cm.duration;
          if ("number" == typeof pn) Cm.duration = e(pn);
          Dm = Xd(Cm);
          Zk = Dm.delay;
          if (null != Zk) {
            jn = e(Zk);
            ln = jn;
          } else ln = 0;
          if (nm) {
            _k = "number" == typeof Om;
            $k = _k;
          } else $k = false;
          if ($k) {
            al = e(Om);
            yl = al;
          } else {
            bl = Dm.duration;
            if (null != bl) xl = bl;
            else xl = 0;
            yl = xl;
          }
          if (!nm) {
            pm = f(Dm.ease, yl);
            tm = pm;
          } else tm = "linear";
          cl = {
            __proto__: null,
            delay: ln,
            duration: yl,
            easing: tm
          };
          wl = cl;
        }
        if (isFunction(Yl.updateTiming)) callMethod1(Yl, "updateTiming", wl);
        dl = new $m147$NativeAnimationWrapper(Jl);
        nn.push(dl);
      }
    }
    for (mn = 0; mn < vk[13].length; mn = mn + 1) {
      Pm = vk[13][mn] || "";
      if (vk[7].has(Pm)) {
        el = vk[12].get(Pm);
        if (el) {
          for (tn = el, Sm = $d(vk, Pm), rn = 0; rn < A.length; rn = rn + 1) {
            _l = A[rn] || "";
            fl = "0px";
            qm = tn.oldBox;
            Em = tn.newBox;
            if (qm) {
              Kl = qm.radii[_l];
              if (Kl !== void 0) {
                if (Kl != lk) Vl = Kl;
                else Vl = fl;
                Wl = Vl;
              } else Wl = fl;
              if ("0px" == Wl) {
                Wm = !!Em;
                Xm = Wm;
              } else Xm = false;
              if (Xm) {
                Ym = Em.radii[_l];
                if (Ym !== void 0) {
                  if (Ym != lk) Sl = Ym;
                  else Sl = Wl;
                  Tl = Sl;
                } else Tl = Wl;
                Ul = Tl;
              } else Ul = Wl;
              Rl = Ul;
            } else {
              if (Em) {
                Ll = Em.radii[_l];
                if (Ll !== void 0) {
                  if (Ll != lk) Ol = Ll;
                  else Ol = fl;
                  Pl = Ol;
                } else Pl = fl;
                Ql = Pl;
              } else Ql = fl;
              Rl = Ql;
            }
            if (Em) {
              Zm = Em.radii[_l];
              if (Zm !== void 0) {
                if (Zm != lk) Gl = Zm;
                else Gl = fl;
                Hl = Gl;
              } else Hl = fl;
              if ("0px" == Hl) {
                _m = !!qm;
                $m = _m;
              } else $m = false;
              if ($m) {
                an = qm.radii[_l];
                if (an !== void 0) {
                  if (an != lk) Dl = an;
                  else Dl = Hl;
                  El = Dl;
                } else El = Hl;
                Fl = El;
              } else Fl = Hl;
              Cl = Fl;
            } else {
              if (qm) {
                bn = qm.radii[_l];
                if (bn !== void 0) {
                  if (bn != lk) zl = bn;
                  else zl = fl;
                  Al = zl;
                } else Al = fl;
                Bl = Al;
              } else Bl = fl;
              Cl = Bl;
            }
            if (b(Rl)) {
              cn = b(Cl);
              dn = cn;
            } else dn = false;
            if (!dn) {
              en = documentElement();
              wn = `::view-transition-group(${Pm})`;
              gl = [Rl, Cl];
              Ml = Sm.delay;
              zn = Sm.duration;
              hl = {
                __proto__: null,
                element: en,
                name: _l,
                pseudoElement: wn,
                keyframes: gl,
                delay: Ml,
                duration: zn,
                ease: Sm.ease
              };
              Nl = new $m118$NativeAnimation(hl);
              nn.push(Nl);
            }
          }
        }
      }
    }
    return nn;
  };
})();
let $d = (vk, xk) => {
  var Fk = mc(vk, xk, "group"), Ck = 0 + (Fk[0] | 0), Gk = 0 + (Fk[1] | 0);
  if (Ck == -1) {
    var yk, Dk, wk, zk, Ak, Bk, Ek = 0;
  } else Ek = Ck;
  yk = _d(vk, vk[5].get(xk) ?? null, "group", "layout", Ek, Gk);
  Dk = yk.duration;
  if ("number" == typeof Dk) yk.duration = e(Dk);
  wk = Xd(yk);
  zk = wk.delay;
  if (null != zk) {
    Ak = e(zk);
    Bk = Ak;
  } else Bk = 0;
  return {
    __proto__: null,
    delay: Bk,
    duration: wk.duration,
    ease: wk.ease
  };
};
export {
  $d,
  _d,
  zh
};
