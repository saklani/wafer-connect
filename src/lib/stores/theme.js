import { writable } from "svelte/store";
import { defaultTheme } from "../theme.js";

function createTheme() {
	const { set, subscribe } = (0, writable)(defaultTheme);
	return {
		subscribe: subscribe,
		set: function (theme) {
			return set(theme);
		},
	};
}
export const theme = createTheme();
