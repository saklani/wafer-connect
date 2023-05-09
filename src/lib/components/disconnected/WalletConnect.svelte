<script>
  import { connect } from "@wagmi/core";
  import { WalletConnect } from "../../wallet/injected.js";
  import { wagmi } from "./../../store.js";
</script>

<button
  aria-label={`Connect using WalletConnect`}
  on:click={() => connect({ connector: $wagmi.connectors[2] })}
>
  <p style="color: var(--connector-text-color)">{WalletConnect.name}</p>
  <img src={WalletConnect.icon} alt={WalletConnect.name} />
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
