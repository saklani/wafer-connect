<script>
    import { WalletConnectConnector } from "@wagmi/connectors/walletConnect";
    import { connect } from "sveeeth";
    import { WalletConnect } from "./injected.js";
</script>

<button
    class="white border-gray row padding-inline space-between"
    on:click={() =>
        connect({
            connector: new WalletConnectConnector({
                projectId: "",
            }),
        })}
>
    <p>{WalletConnect.name}</p>
    <img class="icon" src={WalletConnect.icon} alt={WalletConnect.name} />
</button>
