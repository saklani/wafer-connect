import { writable } from "svelte/store";

function createStore() {
	const { subscribe, set } = writable({
		chains: [],
		theme: {},
		walletConnectProjectId: "",
	});

	return {
		subscribe,
		set: (options) => set(options),
	};
}

export const waferStore = createStore();
