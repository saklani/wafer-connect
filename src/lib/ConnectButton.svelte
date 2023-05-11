<script>
  import { account } from "./stores/account.js";
  import { network } from "./stores/network.js";
  import { theme as themeStore } from "./stores/theme.js";
  import { wagmi } from "./stores/wagmi.js";
  import { lightTheme } from "./themes/lightTheme.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  import "./style.css";

  let theme = lightTheme;

  /** @type {import("@wagmi/core").Config<any, any>}*/
  let wagmiConfig;

  export { theme, wagmiConfig };

  wagmi.set(wagmiConfig);
  themeStore.set(theme);
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported
      --unsupported-background-color={$themeStore.errorButtonColor}
      --unsupported-color={$themeStore.errorButtonTextColor}
    />
  {:else}
    <Connected
      address={$account.address}
      --connected-background-color={$themeStore.primaryButtonColor}
      --connected-color={$themeStore.primaryButtonTextColor}
      --connected-hover-color={$themeStore.primaryButtonHoverColor}
    />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected
    --disconnected-background-color={$themeStore.primaryButtonColor}
    --disconnected-hover-color={$themeStore.primaryButtonHoverColor}
    --disconnected-color={$themeStore.primaryButtonTextColor}
  />
{:else}
  <Loading
    --loading-background-color={$themeStore.primaryButtonColor}
    --loading-color={$themeStore.primaryButtonTextColor}
  />
{/if}
