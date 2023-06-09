import { writable } from "svelte/store";
import { light } from "../themes/light.js";

function createStore() {
	const { set, subscribe } = writable(light);
	return {
		subscribe: subscribe,
		set: (theme) => set(theme),
	};
}
export const theme = createStore();
