<script>
  import { network, switchNetwork } from "sveeeth";
  import Dialog from "../common/Dialog.svelte";
  let showDialog = false;
</script>

<button on:click={() => (showDialog = true)}>
  {$network.chain.name}
</button>

<Dialog bind:showDialog --max-width="200px">
  <h3 slot="title">Chains</h3>
  {#each $network.chains as chain}
    <button
      on:click={async () => {
        await switchNetwork({ chainId: chain.id });
        showDialog = false;
      }}
      disabled={chain.id === $network.chain.id}
    >
      {chain.name}
    </button>
  {/each}
</Dialog>

<style>
  button {
    height: var(--height, 32px);
  }
</style>
