# Wafer

Wafer offers minimalist pre-built components for connecting to wallets with Svelte/SvelteKit decentralized applications (dApps).

Try it out: [https://wafer.vercel.app](https://wafer.vercel.app)

## Getting Started

Install peer dependencies

```bash
  npm install @wagmi/core @wagmi/connectors ethers sveeeth 
```

Install wafer

```bash
  npm install wafer-connect
```

Minimal Examplee

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

## Custom chains

```svelte
    <script>
      import { mainnet, goerli } from "@wagmi/core";
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
