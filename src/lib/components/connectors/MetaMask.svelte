<script>
    import { connect } from "sveeeth";
    import { MetaMaskConnector } from "@wagmi/connectors/metaMask";
    import { MetaMask } from "./injected.js";
</script>

<button
    on:click={() =>
        connect({
            connector: new MetaMaskConnector({
                options: {
                    UNSTABLE_shimOnConnectSelectAccount: true,
                },
            }),
        })}
>
    <p>{MetaMask.name}</p>
    <img src={MetaMask.icon} alt={MetaMask.name} />
</button>
