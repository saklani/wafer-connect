<script>
  import { getConfig } from "@wagmi/core";
  import { fade } from "svelte/transition";
  import Dialog from "./common/Dialog.svelte";
  import Connector from "./disconnected/Connector.svelte";
  import NoWallet from "./disconnected/NoWallet.svelte";

  const { connectors } = getConfig();

  /** @type {boolean}  */
  let showDialog = false;
</script>

<button class="wafer-primary" in:fade on:click={() => (showDialog = true)}>
  Connect Wallet
</button>
<Dialog bind:showDialog>
  <h2 slot="title">Connect a Wallet</h2>
  {#each connectors ?? [] as connector}
    <Connector {connector} bind:showDialog/>
  {/each}
  <NoWallet />
</Dialog>
