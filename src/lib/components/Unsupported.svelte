<script>
  import { switchNetwork } from "@wagmi/core";
  import { network, theme } from "../stores";
  import Dialog from "./common/Dialog.svelte";
  let showDialog = false;
</script>

<button class="unsupported" on:click={() => (showDialog = true)}>
  Unsupported Chain
</button>
<Dialog
  bind:showDialog
  --dialog-background-color={$theme.dialogBackgroundColor}
  --dialog-color={$theme.dialogTextColor}
  --dialog-blur={$theme.dialogBlur}
>
  <h2 slot="title">Switch Chain</h2>
  {#each $network.chains as chain}
    <button
      style="background-color: {$theme.secondaryButtonColor}; color: {$theme.secondaryButtonTextColor}; border-radius: {$theme.borderRadius};"
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
    --unsupported-hover: rgb(200, 69, 69);
    --border-radius: 6px;
  }
  button {
    background-color: var(--unsupported-background-color);
    color: var(--unsupported-color);
    border-radius: var(--border-radius);
  }
  button:hover {
    background-color: var(--unsupported-hover);
  }
</style>
