<script>
  import { fade } from "svelte/transition";
  import { theme } from "../stores";
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
  --dialog-background-color={$theme.dialogBackgroundColor}
  --dialog-color={$theme.dialogTextColor}
  --dialog-blur={$theme.dialogBlur}
  --border-radius={$theme.borderRadius}
>
  <div
    slot="title"
    style="align-items: center; display: flex; justify-content: space-between; width: 100%;"
  >
    <h2>Connected</h2>
    <Chain --chain-color={$theme.dialogTextColor} />
  </div>
  <div
    style="align-items: center; display: flex; flex-direction: column; gap: 16px; padding-block: 16px;"
  >
    <Avatar {address} />
    <Address {address} --address-text-color={$theme.dialogTextColor} />
    <Balance --balance-text-color={$theme.dialogTextColor} />
  </div>
  <Disconnect
    --disconnect-background-color={$theme.errorButtonColor}
    --disconnect-color={$theme.errorButtonTextColor}
    --disconnect-hover={$theme.errorButtonHoverColor}
    --border-radius={$theme.borderRadius}
  />
</Dialog>

<style>
  :root {
    --connected-background-color: rgb(235, 235, 235);
    --connected-color: black;
    --connected-hover-color: rgba(235, 235, 235, 0.7);
    --border-radius: 6px;
  }
  button {
    background-color: var(--connected-background-color);
    color: var(--connected-color);
    border-radius: var(--border-radius);
  }
  button:hover {
    background-color: var(--connected-hover-color);
  }
</style>
