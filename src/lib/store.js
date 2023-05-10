import {
	fetchBalance,
	getAccount,
	getNetwork,
	watchAccount,
	watchNetwork,
} from "@wagmi/core";
import { derived, writable } from "svelte/store";

/**
 * Account store
 * @param {{address: `0x${string}` | undefined;	isConnected: boolean; isConnecting: boolean; isDisconnected: boolean; isReconnecting: boolean;status: "connected" | "reconnecting" | "connecting" | "disconnected";}} param
 */
function createAccount(param) {
	const { set, subscribe } = writable(param);
	return { subscribe, reset: () => set(getAccount()) };
}
const account = createAccount({
	address: undefined,
	isConnected: false,
	isConnecting: false,
	isDisconnected: true,
	isReconnecting: false,
	status: "disconnected",
});

/**
 * Network store
 * @param {{chain?: import("@wagmi/core").Chain & {unsupported?: boolean;}; chains: import("@wagmi/core").Chain[];}} param
 */
function createNetwork(param) {
	const { set, subscribe } = writable(param);

	return { subscribe, reset: () => set(getNetwork()) };
}
const network = createNetwork({ chains: [] });

/**
 * Balance store
 */

const balance = derived([account, network], ([$account, $network]) =>
	fetchBalance({
		address: $account.address,
		chainId: $network.chainId,
	}),
);

function createTheme() {
	const { subscribe, set } = writable({});

	return {
		subscribe,
		set: (theme) => set(theme),
	};
}

const theme = createTheme();

function wagmiStore() {
	const { subscribe, set } = writable({});

	return {
		subscribe,
		set: (config) => {
			set({ chains: config.chains, connectors: config.connectors });
			account.reset();
			network.reset();
			watchAccount(() => account.reset());
			watchNetwork(() => network.reset());
		},
	};
}

const wagmi = wagmiStore();

export { account, balance, network, theme, wagmi };
