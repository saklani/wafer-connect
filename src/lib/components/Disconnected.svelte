<script>
  import { fade } from "svelte/transition";
  import { waferStore } from "../store.js";
  import Injected from "./connectors/Injected.svelte";
  import MetaMask from "./connectors/MetaMask.svelte";
  import WalletConnect from "./connectors/WalletConnect.svelte";
  import Dialog from "./common/Dialog.svelte";

  /** @type {boolean}  */
  let showDialog = false;
</script>

<button in:fade on:click={() => (showDialog = true)}> Connect Wallet </button>
<Dialog
  bind:showDialog
  --dialog-background-color={$waferStore.theme.disconnected.dialog
    .backgroundColor}
  --dialog-color={$waferStore.theme.disconnected.dialog.color}
>
  <h2 slot="title">Connect a Wallet</h2>
  <Injected
    --connector-background-color={$waferStore.theme.connector.backgroundColor}
    --connector-color={$waferStore.theme.connector.color}
    --connector-hover-color={$waferStore.theme.connector.hoverColor}
  />
  <MetaMask
    --connector-background-color={$waferStore.theme.connector.backgroundColor}
    --connector-color={$waferStore.theme.connector.color}
    --connector-hover-color={$waferStore.theme.connector.hoverColor}
  />
  <WalletConnect
    --connector-background-color={$waferStore.theme.connector.backgroundColor}
    --connector-color={$waferStore.theme.connector.color}
    --connector-hover-color={$waferStore.theme.connector.hoverColor}
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
