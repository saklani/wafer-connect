import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import metamask from "./metamask.webp";

/** @param {{chains: import( "@wagmi/core").Chain[];}} param */
function createConnector({ chains }) {
	return new MetaMaskConnector({
		chains,
		options: {
			UNSTABLE_shimOnConnectSelectAccount: true,
		},
	});
}

/**
 * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}}
 */
const MetaMask = {
  id: "metamask",
	name: "MetaMask",
	icon: metamask,
	url: "https://metamask.io/download",
	createConnector: createConnector,
};

export { MetaMask };
