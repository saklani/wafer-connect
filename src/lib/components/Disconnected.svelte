<script>
  import { fade } from "svelte/transition";
  import { connectors } from "../stores/connectors.js";
  import { theme } from "../stores/theme.js";
  import Dialog from "./common/Dialog.svelte";
  import Connector from "./disconnected/Connector.svelte";
  import NoWallet from "./disconnected/NoWallet.svelte";

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
  {#each $connectors.wallets ?? [] as wallet, index}
    <Connector
      connector={$connectors.wagmiConnectors[index]}
      {wallet}
      --connector-background-color={$theme.secondaryButtonColor}
      --connector-text-color={$theme.secondaryButtonTextColor}
      --connector-hover-color={$theme.secondaryButtonHoverColor}
    />
  {/each}
  <NoWallet />
</Dialog>

<style>
  :root {
    --disconnected-background-color: rgb(235, 235, 235);
    --disconnected-color: black;
    --disconnected-hover-color: rgba(235, 235, 235, 0.7);
  }
  button {
    background-color: var(--disconnected-background-color);
    color: var(--disconnected-color);
  }
  button:hover {
    background-color: var(--disconnected-hover-color);
  }
</style>
