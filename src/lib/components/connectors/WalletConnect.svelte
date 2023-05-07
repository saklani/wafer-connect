<script>
	import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
	import { connect } from "sveeeth";
	import { waferStore } from './../../store.js';
	import { WalletConnect } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({
      connector: new WalletConnectConnector({
        options: {
          projectId: $waferStore.walletConnectProjectId,
        },
        chains: $waferStore.chains,
      }),
    })}
>
  <p>{WalletConnect.name}</p>
  <img src={WalletConnect.icon} alt={WalletConnect.name} />
</button>

<style>
  button {
    background-color: var(--connector-background-color, white);
    color: var(--connector-color, black);
  }
  button:hover {
    background-color: var(--connector-hover, rgba(255, 255, 255, 0.75));
  }
</style>