<script>
  import { network, switchNetwork } from "sveeeth";
  import Dialog from "./common/Dialog.svelte";
  let showDialog = false;
</script>

<button on:click={() => (showDialog = true)}> Unsupported Chain </button>
<Dialog bind:showDialog>
  <h2 slot="title">Switch Chain</h2>
  {#each $network.chains as chain}
    <button on:click={() => switchNetwork({ chainId: chain.id })}
      >{chain.name}</button
    >
  {/each}
</Dialog>

<style>
  button {
    background-color: var(--unsupported-background-color, rgb(190, 59, 59));
    color: var(--unsupported-color, black);
  }
  button:hover {
    background-color: var(--hover, rgba(235, 235, 235, 0.8));
  }
</style>
