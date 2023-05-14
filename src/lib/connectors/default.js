import { Coinbase } from "./coinbase/coinbase.js";
import { Injected } from "./injected/injected.js";
import { MetaMask } from "./metamask/metamask.js";
import { WalletConnect } from "./walletConnect/walletConnect.js";

/** @param {{appName: string; projectId: string; chains: import( "@wagmi/core").Chain[];}} param */
function getDefaultConnectors({ appName, projectId, chains }) {
  const wallets = [Injected, MetaMask, Coinbase, WalletConnect];
  const connectors = [
    wallets[0].createConnector({ chains }),
    wallets[1].createConnector({ chains }),
    wallets[2].createConnector({ appName, chains }),
    wallets[3].createConnector({ projectId, chains }),
  ];
  /** @type {{connectors: import("@wagmi/connectors").Connector<any, any>[]}} */
  return { connectors, wallets };
}

export { getDefaultConnectors };
