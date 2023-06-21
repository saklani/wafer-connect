import { writable } from "svelte/store";

/** @type {{chain?: import("@wagmi/core").Chain & {unsupported?: boolean;}; chains: import("@wagmi/core").Chain[];}} */
const init = {
  chain: undefined,
  chains: [],
};
const { set, subscribe } = writable(init);

export const network = {
  subscribe,
  set
};
