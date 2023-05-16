<script>
  import { account } from "./stores/account.js";
  import { connectors as _connectors } from "./stores/connectors.js";
  import { network } from "./stores/network.js";
  import { theme as _theme } from "./stores/theme.js";
  import { chains as _chains } from "./stores/chains.js";
  import { lightTheme } from "./themes/lightTheme.js";

  import Connected from "./components/Connected.svelte";
  import Disconnected from "./components/Disconnected.svelte";
  import Loading from "./components/Loading.svelte";
  import Unsupported from "./components/Unsupported.svelte";

  import "./style.css";

  let theme = lightTheme;

  /** @type {import("@wagmi/core").Chain[]}*/
  let chains;

  /**
   * @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}[]}
   */
  let wallets;

  /** @type {import("@wagmi/core/connectors").Connector[]}*/
  let connectors;

  export { connectors, theme, chains, wallets };

  _chains.set(chains);
  _connectors.set({ wagmiConnectors: connectors, wallets });
  _theme.set(theme);
</script>

{#if $account.status === "connected"}
  {#if $network.chain.unsupported}
    <Unsupported
      --unsupported-background-color={$_theme.errorButtonColor}
      --unsupported-color={$_theme.errorButtonTextColor}
      --border-radius={$_theme.borderRadius}
    />
  {:else}
    <Connected
      address={$account.address}
      --connected-background-color={$_theme.primaryButtonColor}
      --connected-color={$_theme.primaryButtonTextColor}
      --connected-hover-color={$_theme.primaryButtonHoverColor}
      --border-radius={$_theme.borderRadius}
    />
  {/if}
{:else if $account.status === "disconnected"}
  <Disconnected
    --disconnected-background-color={$_theme.primaryButtonColor}
    --disconnected-hover-color={$_theme.primaryButtonHoverColor}
    --disconnected-color={$_theme.primaryButtonTextColor}
    --border-radius={$_theme.borderRadius}
  />
{:else}
  <Loading
    --loading-background-color={$_theme.primaryButtonColor}
    --loading-color={$_theme.primaryButtonTextColor}
    --border-radius={$_theme.borderRadius}
  />
{/if}
