<script>
  import UnstyledConnectButton from "./UnstyledConnectButton.svelte";
  import { theme as _theme } from "./stores/theme.js";
  import { dark } from "./themes/dark.js";

  import "./style.css";

  let theme = dark;

  /** @type {import("@wagmi/core").Chain[]}*/
  let chains;

  /** @type {{id: string; name: string; icon: string; url: string; createConnector: (params) => import("@wagmi/core/connectors").Connector}[]} */
  let wallets;

  /** @type {import("@wagmi/core/connectors").Connector[]}*/
  let connectors;

  export { connectors, theme, chains, wallets };

  _theme.set(theme);
</script>

<UnstyledConnectButton
  {connectors}
  {chains}
  {wallets}
  --wafer-button-background-color={$_theme["--wafer-button-background-color"]}
  --wafer-button-text-color={$_theme["--wafer-button-text-color"]}
  --wafer-button-hover-color={$_theme["--wafer-button-hover-color"]}
  --wafer-button-border={$_theme["--wafer-button-border"]}
  --wafer-secondary-button-background-color={$_theme["--wafer-secondary-button-background-color"]}
  --wafer-secondary-button-text-color={$_theme["--wafer-secondary-button-text-color"]}
  --wafer-secondary-button-hover-color={$_theme["--wafer-secondary-button-hover-color"]}
  --wafer-secondary-button-border={$_theme["--wafer-secondary-button-border"]}
  --wafer-error-background-color={$_theme["--wafer-error-background-color"]}
  --wafer-error-hover-color={$_theme["--wafer-error-hover-color"]}
  --wafer-error-text-color={$_theme["--wafer-error-text-color"]}
  --wafer-dialog-background-color={$_theme["--wafer-dialog-background-color"]}
  --wafer-dialog-text-color={$_theme["--wafer-dialog-text-color"]}
  --wafer-menu-background-color={$_theme["--wafer-menu-background-color"]}
  --wafer-menu-text-color={$_theme["--wafer-menu-text-color"]}
  --wafer-color-scheme={$_theme["--wafer-color-scheme"]}
  --wafer-avatar-radius={$_theme["--wafer-avatar-radius"]}
  --wafer-border-radius={$_theme["--wafer-border-radius"]}
  --wafer-button-height={$_theme["--wafer-button-height"]}
  --wafer-button-z-index={$_theme["--wafer-button-z-index"]}
  --wafer-dialog-width={$_theme["--wafer-dialog-width"]}
  --wafer-dialog-blur={$_theme["--wafer-dialog-blur"]}
  --wafer-error-height={$_theme["--wafer-error-height"]}
  --wafer-secondary-button-height={$_theme["--wafer-secondary-button-height"]}
/>
