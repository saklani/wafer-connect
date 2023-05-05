<script>
    import { connect } from "sveeeth";
    import { CoinbaseWalletConnector } from "@wagmi/connectors/coinbaseWallet";
    import { Coinbase } from "./injected.js";
</script>

<button on:click={() => connect({ connector: new CoinbaseWalletConnector() })}>
    <p>{Coinbase.name}</p>
    <img src={Coinbase.icon} alt={Coinbase.name} />
</button>