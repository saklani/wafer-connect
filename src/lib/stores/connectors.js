import { writable } from "svelte/store";

function createConnectors() {

  /**
   * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}[]}
   */
  const wallets = [];

  /** @type {import("@wagmi/core/connectors").Connector[]}*/
  const wagmiConnectors = [];

  const { set, subscribe } = writable({ wagmiConnectors, wallets });
  return {
    subscribe: subscribe,
    /** @param {{wagmiConnectors: import("@wagmi/core/connectors").Connector[], wallets: {id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}[]}} param*/
    set: ({ wagmiConnectors, wallets }) => set({ wagmiConnectors, wallets }),
  };
}
export const connectors = createConnectors();
