<script>
  import { fade } from "svelte/transition";
  import { connectors } from "../stores/connectors.js";
  import Dialog from "./common/Dialog.svelte";
  import Connector from "./disconnected/Connector.svelte";
  import NoWallet from "./disconnected/NoWallet.svelte";

  /** @type {boolean}  */
  let showDialog = false;
</script>

<button class="wafer-primary" in:fade on:click={() => (showDialog = true)}>
  Connect Wallet
</button>
<Dialog bind:showDialog>
  <h2 slot="title">Connect a Wallet</h2>
  {#each $connectors.wallets ?? [] as wallet, index}
    <Connector connector={$connectors.wagmiConnectors[index]} {wallet} />
  {/each}
  <NoWallet />
</Dialog>
