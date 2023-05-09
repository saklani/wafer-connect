<script>
  import ConnectButton, { getDefaultConnectors } from "$lib/index.js";
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet, polygon, optimism } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism],
    [publicProvider()]
  );

  const { connectors } = getDefaultConnectors({
    projectId: "956d5ec8e006d78c793f06be590de1fa",
    chains,
  });

  const wagmiConfig = createConfig({
    chains,
    connectors,
    publicClient,
    webSocketPublicClient,
  });
</script>

<div class="column">
  <h1>Wafer Connect</h1>
  <p>
    Wafer Connect is a minimalist svelte component library for connect a
    wallet to your Svelte/Sveltekit dApp.
  </p>
  <div class="focus">
    <ConnectButton {wagmiConfig} />
  </div>
</div>

<style>
  .focus {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0.1px grey;
    border-radius: 4px;
    width: 100%;
    height: 300px;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  h1,
  p,
  .focus {
    max-width: 900px;
  }
</style>
