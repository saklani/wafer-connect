<script>
    import { fade } from "svelte/transition";
    import Coinbase from "./connectors/Coinbase.svelte";
    import Injected from "./connectors/Injected.svelte";
    import MetaMask from "./connectors/MetaMask.svelte";
    import WalletConnect from "./connectors/WalletConnect.svelte";
    import Dialog from "./common/Dialog.svelte";

    /** @type {boolean}  */
    let showDialog = false;
</script>

<button in:fade on:click={() => (showDialog = true)}> Connect Wallet </button>
<Dialog bind:showDialog>
    <h2 slot="title">Connect a Wallet</h2>
    <Injected />
    <MetaMask />
    <Coinbase />
    <WalletConnect />
</Dialog>

<style>
    button {
        background-color: var(--button-background-color, rgb(235, 235, 235));
        border: none;
        border-radius: var(--border-radius, 4px);
        color: var(--color, black);
    }
    button:hover {
        background-color: var(--hover, rgba(235, 235, 235, 0.8));
    }
</style>
