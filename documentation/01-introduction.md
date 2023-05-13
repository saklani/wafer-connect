# Wafer Connect

`wafer-connect` is a Svelte component library to connect a wallet to your dApp.

## Features

### Industry standards

Built on popular libraries like `@wagmi/core` and `viem`.

### Incredibly Lightweight

Zero external dependencies, makes it easy to integrate with existing projects.

### TypeScript Ready

Types for the TypeScript lovers.

## Getting Started

Install `wafer-connect` and its peer dependencies `@wagmi/core` and `viem`.

```bash
npm install wafer-connect @wagmi/core viem
```

A minimal example script.

> A WalletConnect ProjectId is required since `wafer-connect` only supports WalletConnect v2.
>
> Learn More: [walletconnect.com](https://walletconnect.com)

```html
<script>
  import { configureChains, createConfig } from "@wagmi/core";
  import { mainnet } from "@wagmi/core/chains";
  import { publicProvider } from "@wagmi/core/providers/public";
  import ConnectButton, { getDefaultConnectors } from "wafer-connect";

  const { chains, publicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const { connectors, wallets } = getDefaultConnectors({
    appName: "my_dapp",
    projectId: "...", // WalletConnect ProjectId
    chains,
  });

  const wagmiConfig = createConfig({ connectors, publicClient });
</script>

<header>
  <div />
  <ConnectButton {wagmiConfig} {connectors} {wallets} />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }
</style>
```
