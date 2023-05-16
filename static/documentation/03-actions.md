# Actions

`wafer-connect` supports any `@wagmi/core` action right out of the box.

> Learn more about `@wagmi/core` actions: [wagmi.sh/core/actions/connect](https://wagmi.sh/core/actions/connect)

## Read Contract

Read the name of an ERC721 at `0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2` on mainnet.

```html
<script lang="ts">
  import {
    configureChains,
    createConfig,
    erc721ABI,
    readContract,
  } from "@wagmi/core";
  import { mainnet } from "@wagmi/core/chains";
  import { alchemyProvider } from "@wagmi/core/providers/alchemy";
  import ConnectButton, { getDefaultConnectors } from "wafer-connect";

  const { chains, publicClient } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: "..." })]
  );

  const { connectors, wallets } = getDefaultConnectors({
    appName: "example",
    projectId: "...",
    chains,
  });
  
  createConfig({
    connectors,
    publicClient,
  });

  let value: unknown;

  async function getData() {
    value = await readContract({
      address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2" as `0x${string}`,
      abi: erc721ABI,
      functionName: "name",
    });
  }
</script>

<header>
  <div />
  <ConnectButton {chains} {connectors} {wallets} />
</header>
<section>
  <h2>{`Name: ${value}`}</h2>
  <button on:click={() => getData()}>Read Data</button>
</section>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
```
