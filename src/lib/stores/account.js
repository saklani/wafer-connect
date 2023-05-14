import { getAccount } from "@wagmi/core";
import { writable } from "svelte/store";

function createAccount() {
  /**  @type {{address: `0x${string}` | undefined;	isConnected: boolean; isConnecting: boolean; isDisconnected: boolean; isReconnecting: boolean;status: "connected" | "reconnecting" | "connecting" | "disconnected";}} */
  const init = {
    address: undefined,
    isConnected: false,
    isConnecting: false,
    isDisconnected: true,
    isReconnecting: false,
    status: "disconnected",
  };
  const { set, subscribe } = writable(init);

  return {
    subscribe: subscribe,
    reset: () => set(getAccount()),
  };
}

export const account = createAccount();
