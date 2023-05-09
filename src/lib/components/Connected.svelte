<script>
  import { fade } from "svelte/transition";
  import { wafer } from "../store.js";
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
  in:fade
  on:click={() => (showDialog = true)}
  aria-label={`Connected to wallet with address ${address}`}
>
  <Avatar {address} --radius="28px" />
  {shortAddress(address)}
</button>

<Dialog
  bind:showDialog
  --dialog-background-color={$wafer.theme.connected.dialog.backgroundColor}
  --dialog-color={$wafer.theme.connected.dialog.color}
>
  <div
    slot="title"
    style="align-items: center; display: flex; justify-content: space-between; width: 100%;"
  >
    <h2>Connected</h2>
    <Chain />
  </div>
  <div style="align-items: center; display: flex; flex-direction: column; gap: 8px;">
    <Avatar {address} />
    <Address
      {address}
      --address-color={$wafer.theme.address.color}
      --address-hover={$wafer.theme.address.hover}
    />
    <Balance --balance-color={$wafer.theme.balance.color} />
  </div>
  <Disconnect
    --disconnect-background-color={$wafer.theme.disconnect.backgroundColor}
    --disconnect-color={$wafer.theme.disconnect.color}
    --disconnect-hover={$wafer.theme.disconnect.hover}
  />
</Dialog>

<style>
  :root {
    --connected-background-color: rgb(235, 235, 235);
    --connected-color: black;
    --connected-hover: rgba(235, 235, 235, 0.7);
  }
  button {
    background-color: var(--connected-background-color);
    color: var(--connected-color);
  }
  button:hover {
    background-color: var(--connected-hover);
  }
</style>
