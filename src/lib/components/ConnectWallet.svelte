<script>
    import sveeeth, { account, configureChains } from "sveeeth";
    import { mainnet } from "sveeeth/chains";
    import { publicProvider } from "sveeeth/providers";
    import ConnectButton from "./ConnectButton.svelte";
    import ConnectedButton from "./ConnectedButton.svelte";
    import "./styles.css";

    const { provider } = configureChains([mainnet], [publicProvider()]);

    sveeeth({ provider });
</script>

{#if !$account.isConnected}
    <ConnectButton />
{:else}
    <ConnectedButton />
{/if}
