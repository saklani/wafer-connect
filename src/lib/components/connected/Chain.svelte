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
  style="font-size: 0.9rem;"
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

<Menu
  bind:showMenu
  --menu-background-color="var(--chain-menu-background-color)"
  --menu-color="var(--chain-menu-color)"
>
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
    --chain-button-background-color: rgba(240, 240, 240, 0.8);
    --chain-button-color: rgb(50, 50, 50);
    --chain-button-hover-color: rgba(192, 192, 192, 0.5);
    --border-radius: 6px;
  }
  button {
    background-color: var(--chain-button-background-color);
    border-radius: var(--border-radius);
    color: var(--chain-button-color);
    height: 32px;
    padding-block: 8px;
    padding-inline: 6px;
  }
  button:hover {
    background-color: var(--chain-button-hover-color);
  }
</style>
