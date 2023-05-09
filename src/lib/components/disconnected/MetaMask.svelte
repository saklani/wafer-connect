<script>
  import { connect } from "@wagmi/core";
  import { MetaMask } from "../../wallet/injected.js";
  import { wagmi } from "./../../store.js";
</script>

<button
  aria-label={`Connect using MetaMask`}
  on:click={() => connect({ connector: $wagmi.connectors[1] })}
>
  <p style="color: var(--connector-text-color)">{MetaMask.name}</p>
  <img src={MetaMask.icon} alt={MetaMask.name} />
</button>

<style>
  :root {
    --connector-background-color: white;
    --connector-text-color: black;
    --connector-hover-color: rgba(255, 255, 255, 0.9);
  }
  button {
    background-color: var(--connector-background-color);
    color: var(--connector-color);
  }
  button:hover {
    background-color: var(--connector-hover-color);
  }
</style>
