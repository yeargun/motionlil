import { callFn2, isFunction } from "./../motion-dom/dom-host.js";
import { stringSubstring } from "./../motion-dom/string-host.js";
import { k } from "./part-120.js";
import { oa } from "./part-38.js";
import { g } from "./part-39.js";
import { wc } from "./part-405.js";
import { Ne } from "./part-406.js";
import { Oe } from "./part-407.js";
import { Pb } from "./part-42.js";
import { Pf } from "./part-43.js";
import { va } from "./part-465.js";
import { ab } from "./part-54.js";
import { dd } from "./part-69.js";
var Pe = /* @__PURE__ */ (function() {
  let a = (vk, wk) => {
    if (vk.at == wk.at) {
      if (!vk.value) return 1;
      if (!wk.value) return -1;
      return 0;
    }
    if (vk.at < wk.at) return -1;
    if (vk.at > wk.at) return 1;
    return 0;
  }, b = (vk, yk, Ak, Bk) => {
    if ("number" == typeof yk) return yk;
    if (!("string" == typeof yk)) return vk;
    if (yk.startsWith("-")) {
      var Ck, wk, xk, zk, Dk = true;
    } else {
      Ck = yk.startsWith("+");
      Dk = Ck;
    }
    if (Dk) {
      wk = vk + parseFloat(yk);
      if (wk < 0) return 0;
      return wk;
    }
    if ("<" == yk) return Ak;
    if (yk.startsWith("<")) {
      xk = Ak + parseFloat(stringSubstring(yk, 1, 2147483647));
      if (xk < 0) return 0;
      return xk;
    }
    zk = Bk.get(yk);
    if (zk !== void 0) return zk;
    return vk;
  }, c = (vk) => {
    var yk, zk, Ak, wk, xk = 1;
    for (; xk < vk.length; xk = xk + 1) {
      for (yk = vk[xk], wk = xk - 1; ; ) {
        if (wk >= 0) {
          zk = a(vk[wk], yk) > 0;
          Ak = zk;
        } else Ak = false;
        if (!Ak) {
          break;
        }
        vk[wk + 1] = vk[wk];
        wk -= 1;
      }
      vk[wk + 1] = yk;
    }
  }, d = (vk) => {
    if (Array.isArray(vk)) {
      var xk = [], yk = vk.length | 0, wk = 0;
      for (; wk < yk; wk = wk + 1) xk.push(vk[wk]);
      return xk;
    }
    return [vk];
  }, e = (vk, wk, xk) => {
    var yk = wk.get(vk);
    if (yk) return yk;
    var zk = {
      entries: /* @__PURE__ */ new Map(),
      keys: []
    };
    zk.entries = /* @__PURE__ */ new Map();
    zk.keys = [];
    wk.set(vk, zk);
    xk.push(vk);
    return zk;
  }, f = (vk, Ak) => {
    var Ck = {
      __proto__: null
    };
    if (null == vk) return Ck;
    var wk = vk;
    if ("object" == typeof wk) {
      for (var Dk in wk) Ck[Dk] = wk[Dk];
      var Bk = wk[Ak];
      if (Bk) {
        var zk, xk = "object" == typeof Bk, yk = xk;
      } else yk = false;
      if (yk) for (zk in Bk) Ck[zk] = Bk[zk];
    }
    return Ck;
  }, h = (vk, zk, Hk, Ik, cl, ol, rl, wl, El) => {
    var wk = d(vk), Il = zk.delay;
    if ("number" == typeof Il) {
      var Jl, Jk, Fl, dl, el, Gl, Vl, Nl, Ol, Kk, Wl, Lk, am, Mk, Nk, xl, fl, gl, fm, gm, hm, im, jm, km, lm, mm, nm, om, pm, qm, rm, sm, tm, um, vm, Ak, Bk, Ck, xk, pl, Dk, yl, hl, ym, Ek, bm, Pl, cm, dm, wm, Ok, Pk, Xl, Qk, Rk, Sk, Tk, xm, ql, yk, Kl, Ll, Hl, il, Ql, Yl, em, Fk, Gk, Uk, Vk, zl, sl, tl, ul, Al, Rl, jl, Zl, Sl, Wk, Xk, _l, kl, Tl, Yk, Zk, vl, _k, Bl, Ul, $l, ll, $k, ml, Cl, Dl, al, nl, bl, Ml = Il;
    } else {
      if (isFunction(Il)) {
        Jl = callFn2(Il, Ik, cl);
        if ("number" == typeof Jl) Kl = Jl;
        else Kl = 0;
        Ll = Kl;
      } else Ll = 0;
      Ml = Ll;
    }
    Jk = zk.times;
    Fl = Pf(wk);
    if (Jk) {
      dl = Array.isArray(Jk);
      el = dl;
    } else el = false;
    if (el) {
      for (Gl = [], Vl = Jk.length | 0, il = 0; il < Vl; il = il + 1) {
        Nl = Jk[il];
        if ("number" == typeof Nl) Gl.push(Nl);
      }
      Hl = Gl;
    } else Hl = Fl;
    Ol = zk.repeat;
    Kk = null;
    if ("number" == typeof Ol) Ql = Ol;
    else Ql = Kk;
    Wl = zk.repeatType;
    Lk = null;
    if ("string" == typeof Wl) Yl = Wl;
    else Yl = Lk;
    am = zk.repeatDelay;
    if ("number" == typeof am) em = am;
    else em = 0;
    Mk = zk.ease;
    if (!Mk) {
      Nk = wl.ease;
      if (!Nk) Uk = "easeOut";
      else Uk = Nk;
      Vk = Uk;
    } else Vk = Mk;
    xl = null;
    fl = zk.duration;
    if ("number" == typeof fl) zl = fl;
    else zl = xl;
    if ("object" == typeof zk) {
      for (gl in zk) {
        if ("delay" != gl) {
          fm = "times" != gl;
          gm = fm;
        } else gm = false;
        if (gm) {
          hm = "type" != gl;
          im = hm;
        } else im = false;
        if (im) {
          jm = "repeat" != gl;
          km = jm;
        } else km = false;
        if (km) {
          lm = "repeatType" != gl;
          mm = lm;
        } else mm = false;
        if (mm) {
          nm = "repeatDelay" != gl;
          om = nm;
        } else om = false;
        if (om) {
          pm = "ease" != gl;
          qm = pm;
        } else qm = false;
        if (qm) {
          rm = "duration" != gl;
          sm = rm;
        } else sm = false;
        if (sm) {
          tm = "at" != gl;
          um = tm;
        } else um = false;
        if (um) zk[gl];
      }
    }
    if (null != zl) ul = zl;
    else ul = rl;
    vm = ol + Ml;
    if (1 == Hl.length) {
      Ak = 0 == Hl[0];
      Bk = Ak;
    } else Bk = false;
    if (Bk) Hl.push(1);
    Ck = Hl.length - wk.length;
    if (Ck > 0) Pb(Hl, Ck);
    if (1 == wk.length) {
      xk = [null, ...wk];
      yk = xk;
    } else yk = wk;
    if (null != Ql) {
      pl = Ql;
      Dk = pl < 20;
      va(Dk, `Sequence segments can't repeat ${pl} times \u2014 ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`, null);
      if (Dk) {
        if (ul > 0) {
          yl = em / ul;
          Al = yl;
        } else Al = 0;
        vl = ul * (pl + 1) + em * pl;
        hl = [...yk];
        ym = [...Hl];
        Ek = [];
        if (Array.isArray(Vk)) for (bm = Vk.length | 0, Rl = 0; Rl < bm; Rl = Rl + 1) Ek.push(Vk[Rl]);
        else Ek.push(Vk);
        Pl = [...Ek];
        if ("reverse" == Yl) dm = true;
        else {
          cm = "mirror" == Yl;
          dm = cm;
        }
        if (dm) {
          wm = [];
          Ok = hl.length - 1;
          Wk = Ok;
          while (Wk >= 0) {
            wm.push(hl[Wk]);
            Pk = Wk - 1;
            Wk = Pk;
          }
          if ("reverse" == Yl) {
            Xl = [];
            Qk = Pl.length - 1;
            Xk = Qk;
            while (Xk >= 0) {
              Xl.push(Pl[Xk]);
              Rk = Xk - 1;
              Xk = Rk;
            }
            Zl = Xl;
          } else Zl = Pl;
          jl = wm;
          Sl = Zl;
        } else {
          jl = hl;
          Sl = Pl;
        }
        for (_l = 0; _l < pl; _l = _l + 1) {
          if (dm) {
            Sk = 0 == (_l | 0) % 2;
            Tk = Sk;
          } else Tk = false;
          if (Tk) {
            kl = jl;
            Tl = Sl;
          } else {
            kl = hl;
            Tl = Pl;
          }
          xm = (_l + 1) * (1 + Al);
          if (Al > 0) {
            yk.push(yk[yk.length - 1]);
            Hl.push(xm);
            Ek.push("linear");
          }
          for (Yk = 0; Yk < kl.length; Yk = Yk + 1) yk.push(kl[Yk]);
          for (Zk = 0; Zk < kl.length; Zk = Zk + 1) {
            Hl.push(ym[Zk] + xm);
            if (0 == Zk) Ek.push("linear");
            else Ek.push(dd(Tl, Zk - 1));
          }
        }
        for (nl = pl + 1 + pl * Al, bl = 0; bl < Hl.length; bl = bl + 1) Hl[bl] = Hl[bl] / nl;
        Fk = Ek;
        sl = vl;
      } else {
        Fk = Vk;
        sl = ul;
      }
      Gk = Fk;
      tl = sl;
    } else {
      Gk = Vk;
      tl = ul;
    }
    for (ql = vm + tl, $k = 0; $k < Hk.length; $k = al + 1) {
      ml = Hk[$k];
      if (ml.at > vm) {
        Cl = ml.at < ql;
        Dl = Cl;
      } else Dl = false;
      if (Dl) {
        ab(Hk, ml);
        al = $k - 1;
      } else al = $k;
    }
    for (_k = 0; _k < yk.length; _k = _k + 1) {
      Bl = /* @__PURE__ */ g(vm, ql, Hl[_k]);
      Ul = yk[_k];
      $l = dd(Gk, _k);
      ll = {
        value: null,
        at: 0,
        easing: null
      };
      ll.value = Ul;
      ll.at = Bl;
      ll.easing = $l;
      Hk.push(ll);
    }
    El(Ml, tl, ql);
  };
  return function(vk, Jk, Vk) {
    var ql = {
      __proto__: null
    }, Kl = {
      __proto__: null
    };
    if (null != Jk) {
      var Kk = Jk;
      if ("object" == typeof Kk) {
        for (var _k in Kk) {
          if ("defaultTransition" == _k) {
            var $k = Kk[_k];
            if ($k) {
              var il, Cl, Ll, Ml, Fl, Vl, Gl, ol, Xl, al, jl, rl, Nl, kl, Il, sl, ll, tl, bl, cl, Ql, dl, Lk, pl, ul, Ol, Rl, wl, xl, yl, Mk, zl, wk, Dl, Hl, xk, Jl, Nk, el, Wk, vl, yk, zk, Ak, am, Xk, Bk, Ck, Dk, Ek, Wl, Pl, Yl, Fk, Gk, _l, bm, cm, Yk, El, Al, Bl, Ok, Pk, Qk, Zl, Tl, ml, fl, Sl, Ul, Rk, nl, Zk, Hk, Ik, Sk, Tk, Uk, $l, gl = "object" == typeof $k, hl = gl;
            } else hl = false;
            if (hl) for (il in $k) ql[il] = $k[il];
          } else Kl[_k] = Kk[_k];
        }
      }
    }
    Cl = ql.duration ?? null;
    if ("number" == typeof Cl) El = Cl;
    else El = 0.3;
    Ll = /* @__PURE__ */ new Map();
    Ml = /* @__PURE__ */ new Map();
    Fl = [];
    Vl = {
      entries: /* @__PURE__ */ new Map()
    };
    Vl.entries = /* @__PURE__ */ new Map();
    Gl = /* @__PURE__ */ new Map();
    ol = [0, 0];
    ol[0] = 0;
    ol[1] = 0;
    if (Array.isArray(vk)) {
      Xl = vk.length | 0;
      Zl = Xl;
    } else Zl = 0;
    for (Bl = 0, Pk = 0, Tl = 0; Tl < Zl; ) {
      al = vk[Tl];
      if ("string" == typeof al) {
        Gl.set(al, Pk);
        Al = Bl;
        Ok = Pk;
        Bl = Al;
        Pk = Ok;
        Tl += 1;
        continue;
      }
      if (!Array.isArray(al)) {
        if ("object" == typeof al) {
          jl = al.name;
          rl = al.at;
          if ("string" == typeof jl) Gl.set(jl, b(Pk, rl, Bl, Gl));
        }
        Al = Bl;
        Ok = Pk;
        Bl = Al;
        Pk = Ok;
        Tl += 1;
        continue;
      }
      Nl = al[0];
      kl = null;
      Il = {
        __proto__: null
      };
      sl = al.length | 0;
      if (sl > 1) {
        ll = al[1];
        ml = ll;
      } else ml = kl;
      if (sl > 2) {
        tl = al[2];
        if (tl) {
          bl = "object" == typeof tl;
          cl = bl;
        } else cl = false;
        if (cl) for (Ql in tl) Il[Ql] = tl[Ql];
      }
      dl = Il.at ?? null;
      if (dl) {
        Lk = b(Pk, dl, Bl, Gl);
        Qk = Lk;
      } else Qk = Pk;
      pl = [0, 0];
      pl[0] = 0;
      pl[1] = ol[1];
      if (k(Nl)) h(ml, Il, Ne(e(Nl, Ml, Fl), "default"), 0, 0, Qk, El, ql, /* @__PURE__ */ ((Ap) => (Bp, Cp, Dp) => {
        Oe(Ap, Bp, Cp, Dp);
      })(pl));
      else {
        for (ul = wc(Nl, ml, Vk, Vl), Ol = ul.length, fl = 0; fl < Ol; fl = fl + 1) {
          Rl = e(ul[fl], Ml, Fl);
          if (ml) {
            wl = "object" == typeof ml;
            xl = wl;
          } else xl = false;
          if (xl) {
            for (yl in ml) {
              $l = Ne(Rl, yl);
              h(ml[yl], f(Il, yl), $l, fl, Ol, Qk, El, ql, /* @__PURE__ */ ((Ap) => (Bp, Cp, Dp) => {
                Oe(Ap, Bp, Cp, Dp);
              })(pl));
            }
          }
        }
      }
      if (pl[1] > ol[1]) ol[1] = pl[1];
      Mk = Qk + pl[0];
      Al = Qk;
      Ok = Mk;
      Bl = Al;
      Pk = Ok;
      Tl += 1;
    }
    for (Sl = 0; Sl < Fl.length; Sl = Sl + 1) {
      zl = Fl[Sl];
      wk = Ml.get(zl);
      if (wk) {
        for (Dl = wk, Ul = 0; Ul < Dl.keys.length; Ul = Ul + 1) {
          Hl = Dl.keys[Ul] || "";
          xk = Dl.entries.get(Hl);
          if (xk) {
            Jl = xk;
            c(Jl);
            for (Nk = [], el = [], Wk = [], Hk = 0; Hk < Jl.length; Hk = Hk + 1) {
              vl = Jl[Hk];
              Nk.push(vl.value);
              el.push(/* @__PURE__ */ oa(0, ol[1], vl.at));
              if (null != vl.easing) Wk.push(vl.easing);
              else Wk.push("easeOut");
            }
            if (el.length > 0) {
              yk = 0 != el[0];
              zk = yk;
            } else zk = false;
            if (zk) {
              Ak = [0, ...el];
              am = [Nk[0], ...Nk];
              Xk = ["easeInOut", ...Wk];
              Rk = am;
              nl = Ak;
              Zk = Xk;
            } else {
              Rk = Nk;
              nl = el;
              Zk = Wk;
            }
            if (nl.length > 0) {
              Bk = 1 != nl[nl.length - 1];
              Ck = Bk;
            } else Ck = false;
            if (Ck) {
              nl.push(1);
              Rk.push(null);
            }
            Dk = Ll.get(zl) ?? null;
            if (!Dk) {
              var Dn = {
                __proto__: null
              }, En = {
                __proto__: null
              };
              Ek = {
                keyframes: null,
                transition: null
              };
              Ek.keyframes = Dn;
              Ek.transition = En;
              Ll.set(zl, Ek);
              Ik = Ek;
            } else Ik = Dk;
            if (Ik) {
              Wl = Ik;
              Wl.keyframes[Hl] = Rk;
              for (Pl = {
                __proto__: null
              }, Yl = Object.keys(ql), Sk = 0; Sk < Yl.length; Sk = Sk + 1) {
                Fk = Yl[Sk] || "";
                if ("type" != Fk) Pl[Fk] = ql[Fk] ?? null;
              }
              for (Gk = {
                __proto__: null
              }, _l = Object.keys(Pl), Tk = 0; Tk < _l.length; Tk = Tk + 1) {
                bm = _l[Tk] || "";
                Gk[bm] = Pl[bm] ?? null;
              }
              Gk.duration = ol[1];
              Gk.ease = Zk;
              Gk.times = nl;
              for (cm = Object.keys(Kl), Uk = 0; Uk < cm.length; Uk = Uk + 1) {
                Yk = cm[Uk] || "";
                Gk[Yk] = Kl[Yk] ?? null;
              }
              Wl.transition[Hl] = Gk;
            }
          }
        }
      }
    }
    return Ll;
  };
})();
export {
  Pe
};
