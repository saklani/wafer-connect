<script>
  import { BROWSER } from 'esm-env'
  import { connect } from "sveeeth";
  import { InjectedConnector } from "sveeeth/connectors";
  import { waferStore } from "./../../store.js";
  import { Browser } from "./injected.js";
</script>

{#if BROWSER && !window.ethereum?.isMetaMask}
  <button
    aria-label={`Connect using Injected Wallet`}
    on:click={() =>
      connect({
        connector: new InjectedConnector({ chains: $waferStore.chains }),
      })}
  >
    <p style="color: var(--connector-text-color)">{Browser.name}</p>
    <img src={Browser.icon} alt={Browser.name} />
  </button>
{/if}

<style>
  :root {
    --connector-background-color: white;
    --connector-text-color: black;
    --connector-hover-color: rgba(255, 255, 255, 0.75);
  }
  button {
    background-color: var(--connector-background-color);
    color: var(--connector-text-color);
  }
  button:hover {
    background-color: var(--connector-hover-color);
  }
</style>
