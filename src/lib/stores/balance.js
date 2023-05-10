import { fetchBalance } from "@wagmi/core";
import { derived } from "svelte/store";
import { account } from "./account.js";
import { network } from "./network.js";

/**
 * Balance store
 */
export const balance = derived([account, network], ([$account, $network]) =>
	fetchBalance({
		address: $account.address,
		chainId: $network.chainId,
	}),
);
