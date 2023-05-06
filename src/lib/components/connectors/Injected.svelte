<script lang="ts">
  import { connect } from "sveeeth";
  import { InjectedConnector } from "sveeeth/connectors";
  import { chainStore } from "../../chains.js";
  import { Browser } from "./injected.js";
</script>

<button
  on:click={() =>
    connect({ connector: new InjectedConnector({ chains: $chainStore }) })}
>
  <p>{Browser.name}</p>
  <img src={Browser.icon} alt={Browser.name} />
</button>
