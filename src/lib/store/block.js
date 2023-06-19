import { fetchBlockNumber } from "@wagmi/core";
import { writable } from "svelte/store";

function createStore() {
  const { subscribe, set } = writable(-1);
  return { subscribe, reset: (/** @type {bigint} */ chainId) => set(fetchBlockNumber({ chainId })) }
}

/**
 * Block store
 */
export const block = createStore();
