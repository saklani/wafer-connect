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

```js
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
