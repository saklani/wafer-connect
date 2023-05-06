import { arbitrum, mainnet, optimism, polygon } from "sveeeth/chains";
import { writable } from "svelte/store";

function createChains() {
	const { subscribe, set } = writable([mainnet, polygon, optimism, arbitrum]);

	return {
		subscribe,
		set: (chains) => set(chains),
	};
}

export const chainStore = createChains();
