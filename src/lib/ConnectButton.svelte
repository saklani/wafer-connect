<script>
  import { account, network, wafer, wagmi } from "./store.js";

  import { defaultTheme } from "./theme.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  import "./style.css";

  let theme = defaultTheme;

  /** @type {import("@wagmi/core").Config}*/
  let wagmiConfig;

  wagmi.set(wagmiConfig);
  wafer.set({ theme });

  export { theme, wagmiConfig };
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported
      --unsupported-background-color={$wafer.theme.unsupported.backgroundColor}
      --unsupported-color={$wafer.theme.unsupported.color}
    />
  {:else}
    <Connected
      address={$account.address}
      --connected-background-color={$wafer.theme.connected.backgroundColor}
      --connected-color={$wafer.theme.connected.color}
    />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected
    --disconnected-background-color={$wafer.theme.disconnected.backgroundColor}
    --disconnected-color={$wafer.theme.disconnected.color}
  />
{:else}
  <Loading
    --loading-background-color={$wafer.theme.loading.backgroundColor}
    --loading-color={$wafer.theme.loading.color}
  />
{/if}
