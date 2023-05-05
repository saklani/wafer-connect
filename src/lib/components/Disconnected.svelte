<script>
    import { fade } from "svelte/transition";
    import Coinbase from "./connectors/Coinbase.svelte";
    import Injected from "./connectors/Injected.svelte";
    import MetaMask from "./connectors/MetaMask.svelte";
    import WalletConnect from "./connectors/WalletConnect.svelte";
    import Dialog from "./common/Dialog.svelte";

    let showModal = false;
</script>

<button in:fade={{ delay: 400 }} on:click={() => (showModal = true)}>
    Connect Wallet
</button>
<Dialog bind:showModal>
    <h2>Connect a Wallet</h2>
    <Injected />
    <MetaMask />
    <Coinbase />
    <WalletConnect />
</Dialog>

<style>
    button {
        background-color: var(--backgroundColor, rgba(235, 235, 235, 0.9));
        border: none;
        border-radius: var(--borderRadius, 4px);
        color: var(--color, black);
    }
    button:hover {
        background-color: var(--backgroundHoverColor, rgba(235, 235, 235, 0.6));
    }
</style>
