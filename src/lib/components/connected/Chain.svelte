<script>
  import { getConfig, switchNetwork } from "@wagmi/core";
  import { network } from "../../store/network.js";
  import Menu from "../common/Menu.svelte";

  /** @type {boolean}  */
  let isSwitchingNetwork = false;

  /**@param {{chainId: number}} params */
  async function changeNetwork({ chainId }) {
    isSwitchingNetwork = true;
    try {
      showMenu = false;
      await switchNetwork({ chainId });
    } finally {
      isSwitchingNetwork = false;
    }
  }

  /** @type {boolean}  */
  let showMenu = false;

  const chains = getConfig().chains;
</script>

<button
  class="wafer-secondary"
  on:click={() => (showMenu = true)}
  disabled={isSwitchingNetwork || chains.length === 1}
  style="font-size: 0.9rem;"
>
  {#if isSwitchingNetwork}
    <p>Switching•••</p>
  {:else if chains.length === 1}
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
        stroke="var(--wafer-secondary-button-text-color)"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M2 11.8799L13.2798 23.1597"
        stroke="var(--wafer-secondary-button-text-color)"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
  {/if}
</button>

<Menu bind:showMenu>
  <h3 slot="title">Change Network</h3>
  {#each chains as chain}
    {#if chain.id !== $network.chain.id}
      <button
        class="wafer-secondary"
        on:click={() => changeNetwork({ chainId: chain.id })}
      >
        {chain.name}
      </button>
    {/if}
  {/each}
</Menu>

<style>
  .wafer-secondary {
    height: 32px;
    padding-block: 8px;
    padding-inline: 6px;
  }
</style>
