<script>
    import { WalletConnectConnector } from "@wagmi/connectors/walletConnect";
    import { connect } from "sveeeth";
    import { WalletConnect } from "./injected.js";
</script>

<button
    on:click={() =>
        connect({
            connector: new WalletConnectConnector({
                projectId: "",
            }),
        })}
>
    <p>{WalletConnect.name}</p>
    <img src={WalletConnect.icon} alt={WalletConnect.name} />
</button>
