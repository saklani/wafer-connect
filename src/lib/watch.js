import {
  watchAccount,
  watchNetwork,
} from "@wagmi/core";
import { account } from "./stores/account.js";
import { network } from "./stores/network.js";


async function watch() {
  watchAccount((data) => account.set(data));
  watchNetwork((data) => network.set(data));
}


export { watch };
