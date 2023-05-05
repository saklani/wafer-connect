<script>
  import { fade } from "svelte/transition";
  import { shortAddress } from "../utils.js";
  import Address from "./wallet/Address.svelte";
  import Avatar from "./wallet/Avatar.svelte";
  import Disconnect from "./wallet/Disconnect.svelte";
  import Dialog from "./common/Dialog.svelte";

  let showModal = false;

  /** @type {`0x{string}`}  */
  export let address;
</script>

<button
  in:fade={{ delay: 300 }}
  on:click={() => (showModal = true)}
  out:fade={{ duration: 400 }}
>
  <Avatar {address} radius={"26px"} />
  {shortAddress(address)}
</button>

<Dialog bind:showModal>
  <h2>Connected</h2>
  <Avatar {address} />
  <Address {address} />
  <Disconnect />
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
