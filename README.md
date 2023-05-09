# Wafer

Wafer offers minimalist pre-built components for connecting to wallets with Svelte/SvelteKit decentralized applications (dApps).

Try it out: [https://wafer.vercel.app](https://wafer.vercel.app)

## Getting Started

Install peer dependencies

```bash
  npm install wafer-connect @wagmi/core @wagmi/connectors viem
```

Install wafer

```bash
  npm install wafer-connect
```

## Minimal Example

```svelte
<script>
  import { ConnectButton } from "wafer-connect";
</script>

<header>
  <div />
  <ConnectButton walletConnectProjectId={"..."} />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }
</style>
```

## Actions

```svelte

```

## Chains

Add any chain you need.

```svelte
<script>
  import { mainnet, goerli } from "sveeeth/chains";
  import { ConnectButton } from "wafer-connect";
</script>

<header>
  <div />
  <ConnectButton
    walletConnectProjectId={"956d5ec8e006d78c793f06be590de1fa"}
    chains={[mainnet, goerli]}
  />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }
</style>
```
