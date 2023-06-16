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
    [mainnet, polygon],
    [publicProvider()]
  );

  console.log(chains);

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
</script>

<div class="column margin-y gap">
  <div>
    <ConnectButton {chains} {connectors} {wallets} />
  </div>
  <div>
    <p><strong>account.address:</strong> {$account.address}</p>
    <p><strong>account.status:</strong> {$account.status}</p>
    <p><strong>balance:</strong> {0}</p>
    <p><strong>network.chain.id:</strong> {$network.chain?.id}</p>
  </div>
</div>
