<script>
  import { network, chains } from "../../stores";
  import { switchNetwork } from "@wagmi/core";
  import Menu from "../common/Menu.svelte";

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
  let showMenu = false;
</script>

<button
  on:click={() => (showMenu = true)}
  disabled={isSwitchingNetwork || $chains.length === 1}
  style="border-radius: 999px; font-size: 0.9rem;"
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
        stroke="var(--chain-button-color)"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M2 11.8799L13.2798 23.1597"
        stroke="var(--chain-button-color)"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
  {/if}
</button>

<Menu bind:showMenu --menu-background-color="var(--chain-menu-background-color)" --menu-color="--chain-menu-color">
  <h3 slot="title">Change Network</h3>
  {#each $chains as chain}
    {#if chain.id !== $network.chain.id}
      <button on:click={() => changeNetwork({ chainId: chain.id })}>
        {chain.name}
      </button>
    {/if}
  {/each}
</Menu>

<style>
  :root {
    --chain-menu-background-color: white;
    --chain-menu-color: black;
    --chain-button-background-color: rgba(192, 192, 192, 0.3);
    --chain-button-color: black;
    --border-radius: 6px;
  }
  button {
    background-color: var(--chain-button-background-color);
    color: var(--chain-button-color);
    height: var(--height);
    border-radius: var(--border-radius);
    padding-block: 8px;
  }
  button:hover {
    background-color: rgba(192, 192, 192, 0.4);
  }
</style>
