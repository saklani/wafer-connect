import coinbaseWallet from "./icons/coinbaseWallet.webp";
import injected from "./icons/injected.webp";
import metaMask from "./icons/metaMask.webp";
import walletConnect from "./icons/walletConnect.webp";

import { InjectedConnector } from "@wagmi/core";
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

/** @param {{appName: string; projectId: string; chains: import( "@wagmi/core").Chain[];}} param */
function getDefaultConnectors({ appName, projectId, chains }) {
  const connectors = [
    new InjectedConnector({ chains }),
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ options: { appName }, chains }),
    new WalletConnectConnector({ options: { projectId }, chains }),
  ];
  /** @type {{connectors: import("@wagmi/connectors").Connector<any, any>[]}} */
  return { connectors };
}

/** @type {{id: string;}} param */
function getIconFromId({ id }) {
  return { "coinbaseWallet": coinbaseWallet, "injected": injected, "metaMask": metaMask, "walletConnect": walletConnect }[id];
}



export { getDefaultConnectors, getIconFromId };
