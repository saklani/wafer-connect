<script>
  import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
  import { connect } from "sveeeth";
  import { waferStore } from "./../../store.js";
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
  aria-label={`Connect using WalletConnect`}
>
  <p style="color: var(--connector-text-color)">{WalletConnect.name}</p>
  <img src={WalletConnect.icon} alt={WalletConnect.name} />
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
