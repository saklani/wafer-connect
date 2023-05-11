import { writable } from "svelte/store";
import { lightTheme } from "../themes/lightTheme.js";

function createTheme() {
	const { set, subscribe } = writable(lightTheme);
	return {
		subscribe: subscribe,
		set: (theme) => set(theme),
	};
}
export const theme = createTheme();
