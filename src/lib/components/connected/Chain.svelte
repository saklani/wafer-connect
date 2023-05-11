<script>
	import { network, wagmi } from '../../stores';
  import { switchNetwork } from "@wagmi/core";
  import Dialog from "../common/Dialog.svelte";

  /** @type {boolean}  */
  let isSwitchingNetwork = false;

  /**@param {{chainId: number}} params */
  async function changeNetwork({ chainId }) {
    isSwitchingNetwork = true;
    try {
      showDialog = false;
      await switchNetwork({ chainId });
    } finally {
      isSwitchingNetwork = false;
    }
  }

  /** @type {boolean}  */
  let showDialog = false;
</script>

<button on:click={() => (showDialog = true)} disabled={isSwitchingNetwork}>
  {isSwitchingNetwork ? "Switching..." : $network.chain.name}
</button>

<Dialog bind:showDialog --max-width="200px">
  <h3 slot="title">Chains</h3>
  {#each $wagmi.chains as chain}
    {#if chain.id !== $network.chain.id}
      <button on:click={() => changeNetwork({ chainId: chain.id })}>
        {chain.name}
      </button>
    {/if}
  {/each}
</Dialog>

<style>
  :root {
    --chain-color: black;
    --height: 32px;
  }
  button {
    background-color: transparent;
    color: var(--chain-color);
    height: var(--height);
    border: solid 0.1px;
    border-color: var(--chain-color);
  }
</style>
