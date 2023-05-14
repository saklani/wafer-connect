import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import coinbase from "./coinbase.webp";

/** @param {{appName: string; chains: import( "@wagmi/core").Chain[];}} param */
function createConnector({ appName, chains }) {
  return new CoinbaseWalletConnector({
    chains,
    options: {
      appName,
    },
  });
}

/**
 * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}}
 */
const Coinbase = {
  id: "coinbase",
  name: "Coinbase",
  icon: coinbase,
  url: "https://www.coinbase.com/wallet",
  createConnector: createConnector,
};

export { Coinbase };
