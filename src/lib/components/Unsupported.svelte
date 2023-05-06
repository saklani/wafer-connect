<script>
    import { network, switchNetwork } from "sveeeth";
    import Dialog from "./common/Dialog.svelte";
    let showDialog = false;
</script>

<button on:click={() => (showDialog = true)}> Unsupported Chain </button>
<Dialog bind:showDialog>
    <h2>Switch Chain</h2>
    {#each $network.chains as chain}
        <button on:click={() => switchNetwork({ chainId: chain.id })}>{chain.name}</button>
    {/each}
</Dialog>

<style>
    button {
        background-color: var(--backgroundColor, rgba(235, 235, 235, 0.9));
        border: none;
        border-radius: var(--borderRadius, 4px);
        color: var(--color, black);
    }
    button:hover {
        background-color: var(--hover, rgba(235, 235, 235, 0.6));
    }
</style>
