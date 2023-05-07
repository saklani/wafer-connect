<script>
  import { fade } from "svelte/transition";
  import { shortAddress } from "../utils.js";
  import Dialog from "./common/Dialog.svelte";
  import Address from "./wallet/Address.svelte";
  import Avatar from "./wallet/Avatar.svelte";
  import Chain from "./wallet/Chain.svelte";
  import Disconnect from "./wallet/Disconnect.svelte";
  import Balance from "./wallet/Balance.svelte";

  /** @type {boolean}  */
  let showDialog = false;

  /** @type {`0x{string}`}  */
  export let address;
</script>

<button in:fade on:click={() => (showDialog = true)}>
  <Avatar {address} --radius="28px" />
  {shortAddress(address)}
</button>

<Dialog bind:showDialog>
  <div
    slot="title"
    style="align-items: center; display: flex; justify-content: space-between; width: 100%;"
  >
    <h2>Connected</h2>
    <Chain />
  </div>
  <div style="align-items: center; display: flex; flex-direction: column;">
    <Avatar {address} />
    <Address {address} />
    <Balance />
  </div>
  <Disconnect />
</Dialog>

<style>
  button {
    background-color: var(--connected-background-color, rgb(235, 235, 235));
    color: var(--connected-color, black);
  }
  button:hover {
    background-color: var(--hover, rgba(235, 235, 235, 0.7));
  }
</style>
