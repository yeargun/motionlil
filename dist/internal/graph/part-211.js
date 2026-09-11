import { bh } from "./part-210.js";
import { lk } from "./part-5.js";
import { p } from "./part-521.js";
let ch = (vk) => {
  var hl, gl, Jk, Kk, Lk, Mk, Nk, Ak, Ok, wk, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Yk, Zk, _k, $k, Pk, Qk, Rk, Sk, xk, yk, Tk, bl, cl, dl, el, Uk, Vk, zk, Wk, fl, Xk, Ik = lk, al = true, il = 0;
  for (; il < p.length; ) {
    hl = p[il] || "";
    gl = vk.latest[hl] ?? null;
    if (null == gl) {
      Hk = Ik;
      $k = al;
      Ik = Hk;
      al = $k;
      il += 1;
      continue;
    }
    if ("number" == typeof gl) {
      if (hl.startsWith("scale")) {
        Jk = 1 == gl;
        Sk = Jk;
      } else {
        Kk = 0 == gl;
        Sk = Kk;
      }
      Rk = Sk;
    } else {
      if ("string" == typeof gl) {
        Lk = parseFloat(gl);
        if (hl.startsWith("scale")) {
          Mk = 1 == Lk;
          Pk = Mk;
        } else {
          Nk = 0 == Lk;
          Pk = Nk;
        }
        Qk = Pk;
      } else Qk = true;
      Rk = Qk;
    }
    if (!Rk) {
      Ak = Ik + `${bh(hl)}(${gl}) `;
      Gk = Ak;
      _k = false;
    } else {
      Gk = Ik;
      _k = al;
    }
    Hk = Gk;
    $k = _k;
    Ik = Hk;
    al = $k;
    il += 1;
  }
  Ok = vk.latest.pathRotation ?? null;
  if (null != Ok) {
    wk = Ok;
    if (wk) {
      if ("number" == typeof wk) {
        Bk = Ik + `rotate(${wk}deg) `;
        Dk = Bk;
      } else {
        Ck = Ik + `rotate(${wk}) `;
        Dk = Ck;
      }
      Ek = Dk;
      Yk = false;
    } else {
      Ek = Ik;
      Yk = al;
    }
    Fk = Ek;
    Zk = Yk;
  } else {
    Fk = Ik;
    Zk = al;
  }
  if (Zk) return "none";
  for (xk = Fk.length, yk = xk; yk > 0; ) {
    Tk = Fk.charCodeAt(yk - 1) | 0;
    if (32 == Tk) cl = true;
    else {
      bl = 9 == Tk;
      cl = bl;
    }
    if (cl) el = true;
    else {
      dl = 10 == Tk;
      el = dl;
    }
    if (el) Vk = true;
    else {
      Uk = 13 == Tk;
      Vk = Uk;
    }
    if (Vk) zk = yk - 1;
    else break;
    yk = zk;
  }
  for (Wk = lk, fl = 0; fl < yk; ) {
    Xk = Wk + Fk.charAt(fl);
    Wk = Xk;
    fl += 1;
  }
  return Wk;
};
export {
  ch
};
