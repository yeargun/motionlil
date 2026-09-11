function ig(vk, wk, xk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk) {
  vk[5] = wk;
  vk[3] = xk;
  vk[4] = Ak;
  vk[6] = Bk;
  vk[7] = Ck;
  vk[8] = Dk;
  vk[9] = Ek;
  vk[10] = Fk;
  vk[11] = Gk;
  vk[12] = Hk;
  let yk = null;
  vk[0] = yk;
  vk[1] = yk;
  vk[2] = false;
  let zk = {
    done: false,
    value: 0
  };
  zk.done = false;
  zk.value = wk;
  vk[13] = zk;
}
export {
  ig
};
