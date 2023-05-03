<script lang="ts">
  import { connect } from "sveeeth";
  import { InjectedConnector } from "sveeeth/connectors";
  import { Browser } from "./injected.js";
</script>


<button
  class="white border-gray row padding-inline space-between"
  on:click={() => connect({ connector: new InjectedConnector() })}
>
  <p>{Browser.name}</p>
  <img class="icon" src={Browser.icon} alt={Browser.name} />
</button>
