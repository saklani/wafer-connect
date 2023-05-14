<script>
  import { connect } from "@wagmi/core";

  /** @type {import("@wagmi/core/connectors").Connector}*/
  let connector;
  /**
   * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}}
   */
  let wallet;

  export { connector, wallet };
</script>

{#if wallet.id === "injected" && (typeof window === "undefined" || (typeof window !== "undefined" && window?.ethereum?.isMetaMask))}
  <div style="display: none;" />
{:else}
  <button
    aria-label={`Connect using ${wallet.name}`}
    on:click={() => connect({ connector: connector })}
  >
    <p style="color: var(--connector-text-color)">{wallet.name}</p>
    <img src={wallet.icon} alt={wallet.name} />
  </button>
{/if}

<style>
  :root {
    --connector-background-color: white;
    --connector-text-color: black;
    --connector-hover-color: rgba(255, 255, 255, 0.9);
  }
  button {
    background-color: var(--connector-background-color);
    color: var(--connector-text-color);
  }
  button:hover {
    background-color: var(--connector-hover-color);
  }
</style>
