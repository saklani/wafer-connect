<script>
  import { switchNetwork } from "@wagmi/core";
  import { network } from "../store/network.js";
  import Dialog from "./common/Dialog.svelte";
  let showDialog = false;
</script>

<button class="unsupported" on:click={() => (showDialog = true)}>
  Unsupported Chain
</button>
<Dialog bind:showDialog>
  <h2 slot="title">Change Network</h2>
  {#each $network.chains as chain}
    <button on:click={() => switchNetwork({ chainId: chain.id })}>
      {chain.name}
    </button>
  {/each}
</Dialog>

<style>
  button {
    background-color: var(--wafer-error-background-color);
    color: var(--wafer-error-text-color);
  }
  button:hover {
    background-color: var(--wafer-error-hover-color);
  }
</style>
