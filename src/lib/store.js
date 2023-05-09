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
 */
function createAccount() {
	const { set, subscribe } = writable({});

	return { subscribe, reset: () => set(getAccount()) };
}
const account = createAccount({ address: null });

/**
 * Network store
 */
function createNetwork() {
	const { set, subscribe } = writable({});

	return { subscribe, reset: () => set(getNetwork()) };
}
const network = createNetwork();

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
