<script>
    import Coinbase from "../connectors/Coinbase.svelte";
    import Injected from "../connectors/Injected.svelte";
    import MetaMask from "../connectors/MetaMask.svelte";
    import WalletConnect from "../connectors/WalletConnect.svelte";
    import Modal from "./Modal.svelte";
    let showModal = false;

    const handleClick = () => (showModal = true);
</script>

<button class="black" on:click={handleClick}> Connect Wallet </button>

<Modal bind:showModal>
    <div class="connect-box column padding gap">
        <h3>Connect a Wallet</h3>
        <Injected />
        <MetaMask />
        <Coinbase />
        <WalletConnect />
    </div>
</Modal>

<style>
    .connect-box {
        background-color: whitesmoke;
    }
</style>
