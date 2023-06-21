<script>
  import { connect, watchAccount } from "@wagmi/core";
  import { getIconFromId } from "../../connectors/utils.js";

  /** @type {import("@wagmi/core/connectors").Connector}*/
  let connector;

  /** @type {boolean}  */
  let showDialog = false;

  async function handleConnect() {
    try {
      showDialog = false;
      await connect({ connector });
    } catch (e) {
      console.error(e);
    }
  }

  export { connector, showDialog };
</script>

{#if connector.id === "injected" && (typeof window === "undefined" || (typeof window !== "undefined" && window?.ethereum?.isMetaMask))}
  <div style="display: none;" />
{:else}
  <button
    class="wafer-secondary"
    aria-label={`Connect using ${connector.name}`}
    on:click={handleConnect}
  >
    <p style="color: var(--wafer-secondary-button-text-color);">
      {connector.name}
    </p>
    <img src={getIconFromId({ id: connector.id })} alt={connector.name} />
  </button>
{/if}
