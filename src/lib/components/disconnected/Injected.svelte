<script>
  import { connect } from "@wagmi/core";
  import { Injected } from "../../wallet/injected.js";
  import { wagmi } from "../../stores";
</script>

<button
  aria-label={`Connect using Injected Wallet`}
  on:click={() => connect({ connector: $wagmi.connectors[0] })}
>
  <p style="color: var(--connector-text-color)">{Injected.name}</p>
  <img src={Injected.icon} alt={Injected.name} />
</button>

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
