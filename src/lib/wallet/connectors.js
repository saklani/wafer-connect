import { InjectedConnector } from "@wagmi/core/connectors";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

/** @param {{projectId: string; chains: import( "@wagmi/core").Chain[];}} param */
function getDefaultConnectors({ projectId, chains }) {
	/** @type {import( "@wagmi/connectors").Connector} */
	const connectors = [
		new InjectedConnector({
			chains,
		}),
		new MetaMaskConnector({
			chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
		}),
		new WalletConnectConnector({
			chains,
			options: {
				projectId,
			},
		}),
	];
	return { connectors };
}

export { getDefaultConnectors };
