import { getNetwork } from "@wagmi/core";
import { writable } from "svelte/store";

/**
 * Network store
 */
function createNetwork() {
  /** @type {{chain?: import("@wagmi/core").Chain & {unsupported?: boolean;}; chains: import("@wagmi/core").Chain[];}} */
  const init = {
    chain: undefined,
    chains: [],
  };
  const { set, subscribe } = writable(init);
  return {
    subscribe: subscribe,
    reset: function () {
      return set(getNetwork());
    },
  };
}
export const network = createNetwork();
