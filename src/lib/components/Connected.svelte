<script>
  import { fade } from "svelte/transition";;
  import { shortAddress } from "../utils.js";
  import Dialog from "./common/Dialog.svelte";
  import Address from "./connected/Address.svelte";
  import Avatar from "./connected/Avatar.svelte";
  import Balance from "./connected/Balance.svelte";
  import Chain from "./connected/Chain.svelte";
  import Disconnect from "./connected/Disconnect.svelte";

  /** @type {boolean}  */
  let showDialog = false;

  /** @type {`0x{string}`}  */
  export let address;
</script>

<button
  class="wafer-primary"
  in:fade
  on:click={() => (showDialog = true)}
  aria-label={`Connected to wallet with address ${address}`}
>
  <Avatar {address} --wafer-avatar-radius="29px" />
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
  <div
    style="align-items: center; display: flex; flex-direction: column; gap: 1rem; padding-block: 4px;"
  >
    <Avatar {address} />
    <Address {address} />
    <Balance />
  </div>
  <Disconnect />
</Dialog>
