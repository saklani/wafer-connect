import { writable } from "svelte/store";

function createStore() {
	const { subscribe, set } = writable({
		walletConnectProjectId: "",
		chains: [],
	});

	return {
		subscribe,
		set: (options) => set(options),
	};
}

export const waferStore = createStore();
