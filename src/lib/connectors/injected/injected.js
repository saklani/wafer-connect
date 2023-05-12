import { InjectedConnector } from "@wagmi/core/connectors";
import injected from "./injected.webp";

/** @param {{chains: import( "@wagmi/core").Chain[];}} param */
function createConnector({ chains }) {
	return new InjectedConnector({chains});
}

/**
 * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}}
 */
const Injected = {
	id: "injected",
	name: "Injected Wallet",
	icon: injected,
	url: "https://ethereum.org/wallets/",
	createConnector: createConnector,
};

export { Injected };
