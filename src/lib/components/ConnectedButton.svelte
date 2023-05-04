<script>
  import { account } from "sveeeth";
  import { shortAddress } from "../utils.js";
  import Address from "./Common/Address.svelte";
  import Disconnect from "./Common/Disconnect.svelte";
  import Modal from "./Modal.svelte";
  let showModal = false;

  const handleClick = () => (showModal = true);
</script>

<button class="black" on:click={handleClick}>
  {shortAddress($account.address)}
</button>
<Modal bind:showModal>
  <div class="connect-box column padding gap">
    <h3>Connected</h3>
    <Address />
    <Disconnect />
  </div>
</Modal>

<style>
  .connect-box {
    background-color: whitesmoke;
  }
</style>
