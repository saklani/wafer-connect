import { writable } from "svelte/store";
import { light } from "../themes/light";

function createTheme() {
	const { set, subscribe } = writable(light);
	return {
		subscribe: subscribe,
		set: (theme) => set(theme),
	};
}
export const theme = createTheme();
