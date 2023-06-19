import { getNetwork } from "@wagmi/core";
import { writable } from "svelte/store";

/**
 * Network store
 */
function createStore() {
  /** @type {{chain?: import("@wagmi/core").Chain & {unsupported?: boolean;}; chains: import("@wagmi/core").Chain[];}} */
  const init = {
    chain: undefined,
    chains: [],
  };
  const { set, subscribe } = writable(init);
  return {
    subscribe: subscribe,
    reset: () => set(getNetwork()),
  };
}
export const network = createStore();
