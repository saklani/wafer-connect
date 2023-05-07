<script>
  import { network, switchNetwork } from "sveeeth";
  import { waferStore } from "../store.js";
  import Dialog from "./common/Dialog.svelte";
  let showDialog = false;
</script>

<button class="unsupported" on:click={() => (showDialog = true)}> Unsupported Chain </button>
<Dialog
  bind:showDialog
  --dialog-background-color={$waferStore.theme.unsupported.dialog.backgroundColor}
  --dialog-color={$waferStore.theme.unsupported.dialog.color}
>
  <h2 slot="title">Switch Chain</h2>
  {#each $network.chains as chain}
    <button on:click={() => switchNetwork({ chainId: chain.id })}>
      {chain.name}
    </button>
  {/each}
</Dialog>

<style>
  button.unsupported {
    background-color: var(--unsupported-background-color, rgb(190, 59, 59));
    color: var(--unsupported-color, white);
  }
  button.unsupported:hover {
    background-color: var(--unsupported-hover, rgba(190, 59, 59, 0.8));
  }
</style>
