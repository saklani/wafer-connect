<script>
    import { account, disconnect } from "sveeeth";
    import Modal from "./Modal.svelte";
    let showModal = false;

    const handleClick = () => (showModal = true);
    const MAX_ADDRESS_LENGTH = 4;

    const shortAddress = (address) =>
        address.substring(0, MAX_ADDRESS_LENGTH) +
        "••••" +
        address.substring(address.length - MAX_ADDRESS_LENGTH, address.length);
</script>

<button class="black" on:click={handleClick}>
    {shortAddress($account.address)}
</button>
<Modal bind:showModal>
    <div class="connect-box column padding gap">
        <h3>Connected</h3>
        <p>{shortAddress($account.address)}</p>
        <button class="white" on:click={disconnect}> Disconnect </button>
    </div>
</Modal>

<style>
    .connect-box {
        background-color: whitesmoke;
    }
</style>
