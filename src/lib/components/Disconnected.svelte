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
  />
  <MetaMask
    --connector-background-color={$waferStore.theme.connector.backgroundColor}
    --connector-color={$waferStore.theme.connector.color}
  />
  <WalletConnect
    --connector-background-color={$waferStore.theme.connector.backgroundColor}
    --connector-color={$waferStore.theme.connector.color}
  />
</Dialog>

<style>
  button {
    background-color: var(--disconnected-background-color, rgb(235, 235, 235));
    border-radius: var(--border-radius, 4px);
    color: var(--disconnected-color, black);
  }
  button:hover {
    background-color: var(--disconnected-hover, rgba(235, 235, 235, 0.8));
  }
</style>
