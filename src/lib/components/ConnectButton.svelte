<script>
    import Coinbase from "../connectors/Coinbase.svelte";
    import Injected from "../connectors/Injected.svelte";
    import MetaMask from "../connectors/MetaMask.svelte";
    import WalletConnect from "../connectors/WalletConnect.svelte";
    import ModalBox from "./Common/ModalBox.svelte";

    let showModal = false;

    const handleClick = () => (showModal = true);
</script>

<button class="black" on:click={handleClick}> Connect Wallet </button>

<ModalBox title={"Connect a Wallet"} bind:showModal>
    <Injected />
    <MetaMask />
    <Coinbase />
    <WalletConnect />
</ModalBox>
