<script>
    import sveeeth, { account, configureChains, network } from "sveeeth";
    import { arbitrum, mainnet, optimism, polygon } from "sveeeth/chains";
    import { publicProvider } from "sveeeth/providers";
    import Connected from "./Connected.svelte";
    import Disconnected from "./Disconnected.svelte";
    import Loading from "./Loading.svelte";
    import Unsupported from "./Unsupported.svelte";
    import "./style.css";

    let chains = [mainnet, polygon, optimism, arbitrum];
    const { provider } = configureChains(chains, [publicProvider()]);

    sveeeth({ provider });

    export { chains };
</script>

{#if $account.status === "connected"}
    {#if $network.chain.unsupported}
        <Unsupported />
    {:else}
        <Connected address={$account.address} />
    {/if}
{:else if $account.status === "disconnected"}
    <Disconnected />
{:else}
    <Loading />
{/if}
