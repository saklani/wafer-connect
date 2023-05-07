<script lang="ts">
  import { browser } from "$app/environment";
  import { connect } from "sveeeth";
  import { InjectedConnector } from "sveeeth/connectors";
  import { waferStore } from "./../../store.js";
  import { Browser } from "./injected.js";
</script>

{#if browser && !window.ethereum?.isMetaMask}
  <button
    on:click={() =>
      connect({
        connector: new InjectedConnector({ chains: $waferStore.chains }),
      })}
  >
    <p>{Browser.name}</p>
    <img src={Browser.icon} alt={Browser.name} />
  </button>
{/if}
