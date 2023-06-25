<script>
  import ConnectButton, {
    dark,
    getDefaultConnectors,
    light,
  } from "$lib/index.js";
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet, polygon } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";

  const { chains, publicClient } = configureChains(
    [mainnet, polygon],
    [publicProvider()]
  );

  const { connectors, wallets } = getDefaultConnectors({
    appName: "example_custom",
    projectId: "956d5ec8e006d78c793f06be590de1fa",
    chains,
  });

  createConfig({
    chains,
    connectors,
    publicClient,
  });

  const themes = [
    light,
    dark,
    {
      ...dark,
      "--wafer-button-background-color": "rgb(69, 19, 91)",
      "--wafer-button-hover-color": "rgb(69, 30, 111)",
      "--wafer-secondary-button-background-color": "rgb(0, 0, 91)",
      "--wafer-secondary-button-hover-color": "rgb(0, 0, 111)",
      "--wafer-dialog-background-color": "rgba(69, 30, 111, 0.8)",
      "--wafer-menu-background-color": "rgb(69, 30, 111)",
    },
  
  ];
  let themeIndex = 0;
</script>

<div class="column gap margin-y">
  <div class="row gap-large">
    <button class="secondary" on:click={() => (themeIndex = 0)}> Light </button>
    <button class="secondary zeus" on:click={() => (themeIndex = 1)}> Dark </button>
    <button class="secondary eminence" on:click={() => (themeIndex = 2)}> Eminence </button>
  </div>
  <div class="column center focus">
    {#key themeIndex}
      <ConnectButton
        {chains}
        theme={themes[themeIndex]}
        {connectors}
        {wallets}
      />
    {/key}
  </div>
</div>
