<script>
  import { onMount } from "svelte";
  import UnstyledConnectButton from "./UnstyledConnectButton.svelte";
  import { theme as _theme } from "./store/theme.js";
  import "./style.css";
  import { dark } from "./themes/dark.js";
  import { watch } from "./watcher.js";

  /** @type {{"--wafer-avatar-radius": string"--wafer-border-radius": string"--wafer-button-height": string"--wafer-button-z-index": string"--wafer-dialog-width": string"--wafer-dialog-blur": string"--wafer-error-height": string"--wafer-secondary-button-height": string"--wafer-button-background-color": string"--wafer-button-text-color": string"--wafer-button-hover-color": string"--wafer-button-border": string"--wafer-secondary-button-background-color": string"--wafer-secondary-button-text-color": string"--wafer-secondary-button-hover-color": string"--wafer-secondary-button-border": string"--wafer-error-background-color": string"--wafer-error-hover-color": string"--wafer-error-text-color": string"--wafer-dialog-background-color": string"--wafer-dialog-text-color": string"--wafer-menu-background-color": string"--wafer-menu-text-color": string"--wafer-color-scheme": string;} | {}}*/
  let theme = dark;

  export { theme };

  _theme.set(theme);

  onMount(() => watch());
</script>

<UnstyledConnectButton
  --wafer-avatar-radius={$_theme["--wafer-avatar-radius"]}
  --wafer-border-radius={$_theme["--wafer-border-radius"]}
  --wafer-button-background-color={$_theme["--wafer-button-background-color"]}
  --wafer-button-border={$_theme["--wafer-button-border"]}
  --wafer-button-height={$_theme["--wafer-button-height"]}
  --wafer-button-hover-color={$_theme["--wafer-button-hover-color"]}
  --wafer-button-text-color={$_theme["--wafer-button-text-color"]}
  --wafer-button-z-index={$_theme["--wafer-button-z-index"]}
  --wafer-dialog-background-color={$_theme["--wafer-dialog-background-color"]}
  --wafer-dialog-blur={$_theme["--wafer-dialog-blur"]}
  --wafer-dialog-text-color={$_theme["--wafer-dialog-text-color"]}
  --wafer-dialog-width={$_theme["--wafer-dialog-width"]}
  --wafer-color-scheme={$_theme["--wafer-color-scheme"]}
  --wafer-error-background-color={$_theme["--wafer-error-background-color"]}
  --wafer-error-height={$_theme["--wafer-error-height"]}
  --wafer-error-hover-color={$_theme["--wafer-error-hover-color"]}
  --wafer-error-text-color={$_theme["--wafer-error-text-color"]}
  --wafer-menu-background-color={$_theme["--wafer-menu-background-color"]}
  --wafer-menu-text-color={$_theme["--wafer-menu-text-color"]}
  --wafer-secondary-button-background-color={$_theme[
    "--wafer-secondary-button-background-color"
  ]}
  --wafer-secondary-button-border={$_theme["--wafer-secondary-button-border"]}
  --wafer-secondary-button-text-color={$_theme[
    "--wafer-secondary-button-text-color"
  ]}
  --wafer-secondary-button-hover-color={$_theme[
    "--wafer-secondary-button-hover-color"
  ]}
  --wafer-secondary-button-height={$_theme["--wafer-secondary-button-height"]}
/>
