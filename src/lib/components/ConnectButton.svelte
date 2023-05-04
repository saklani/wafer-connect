<script>
    import Loading from "./Loading.svelte";
    import sveeeth, { account, configureChains } from "sveeeth";
    import { mainnet } from "sveeeth/chains";
    import { publicProvider } from "sveeeth/providers";
    import Connected from "./Connected.svelte";
    import Disconnected from "./Disconnected.svelte";
    import "./styles.css";

    const { provider } = configureChains([mainnet], [publicProvider()]);

    sveeeth({ provider });
</script>

{#if $account.status === "connected"}
    <Connected address={$account.address} />
{:else if $account.status === "disconnected"}
    <Disconnected />
{:else}
    <Loading />
{/if}
