<script lang="ts">
  import { connect } from "sveeeth";
  import { InjectedConnector } from "sveeeth/connectors";
  import { Browser } from "./injected.js";
</script>

<button
  on:click={() => connect({ connector: new InjectedConnector() })}
>
  <p>{Browser.name}</p>
  <img src={Browser.icon} alt={Browser.name} />
</button>
