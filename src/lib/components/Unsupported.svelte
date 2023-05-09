<script>
  import { switchNetwork } from "@wagmi/core";
  import { network, wafer } from "../store.js";
  import Dialog from "./common/Dialog.svelte";
  let showDialog = false;
</script>

<button class="unsupported" on:click={() => (showDialog = true)}>
  Unsupported Chain
</button>
<Dialog
  bind:showDialog
  --dialog-background-color={$wafer.theme.unsupported.dialog.backgroundColor}
  --dialog-color={$wafer.theme.unsupported.dialog.color}
>
  <h2 slot="title">Switch Chain</h2>
  {#each $network.chains as chain}
    <button
      style="background-color: var(--chain-background-color); color: var(--chain-color);"
      on:click={() => switchNetwork({ chainId: chain.id })}
    >
      {chain.name}
    </button>
  {/each}
</Dialog>

<style>
  :root {
    --unsupported-background-color: rgb(190, 59, 59);
    --unsupported-color: white;
    --unsupported-hover: rgba(190, 59, 59, 0.8);
    --chain-background-color: white;
    --chain-color: black;
  }
  button {
    background-color: var(--unsupported-background-color);
    color: var(--unsupported-color);
  }
  button:hover {
    background-color: var(--unsupported-hover);
  }
</style>
