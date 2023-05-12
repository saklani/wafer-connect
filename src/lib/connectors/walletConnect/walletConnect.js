import walletConnect from "./walletConnect.webp";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

/** @param {{projectId: string; chains: import( "@wagmi/core").Chain[];}} param */
function createConnector({ projectId, chains }) {
	return new WalletConnectConnector({
		chains,
		options: {
			projectId,
		},
	});
}
/**
 * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}}
 */
const WalletConnect = {
	id: "walletconnect",
	name: "WalletConnect",
	icon: walletConnect,
	url: "https://walletconnect.com/",
	createConnector: createConnector,
};

export { WalletConnect };
