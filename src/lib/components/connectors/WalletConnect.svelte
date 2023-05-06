<script>
  import { WalletConnectConnector } from "@wagmi/connectors/walletConnect";
  import { connect } from "sveeeth";
  import { chainStore } from "../../chains.js";
  import { WalletConnect } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({
      connector: new WalletConnectConnector({
        projectId: "",
        chains: $chainStore,
      }),
    })}
>
  <p>{WalletConnect.name}</p>
  <img src={WalletConnect.icon} alt={WalletConnect.name} />
</button>
