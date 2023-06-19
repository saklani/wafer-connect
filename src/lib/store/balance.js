import { fetchBalance } from "@wagmi/core";
import { writable } from "svelte/store";

function createStore() {
  const init = {
    decimals: 0,
    formatted: "0",
    symbol: "",
    value: 0n,
  };
  const { subscribe, set } = writable(init);
  return { subscribe, reset: ({address, chainId}) => set(fetchBalance({ address, chainId })) }
}

/**
 * Balance store
 */
export const balance = createStore();
