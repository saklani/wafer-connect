<script>
  import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
  import { connect } from "sveeeth";
  import { chainStore } from "../../chains.js";
  import { WalletConnect } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({
      connector: new WalletConnectConnector({
        options: {
          projectId: "956d5ec8e006d78c793f06be590de1fa",
        },
        chains: $chainStore,
      }),
    })}
>
  <p>{WalletConnect.name}</p>
  <img src={WalletConnect.icon} alt={WalletConnect.name} />
</button>
