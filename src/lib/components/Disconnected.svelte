<script>
  import { fade } from "svelte/transition";
  import { theme } from "../store.js";
  import Injected from "./disconnected/Injected.svelte";
  import MetaMask from "./disconnected/MetaMask.svelte";
  import WalletConnect from "./disconnected/WalletConnect.svelte";
  import Dialog from "./common/Dialog.svelte";

  /** @type {boolean}  */
  let showDialog = false;
</script>

<button in:fade on:click={() => (showDialog = true)}> Connect Wallet </button>
<Dialog
  bind:showDialog
  --dialog-background-color={$theme.dialogBackgroundColor}
  --dialog-color={$theme.dialogTextColor}
  --dialog-blur={$theme.dialogBlur}
>
  <h2 slot="title">Connect a Wallet</h2>
  <Injected
    --connector-background-color={$theme.secondaryButtonColor}
    --connector-color={$theme.secondaryButtonTextColor}
    --connector-hover-color={$theme.secondaryButtonHoverColor}
  />
  <MetaMask
    --connector-background-color={$theme.secondaryButtonColor}
    --connector-color={$theme.secondaryButtonTextColor}
    --connector-hover-color={$theme.secondaryButtonHoverColor}
  />
  <WalletConnect
    --connector-background-color={$theme.secondaryButtonColor}
    --connector-color={$theme.secondaryButtonTextColor}
    --connector-hover-color={$theme.secondaryButtonHoverColor}
  />
</Dialog>

<style>
  :root {
    --disconnected-background-color: rgb(235, 235, 235);
    --disconnected-color: black;
    --disconnected-hover: rgba(235, 235, 235, 0.7);
    --border-radius: 4px;
  }
  button {
    background-color: var(--disconnected-background-color);
    border-radius: var(--border-radius);
    color: var(--disconnected-color);
  }
  button:hover {
    background-color: var(--disconnected-hover);
  }
</style>
