import { writable } from "svelte/store";

/**  @type {{address: `0x${string}` | undefined;	isConnected: boolean; isConnecting: boolean; isDisconnected: boolean; isReconnecting: boolean; status: "connected" | "reconnecting" | "connecting" | "disconnected";}} */
const init = {
  address: undefined,
  isConnected: false,
  isConnecting: false,
  isDisconnected: true,
  isReconnecting: false,
  status: "disconnected",
};
const { set, subscribe } = writable(init);

export const account = {
  subscribe,
  set,
};
