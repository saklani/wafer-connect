<script>
  import ConnectButton, {
    darkTheme,
    getDefaultConnectors,
    lightTheme,
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
    lightTheme,
    darkTheme,
    {
      ...lightTheme,
      borderRadius: "2px",
      primaryButtonColor: "rgb(168, 204, 140)",
      primaryButtonHoverColor: "rgb(178, 214, 150)",
      dialogBackgroundColor: "rgba(168, 204, 140, 0.7)",
    },
    {
      ...darkTheme,
      borderRadius: "24px",
      primaryButtonColor: "rgb(69, 20, 92)",
      primaryButtonHoverColor: "rgb(70, 30, 102)",
      secondaryButtonColor: "midnightblue",
      secondaryButtonHoverColor: "darkblue",
      dialogBackgroundColor: "rgba(69, 20, 92, 0.5)",
    },
  ];
  let themeIndex = 0;
</script>

<div class="column gap">
  <div class="row gap">
    <button class="secondary" on:click={() => (themeIndex = 0)}> Light </button>
    <button class="secondary" on:click={() => (themeIndex = 1)}> Dark </button>
    <button class="secondary" on:click={() => (themeIndex = 2)}> Anise </button>
    <button class="secondary" on:click={() => (themeIndex = 3)}>
      Dark Blue
    </button>
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

