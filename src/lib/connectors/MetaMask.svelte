<script>
    import { connect } from "sveeeth";
    import { MetaMaskConnector } from "@wagmi/connectors/metaMask";
    import { MetaMask } from "./injected.js";
</script>

<button
    class="white border-gray row padding-inline space-between"
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
    <img class="icon" src={MetaMask.icon} alt={MetaMask.name} />
</button>
