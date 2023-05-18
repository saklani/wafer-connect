<script>
  import { network, chains } from "../../stores";
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

<button
  on:click={() => (showDialog = true)}
  disabled={isSwitchingNetwork || $chains.length === 1}
  style="border-radius: 999px;"
>
  {#if isSwitchingNetwork}
    <p>"Switching•••"</p>
  {:else if $chains.length === 1}
    <p>{$network.chain.name}</p>
  {:else}
    <p>{$network.chain.name}</p>
    <svg
      style="width: 12px; height: 12px;"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6289 11.8813L13.3491 23.1612"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="square"
      />
      <path
        d="M2 11.8799L13.2798 23.1597"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  {/if}
</button>

<Dialog bind:showDialog --max-width="200px" --dialog-blur="blur(0px)">
  <h3 slot="title">Chains</h3>
  {#each $chains as chain}
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
    --border-radius: 6px;
  }
  button {
    background-color: transparent;
    color: var(--chain-color);
    height: var(--height);
    border: solid 1px var(--chain-color);
    border-radius: var(--border-radius);
    padding-block: 8px;
    padding-inline: 12px;
  }
  button:hover {
    background-color: rgb(192, 192, 192, 0.1);
  }
</style>
