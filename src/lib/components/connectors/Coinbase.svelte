<script>
  import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
  import { connect } from "sveeeth";
  import { chainStore } from "../../chains.js";
  import { Coinbase } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({
      connector: new CoinbaseWalletConnector({ chains: $chainStore }),
    })}
>
  <p>{Coinbase.name}</p>
  <img src={Coinbase.icon} alt={Coinbase.name} />
</button>
