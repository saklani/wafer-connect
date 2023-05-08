import type { Chain } from "@wagmi/core";
import { SvelteComponentTyped } from "svelte";

interface Theme {
	address: {
		color: string;
		hover: string;
	};
	balance: {
		color: string;
	};
	chain: {
		backgroundColor: string;
		color: string;
		dialog: {
			backgroundColor: string;
			color: string;
		};
	};
	connected: {
		backgroundColor: string;
		color: string;
		dialog: {
			backgroundColor: string;
			color: string;
		};
		hover: string;
	};
	connector: {
		backgroundColor: string;
		color: string;
	};
	disconnect: {
		backgroundColor: string;
		color: string;
		hover: string;
	};
	disconnected: {
		backgroundColor: string;
		color: string;
		dialog: {
			backgroundColor: string;
			color: string;
		};
		hover: string;
	};
	loading: {
		backgroundColor: string;
		color: string;
	};
	unsupported: {
		backgroundColor: string;
		color: string;
		dialog: {
			backgroundColor: string;
			color: string;
		};
		hover: string;
	};
}

interface ConnectButtonProps {
	walletConnectProjectId: string;
	chains: Chain[];
	theme: Theme;
}
export default class ConnectButton extends SvelteComponentTyped<ConnectButtonProps> {}
