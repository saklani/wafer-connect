<script>
  import ConnectButton, {
    account,
    network,
    getDefaultConnectors,
  } from "$lib/index.js";
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet, polygon } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";

  const { chains, publicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const { connectors, wallets } = getDefaultConnectors({
    appName: "example",
    projectId: "956d5ec8e006d78c793f06be590de1fa",
    chains,
  });

  const wagmiConfig = createConfig({
    connectors,
    publicClient,
  });
</script>

<zero-md src="/documentation/04-stores.md" />

<div class="col">
  <div>
    <ConnectButton {wagmiConfig} {connectors} {wallets} />
  </div>
  <p><strong>account.address:</strong> {$account.address}</p>
  <p><strong>account.status:</strong> {$account.status}</p>
  <p><strong>network.chain.id:</strong> {$network.chain?.id}</p>
</div>

<style>
  .col {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    margin-block: 1rem;
  }
</style>
