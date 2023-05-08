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
  aria-label={`Connect using MetaMask`}
>
  <p style="color: var(--connector-text-color)">{MetaMask.name}</p>
  <img src={MetaMask.icon} alt={MetaMask.name} />
</button>

<style>
  :root {
    --connector-background-color: white;
    --connector-text-color: black;
    --connector-hover-color: rgba(255, 255, 255, 0.9);
  }
  button {
    background-color: var(--connector-background-color);
    color: var(--connector-color);
  }
  button:hover {
    background-color: var(--connector-hover-color);
  }
</style>
