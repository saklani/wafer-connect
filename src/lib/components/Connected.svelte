<script>
  import { fade } from "svelte/transition";
  import { shortAddress } from "../utils.js";
  import Dialog from "./common/Dialog.svelte";
  import Address from "./wallet/Address.svelte";
  import Avatar from "./wallet/Avatar.svelte";
  import Chain from "./wallet/Chain.svelte";
  import Disconnect from "./wallet/Disconnect.svelte";

  let showDialog = false;

  /** @type {`0x{string}`}  */
  export let address;
</script>

<button in:fade on:click={() => (showDialog = true)}>
  <Avatar {address} --radius="28px" />
  {shortAddress(address)}
</button>

<Dialog bind:showDialog>
  <div class="row">
    <h2>Connected</h2>
    <Chain />
  </div>
  <Avatar {address} />
  <Address {address} />
  <Disconnect />
</Dialog>

<style>
  .row {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
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
