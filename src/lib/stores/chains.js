import { watchAccount, watchNetwork } from "@wagmi/core";
import { writable } from "svelte/store";
import { account } from "./account.js";
import { network } from "./network.js";

function chainsStore() {
  const { subscribe, set } = writable({});
  return {
    subscribe,
    set: (chains) => {
      set(chains);
      account.reset();
      network.reset();
      watchAccount(() => account.reset());
      watchNetwork(() => network.reset());
    },
  };
}

export const chains = chainsStore();
