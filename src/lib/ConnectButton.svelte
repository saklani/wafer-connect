<script>
  import { account, network, theme as themeStore, wagmi } from "./store.js";

  import { defaultTheme } from "./theme.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  import "./style.css";

  let theme = defaultTheme;

  /** @type {import("@wagmi/core").Config<any, any>}*/
  let wagmiConfig;

  wagmi.set(wagmiConfig);
  themeStore.set(theme);

  export { theme, wagmiConfig };
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported
      --unsupported-background-color={$themeStore.errorColor}
      --unsupported-color={$themeStore.errorColor}
    />
  {:else}
    <Connected
      address={$account.address}
      --connected-background-color={$themeStore.primaryButtonColor}
      --connected-color={$themeStore.primaryButtonTextColor}
    />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected
    --disconnected-background-color={$themeStore.primaryButtonColor}
    --disconnected-color={$themeStore.primaryButtonTextColor}
  />
{:else}
  <Loading
    --loading-background-color={$themeStore.primaryButtonColor}
    --loading-color={$themeStore.primaryButtonTextColor}
  />
{/if}
