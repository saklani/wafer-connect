<script>
    import { connect } from "sveeeth";
    import { CoinbaseWalletConnector } from "@wagmi/connectors/coinbaseWallet";
    import { Coinbase } from "./injected.js";
</script>

<button
    class="white border-gray row padding-inline space-between"
    on:click={() => connect({ connector: new CoinbaseWalletConnector() })}
>
    <p>{Coinbase.name}</p>
    <img class="icon" src={Coinbase.icon} alt={Coinbase.name} />
</button>
