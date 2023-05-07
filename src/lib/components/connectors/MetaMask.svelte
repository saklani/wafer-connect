<script>
  import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
  import { connect } from "sveeeth";
  import { waferStore } from "./../../store.js";
  import { MetaMask } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({
      connector: new MetaMaskConnector({
        chains: $waferStore.chains,
        options: {
          UNSTABLE_shimOnConnectSelectAccount: true,
        },
      }),
    })}
>
  <p>{MetaMask.name}</p>
  <img src={MetaMask.icon} alt={MetaMask.name} />
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