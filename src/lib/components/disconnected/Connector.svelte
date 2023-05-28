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
  class="wafer-secondary"
    aria-label={`Connect using ${wallet.name}`}
    on:click={() => connect({ connector: connector })}
  >
    <p style="color: var(--wafer-secondary-button-text-color);">{wallet.name}</p>
    <img src={wallet.icon} alt={wallet.name} />
  </button>
{/if}

